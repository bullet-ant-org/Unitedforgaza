import React from 'react';
import Gaza from '../assets/gaza.png';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (

    // Using 'fixed-top' to keep the navbar at the top, bg-body-tertiary for a light grey background
    // and an inline style for the overall opacity.
    <nav className="navbar navbar-expand-lg bg-body-secondary fixed-top px-2" style={{ opacity: 0.9 }}>
      <div className="container-fluid">

        {/* Left side: Logo and Brand Name */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          {/* You can replace this SVG with your actual logo image */}
          <img src={ Gaza } alt="gazahelp" className='nav-logo pe-2'/>
          United For Gaza
        </Link>

        {/* Toggler for mobile view */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavItems" aria-controls="navbarNavItems" aria-expanded="false" aria-label="Toggle navigation">
          <span className="material-symbols-outlined">sort</span>
        </button>

        {/* Right side: Links and Button */}
        <div className="collapse navbar-collapse" id="navbarNavItems">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link">About Us</Link></li>
            <li className="nav-item"><a className="nav-link" href="/gallery">Gallery</a></li>
            <li className="nav-item"><a className="nav-link" href="/ourimpact">Our Impact</a></li>
            <li className="nav-item ms-lg-3"><a href="/donate/information" onClick={() => scrollToSection('donate')} className="btn btn-primary rounded-2 text-white" style={{ fontWeight: 'bold' }}>Donate Now</a></li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;