import React from "react";
import { Link } from "react-router-dom"; // Ensure react-router-dom is installed if using React Router
import PMTHeader from '../../assets/PortfolioPictures/PMTHeader.png';
import PMTHeaderMobile from '../../assets/PortfolioPictures/PMTHeaderMobile.png';
import PMTJoinTeam from '../../assets/PortfolioPictures/PMTJoinTeam.png';
import { FaMobileAlt, FaUserFriends, FaLanguage, FaImage } from "react-icons/fa"; // Icons for each section
import Logo from '../../assets/PalmTreeTransparent.png';
import PMTCredibility from '../../assets/PortfolioPictures/PMTCredibility.png';


const PortfolioPMT = () => {
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
            PMT Site - Building an Online Presence for a Local Subcontracting Company
          </h1>
          <p className="text-gray-600 text-lg">
            A strategic website development project to help PMT Site increase conversions and establish an online identity while maintaining a local company feel.
          </p>
          <img
            src={PMTHeader}
            alt="PMT Site Header"
            className="w-full rounded-md shadow-lg mt-8"
          />
        </header>

        {/* Portfolio Body */}
        <section className="space-y-16">
          {/* Project Overview */}
          <article className="space-y-6">
            <p className="text-lg text-gray-800">
              PMT Site, a subcontracting company based in Middle Tennessee, had been operating without a website or any online presence for several years. To enhance their business and increase conversions, we built a website that maintained the local, friendly feel they desired while also conveying professionalism. Our design included images of their employees and company outings to personalize the site, and we structured the content to be understood by both readers and search engines.
            </p>
          </article>

          <hr className="mb-8" />

          {/* Section 1: Establishing Credibility */}
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaUserFriends className="mr-2" /> Establishing Credibility with a Personal Touch
            </h2>
            <p className="text-lg text-gray-800">
              PMT Site's new website not only displays their work but also establishes credibility by highlighting their credentials as a Registered TDOT Contractor and Registered Metro Contractor in Tennessee. We used AI tools to generate and edit images due to the lack of professional photos, ensuring that all visuals fit seamlessly with the website's format and style.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <img
                src={PMTCredibility}
                alt="PMT Credibility"
                className="w-full rounded-md my-auto mx-auto shadow-lg"
              />
              <ul className="list-disc ml-6 text-lg my-auto mx-auto space-y-2">
                <li>Included credentials to build trust and authority in the local market.</li>
                <li>Displayed employee photos and company events to maintain a local, personal touch.</li>
              </ul>
            </div>
          </article>

          <hr className="mb-8" />

          {/* Section 2: Responsive Design and Call-to-Actions */}
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaMobileAlt className="mr-2" /> Responsive Design and Strategic Call-to-Actions
            </h2>
            <p className="text-lg text-gray-800">
              The website was designed with a mobile-first approach to ensure accessibility across all devices. Strategic call-to-actions, such as “Get a Free Quote,” were placed throughout the site to encourage potential clients to reach out for their next project, further driving conversions.
            </p>
            <ul className="list-disc ml-6 text-lg space-y-2">
              <li>Developed a fully responsive design optimized for mobile, tablet, and desktop views.</li>
              <li>Implemented clear, action-oriented call-to-actions to guide users towards contacting PMT Site.</li>
              <li>Created an intuitive navigation experience that engages visitors from the first click.</li>
            </ul>
            <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-6 items-start">
              <img
                src={PMTHeaderMobile}
                alt="PMT Mobile Header"
                className="mx-auto h-[300px] rounded-md shadow-lg mt-6"
              />
              <img
                src={PMTHeader}
                alt="PMT Header and Dynamic Menu"
                className="mx-auto col-span-2 h-[300px] rounded-md shadow-lg mt-6"
              />
            </div>
          </article>

          <hr className="mb-8" />

          {/* Section 3: Bilingual Content and Hiring Page */}
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaLanguage className="mr-2" /> Bilingual Content: Reaching a Broader Audience
            </h2>
            <p className="text-lg text-gray-800">
              Understanding the needs of their diverse workforce, we included bilingual content in both English and Spanish. This approach ensured that PMT Site could effectively communicate with all potential employees and clients, reinforcing their commitment to inclusivity.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <img
                src={PMTJoinTeam}
                alt="PMT Spanish Page"
                className="w-full mx-auto my-auto rounded-md shadow-lg"
              />
              <ul className="list-disc ml-6 text-lg mx-auto my-auto space-y-2">
                <li>Provided bilingual content in English and Spanish for critical sections, including the About Us and Hiring pages.</li>
                <li>Ensured seamless language switching to cater to both English and Spanish-speaking visitors.</li>
                <li>Enhanced accessibility and user experience for a broader audience base.</li>
              </ul>
            </div>
          </article>

          <hr className="mb-8" />

          {/* Section 4: Optimized Imagery and Content Structure */}
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaImage className="mr-2" /> Optimized Imagery and Structured Content
            </h2>
            <p className="text-lg text-gray-800">
              Without access to professional photography, we leveraged AI tools to create and enhance images that fit the website’s aesthetic. We also meticulously structured the website’s content to ensure it was easily understandable by both human readers and search engines, maximizing SEO performance.
            </p>
            <ul className="list-disc ml-6 text-lg space-y-2">
              <li>Used AI-generated images to maintain a cohesive visual identity across the website.</li>
              <li>Structured content with SEO best practices, including appropriate indexing and header usage.</li>
              <li>Ensured all content was presented in a friendly, professional tone that resonated with the local market.</li>
            </ul>
          </article>
        </section>

        {/* Conclusion and Call-to-Action */}
        <footer className="mt-16">
          <hr className="mb-8" />
          <p className="text-lg text-gray-800 text-center">
            The new PMT Site website now provides a welcoming, professional online presence that reflects the company's values and capabilities. With strategically placed call-to-actions and bilingual content, PMT Site is well-positioned to grow their business and attract new clients.
            <br/>
        
        To view their website,{" "}
        <a
          href="https://pmtsite.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-500"
        >
          click here
        </a>.
          </p>
          <hr className="mt-8"/>

          <p className="text-lg text-gray-800 text-center mt-4">
            If you're looking to establish or enhance your online presence, contact Shoreline Business Solutions today to learn how we can help your business thrive.
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

export default PortfolioPMT;
