import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/MarketingHeader2.png";

const Hero = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/Products");
  };

  const handleContactSales = () => {
    navigate("/Contact");
  };

  return (
    <div className="relative bg-gray-900 overflow-hidden h-[85vh] md:h-[100vh] lg:h-[75vh] xl:h-[65vh]">
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-transparent to-gray-900 opacity-75"></div>

      {/* Text Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 text-center">
        <h2 className="text-2xl sm:text-1xl md:text-2xl lg:text-3xl text-white">
          Shoreline Business Solutions
          <br />
          Leverage Technology to Gain Your Business Advantage
        </h2>
        <p className="text-md md:text-lg text-gray-300 max-w-2xl mx-auto mt-4">
          Shoreline Business Solutions specializes in web development, database builds, AI integrations, and SEO to help your business grow and succeed in the digital world.
        </p>
        <div className="mt-6 flex space-x-4">
          <button
            aria-label="Learn More"
            onClick={handleLearnMore}
            className="bg-cyan-500 text-gray-900 font-medium py-2 px-6 rounded-md transition duration-300 hover:bg-cyan-400"
          >
            Learn More
          </button>
          <button
            aria-label="Contact Sales"
            onClick={handleContactSales}
            className="bg-transparent border border-gray-300 text-gray-300 font-medium py-2 px-6 rounded-md transition duration-300 hover:bg-gray-300 hover:text-gray-900"
          >
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
