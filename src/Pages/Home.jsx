import { useEffect, useState } from 'react';
import Card from '../Components/Card/Card';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import events from '../Data/Events';
import { getCart, getRegisteredCount, isEventFullyBooked } from '../Utils/RegistrationUtils';

function Home() {
  const [showAvailable, setShowAvailable] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const filteredEvents = showAvailable
    ? events.filter((event) => !isEventFullyBooked(cart, event.id, event.maxParticipants))
    : events;

  return (
    <>
      <Header />

      <div className="cards-section">
        <div className="filter-bar">
          <button onClick={() => setShowAvailable((prev) => !prev)}>
            {showAvailable ? 'Show All Events' : 'Show Available Only'}
          </button>
        </div>

        <div className="cards-container">
          {filteredEvents.map((event) => {
            const registeredCount = Math.min(
  getRegisteredCount(cart, event.id),
  event.maxParticipants
);
            const isFullyBooked = registeredCount >= event.maxParticipants;

            return (
              <Card
                key={event.id}
                id={event.id}
                title={event.title}
                desc={event.desc}
                price={event.price}
                img={event.img}
                eventDate={event.eventDate}
                eventTime={event.eventTime}
                eventDuration={event.eventDuration}
                maxParticipants={event.maxParticipants}
                registeredCount={registeredCount}
                isFullyBooked={isFullyBooked}
              />
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;