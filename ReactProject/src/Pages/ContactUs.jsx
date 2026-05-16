import './ContactUs.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { addPersonToEvent } from '../Utils/eventUtils';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

function ContactUs() {
  const location = useLocation();

  const eventId = location.state?.eventId;
  const eventTitle = location.state?.eventTitle || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: eventTitle,
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // ✅ ADD PERSON ONLY AFTER SUBMIT
    if (eventId) {
      addPersonToEvent(eventId);
    }

    console.log('Form submitted:', formData);

    setSuccessMessage('Your registration was successful!');

    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      message: ''
    });
  }

  return (
    <>
      <Header />

      <div className="contact-page">
        <section className="contact-hero">
          <h1>Contact Us</h1>
          <p>Have a question? Ready for your next adventure?</p>
        </section>

        <section className="contact-container">
          <div className="contact-info">
            <h2>Get in Touch</h2>

            <p><strong>Phone:</strong> 03112233</p>
            <p><strong>Email:</strong> hikemeup@gmail.com</p>

            <div className="social-links">
              <a href="https://wa.me/9613112233" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </div>

            <div className="map-box">
              <iframe
                title="Hike Me Up Location"
                src="https://www.google.com/maps?q=Beirut,Lebanon&output=embed"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send Us a Message</h2>

            {successMessage && (
              <p className="success-message">{successMessage}</p>
            )}

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />

            <select
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              required
            >
              <option value="">Choose an event</option>
              <option value="Darb El Mseilha">Darb El Mseilha</option>
              <option value="Ammiq Wetlands">Ammiq Wetlands</option>
              <option value="A week in Georgia">A week in Georgia</option>
            </select>

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default ContactUs;