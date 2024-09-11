import React from 'react';

const CompanyServices = () => {
  return (
    <section className="bg-slate-50 py-12">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Technology and Services
          </h2>
        </div>

        {/* Section Paragraph */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            Shoreline offers cutting-edge solutions to help businesses grow 
            and thrive in the digital world. From AI-driven chatbots and expert 
            website designs to secure database management and customized SEO strategies, 
            we provide the tools and services to meet your unique business needs.
          </p>
        </div>

        {/* Call to Action Links */}
        <div className="max-w-lg mx-auto space-y-6">
          <a
            href="/Solutions/ai-agents"
            className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition duration-300"
          >
            Learn More about our AI Chatbots
          </a>

          <a
            href="/Solutions/website-builds"
            className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition duration-300"
          >
            Learn More about our Website Builds
          </a>

          <a
            href="/Solutions/database-management"
            className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition duration-300"
          >
            Learn More about our Database Management Systems
          </a>

          <a
            href="/Soltions/seo-strategies"
            className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition duration-300"
          >
            Learn More about our SEO Strategies
          </a>
          <a
            href="/Soltions/cro-strategies"
            className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition duration-300"
          >
            Learn More about our CRO Solutions
          </a>
        </div>
      </div>
    </section>
  );
};

export default CompanyServices;
