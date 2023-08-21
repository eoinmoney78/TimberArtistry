import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <ul>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/terms">Terms & Conditions</Link></li>
        </ul>
      </div>
      <div className="contact">
        <p>Email: contact@business.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
      <div className="social-media">
        {/* You should replace the '#' below with the actual URLs of your social media pages when they're available. */}
        <a href="#"><img src="/path-to-icons/facebook-icon.png" alt="Facebook" /></a>
        <a href="#"><img src="/path-to-icons/twitter-icon.png" alt="Twitter" /></a>
        <a href="#"><img src="/path-to-icons/instagram-icon.png" alt="Instagram" /></a>
      </div>
    </footer>
  );
}

export default Footer;
