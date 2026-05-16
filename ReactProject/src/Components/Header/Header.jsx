import './Header.css';
import BgImage from '../../assets/background-header.jpg'; // you can change image
import ContactUs from '../../Pages/ContactUs';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header" style={{ backgroundImage: `url(${BgImage})` }}>
      
      <div className="overlay"></div>

      <div className="header-content">
        <h1 className="logo">Hike Me Up</h1>
        <p className="tagline">Nature, Outdoors and More</p>

        <nav>
          <ul className="nav-links">
            <li> <Link to="/"> Home </Link> </li>
            <li> <Link to="/AboutUs">About Us </Link> </li>
            <li> <Link to="/LebEvents">Lebanon Events </Link> </li>
            <li> <Link to="/IntlEvents">International Events </Link> </li>
            <li><Link to="/ContactUs">Contact Us</Link></li>
          </ul>
        </nav>
      </div>

<div className="wave">
  <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
    <path
      fill="#fffaf0"
      d="M0,192L60,186.7C120,181,240,171,360,176C480,181,600,203,720,202.7C840,203,960,181,1080,165.3C1200,149,1320,139,1380,133.3L1440,128V320H0Z"
    />
  </svg>
</div>

    </header>
  );
}

export default Header;