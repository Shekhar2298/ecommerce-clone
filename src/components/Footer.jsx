import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      {/* Internal CSS for animations and hover effects */}
      <style>
        {`
          .footer-link {
            position: relative;
            transition: color 0.3s ease;
          }

          .footer-link::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            height: 2px;
            background-color: #3b82f6; /* Blue underline */
            transition: width 0.3s ease;
          }

          .footer-link:hover {
            color: #3b82f6; /* Blue text */
          }

          .footer-link:hover::after {
            width: 100%;
          }

          .social-icon {
            transition: transform 0.3s ease;
          }

          .social-icon:hover {
            transform: scale(1.2);
          }
        `}
      </style>

      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <Link to="/about" className="footer-link">
            About Us
          </Link>
          <Link to="/contact" className="footer-link">
            Contact
          </Link>
          <Link to="/privacy" className="footer-link">
            Privacy Policy
          </Link>
        </div>
        <div className="flex space-x-4">
          <a href="https://facebook.com" className="social-icon">
            <i className="fab fa-facebook text-xl"></i>
          </a>
          <a href="https://twitter.com" className="social-icon">
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a href="https://instagram.com" className="social-icon">
            <i className="fab fa-instagram text-xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;