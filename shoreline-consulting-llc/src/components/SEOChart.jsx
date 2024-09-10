import React from 'react';
import Chart2 from '../assets/Chart2.png'; // Assuming Chart2 is in the assets folder

const SEOChart = () => {
  return (
    <section className="bg-gray-900 pb-6 px-6 md:px-12 lg:px-24 text-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* SEO Chart Image */}
        <img 
          src={Chart2} 
          alt="SEO Performance Chart" 
          className="mx-auto w-3/4 md:w-5/8 lg:w-1/4 mb-8 rounded-lg shadow-lg"
        />
        
        {/* Description */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Comprehensive SEO Strategy
          </h2>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            Our approach to SEO involves a multi-faceted strategy, including:
          </p>
          <ul className="text-gray-400 mt-4 text-base md:text-lg list-disc list-inside">
            <li>Using Google's best practices and tools like Google Search Console.</li>
            <li>Applying natural language AI strategies to match search trends.</li>
            <li>Building quality backlinks to improve domain authority.</li>
            <li>Monitoring your site's performance and continually optimizing for growth.</li>
            <li>Improving content and metadata to enhance search visibility.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SEOChart;
