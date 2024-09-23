import React from "react";
import { Link } from "react-router-dom"; // Ensure react-router-dom is installed if using React Router
import SEOHeader from '../../assets/PortfolioPictures/SEOHeader.webp';
import SemrushLogo from '../../assets/PortfolioPictures/SemrushLogo2.png';
import GeminiLogo from '../../assets/PortfolioPictures/GeminiLogo.png';
import GoogleSearchConsole from '../../assets/PortfolioPictures/connected.webp';
import LighthouseScore from '../../assets/PortfolioPictures/LighthouseScore.gif';
import { FaSearch, FaLink, FaBolt, FaChartLine, FaChartPie } from "react-icons/fa"; // Icons for each section
import Logo from '../../assets/PalmTreeTransparent.png';

const PortfolioSEOStrategy = () => {
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
            SEO Boost Strategy - Enhancing Visibility and Driving Organic Traffic
          </h1>
          <p className="text-gray-600 text-lg">
            Our SEO strategy is designed to elevate your online presence, improve search rankings, and drive targeted traffic to your website through comprehensive, data-driven optimization techniques.
          </p>
          <img
            src={SEOHeader}
            alt="SEO Boost Strategy"
            className="w-[80%] md:w-[60%] mx-auto rounded-md shadow-lg mt-8"
          />
         
        </header>

        {/* Portfolio Body */}
        <section className="space-y-16">
          {/* Strategy Overview */}
          <article className="space-y-6">
            <p className="text-lg text-gray-800">
              At Shoreline Business Solutions, we craft SEO strategies tailored to enhance your website's visibility and attract the right audience. Our approach combines keyword research, technical optimization, content strategy, and performance tracking to ensure your website ranks highly in search results. Here’s a detailed look at how we boost your website’s SEO and deliver measurable results.
            </p>
          </article>

          <hr className="mb-8" />

          {/* Section 1: Comprehensive Keyword Research and Content Strategy */}
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaSearch className="mr-2" /> Comprehensive Keyword Research and Content Strategy
            </h2>
            <p className="text-lg text-gray-800">
              Our SEO process begins with in-depth keyword research using tools like Semrush to identify the best keywords for your audience. We analyze search intent, keyword difficulty, and competition to create a targeted strategy. Gemini further refines our approach by validating current trends and identifying niche opportunities. This data-driven insight shapes our content strategy, ensuring it aligns with your audience's search behavior.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <img
                  src={SemrushLogo}
                  alt="Semrush"
                  className="w-[50%] mx-auto h-auto rounded-md"
                />
                <img
                  src={GeminiLogo}
                  alt="Google Gemini"
                  className="w-[50%] mx-auto h-auto rounded-md"
                />
              </div>
              <ul className="list-disc my-auto ml-6 text-lg space-y-2">
                <li>Use Semrush to research high-impact keywords that drive traffic.</li>
                <li>Consult Gemini for the latest trends and refine the focus on current search behaviors.</li>
                <li>Develop an SEO-friendly content strategy that matches user intent and search trends.</li>
              </ul>
            </div>
          </article>

          <hr className="mb-8" />

          {/* Section 2: On-Page Optimization, Technical SEO, and Google Integrations */}
<article className="space-y-4">
  <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
    <FaBolt className="mr-2" /> On-Page Optimization, Technical SEO, and Google Integrations
  </h2>
  <p className="text-lg text-gray-800">
    Our on-page optimization focuses on enhancing content, meta tags, structured data, and headers to align with search engine algorithms, improving relevance and visibility. We take a technical SEO approach to ensure your website is fast, secure, and easily crawlable by search engines. Additionally, we integrate your site with key Google services to enhance indexing, local visibility, and credibility.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
    <img
      src={GoogleSearchConsole}
      alt="Google Search Console"
      className="w-full rounded-md shadow-lg"
    />
    <ul className="list-disc ml-6 text-lg space-y-4">
      <li className="flex items-start space-x-3">
        <FaSearch className="text-blue-600 text-6xl" />
        <span>
          <strong>Enhance On-Page SEO:</strong> We optimize meta tags, structured data, and headers to improve search engine relevance. Structured data helps search engines understand the content of your pages, boosting their visibility in search results.
        </span>
      </li>
      <li className="flex items-start space-x-3">
        <FaBolt className="text-blue-600 text-6xl" />
        <span>
          <strong>Improve Site Performance:</strong> Our technical SEO strategy includes optimizing image sizes, reducing load times, and refining site structure. These improvements help create a faster, more responsive user experience, which positively impacts SEO rankings.
        </span>
      </li>
      <li className="flex items-start space-x-3">
        <FaLink className="text-blue-600 text-6xl" />
        <span>
          <strong>Submit Sitemaps and Index Pages:</strong> We utilize Google Search Console to submit sitemaps, index your pages effectively, and provide search engines with clear guidance on how to crawl your site, enhancing overall visibility.
        </span>
      </li>
    </ul>
  </div>
  <hr className="my-8" />
  {/* Google and Social Integrations */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
    <div className="flex items-start space-x-4">
      <FaSearch className="text-blue-600 text-6xl" />
      <div>
        <h3 className="font-semibold text-lg">Google Business Integration</h3>
        <p className="text-gray-800">
          We link your website to your Google Business account to boost local SEO, improve credibility, and ensure your business information is accurate and visible across all Google platforms.
        </p>
      </div>
    </div>
    <div className="flex items-start space-x-4">
      <FaChartLine className="text-green-600 text-6xl" />
      <div>
        <h3 className="font-semibold text-lg">Google Maps and Reviews</h3>
        <p className="text-gray-800">
          For local businesses, we optimize your Google Maps listing, ensuring your location, hours, and contact information are correct. We also assist with managing Google Reviews to build trust with potential customers.
        </p>
      </div>
    </div>
    <div className="flex items-start space-x-4">
      <FaLink className="text-purple-600 text-6xl" />
      <div>
        <h3 className="font-semibold text-lg">Social Media and Google Linking</h3>
        <p className="text-gray-800">
          We link your social media profiles to your Google Business and website to create a consistent brand presence online, increasing engagement and driving traffic to your site.
        </p>
      </div>
    </div>
  </div>
</article>

          <hr className="mb-8" />

          {/* Section 3: Performance Optimization and Lighthouse Score */}
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaChartLine className="mr-2" /> Performance Optimization and Lighthouse Score
            </h2>
            <p className="text-lg text-gray-800">
              We focus on optimizing your site’s performance metrics, aiming for a high Lighthouse score that encompasses speed, accessibility, and best practices. By leveraging advanced performance techniques, such as image optimization, caching, and minimizing HTTP requests, we enhance both user experience and SEO rankings.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              <img
                src={LighthouseScore}
                alt="Lighthouse Score Optimization"
                className="w-full h-auto rounded-md shadow-lg"
              />
              <ul className="col-span-2 list-disc ml-6 text-lg space-y-2">
                <li>Optimize page load times to improve user experience and SEO performance.</li>
                <li>Utilize tools like Google Lighthouse to measure and improve site performance scores.</li>
                <li>Enhance accessibility and usability to create a seamless experience for all users.</li>
              </ul>
            </div>
          </article>

          <hr className="mb-8" />

          {/* Section 4: Analytics and Ongoing SEO Audits */}
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaChartPie className="mr-2" /> Analytics and Ongoing SEO Audits
            </h2>
            <p className="text-lg text-gray-800">
              Continuous monitoring is key to a successful SEO strategy. We integrate tools like Google Analytics and Google Search Console to track your site’s performance, monitor traffic sources, and refine SEO tactics based on real-time data. Regular audits ensure that your website remains compliant with the latest search engine updates and maintains its competitive edge.
            </p>
            <ul className="list-disc ml-6 text-lg space-y-2">
              <li>Track performance metrics and user behavior with Google Analytics.</li>
              <li>Conduct regular SEO audits to adjust strategies and keep up with algorithm changes.</li>
              <li>Utilize data insights to make informed decisions and continuously optimize your SEO.</li>
            </ul>
          </article>
        </section>

        {/* Conclusion and Call-to-Action */}
        <footer className="mt-16">
          <hr className="mb-8" />
          <p className="text-lg text-gray-800 text-center">
            Our SEO boost strategy is tailored to improve your website's visibility, enhance user experience, and drive targeted traffic. By combining the latest tools, data insights, and ongoing optimization, we ensure your site stays at the forefront of search results.
            
          </p>
          <hr className="mt-8" />
          <p className="text-lg text-gray-800 text-center mt-4">
            Ready to elevate your SEO game? Contact Shoreline Business Solutions today to explore how our tailored SEO strategy can transform your online presence.
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

export default PortfolioSEOStrategy;
