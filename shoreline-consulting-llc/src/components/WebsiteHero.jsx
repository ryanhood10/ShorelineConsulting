import React from 'react';
import { CodeBracketIcon, Cog6ToothIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

const WebsiteHero = () => {
  return (
    <div className="bg-slate-200 py-16">
      <div className="container mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
            CUSTOM PROGRAMMING SOLUTIONS TO STREAMLINE YOUR BUSINESS
          </h1>
          <h4 className="text-lg lg:text-xl text-gray-600 mt-4">
            PROFESSIONAL LANDING PAGES, CUSTOM WEB APPS, & PHONE APPS
          </h4>
          <hr className="mt-8 w-full border-t-2 border-gray-300" />
        </div>

        {/* Solutions Section */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Landing Page Development Card */}
          <a
            href="/websites/landing-pages"
            target="_self"
            className="bg-gray-100 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
          >
            <div className="flex items-center justify-center">
              <div className="h-20 w-20 bg-gray-100 border border-gray-400 rounded-full flex items-center justify-center mb-6">
                <CodeBracketIcon className="text-blue-500 w-10 h-10" />
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
              LANDING PAGES
            </h2>
            <p className="text-gray-600 text-center">
              <strong>Professional & Custom-Built</strong>
            </p>
            <p className="text-gray-600 text-center">
              We create visually stunning, high-converting landing pages with all the functionality you need—from forms to advanced integrations.
            </p>
            <p className="text-gray-600 py-4 text-center">
                Check out our Blog on what it takes to craft a good website!</p>
    
              <span className="text-blue-500  font-semibold">READ BLOG</span>
              
          </a>

          {/* Web Apps Development Card */}
          <a
            href="/docs/website-builds"
            target="_self"
            className="bg-gray-100 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
          >
            <div className="flex items-center justify-center">
              <div className="h-20 w-20 bg-gray-100 border border-gray-400 rounded-full flex items-center justify-center mb-6">
                <Cog6ToothIcon className="text-blue-500 w-10 h-10" />
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
              WEB APPS
            </h2>
            <p className="text-gray-600 text-center">
              <strong>Custom-Built Web Applications</strong>
            </p>
            <p className="text-gray-600 text-center">
              Whether it’s for internal use or customer-facing, we build powerful web apps that are secure, scalable, and tailored to your business.
            </p>
            <p className="text-gray-600 py-4 text-center">
                What do we do in creating web applications?</p>
              <span className="text-blue-500 font-semibold">LEARN ABOUT WEB APPS</span>
          </a>

          {/* Phone Apps Development Card */}
          <a
            href="/Blog/great-mobile-apps"
            target="_self"
            className="bg-gray-100 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
          >
            <div className="flex items-center justify-center">
              <div className="h-20 w-20 bg-gray-100 border border-gray-400 rounded-full flex items-center justify-center mb-6">
                <DevicePhoneMobileIcon className="text-blue-500 w-10 h-10" />
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
              PHONE APPS
            </h2>
            <p className="text-gray-600 text-center">
              <strong>iOS & Android Development</strong>
            </p>
            <p className="text-gray-600 text-center">
              We create seamless, user-friendly mobile apps for iOS and Android, taking care of everything from development to store submission.
            </p>
            <p className="text-gray-600 py-4 text-center">
                Check out our Blog on what makes a great mobile application.</p>
                <span className="text-blue-500 font-semibold">READ BLOG</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WebsiteHero;
