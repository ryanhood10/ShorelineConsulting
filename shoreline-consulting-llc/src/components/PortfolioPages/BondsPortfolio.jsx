import React from "react";
import BondsHeader from '../../assets/PortfolioPictures/BondsHeader.png';
import BondsCredibility from '../../assets/PortfolioPictures/BondsCredibility.png';
import BondsForms from '../../assets/PortfolioPictures/BondsForms.png';
import BondsRecaptcha from '../../assets/PortfolioPictures/BondsForms2.png';
import BondsFooter from '../../assets/PortfolioPictures/BondsFooter.png';
import { FaMobileAlt, FaSearch, FaLock, FaChartLine, FaCogs } from "react-icons/fa"; // Icons for each section
import Logo from '../../assets/PalmTreeTransparent.png';
import BondsHeader2 from '../../assets/PortfolioPictures/BondsHeader2.png';
import BondsHeaderMobile from '../../assets/PortfolioPictures/BondsHeaderMobile.png';
import { Link } from "react-router-dom"; // Ensure react-router-dom is installed if using React Router


const PortfolioBonds = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-5xl mx-auto bg-white p-8 md:p-16 rounded-lg shadow-xl relative">
          {/* Back to Portfolio Link */}
          <Link 
          to="/Portfolio" 
          className="absolute top-4 left-4 flex items-center  text-lg text-blue-600 hover:text-blue-500 transition duration-300"
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Bonds Southeast Inc. - Transforming an Outdated Website into a Modern, High-Performing Platform
          </h1>
          <p className="text-gray-600 text-lg">
            A comprehensive overhaul of a legacy website to improve search visibility, user experience, and business automation.
          </p>
          <img
            src={BondsHeader}
            alt="Bonds Southeast Header"
            className="w-full rounded-md shadow-lg mt-8"
          />
        </header>

        {/* Portfolio Body */}
        <section className="space-y-16">
          {/* Project Overview */}
          <article className="space-y-6">
            <p className="text-lg text-gray-800">
              Bonds Southeast Inc., a leading surety bonds company in Nashville, TN, approached us with a website that had not been updated in years. The outdated WordPress site was not generating the traffic or leads they expected, as their search engine visibility had significantly declined. Our mission was to completely revamp their online presence to enhance search engine performance, improve user engagement, and streamline business processes.
            </p>
          </article>

          <hr className="mb-8" />

          {/* Section 1: SEO Optimization */}
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaSearch className="mr-2" /> SEO Optimization: Enhancing Search Visibility
            </h2>
            <p className="text-lg text-gray-800">
              Our approach focused on optimizing Bonds Southeast Inc.'s website to communicate clearly with Google's web crawlers. By restructuring the site with proper header tags, indexed information, and detailed metadata, we significantly improved their search engine rankings. Additionally, we utilized Google Trends and natural language search trends to optimize the textual content, ensuring it aligned with user search behaviors.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <img
                src={BondsCredibility}
                alt="Bonds Credibility Section"
                className="w-full rounded-md shadow-lg"
              />
              <ul className="list-disc ml-6 text-lg space-y-2">
                <li>Implemented strategic header tags to prioritize key information.</li>
                <li>Enhanced metadata descriptions to improve click-through rates.</li>
                <li>Indexed all pages for better search engine visibility.</li>
                <li>Analyzed and updated content using Google Trends and natural language search insights.</li>
              </ul>
            </div>
          </article>

          <hr className="mb-8" />

          {/* Section 2: Responsive Design and Dynamic Features */}
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaMobileAlt className="mr-2" /> Responsive Design: A Mobile-First Approach with Dynamic Features
            </h2>
            <p className="text-lg text-gray-800">
              We redesigned Bonds Southeast Inc.'s website with a modern, mobile-first approach, ensuring it provided an optimal experience across all devices. The addition of a dynamic header and an interactive mobile menu improved navigation and user engagement.
            </p>
            <ul className="list-disc ml-6 text-lg space-y-2">
              <li>Designed for seamless performance on mobile, tablet, and desktop devices.</li>
              <li>Added a dynamic header with an integrated payment portal for easier access.</li>
              <li>Incorporated interactive buttons throughout the site to enhance navigation.</li>
            </ul>
            <div className="grid grid-cols-1 md:grid-cols-3 mx-aut gap-6 items-start">
            <img
              src={BondsHeaderMobile}
              alt="Bonds Mobile Header"
              className="mx-auto h-[300px] rounded-md shadow-lg mt-6"
            />
            <img
              src={BondsHeader2}
              alt="Bonds Header and Dynamic Menu"
              className="mx-auto col-span-2 h-[300px] rounded-md shadow-lg mt-6"
            />
           
          
            </div>
          </article>

          <hr className="mb-8" />

          {/* Section 3: Secure and User-Friendly Forms */}
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaLock className="mr-2" /> Secure and User-Friendly Forms with Google reCAPTCHA
            </h2>
            <p className="text-lg text-gray-800">
              To enhance user security and prevent spam, we implemented Google reCAPTCHA on all contact forms. The redesigned forms were optimized for usability, reducing the friction in user submissions and helping automate business processes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <img
                src={BondsForms}
                alt="Bonds Forms Page"
                className="w-full rounded-md shadow-lg"
              />
              <img
                src={BondsRecaptcha}
                alt="Bonds reCAPTCHA"
                className="w-full rounded-md shadow-lg"
              />
            </div>
            <ul className="list-disc ml-6 text-lg space-y-2">
              <li>Enhanced security with Google reCAPTCHA integration to prevent spam submissions.</li>
              <li>Streamlined form designs to encourage user engagement and ease of use.</li>
              <li>Managed form submissions to automate business communication and reduce manual tasks.</li>
            </ul>
          </article>

          <hr className="mb-8" />

          {/* Section 4: Integrated Business Tools */}
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaCogs className="mr-2" /> Integrated Business Tools for Enhanced Functionality
            </h2>
            <p className="text-lg text-gray-800">
              We connected various business tools to the website, including a payment portal integrated directly into the header and links to their Google Business account, LinkedIn, and Facebook in the footer. These integrations were designed to improve user accessibility and increase visibility across multiple platforms.
            </p>
            <img
              src={BondsFooter}
              alt="Bonds Footer"
              className="w-full rounded-md shadow-lg"
            />
            <ul className="list-disc ml-6 text-lg space-y-2">
              <li>Linked the payment portal directly in the website header for easy access.</li>
              <li>Connected the Google Business account to enhance local search visibility.</li>
              <li>Added social media links in the footer to expand online presence and engagement.</li>
            </ul>
          </article>

          <hr className="mb-8" />

          {/* Section 5: Google Analytics and Data-Driven Decisions */}
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaChartLine className="mr-2" /> Google Analytics: Measuring Success and Informing Strategy
            </h2>
            <p className="text-lg text-gray-800">
              By setting up Google Analytics, we tracked user behavior, page performance, and conversion rates. This data allowed Bonds Southeast Inc. to make informed decisions, optimize their content strategy, and continuously improve the website's performance.
            </p>
            <ul className="list-disc ml-6 text-lg space-y-2">
              <li>Implemented tracking to monitor website traffic and user interactions.</li>
              <li>Used data insights to refine content and improve user experience.</li>
              <li>Tracked conversion rates to measure the effectiveness of call-to-actions and forms.</li>
            </ul>
          </article>
        </section>

        {/* Conclusion and Call-to-Action */}
        <footer className="mt-16">
          <hr className="mb-8" />
          <p className="text-lg text-gray-800 text-center">
            Through strategic updates and a focus on enhancing user experience and SEO, Bonds Southeast Inc. now has a high-performing website that not only attracts visitors but also converts them into valuable clients.
          <br/>
        
  To view their website,{" "}
  <a
    href="https://bondssoutheast.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:text-blue-500"
  >
    click here
  </a>.
</p>

<hr className="mt-8"/>
          <p className="text-lg text-gray-800 text-center mt-4">
            If you're looking to transform your online presence, contact Shoreline Business Solutions today to learn how we can help your business grow.
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

export default PortfolioBonds;
