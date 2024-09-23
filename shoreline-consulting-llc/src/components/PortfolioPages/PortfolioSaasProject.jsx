import React from "react";
import { Link } from "react-router-dom"; // Ensure react-router-dom is installed if using React Router
import SaasHeader from '../../assets/PortfolioPictures/SaasHeader.png';
import SaasTierPricing from '../../assets/PortfolioPictures/SaasTierPricing.png';
import SaasSignUp from '../../assets/PortfolioPictures/SaasSignUp.png';
import StripeLogo from '../../assets/PortfolioPictures/StripeLogo.jpg'; // Stripe logo for payment integration section
import { FaHandHoldingUsd, FaEnvelopeOpen, FaCogs } from "react-icons/fa"; // Icons for each section
import Logo from '../../assets/PalmTreeTransparent.png';

const PortfolioSaasProduct = () => {
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
            SaaS Product - Pre-Built Solution for Your Software as a Service Needs
          </h1>
          <p className="text-gray-600 text-lg">
            A fully functional SaaS website designed to manage subscriptions, handle payments, and provide a seamless user experience with optimized performance.
          </p>
          <img
            src={SaasHeader}
            alt="SaaS Product Header"
            className="w-full rounded-md shadow-lg mt-8"
          />
        </header>

        {/* Portfolio Body */}
        <section className="space-y-16">
          {/* Project Overview */}
          <article className="space-y-6">
            <p className="text-lg text-gray-800">
              Our pre-built SaaS solution is ideal for businesses with an existing application that requires user and subscription management. Built with React, Tailwind CSS, Node.js, and Express, this platform integrates seamlessly with Stripe to manage various tiers of subscriptions, making it easy for your customers to access your software. This package includes a customizable landing page, strategic call-to-actions, and a user-friendly layout designed for both human visitors and web crawlers, ensuring maximum online visibility and peak performance.
            </p>
          </article>

          <hr className="mb-8" />

          {/* Section 1: Subscription Management with Stripe Integration */}
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaHandHoldingUsd className="mr-2" /> Subscription Management with Stripe Integration
            </h2>
            <p className="text-lg text-gray-800">
              Our SaaS product comes with built-in Stripe integration to manage subscriptions effortlessly. It supports multiple pricing tiers, allowing you to offer different levels of access to your application. The payment process is secure, efficient, and fully customizable to fit your specific business needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <img
                src={SaasTierPricing}
                alt="SaaS Tier Pricing"
                className="w-full h-auto rounded-md shadow-lg"
              />
              <ul className="list-disc ml-6 text-lg space-y-2">
                <li>Integrated with Stripe for secure payment processing and subscription management.</li>
                <li>Support for multiple subscription tiers to cater to different user needs.</li>
                <li>Customizable pricing structure and subscription options ready for your product.</li>
              </ul>
            </div>
            <img
              src={StripeLogo}
              alt="Stripe Payment Integration"
              className="w-[200px] mx-auto my-6"
            />
          </article>

          <hr className="mb-8" />

          {/* Section 2: Landing Page and Strategic Call-to-Actions */}
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaCogs className="mr-2" /> Landing Page and Strategic Call-to-Actions
            </h2>
            <p className="text-lg text-gray-800">
              The included landing page is designed to showcase your SaaS product effectively. We strategically placed call-to-action buttons throughout the site, designed to drive user engagement and conversions. Headers, content blocks, and layouts are optimized for both readability and SEO, ensuring your site communicates clearly to your audience and search engines alike.
            </p>
            <ul className="list-disc ml-6 text-lg space-y-2">
              <li>Customizable landing page to promote your product and highlight key features.</li>
              <li>Well-placed call-to-action buttons to guide users towards subscribing and engaging with your service.</li>
              <li>Designed for optimal performance with a structure that is easy for search engines to crawl and index.</li>
            </ul>
          </article>

          <hr className="mb-8" />

          {/* Section 3: Improved Sign-Up Process and Email Notifications */}
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaEnvelopeOpen className="mr-2" /> Improved Sign-Up Process and Email Notifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              <img
                src={SaasSignUp}
                alt="SaaS Product Sign-Up Process"
                className="w-full h-auto rounded-md shadow-lg"
              />
              <ul className="col-span-2 list-disc ml-6 text-lg space-y-2">
                <li>Streamlined sign-up process to capture new users efficiently.</li>
                <li>Email notifications to alert your customer support team of new sign-ups in real-time.</li>
                <li>Welcome Email with sign-in and product info sent to new users.</li>
                <li>Ready-made structures to insert your product's specific content, ensuring a seamless integration.</li>
              </ul>
            </div>
          </article>
        </section>

        {/* Conclusion and Call-to-Action */}
        <footer className="mt-16">
          <hr className="mb-8" />
          <p className="text-lg text-gray-800 text-center">
            Our SaaS product package provides everything you need to launch your software service successfully. With built-in subscription management, strategic marketing tools, and optimized performance, this solution helps you focus on scaling your business.
          </p>
          <p className="text-lg text-gray-800 text-center mt-4">
            If you're looking to take your SaaS business to the next level, contact Shoreline Business Solutions today to learn how we can help customize our solution to fit your needs.
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

export default PortfolioSaasProduct;
