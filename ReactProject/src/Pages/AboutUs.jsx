import './AboutUs.css';
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

function AboutUs() {
  return (
    <>
      <Header />

      <div className="about">
        
        <div className="about-hero">
          <h1>About Hike Me Up 🌄</h1>
          <p>Connecting people with nature, one adventure at a time</p>
        </div>

        <div className="about-content">
          
          <section className="about-section">
            <h2>Who We Are</h2>
            <p>
              Hike Me Up is a community-driven platform dedicated to outdoor lovers,
              explorers, and adventure seekers. We organize hiking trips, nature events,
              and international adventures designed for all experience levels.
            </p>
          </section>

          <section className="about-section">
            <h2>Our Mission</h2>
            <p>
              Our mission is to reconnect people with nature and promote a healthy,
              active lifestyle through unforgettable outdoor experiences.
            </p>
          </section>

          <section className="about-section">
            <h2>What We Offer</h2>
            <ul>
              <li>🥾 Guided hikes across Lebanon</li>
              <li>🌍 International adventure trips</li>
              <li>🏕 Outdoor events and activities</li>
              <li>🤝 A community of like-minded explorers</li>
            </ul>
          </section>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default AboutUs;