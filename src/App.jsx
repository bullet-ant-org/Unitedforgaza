import React from 'react';
import { HashRouter as Router, Route, Routes,  } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Hero from './components/Hero';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Amenities from './components/Amenities';
import Impact from './components/Impact';
import Story from './components/Story';
import Contact from './components/Contact';
import Testimonials from './components/Testimonies';
import AboutUs from './components/AboutUs';
import OurImpact from './components/OurImpact';
import GalleryPage from './components/GalleryPage';

import NotFoundPage from './components/NotFoundPage';
import PaymentDetailsPage from './Donate/PaymentDetailsPage';
import YourInformationPage from './Donate/YourInformationPage';
import Thanks from './Donate/Thanks'; 

const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<><Navbar /><Hero /><Gallery /><Story /><Amenities /><Impact /><Testimonials /><Contact /><Footer /></>} /> 
        <Route path="/about" element={<><Navbar /><AboutUs /></>} />
        <Route path="/ourimpact" element={<><Navbar /><OurImpact /></>} />
        <Route path="/gallery" element={<><Navbar /><GalleryPage /></>} />

        
        <Route path="/donate/information" element={<YourInformationPage />} />
        <Route path="/donate/payment" element={<PaymentDetailsPage />} />
        <Route path="/donate/thank-you" element={<Thanks />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      
    </Router>
  );
};

export default App;
