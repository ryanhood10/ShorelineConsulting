import React from "react";
import backgroundImage from '../assets/background2.png';
import { useLocation } from 'react-router-dom';

const ContactHero = () => {
  const location = useLocation();

  // Function to determine what text to show based on the route
  const getHeadingText = () => {
    switch (location.pathname) {
      case '/Contact':
        return 'Contact Us';
      case '/Solutions':
        return 'Our Solutions';
      case '/Learn':
        return 'Learn';
      case '/Company':
        return 'About Us';
      default:
        return 'Welcome';
    }
  };

  return (
    <div
      className="relative bg-black overflow-hidden "
      style={{ height: "35vh" }}
    >
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r to-cyan-500 via-transparent from-gray-900 opacity-50"></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-transparent to-gray-900 opacity-50"></div>

      {/* Text Container */}
      <div className="relative z-9 flex flex-col items-center justify-center h-full p-4 text-center font-bold">
        <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold">
          {getHeadingText()}
          <br />
        </h2>
        <hr className="border-t-2 border-gray-300 w-3/4 my-4" />
        <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold">
          Shoreline Business Solutions
        </h2>
      </div>
    </div>
  );
};

export default ContactHero;
