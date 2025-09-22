import React from 'react';

// --- Component-level Constants for easier maintenance ---
const FOOTER_LINKS = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Our Impact', href: '/ourimpact' },
];

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
                {FOOTER_LINKS.map(link => (
                    <li key={link.name}><a href={link.href}>{link.name}</a></li>
                ))}
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