import './RegistrationForm.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import events from '../Data/Events';
import { addParticipantsToCart } from '../Utils/RegistrationUtils';

function RegistrationForm() {
  const { id } = useParams();
  const event = events.find((e) => e.id === Number(id));

  const [formData, setFormData] = useState({
    fullName: '',
    adults: 1,
    children: 0,
    email: '',
    phone: '',
    specialRequests: ''
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
  e.preventDefault();

  addParticipantsToCart(id, formData.adults, formData.children);

  alert('Registration submitted!');

  setFormData({
    fullName: '',
    adults: 1,
    children: 0,
    email: '',
    phone: '',
    specialRequests: ''
  });
}

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

  return (
    <>
      <Header />

      <div className="registration-page">
        <div className="registration-card">
          <h1>Register for {event.title}</h1>

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
              min="1"
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

            <button type="submit">Submit Registration</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default RegistrationForm;