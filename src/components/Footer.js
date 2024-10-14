import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Trái Cây Tươi. All Rights Reserved.</p>
        <div className="social-icons">
          <a href="https://facebook.com" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://instagram.com" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
