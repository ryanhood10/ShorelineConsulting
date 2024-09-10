import React from 'react';
import { FaSearch, FaCode, FaCogs, FaChartLine, FaSyncAlt } from 'react-icons/fa';
import Chart2 from '../assets/Chart2.png'; // Assuming Chart2 is in the assets folder

const SEOInfo = () => {
  return (
    <section className="bg-gray-900 py-16 px-6 md:px-12 lg:px-24 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our SEO Roadmap</h2>
          <p className="text-lg md:text-xl text-gray-400">
            From optimizing your codebase to ensuring high search rankings, we’ll guide you through every step of our SEO strategy.
          </p>
        </div>

        {/* Roadmap Steps */}
        <div className="lg:flex lg:space-x-16 items-start">
          {/* Step 1 */}
          <div className="relative flex flex-col items-center text-center space-y-4">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 text-white text-2xl">
              <FaSearch />
            </div>
            <h3 className="text-xl font-semibold">Initial SEO Audit</h3>
            <p className="text-gray-400 text-sm md:text-base">
              We analyze your website's current performance, including site structure, speed, and existing SEO strategies.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col items-center text-center space-y-4">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 text-white text-2xl">
              <FaCode />
            </div>
            <h3 className="text-xl font-semibold">Codebase Optimization</h3>
            <p className="text-gray-400 text-sm md:text-base">
              We refine your website’s code to improve performance, speed, and Lighthouse scores for better Google rankings.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col items-center text-center space-y-4">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 text-white text-2xl">
              <FaCogs />
            </div>
            <h3 className="text-xl font-semibold">SEO & Content Strategy</h3>
            <p className="text-gray-400 text-sm md:text-base">
              We develop an SEO-friendly content strategy aligned with keyword research, trends, and natural language search.
            </p>
          </div>

          {/* Step 4 */}
          <div className="relative flex flex-col items-center text-center space-y-4">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 text-white text-2xl">
              <FaChartLine />
            </div>
            <h3 className="text-xl font-semibold">Google Search Console & Analytics</h3>
            <p className="text-gray-400 text-sm md:text-base">
              We integrate Google Search Console and Analytics to track site performance, submit sitemaps, and gain insights into your SEO progress.
            </p>
          </div>

          {/* Step 5 */}
          <div className="relative flex flex-col items-center text-center space-y-4">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 text-white text-2xl">
              <FaSyncAlt />
            </div>
            <h3 className="text-xl font-semibold">Ongoing SEO Audits</h3>
            <p className="text-gray-400 text-sm md:text-base">
              We regularly monitor and adjust your SEO strategy, ensuring consistent performance and improving rankings over time.
            </p>
          </div>
        </div>
           {/* Call to Action */}
           <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 mt-16 items-center">
  {/* SEO Chart Image (hidden on mobile) */}
  <div className="hidden lg:flex lg:col-span-1 justify-center">
    <img 
      src={Chart2} 
      alt="SEO Performance Chart" 
      className="w-3/4 md:w-5/8 lg:w-full py-4 rounded-lg shadow-lg"
    />
  </div>
  
  {/* Text and Call to Action */}
  <div className="lg:col-span-2 flex flex-col justify-center items-center text-center">
    <p className="text-lg text-center text-gray-400 mb-6">
      Ready to optimize your website for top search engine rankings? 
      <br/>
      Contact us to get started.
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

export default SEOInfo;
