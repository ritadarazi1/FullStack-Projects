import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Pages/Home';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import EventDetails from './Pages/EventDetails';
import RegistrationForm from './Pages/RegistrationForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/register/:id" element={<RegistrationForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;