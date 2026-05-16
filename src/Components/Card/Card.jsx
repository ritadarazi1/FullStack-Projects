import './Card.css';
import { useNavigate } from 'react-router-dom';

function Card({
  id,
  img,
  title,
  desc,
  price,
  eventDate,
  eventTime,
  eventDuration,
  maxParticipants,
  registeredCount,
  isFullyBooked
}) {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/event/${id}`)}>
      <img className="card-img" src={img} alt={title} />

      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-desc">{desc}</p>

        <p className="card-info"><strong>Date:</strong> {eventDate}</p>
        <p className="card-info"><strong>Time:</strong> {eventTime}</p>
        <p className="card-info"><strong>Duration:</strong> {eventDuration}</p>

        <p className="card-price">${price}</p>

        <p className="card-info">
          <strong>Participants:</strong> {registeredCount} / {maxParticipants}
        </p>

        <button className="card-btn">
          View Details
        </button>

        <p className={`card-availability ${isFullyBooked ? 'full' : 'available'}`}>
          {isFullyBooked ? 'Fully Booked' : 'Available'}
        </p>
      </div>
    </div>
  );
}

export default Card;