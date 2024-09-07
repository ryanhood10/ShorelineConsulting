import React, { useState } from 'react';
import Logo from '../assets/PalmtreeLeftLogo.webp';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-gray-900 text-gray-300 py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-6">
          <Link to="/" className="flex items-center space-x-2 text-3xl font-bold text-cyan-500 hover:text-cyan-300">
            <img
              src={Logo}
              alt="Akira Web Solutions Logo"
              className="h-8 rounded-xl"
            />
            <span>Shoreline Consulting</span>
          </Link>
          <nav className="hidden md:flex space-x-6 pl-8">
            <Link to="/Product" className="hover:text-cyan-300 transition-colors duration-200">Product</Link>
            <Link to="/Pricing" className="hover:text-cyan-300 transition-colors duration-200">Pricing</Link>
            {/* <Link to="/Docs" className="hover:text-cyan-300 transition-colors duration-200">Docs</Link> */}
            <Link to="/Company" className="hover:text-cyan-300 transition-colors duration-200">Company</Link>
          </nav>
        </div>

        {/* Login and Sign Up Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/Login" className="text-gray-400 hover:text-cyan-300 transition-colors duration-200">Login</Link>
          <Link to="/Contact" className="bg-cyan-500 text-gray-900 px-4 py-2 rounded-md hover:bg-cyan-400 transition-colors duration-200">
            Contact
          </Link>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-400 hover:text-cyan-300 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Overlay and Mobile menu */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-50 z-30"
            onClick={closeMobileMenu}
          ></div>

          {/* Mobile menu */}
          <div className="md:hidden bg-gray-900 text-center py-4 absolute top-0 left-0 w-full z-40">
            <button
              className="text-gray-400 hover:text-cyan-300 absolute top-4 right-4"
              onClick={closeMobileMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <Link
              to="/Product"
              className="block text-gray-300 hover:text-cyan-300 py-2 transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              Product
            </Link>
            <Link
              to="/Pricing"
              className="block text-gray-300 hover:text-cyan-300 py-2 transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              Pricing
            </Link>
          
            <Link
              to="/Company"
              className="block text-gray-300 hover:text-cyan-300 py-2 transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              Company
            </Link>
            <Link
              to="/Login"
              className="block text-gray-400 hover:text-cyan-300 py-2 transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              Login
            </Link>
            <Link
              to="/Contact"
              className="block bg-cyan-500 text-gray-900 px-4 py-2 rounded-md mt-2 mx-4 hover:bg-cyan-400 transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
