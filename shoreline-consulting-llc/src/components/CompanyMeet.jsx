import React from 'react';
import TeamPicture from '../assets/flowchart.webp'

const CompanyMeet = () => {
  return (
    <section className="bg-white overflow-hidden py-12 lg:py-16">
      <div className="container mx-auto px-4 flex flex-col gap-8 md:flex-row md:gap-16">
        {/* Text Section */}
        <div className="flex-1">
          <h1 className="text-3xl lg:text-4xl font-light text-navy">
            Meet Shoreline
          </h1>
          <p className="mt-4 text-sm lg:text-base text-gray-600">
            We are software engineers and online marketing strategists on a mission to help businesses reach their online potential through integrating technology. We provide customers with capabilities to automate their business, increase their online visibility and optimize their online sales funnels.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 lg:mt-8 flex flex-col justify-center lg:flex-row gap-4">
            <a
              href="/careers/home"
              className="flex items-center justify-center border-2 border-blue-500 text-center font-semibold transition-colors duration-300 focus:outline-offset-2 focus:outline-blue-500 px-6 py-3 text-base lg:text-lg bg-blue-500 text-white hover:bg-blue-600 hover:border-blue-600"
            >
              Join our Team
            </a>
            <a
              href="/Blog/"
              className="flex items-center justify-center border-2 border-blue-500 text-center font-semibold transition-colors duration-300 focus:outline-offset-2 focus:outline-blue-500 px-6 py-3 text-base lg:text-lg bg-white text-blue-500 hover:bg-blue-100 hover:border-blue-600"
            >
              Our Blog
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/3 lg:w-1/2">
          <div className="grid grid-cols-1 gap-1">
            <img
              src={TeamPicture}
              alt="Shoreline team"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              sizes="(max-width: 768px) 50vw, 20vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyMeet;
