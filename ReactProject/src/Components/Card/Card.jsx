import './Card.css';
import { useNavigate } from 'react-router-dom';
import { addPersonToEvent } from '../../Utils/EventUtils';

function Card({ id, img, title, desc, price, isAvailable }) {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/event/${id}`)}>
      <img className="card-img" src={img} alt={title} />

      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-desc">{desc}</p>
        <p className="card-price">${price}</p>

        <button className="card-btn">
          View Details
        </button>

        <p className={`card-availability ${isAvailable ? 'available' : 'full'}`}>
          {isAvailable ? 'Available' : 'Fully Booked'}
        </p>
      </div>
    </div>
  );
}

export default Card;