import React from 'react';
import { FaSearch, FaCode, FaCogs, FaChartLine, FaTools, FaSyncAlt } from 'react-icons/fa';

const SEOInfo = () => {
  return (
    <section className="bg-gray-900 py-16 px-6 md:px-12 lg:px-24 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What It's Like to Work with Us</h2>
          <p className="text-lg md:text-xl text-gray-400">
            Our SEO roadmap guides you through every step, from optimizing your codebase to integrating advanced marketing tools for growth.
          </p>
        </div>

        
          {/* Roadmap Steps */}
          <div className="lg:flex lg:space-x-16 items-start">
            {/* Step 1 */}
            <div className="relative flex flex-col items-center text-center space-y-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 text-white text-2xl">
                <FaSearch />
              </div>
              <h3 className="text-xl font-semibold">Initial Consultation</h3>
              <p className="text-gray-400 text-sm md:text-base">
                We begin with a deep dive into your business goals and website performance to tailor the best strategy.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col items-center text-center space-y-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 text-white text-2xl">
                <FaCode />
              </div>
              <h3 className="text-xl font-semibold">Codebase Optimization</h3>
              <p className="text-gray-400 text-sm md:text-base">
                We enhance your website's code for better performance, speed, and Lighthouse scores to improve rankings.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col items-center text-center space-y-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 text-white text-2xl">
                <FaCogs />
              </div>
              <h3 className="text-xl font-semibold">SEO & Content Strategy</h3>
              <p className="text-gray-400 text-sm md:text-base">
                We align your website's content with SEO trends and natural language searches, ensuring your site ranks well.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative flex flex-col items-center text-center space-y-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 text-white text-2xl">
                <FaChartLine />
              </div>
              <h3 className="text-xl font-semibold">Tracking & Marketing Tools</h3>
              <p className="text-gray-400 text-sm md:text-base">
                We integrate tools like Google Analytics to track performance and provide valuable insights into your customers' behavior.
              </p>
            </div>

            {/* Step 5 */}
            <div className="relative flex flex-col items-center text-center space-y-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 text-white text-2xl">
                <FaTools />
              </div>
              <h3 className="text-xl font-semibold">CRM & Automation</h3>
              <p className="text-gray-400 text-sm md:text-base">
                We set up CRM and automation tools to help you manage leads and engage your customers with ease.
              </p>
            </div>

            {/* Step 6 */}
            <div className="relative flex flex-col items-center text-center space-y-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 text-white text-2xl">
                <FaSyncAlt />
              </div>
              <h3 className="text-xl font-semibold">Ongoing Performance Audits</h3>
              <p className="text-gray-400 text-sm md:text-base">
                We continuously monitor and audit your site to ensure optimal performance and sustained SEO growth.
              </p>
            </div>
          </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-400 mb-6">
            Ready to take your website to the next level? Contact us to improve performance, track marketing efforts, and more.
          </p>
          <a
            href="/Contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-md transition duration-300 shadow-md"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default SEOInfo;
