import './RegistrationForm.css';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
  const navigate = useNavigate();

  const event = events.find((item) => item.id === Number(id));

  const [cart, setCart] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

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

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('eventRegistrationCart', JSON.stringify(cart));
    }
  }, [cart]);

  if (!event) {
    return (
      <>
        <Header />
        <h2 className="registration-not-found">Event not found</h2>
        <Footer />
      </>
    );
  }

  const registeredCount = getRegisteredCount(cart, event.id);
  const remainingPlaces = event.maxParticipants - registeredCount;

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setErrorMessage('');
    setSuccessMessage('');

    const adults = Number(formData.adults);
    const children = Number(formData.children);
    const totalParticipants = adults + children;

    if (adults < 0 || children < 0) {
      setErrorMessage('Participant numbers cannot be negative.');
      return;
    }

    if (totalParticipants <= 0) {
      setErrorMessage('Please register at least one participant.');
      return;
    }

    if (totalParticipants > remainingPlaces) {
      setErrorMessage(`Only ${remainingPlaces} place(s) remaining for this event.`);
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
      setSuccessMessage('Registration successful!');

      setFormData({
        fullName: '',
        adults: 1,
        children: 0,
        email: '',
        phone: '',
        specialRequests: ''
      });

      setTimeout(() => {
        navigate(`/event/${event.id}`);
      }, 1200);
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

          <div className="event-summary">
            <p><strong>Date:</strong> {event.eventDate}</p>
            <p><strong>Time:</strong> {event.eventTime}</p>
            <p><strong>Duration:</strong> {event.eventDuration}</p>
            <p><strong>Available Places:</strong> {remainingPlaces} / {event.maxParticipants}</p>
          </div>

          {errorMessage && <p className="form-error">{errorMessage}</p>}
          {successMessage && <p className="form-success">{successMessage}</p>}

          <form className="registration-form" onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <label>Adult Participant Number</label>
            <input
              type="number"
              name="adults"
              min="0"
              value={formData.adults}
              onChange={handleChange}
              required
            />

            <label>Child Participant Number (3-12)</label>
            <input
              type="number"
              name="children"
              min="0"
              value={formData.children}
              onChange={handleChange}
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label>Special Requests</label>
            <textarea
              name="specialRequests"
              rows="5"
              value={formData.specialRequests}
              onChange={handleChange}
              placeholder="Dietary restrictions, medical notes, transport requests..."
            ></textarea>

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