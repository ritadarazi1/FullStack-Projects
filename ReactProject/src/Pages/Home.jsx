import { useState } from 'react';
import Card from '../Components/Card/Card';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import events from '../data/events';

function Home() {
  const [showAvailable, setShowAvailable] = useState(false);

  const filteredEvents = showAvailable
    ? events.filter((event) => event.isAvailable)
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
          {filteredEvents.map((event) => (
            <Card
              key={event.id}
              id={event.id}
              title={event.title}
              desc={event.desc}
              price={event.price}
              isAvailable={event.isAvailable}
              img={event.img}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;