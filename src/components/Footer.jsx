import React from 'react';
import { Link } from 'react-router-dom';

// --- Component-level Constants for easier maintenance ---
const SOCIAL_ICONS = [
    { name: 'facebook', href: '#' },
    { name: 'twitter', href: '#' },
    { name: 'instagram', href: '#' },
    { name: 'pinterest', href: '#' },
];

const Footer = () => {
  return (
    <div className="footer bg-orange">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-12 col-sm-12 col-xs-12">
            <div className="footer_menu">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/ourimpact">Our Impact</Link></li>
              </ul>
            </div>
            <div className="footer_copyright">
              <p>© 2024 United For Gaza. All Rights Reserved.</p>
            </div>
            <div className="footer_profile">
              <ul>
                {SOCIAL_ICONS.map(social => (
                    <li key={social.name}>
                        <a href={social.href}><i className={`fa fa-${social.name}`}></i></a>
                    </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;