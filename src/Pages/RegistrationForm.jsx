import './RegistrationForm.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import events from '../Data/Events';
import {
  addParticipantsToCart,
  getCart,
  getRegisteredCount
} from '../Utils/RegistrationUtils';

function RegistrationForm() {
  const { id } = useParams();
  const event = events.find((e) => e.id === Number(id));

  const [cart, setCart] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    adults: 1,
    children: 0,
    email: '',
    phone: '',
    specialRequests: ''
  });

  useEffect(() => {
    setCart(getCart());
  }, []);

  if (!event) {
    return (
      <>
        <Header />
        <div className="registration-page">
          <div className="registration-card">
            <h1>Event not found</h1>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const registeredCount = getRegisteredCount(cart, event.id);
  const displayedCount = Math.min(registeredCount, event.maxParticipants);
  const remainingPlaces = event.maxParticipants - displayedCount;

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrorMessage('');

    const adults = Number(formData.adults);
    const children = Number(formData.children);
    const totalRequested = adults + children;

    if (remainingPlaces <= 0) {
      setErrorMessage('This event is fully booked.');
      return;
    }

    if (totalRequested > remainingPlaces) {
      setErrorMessage(`Only ${remainingPlaces} place(s) remaining.`);
      return;
    }

    try {
      const updatedCart = addParticipantsToCart(
        event.id,
        adults,
        children,
        event.maxParticipants
      );

      setCart(updatedCart);
      alert('Registration submitted!');

      setFormData({
        fullName: '',
        adults: 1,
        children: 0,
        email: '',
        phone: '',
        specialRequests: ''
      });
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  return (
    <>
      <Header />

      <div className="registration-page">
        <div className="registration-card">
          <h1>Register for {event.title}</h1>

          <p>
            <strong>Participants:</strong> {displayedCount} / {event.maxParticipants}
          </p>

          <p>
            <strong>Remaining places:</strong> {remainingPlaces}
          </p>

          {errorMessage && <p className="form-error">{errorMessage}</p>}

          <form className="registration-form" onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <label>Adult Participant Number</label>
            <input
              name="adults"
              type="number"
              min="0"
              value={formData.adults}
              onChange={handleChange}
              required
            />

            <label>Child Participant Number (3-12)</label>
            <input
              name="children"
              type="number"
              min="0"
              value={formData.children}
              onChange={handleChange}
              required
            />

            <label>Email</label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Phone Number</label>
            <input
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label>Special Requests</label>
            <textarea
              name="specialRequests"
              placeholder="Special Requests"
              value={formData.specialRequests}
              onChange={handleChange}
            />

            <button type="submit" disabled={remainingPlaces <= 0}>
              {remainingPlaces <= 0 ? 'Fully Booked' : 'Submit Registration'}
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default RegistrationForm;