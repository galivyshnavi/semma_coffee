import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-logo">
              <img src="/coffee.jpg" alt="Seema Coffee Logo" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="socail-links">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>
          <div className="col-md-4">
            <div className="credite">
              <p>© 2024 Seema Coffee. All rights reserved.</p>
              <p>Made with <span>❤️</span> for coffee lovers</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

