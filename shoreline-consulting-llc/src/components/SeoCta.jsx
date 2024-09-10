import React from 'react';
import VerticalLogo from '../assets/VerticalLogo2.png'; // Make sure the path is correct

const SeoCta = () => {
  return (
    <div className="bg-gray-900 py-12 px-4 md:px-0">
      <div className="max-w-7xl mx-auto text-center">
        <div className="relative bg-slate-800 bg-opacity-50 py-16 px-8 rounded-lg">
          {/* Vertical Logo on the left side for larger screens */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
            <img
              src={VerticalLogo}
              alt="Shoreline Consulting Logo"
              className="h-48 w-auto"
            />
          </div>

          {/* Vertical Logo centered for smaller screens */}
          <div className="lg:hidden mb-6">
            <img
              src={VerticalLogo}
              alt="Shoreline Consulting Logo"
              className="mx-auto h-32 w-auto"
            />
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
            OPTIMIZE FOR GOOGLE AND AI SEARCH
            <br />
            WITH SHORELINE CONSULTING
          </h2>

          {/* Desktop Button */}
          <div className="hidden md:inline-block">
            <a
              href="/Contact"
              target="_self"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-md transition duration-300 shadow-md"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Button */}
          <div className="inline-block md:hidden mt-6">
            <a
              href="/Contact"
              target="_self"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-md transition duration-300 shadow-md"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoCta;
