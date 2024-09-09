import React from 'react';
import { FaDatabase, FaCode, FaRobot, FaSearch } from 'react-icons/fa'; // Importing icons from react-icons

const ProductsShowcase = () => {
  return (
    <section className="bg-white">
      <div className="container max-w-7xl mx-auto py-12 md:py-24 text-black px-4 sm:px-6 lg:px-8">
        <h2 className="max-w-[44.5625rem] text-3xl font-light md:text-[3.375rem] leading-[120%] mx-auto text-center md:text-left">
          Discover Our Technology Solutions
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-x-12 lg:gap-y-20">
          
          {/* Data Management Feature */}
          <div className="space-y-6 text-center lg:text-left cursor-pointer hover:opacity-80" onClick={() => document.getElementById('data-section').scrollIntoView({ behavior: 'smooth' })}>
            <div className="flex h-24 w-24 mx-auto lg:mx-0 items-center justify-center bg-gray-200 rounded-full">
              <FaDatabase className="text-3xl text-blue-600" />
            </div>
            <h3 className="text-2xl font-normal md:text-[2rem] leading-[130%]">
              Data Management
            </h3>
          </div>

          {/* Web Development Feature */}
          <div className="space-y-6 text-center lg:text-left cursor-pointer hover:opacity-80" onClick={() => document.getElementById('web-section').scrollIntoView({ behavior: 'smooth' })}>
            <div className="flex h-24 w-24 mx-auto lg:mx-0 items-center justify-center bg-gray-200 rounded-full">
              <FaCode className="text-3xl text-blue-600" />
            </div>
            <h3 className="text-2xl font-normal md:text-[2rem] leading-[130%]">
              Web Development
            </h3>
          </div>

          {/* AI Solutions Feature */}
          <div className="space-y-6 text-center lg:text-left cursor-pointer hover:opacity-80" onClick={() => document.getElementById('ai-section').scrollIntoView({ behavior: 'smooth' })}>
            <div className="flex h-24 w-24 mx-auto lg:mx-0 items-center justify-center bg-gray-200 rounded-full">
              <FaRobot className="text-3xl text-blue-600" />
            </div>
            <h3 className="text-2xl font-normal md:text-[2rem] leading-[130%]">
              AI Solutions & Chatbots
            </h3>
          </div>

          {/* SEO Optimization Feature */}
          <div className="space-y-6 text-center lg:text-left cursor-pointer hover:opacity-80" onClick={() => document.getElementById('seo-section').scrollIntoView({ behavior: 'smooth' })}>
            <div className="flex h-24 w-24 mx-auto lg:mx-0 items-center justify-center bg-gray-200 rounded-full">
              <FaSearch className="text-3xl text-blue-600" />
            </div>
            <h3 className="text-2xl font-normal md:text-[2rem] leading-[130%]">
              SEO Optimization
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
