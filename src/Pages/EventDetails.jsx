import './EventDetails.css';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import events from '../Data/Events';

function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = events.find((item) => item.id === Number(id));

  if (!event) {
    return (
      <>
        <Header />
        <h2 className="event-not-found">Event not found</h2>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <div className="event-details">
        <img src={event.img} alt={event.title} className="event-image" />

        <div className="event-info">
          <h1>{event.title}</h1>
          <p className="event-desc">{event.details}</p>

          <p><strong>Type:</strong> {event.desc}</p>
          <p><strong>Location:</strong> {event.location}</p>
          <p><strong>Date:</strong> {event.eventDate}</p>
          <p><strong>Time:</strong> {event.eventTime}</p>
          <p><strong>Duration:</strong> {event.eventDuration}</p>
          <p><strong>Difficulty:</strong> {event.difficulty}</p>
          <p><strong>Price:</strong> ${event.price}</p>

          {/* ✅ TEMP FIX: Always show available (until we connect localStorage logic) */}
          <p><strong>Status:</strong> Available</p>

          <button
            className="book-btn"
            onClick={() => navigate(`/register/${event.id}`)}
          >
            Register Now
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default EventDetails;