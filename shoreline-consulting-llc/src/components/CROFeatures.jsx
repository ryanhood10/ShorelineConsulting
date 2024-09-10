import React from 'react';
import { FaChartLine, FaRedoAlt, FaSearch, FaUsers } from 'react-icons/fa'; // Importing relevant icons

const CROFeatures = () => {
  return (
    <section className="bg-gray-900 py-16 px-6 md:px-12 lg:px-24 text-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Conversion Rate Optimization Features</h1>
          <p className="text-lg md:text-xl text-gray-400">
            Boost your website's performance with our tailored CRO services, ensuring optimized designs and better conversion rates.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Conversion Catalyst */}
          <div className="bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
            <div className="flex justify-center mb-4">
              <FaChartLine className="text-blue-500 text-5xl" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Conversion Catalyst™</h2>
            <p className="text-gray-400">Site Optimization to boost performance and drive conversions.</p>
          </div>

          {/* Data-Driven Redesign */}
          <div className="bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
            <div className="flex justify-center mb-4">
              <FaRedoAlt className="text-green-500 text-5xl" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Data-Driven Redesign</h2>
            <p className="text-gray-400">Our redesign process is backed by data to ensure measurable improvements.</p>
          </div>

          {/* CRO Audit */}
          <div className="bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
            <div className="flex justify-center mb-4">
              <FaSearch className="text-yellow-500 text-5xl" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Conversion Optimization Audit</h2>
            <p className="text-gray-400">We analyze your site's performance to uncover opportunities for growth.</p>
          </div>

          {/* CRO Training */}
          <div className="bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
            <div className="flex justify-center mb-4">
              <FaUsers className="text-red-500 text-5xl" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">CRO Training & Coaching</h2>
            <p className="text-gray-400">Our experts provide training to ensure your team can maintain and grow your conversion efforts.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CROFeatures;
