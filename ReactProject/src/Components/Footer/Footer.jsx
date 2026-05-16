import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Hike Me Up 🌄</h3>

        <p>Explore nature. Discover new paths. Live the adventure.</p>

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Hike Me Up - All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;