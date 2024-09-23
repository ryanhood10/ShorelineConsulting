import React from "react";
import { Link } from "react-router-dom"; // Ensure react-router-dom is installed if using React Router
import CreativeColoringHeader from '../../assets/PortfolioPictures/CreativeColoringHeader.png';
import CreativeColoringHeaderMobile from '../../assets/PortfolioPictures/CreativeColoringHeaderMobile.png';
import CreativeColoringPurchase from '../../assets/PortfolioPictures/CreativeColoringPurchase.png';
import CreativeColoringCollections from '../../assets/PortfolioPictures/CreativeColoringCollections.png';
import { FaMobileAlt, FaSearch, FaShoppingCart } from "react-icons/fa"; // Icons for each section
import Logo from '../../assets/PalmTreeTransparent.png';

const PortfolioCreativeColoring = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-5xl mx-auto bg-white p-8 md:p-16 rounded-lg shadow-xl relative">
        {/* Back to Portfolio Link */}
        <Link
          to="/Portfolio"
          className="absolute top-4 left-4 flex items-center text-blue-600 hover:text-blue-500 transition duration-300"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a.75.75 0 0 1-.53-.22l-6.75-6.75a.75.75 0 0 1 0-1.06l6.75-6.75a.75.75 0 1 1 1.06 1.06L4.81 10h13.44a.75.75 0 0 1 0 1.5H4.81l5.72 5.72a.75.75 0 0 1-.53 1.28z"
              clipRule="evenodd"
            />
          </svg>
          Portfolio
        </Link>

        {/* Portfolio Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
            Creative Coloring - Building a Vibrant E-Commerce Experience
          </h1>
          <p className="text-gray-600 text-lg">
            A dynamic, colorful eCommerce platform built on Shopify, designed to capture the essence of Creative Coloring’s brand and enhance customer engagement.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <img
              src={CreativeColoringHeaderMobile}
              alt="Creative Coloring Header Mobile"
              className="w-full h-auto rounded-md shadow-lg"
            />
            <img
              src={CreativeColoringHeader}
              alt="Creative Coloring Header"
              className="col-span-2 w-full h-auto rounded-md shadow-lg"
            />
          </div>
        </header>

        {/* Portfolio Body */}
        <section className="space-y-16">
          {/* Project Overview */}
          <article className="space-y-6">
            <p className="text-lg text-gray-800">
              Creative Coloring, a colorful art supplies and unique gifts company, needed a robust eCommerce platform that could reflect their vibrant brand while providing a seamless shopping experience. Built from scratch using Shopify, we created a mobile-first, user-friendly website that enhances the company’s online presence and boosts sales through strategic design, optimized listings, and integrated marketing tools.
            </p>
          </article>

          <hr className="mb-8" />

          {/* Section 1: Mobile-First Design and Brand Consistency */}
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaMobileAlt className="mr-2" /> Mobile-First Design and Consistent Branding
            </h2>
            <p className="text-lg text-gray-800">
              We implemented a mobile-first approach to ensure the website performs optimally on any device, keeping Creative Coloring’s vibrant and playful brand at the forefront. Custom images, generated using AI, were used to create captivating headers and collection visuals that enhance the overall user experience and maintain consistency across all touchpoints.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <img
                src={CreativeColoringCollections}
                alt="Creative Coloring Collections"
                className="w-full rounded-md shadow-lg"
              />
              <ul className="list-disc ml-6 text-lg space-y-2">
                <li>Designed with a mobile-first approach to provide a seamless experience on any device.</li>
                <li>Utilized AI-generated images for headers and collections, aligning with the brand’s creative ethos.</li>
                <li>Maintained consistent branding to reflect the colorful, artistic nature of the company.</li>
              </ul>
            </div>
          </article>

          <hr className="mb-8" />

          {/* Section 2: Product Optimization and Enhanced Search Visibility */}
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaSearch className="mr-2" /> Product Optimization and Enhanced Search Visibility
            </h2>
            <p className="text-lg text-gray-800">
              To boost Creative Coloring’s online visibility, we optimized product listings and metadata using AI, ensuring they rank higher on Google and are easily discoverable through natural language search. By strategically structuring content and keywords, we enhanced the website’s SEO performance, driving more organic traffic to the store.
            </p>
            <ul className="list-disc ml-6 text-lg space-y-2">
              <li>Optimized product listings and metadata for improved search engine ranking.</li>
              <li>Used AI tools to identify and implement natural language search trends.</li>
              <li>Enhanced content structure to communicate effectively with both users and search engines.</li>
            </ul>
          </article>

          <hr className="mb-8" />

          {/* Section 3: Payment Portals, Order Tracking, and Social Media Integration */}
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaShoppingCart className="mr-2" /> Payment Portals, Order Tracking, and Social Media Integration
            </h2>
            <p className="text-lg text-gray-800">
              The website is equipped with secure payment portals, order tracking, and integrated social media links to keep customers connected. We implemented upselling strategies with cart suggestions, driving additional sales and enhancing the overall shopping experience. Shopify’s built-in tools provide easy access to sales data, customer management, and performance analytics, empowering Creative Coloring to grow its business effectively.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              <img
                src={CreativeColoringPurchase}
                alt="Creative Coloring Purchase Process"
                className="w-full h-auto rounded-md shadow-lg"
              />
              <ul className="col-span-2 list-disc ml-6 text-lg space-y-2">
                <li>Integrated secure payment gateways for smooth transactions.</li>
                <li>Order tracking and notifications to keep customers informed.</li>
                <li>Linked social media accounts to drive engagement and expand online presence.</li>
                <li>Implemented upselling with cart suggestions to increase average order value.</li>
              </ul>
            </div>
          </article>
        </section>

        {/* Conclusion and Call-to-Action */}
        <footer className="mt-16">
          <hr className="mb-8" />
          <p className="text-lg text-gray-800 text-center">
            Creative Coloring’s Shopify website is a perfect blend of artistic expression and eCommerce functionality. By aligning the design with the brand’s vibrant personality and optimizing for performance, we’ve created a platform that engages customers and drives sales.
            <br/>
        
        To view their website,{" "}
        <a
          href="https://creativecoloring.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-500"
        >
          click here
        </a>.
      </p>
      
      <hr className="mt-8"/>
      <p className="text-lg text-gray-800 text-center mt-4">
            If you're looking to build a unique, effective eCommerce platform for your business, contact Shoreline Business Solutions today to learn how we can bring your vision to life.
          </p>
          <a
            href="/Contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition duration-300 mt-4"
          >
            Get in Touch
          </a>

          {/* Company Branding */}
          <div className="mt-12 flex items-center justify-center">
            <img className="h-16" src={Logo} alt="Shoreline" />
            <p className="text-gray-600">&copy; 2024 Shoreline Business Solutions. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PortfolioCreativeColoring;
