import React from 'react';
import { FaSearch, FaLink, FaChartLine, FaGoogle } from 'react-icons/fa';
import { SiGooglesearchconsole, SiShopify } from 'react-icons/si'; // Importing Google Search Console and Shopify icons

const SEOHero = () => {
  return (
    <section className="bg-slate-200 text-gray-900 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">SEO Services</h1>
          <p className="text-lg md:text-xl text-gray-700">
            We provide comprehensive SEO services to help your business achieve online visibility and growth.
          </p>
        </div>

        {/* Service Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Free Technical SEO Report */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4 mb-4">
              <FaSearch className="text-blue-500 text-4xl" />
              <h2 className="text-2xl font-semibold">Free Technical SEO Report</h2>
            </div>
            <p className="text-gray-700 mb-4">
              <span className='font-semibold'>Get a free technical SEO report</span> by simply sending us a message with your website and email through our contact form. We'll analyze your site and provide actionable insights.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                onClick={() => window.location.href = '/Contact'}
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Google Search Console and Indexing */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4 mb-4">
              <SiGooglesearchconsole className="text-green-500 text-4xl" />
              <h2 className="text-2xl font-semibold">Google Search Console & Indexing</h2>
            </div>
            <p className="text-gray-700 mb-4">
              We utilize tools like Google Search Console to submit sitemaps, index your website for better crawling, and ensure your data is easily understood by search engines.
            </p>
          </div>

          {/* Lighthouse Score and Page Load Time Optimization */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4 mb-4">
              <FaChartLine className="text-yellow-400 text-4xl" />
              <h2 className="text-2xl font-semibold">Lighthouse Score & Page Load Optimization</h2>
            </div>
            <p className="text-gray-700 mb-4">
              We optimize your website for a high Google Lighthouse score, focusing on metrics like performance, accessibility, and best practices. Fast page load times ensure your site ranks higher on Google and provides a seamless experience for your customers.
            </p>
          </div>

          {/* Social Media & Google Business Optimization */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4 mb-4">
            <FaGoogle className="text-blue-500 text-4xl" />
              <h2 className="text-2xl font-semibold">Social Media & Google Business Linking</h2>
              <FaLink className="text-yellow-500 justify-end text-4xl" />
            </div>
            <p className="text-gray-700 mb-4">
              We optimize your social media profiles and link them with your Google Business account, ensuring that your brand is consistently represented across all platforms.
            </p>
        
          </div>

          {/* Product Listing Optimization for eCommerce */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4 mb-4">
            <SiShopify className="text-green-600 text-4xl" />
              <h2 className="text-2xl font-semibold">Product Listing Optimization</h2>
            </div>
            <p className="text-gray-700 mb-4">
              For eCommerce brands, we optimize product listings to match current trends, integrate natural language search, and ensure proper metadata and keyword optimization. This boosts visibility and relevance in online searches, ensuring your products reach the right audience.
            </p>
       
          </div>

          {/* Review System Integration */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4 mb-4">
              <FaChartLine className="text-blue-400 text-4xl" />
              <h2 className="text-2xl font-semibold">Review System Integration</h2>
            </div>
            <p className="text-gray-700 mb-4">
              We help integrate review systems like Google Reviews or other platforms to encourage feedback and improve your online reputation.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white mt-12 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Our SEO Services?</h2>
          <p className="text-gray-700 mb-4">
            We provide tailored SEO strategies that enhance your visibility, optimize your online presence, and boost your credibility. From technical SEO to social media integration, we have you covered.
          </p>
          <div className="flex justify-center space-x-6">
            <FaSearch className="text-blue-500 text-4xl" />
            <SiGooglesearchconsole className="text-green-500 text-4xl" />
            <FaLink className="text-yellow-500 text-4xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOHero;
