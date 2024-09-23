import React from "react";
import { Link } from "react-router-dom"; // Ensure react-router-dom is installed if using React Router
import BitcoinBayHeader from '../../assets/PortfolioPictures/BitcoinBayHeader.png';
import BitcoinBayHeaderMobile from '../../assets/PortfolioPictures/BitcoinBayHeaderMobile.png';
import BitcoinBayVideo from '../../assets/PortfolioPictures/BitcoinBayVideo.png';
import BitcoinBaySupport from '../../assets/PortfolioPictures/BitcoinBayWager.png';
import BitcoinBayPrice from '../../assets/PortfolioPictures/BitcoinBayPrice.png';
import BitcoinBaySignUp from '../../assets/PortfolioPictures/BitcoinBaySignup.png'; // Sign-up process image
import { FaMobileAlt, FaRobot, FaShieldAlt, FaEnvelopeOpen } from "react-icons/fa"; // Icons for each section
import Logo from '../../assets/PalmTreeTransparent.png';

const PortfolioBitcoinBay = () => {
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
            Bitcoin Bay - Enhancing Customer Experience and Streamlining Services
          </h1>
          <p className="text-gray-600 text-lg">
            A comprehensive revamp of Bitcoin Bay’s online platform, focusing on user engagement, customer support, and secure, efficient service management.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <img
              src={BitcoinBayHeaderMobile}
              alt="Bitcoin Bay Header Mobile"
              className="w-full h-auto rounded-md shadow-lg"
            />
            <img
              src={BitcoinBayHeader}
              alt="Bitcoin Bay Header"
              className="col-span-2 w-full h-auto rounded-md shadow-lg"
            />
          </div>
        </header>

        {/* Portfolio Body */}
        <section className="space-y-16">
          {/* Project Overview */}
          <article className="space-y-6">
            <p className="text-lg text-gray-800">
              Bitcoin Bay, a cryptocurrency service provider, needed a more robust and user-friendly online platform to attract and retain clients. Our approach was to create a mobile-friendly design that effectively communicates the benefits of working with Bitcoin Bay. We implemented various tools and optimizations to improve customer support, enhance user experience, and secure their platform from spam and unauthorized access.
            </p>
          </article>

          <hr className="mb-8" />

          {/* Section 1: Mobile-Friendly Design and Branded How-To Video */}
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaMobileAlt className="mr-2" /> Mobile-Friendly Design and Branded How-To Video
            </h2>
            <p className="text-lg text-gray-800">
              We redesigned Bitcoin Bay's website with a mobile-first approach, ensuring a seamless experience across devices. A branded How-To video was created to guide users through managing their accounts, making deposits, and withdrawals, enhancing the user experience and reducing onboarding friction.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <img
                src={BitcoinBayVideo}
                alt="Bitcoin Bay How-To Video"
                className="w-full rounded-md my-auto mx-auto shadow-lg"
              />
              <ul className="list-disc ml-6 text-lg my-auto mx-auto space-y-2">
                <li>Developed a responsive, mobile-friendly website design.</li>
                <li>Created a branded How-To video to assist users in navigating the platform.</li>
                <li>Enhanced user accessibility and engagement through interactive, informative content.</li>
              </ul>
            </div>
          </article>

          <hr className="mb-8" />

       

          {/* Section 2: Improved Sign-Up Process and Security Enhancements */}
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaEnvelopeOpen className="mr-2" /> Improved Sign-Up Process and Security Enhancements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              <img
                src={BitcoinBaySignUp}
                alt="Bitcoin Bay Sign-Up Process"
                className="w-full h-auto rounded-md shadow-lg"
              />
              <ul className="col-span-2 list-disc ml-6 text-lg space-y-2">
                <li>Refined the welcome email to streamline the account sign-up process.</li>
                <li>Set up a dedicated email inbox to notify Bitcoin Bay of new client sign-ups.</li>
                <li>Added Google reCAPTCHA to prevent fake sign-ups and protect against spam.</li>
              </ul>
            </div>
          </article>

          <hr className="mb-8" />

   {/* Section 3: Enhanced Customer Support with Chatbot and Direct Messaging */}
   <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaRobot className="mr-2" /> Enhanced Customer Support with AI Chatbot and Direct Messaging
            </h2>
            <p className="text-lg text-gray-800">
              To address the growing need for efficient customer support, we developed an AI-driven chatbot specifically tailored for Bitcoin Bay. This chatbot manages common inquiries and supports account management. Additionally, we integrated a direct-to-text button, allowing users to connect with live customer support when needed.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <img
                src={BitcoinBaySupport}
                alt="Bitcoin Bay Customer Support"
                className="w-full mx-auto my-auto rounded-md shadow-lg"
              />
              <ul className="list-disc ml-6 text-lg mx-auto my-auto space-y-2">
                <li>Created a custom AI chatbot to manage customer inquiries efficiently.</li>
                <li>Integrated direct-to-text support for instant communication with customer service.</li>
                <li>Streamlined customer support processes, enhancing overall user satisfaction.</li>
              </ul>
            </div>
            <p className="text-lg text-gray-800 text-center">
              To read more about our AI chatbot implementation for Bitcoin Bay,{" "}
              <Link
                to="/bitcoin-bay-chatbot"
                className="text-blue-600 hover:text-blue-500"
              >
                click here.
              </Link>
            </p>
          </article>

          <hr className="mb-8" />

          {/* Section 4: Live Crypto Prices, Custom Backgrounds, and Secure Access */}
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaShieldAlt className="mr-2" /> Live Crypto Prices, Custom Backgrounds, and Secure Access
            </h2>
            <p className="text-lg text-gray-800">
              To keep users informed, we integrated an API displaying live crypto prices of the currencies Bitcoin Bay works with. Additionally, AI-generated captivating background images were included to enhance the website’s aesthetic appeal. User access to the website is tightly controlled; only registered users with an access key can log in, maintaining a secure and exclusive platform environment.
            </p>
            
            <img
                src={BitcoinBayPrice}
                alt="Bitcoin Bay Live Crypto Prices"
                className="w-[70%] mx-auto my-auto rounded-md shadow-lg"
              />

              <ul className="list-disc text-start py-auto mx-auto text-lg space-y-2">
                <li>Integrated real-time crypto price displays to keep users updated on market conditions.</li>
                <li>Used AI-generated visuals to create an engaging and cohesive website design.</li>
                <li>Restricted website access to authorized users for enhanced security.</li>
              </ul>

          </article>
        </section>

        {/* Conclusion and Call-to-Action */}
        <footer className="mt-16">
          <hr className="mb-8" />
          <p className="text-lg text-gray-800 text-center">
            Bitcoin Bay’s enhanced website now offers a seamless, secure, and engaging experience for users. With improved customer support, enhanced security measures, and real-time market data, Bitcoin Bay is better equipped to serve its growing user base.
            <br/>
        
        To view their website,{" "}
        <a
          href="https://www.bitcoinbay.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-500"
        >
          click here
        </a>.
          </p>
          <hr className="mt-8"/>
          
            <p className="text-lg text-gray-800 text-center mt-4">
            If you're looking to elevate your business's online presence and streamline operations, contact Shoreline Business Solutions today to learn how we can help you achieve similar results.
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

export default PortfolioBitcoinBay;
