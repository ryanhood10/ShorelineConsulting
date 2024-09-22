import React from "react";
import { Link } from "react-router-dom"; // Ensure react-router-dom is installed if using React Router
import SeaverHeader from '../../assets/PortfolioPictures/SeaverHeader.png';
import SeaverCalendly from '../../assets/PortfolioPictures/SeaverCalendly.png';
import SeaverFooter from '../../assets/PortfolioPictures/SeaverFooter.png';
import { FaMobileAlt, FaHandHoldingUsd, FaRegCalendarAlt, FaChartLine } from "react-icons/fa"; // Icons for each section
import Logo from '../../assets/PalmTreeTransparent.png';

const PortfolioSeaverMarketing = () => {
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
            Seaver Marketing Group - Elevating Online Presence for a Fast-Growing Marketing Firm
          </h1>
          <p className="text-gray-600 text-lg">
            A complete website transformation to enhance professionalism, integrate booking functionalities, and optimize for search engine performance.
          </p>
          <img
            src={SeaverHeader}
            alt="Seaver Marketing Group Header"
            className="w-full rounded-md shadow-lg mt-8"
          />
        </header>

        {/* Portfolio Body */}
        <section className="space-y-16">
          {/* Project Overview */}
          <article className="space-y-6">
            <p className="text-lg text-gray-800">
              Seaver Marketing Group, a rapidly growing online marketing firm based in Colorado, specializes in email marketing and affiliate marketing programs. They approached us with a basic landing page and needed a more sophisticated website to maintain their professional image. Our goal was to enhance their online presence, integrate direct booking capabilities, and optimize the site for better search engine performance.
            </p>
          </article>

          <hr className="mb-8" />

          {/* Section 1: Calendly Integration and Call-to-Actions */}
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaRegCalendarAlt className="mr-2" /> Direct Booking Integration with Calendly
            </h2>
            <p className="text-lg text-gray-800">
              To streamline the client onboarding process, we integrated Calendly directly into Seaver Marketing Group’s website. This allows clients to book meetings instantly, aligning with the website’s call-to-actions that encourage users to schedule consultations. The strategic placement of CTAs drives conversions by guiding visitors to book a meeting with the team.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <img
                src={SeaverCalendly}
                alt="Seaver Marketing Calendly Integration"
                className="w-full rounded-md my-auto mx-auto shadow-lg"
              />
              <ul className="list-disc ml-6 text-lg my-auto mx-auto space-y-2">
                <li>Seamlessly integrated Calendly for direct client bookings.</li>
                <li>Implemented action-oriented CTAs to encourage meeting scheduling.</li>
                <li>Enhanced user experience by simplifying the consultation booking process.</li>
              </ul>
            </div>
          </article>

          <hr className="mb-8" />

          {/* Section 2: Responsive Design and SEO Optimization */}
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaMobileAlt className="mr-2" /> Mobile-First Design and SEO Optimization
            </h2>
            <p className="text-lg text-gray-800">
              The Seaver Marketing Group website was designed with a mobile-first approach to ensure an optimal experience on any device. We structured the site to clearly communicate its purpose to both users and search engines, optimizing content for natural language search trends and indexing it properly for Google. A sitemap was submitted to Google Search Console to enhance visibility.
            </p>
            <ul className="list-disc ml-6 text-lg space-y-2">
              <li>Developed a responsive design for seamless use on mobile, tablet, and desktop devices.</li>
              <li>Optimized website content using natural language search trends to improve search engine rankings.</li>
              <li>Submitted a sitemap to Google Search Console for better indexing and visibility.</li>
            </ul>
          </article>

          <hr className="mb-8" />

          {/* Section 3: Professionalism and Conversion Rate Optimization */}
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaHandHoldingUsd className="mr-2" /> Professional Look and Conversion Rate Optimization
            </h2>
            <p className="text-lg text-gray-800">
              To elevate Seaver Marketing Group’s online professionalism, we designed a site that is both visually appealing and conversion-focused. With clear messaging, optimized layout, and well-placed CTAs, the website effectively guides users towards booking a meeting. The addition of LinkedIn and extra contact buttons in the footer further enhances accessibility and trust.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <img
                src={SeaverFooter}
                alt="Seaver Marketing Footer with Contact Links"
                className="w-full rounded-md shadow-lg"
              />
              <ul className="list-disc ml-6 text-lg my-auto space-y-2">
                <li>Designed a professional, user-friendly website that aligns with Seaver’s brand.</li>
                <li>Included LinkedIn integration and additional contact options to build trust and facilitate connections.</li>
                <li>Conversion Rate Optimization techniques guide users towards booking a meeting.</li>
              </ul>
            </div>
          </article>

          <hr className="mb-8" />

          {/* Section 4: Analytics and Data-Driven Decisions */}
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaChartLine className="mr-2" /> Measuring Success with Analytics
            </h2>
            <p className="text-lg text-gray-800">
              We connected the website to Google Analytics to track user behavior, identify popular content, and assess the effectiveness of call-to-actions. This data-driven approach allows Seaver Marketing Group to continually optimize their site to better meet client needs and improve conversion rates.
            </p>
            <ul className="list-disc ml-6 text-lg space-y-2">
              <li>Implemented tracking to monitor user interactions and site performance.</li>
              <li>Used insights from analytics to refine CTAs and enhance user engagement.</li>
              <li>Continuous optimization based on data helps maintain high conversion rates.</li>
            </ul>
          </article>
        </section>

        {/* Conclusion and Call-to-Action */}
        <footer className="mt-16">
          <hr className="mb-8" />
          <p className="text-lg text-gray-800 text-center">
            Seaver Marketing Group’s revamped website now reflects their growing professionalism and commitment to client engagement. With integrated booking tools, strategic SEO, and a focus on conversions, Seaver is well-equipped to continue expanding their client base.
          </p>
          <p className="text-lg text-gray-800 text-center mt-4">
            If you're ready to elevate your business's online presence, contact Shoreline Business Solutions today and discover how we can help you achieve your goals.
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

export default PortfolioSeaverMarketing;
