import React from 'react';

const WebsiteCTA = () => {
  return (
    <div className="bg-gray-900 py-12 px-4 md:px-0">
      <div className="max-w-7xl mx-auto text-center">
        <div className="bg-black bg-opacity-50 py-16 px-8 rounded-lg">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
            TAKE YOUR BUSINESS TO THE <b>NEXT LEVEL</b>
            <br />
            WITH SHORELINE BUSINESS SOLUTIONS
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

export default WebsiteCTA;
