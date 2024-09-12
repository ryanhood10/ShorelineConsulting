import React from 'react';
import AIIcon from '../assets/IconAI.png';
import WebDevIcon from '../assets/IconWebDev.png';
import DatabaseIcon from '../assets/iconDBS.png';
import SEOIcon from '../assets/IconSEO.png';
import CROIcon from '../assets/IconCRO.png';

const CompanyServices = () => {
  return (
    <section className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-100 md:text-4xl">
            Technology and Services
          </h2>
        </div>

        {/* Section Paragraph */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-lg text-gray-300 leading-relaxed">
            Shoreline offers cutting-edge solutions to help businesses grow 
            and thrive in the digital world. From AI-driven chatbots and expert 
            website designs to secure database management and customized SEO strategies, 
            we provide the tools and services to meet your unique business needs.
          </p>
        </div>

        {/* Image Links with Text in a Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-center items-center text-center">
          <a href="/Solutions/ai-agents" className="block">
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto">
              <img 
                src={AIIcon}
                alt="AI Chatbots" 
                className="object-cover w-full h-full filter grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
            <p className="mt-2 text-gray-300 font-semibold">AI Chatbots</p>
          </a>
          <a href="/Solutions/website-builds" className="block">
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto">
              <img 
                src={WebDevIcon}
                alt="Website Builds" 
                className="object-cover w-full h-full filter grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
            <p className="mt-2 text-gray-300 font-semibold">Website Builds</p>
          </a>
          <a href="/Solutions/database-management" className="block">
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto">
              <img 
                src={DatabaseIcon} 
                alt="Database Management" 
                className="object-cover w-full h-full filter grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
            <p className="mt-2 text-gray-300 font-semibold">Database Management</p>
          </a>
          <a href="/Solutions/seo-strategies" className="block">
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto">
              <img 
                src={SEOIcon} 
                alt="SEO Strategies" 
                className="object-cover w-full h-full filter grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
            <p className="mt-2 text-gray-300 font-semibold">SEO Strategies</p>
          </a>
          <a href="/Solutions/cro-strategies" className="block">
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto">
              <img 
                src={CROIcon}
                alt="CRO Solutions" 
                className="object-cover w-full h-full filter grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
            <p className="mt-2 text-gray-300 font-semibold">CRO Solutions</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CompanyServices;
