import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

export const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const { totalItems } = useCart();

  return (
    <nav className="bg-blue-600 p-4 text-white">
      {/* Internal CSS for animations and hover effects */}
      <style>
        {`
          .nav-link {
            position: relative;
            transition: color 0.3s ease;
          }

          .nav-link::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            height: 2px;
            background-color: #ffffff; /* White underline */
            transition: width 0.3s ease;
          }

          .nav-link:hover {
            color: #ffffff; /* White text */
          }

          .nav-link:hover::after {
            width: 100%;
          }

          .cart-icon {
            transition: transform 0.3s ease;
          }

          .cart-icon:hover {
            transform: translateY(-5px);
          }
        `}
      </style>

      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          E-commerce Clone
        </Link>
        <div className="flex space-x-4">
          {currentUser ? (
            <button onClick={logout} className="nav-link hover:text-gray-300">
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="nav-link hover:text-gray-300">
                Login
              </Link>
              <Link to="/signup" className="nav-link hover:text-gray-300">
                Sign Up
              </Link>
            </>
          )}
          <Link to="/cart" className="nav-link cart-icon hover:text-gray-300">
            Cart ({totalItems})
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;