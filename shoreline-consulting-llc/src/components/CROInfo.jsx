import React from 'react';
import {  FaUserCheck, FaChartLine, FaCogs, FaSyncAlt } from 'react-icons/fa';
import Chart2 from '../assets/Chart2.png'; // Assuming Chart2 is in the assets folder

const CROInfo = () => {
  return (
    <section className="bg-gray-900 py-16 px-6 md:px-12 lg:px-24 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Conversion Rate Optimization (CRO) Services</h2>
          <p className="text-lg md:text-xl text-gray-400">
            We optimize your website to increase conversions and improve user experience, helping you maximize the ROI from your marketing efforts.
          </p>
        </div>

        {/* CRO Features */}
        <div className="lg:flex lg:space-x-16 items-start">
          {/* Feature 1 */}
          <div className="relative flex flex-col items-center text-center space-y-4">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 text-white text-2xl">
              <FaUserCheck />
            </div>
            <h3 className="text-xl font-semibold">Usability Improvement</h3>
            <p className="text-gray-400 text-sm md:text-base">
              We enhance mobile and desktop navigation to reduce friction and create a seamless user experience.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="relative flex flex-col items-center text-center space-y-4">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 text-white text-2xl">
              <FaChartLine />
            </div>
            <h3 className="text-xl font-semibold">Marketing Conversion Analysis</h3>
            <p className="text-gray-400 text-sm md:text-base">
              We analyze visitors from your marketing campaigns to ensure they convert into quality leads and sales.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="relative flex flex-col items-center text-center space-y-4">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 text-white text-2xl">
              <FaCogs />
            </div>
            <h3 className="text-xl font-semibold">Conversion Funnel Optimization</h3>
            <p className="text-gray-400 text-sm md:text-base">
              We optimize your sales funnel, ensuring that it's clear and efficient, leading to higher conversion rates at every step.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="relative flex flex-col items-center text-center space-y-4">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 text-white text-2xl">
              <FaSyncAlt />
            </div>
            <h3 className="text-xl font-semibold">Website Copy & Aesthetic Analysis</h3>
            <p className="text-gray-400 text-sm md:text-base">
              We refine your website's content and design to enhance trust, align with your brand, and drive conversions.
            </p>
          </div>
        </div>

        {/* Call to Action & Image */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 mt-16 items-center">
          {/* CRO Chart Image (hidden on mobile) */}
          <div className="hidden lg:flex lg:col-span-1 justify-center">
            <img 
              src={Chart2} 
              alt="CRO Performance Chart" 
              className="w-3/4 md:w-5/8 lg:w-full py-4 rounded-lg shadow-lg"
            />
          </div>

          {/* Text and Call to Action */}
          <div className="lg:col-span-2 flex flex-col justify-center items-center text-center">
            <p className="text-lg text-center text-gray-400 mb-6">
              Ready to boost your website’s conversion rate and drive more sales?
              <br/>
              Contact us to get started on your CRO strategy.
            </p>
            <div className="flex items-center justify-center w-full">
              <a
                href="/Contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-md transition duration-300 shadow-md"
              >
                Contact Us Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CROInfo;
