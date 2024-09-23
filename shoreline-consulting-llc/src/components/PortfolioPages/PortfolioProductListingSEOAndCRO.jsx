import React from "react";
import { Link } from "react-router-dom"; // Ensure react-router-dom is installed if using React Router
import ProductListingHeader from '../../assets/PortfolioPictures/VincentPeachProductListing.png';
import ProductOptimizer from '../../assets/PortfolioPictures/ProductOptimizer.png';
import GeminiLogo from '../../assets/PortfolioPictures/GeminiLogo.png';
import SemrushLogo from '../../assets/PortfolioPictures/SemrushLogo2.png';
import ProductListingConversion from '../../assets/PortfolioPictures/GoogleAnalytics3.webp';
import { FaSearch, FaChartLine, FaBrain, FaBullseye } from "react-icons/fa"; // Icons for each section
import Logo from '../../assets/PalmTreeTransparent.png';

const PortfolioProductListingSEOAndCRO = () => {
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
            Product Listing SEO & CRO Strategy - Maximizing Visibility and Conversions
          </h1>
          <p className="text-gray-600 text-lg">
            Discover our tailored approach to optimizing product listings for search engines and boosting conversions using advanced technologies and strategic insights.
          </p>
          <img
            src={ProductListingHeader}
            alt="Product Listing Optimization"
            className="w-[80%] md:w-[60%] mx-auto rounded-md shadow-lg mt-8"
          />
          <p className="text-gray-600 mx-auto py-2 text-md">
            Example of an optimized product page
          </p>
        </header>

        {/* Portfolio Body */}
        <section className="space-y-16">
          {/* Strategy Overview */}
          <article className="space-y-6">
            <p className="text-lg text-gray-800">
              At Shoreline Business Solutions, we provide a comprehensive strategy for optimizing product listings that focuses on enhancing search engine visibility and driving conversions. By leveraging tools like Semrush, Gemini, and our proprietary AI Product Optimizer, we ensure your product pages stand out in search results and convert visitors into loyal customers. Here’s how our process works to maximize your listings' performance.
            </p>
          </article>

          <hr className="mb-8" />

          {/* Section 1: Keyword Research with Semrush and Trend Analysis with Gemini */}
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaSearch className="mr-2" /> Keyword Research and Trend Analysis
            </h2>
            <p className="text-lg text-gray-800">
              Our strategy begins with keyword research using Semrush to uncover the most valuable keywords for your product listings. We analyze competitor data, search volumes, and keyword difficulty to target the terms that drive high-quality traffic. By consulting Gemini, we validate these findings with real-time trend data, ensuring that our approach aligns with the latest market movements and consumer behaviors.
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
                <li>Identify the right keywords with Semrush to reach your target audience effectively.</li>
                <li>Use Gemini to validate current trends and refine keyword strategies for maximum impact.</li>
                <li>Focus on high-value keywords that enhance visibility and attract relevant traffic to your listings.</li>
              </ul>
            </div>
          </article>

          <hr className="mb-8" />

          {/* Section 2: AI Product Optimizer for Enhanced Product Descriptions */}
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaBrain className="mr-2" /> AI Product Optimizer: Crafting Engaging Descriptions
            </h2>
            <p className="text-lg text-gray-800">
              Our AI Product Optimizer goes beyond basic descriptions, analyzing natural language search trends and consumer behavior to create content that resonates with your audience. This tool evaluates essential product details, such as size, material, and specifications, to ensure every listing is detailed and relevant. We strategically organize this information in "Read More" sections to maintain a clean, engaging layout while highlighting key elements like reviews and testimonials to boost credibility.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <img
                src={ProductOptimizer}
                alt="AI Product Optimizer"
                className="w-full rounded-md shadow-lg"
              />
              <ul className="list-disc ml-6 text-lg space-y-2">
                <li>Utilize AI-driven insights to craft compelling descriptions aligned with current search trends.</li>
                <li>Enhance product listings with critical attributes, including dimensions, materials, and features.</li>
                <li>Boost credibility with customer reviews, testimonials, and relevant information in a structured layout.</li>
              </ul>
            </div>
          </article>

          <hr className="mb-8" />

          {/* Section 3: Conversion Rate Optimization and Conversion Tracking */}
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaBullseye className="mr-2" /> Conversion Rate Optimization and Tracking
            </h2>
            <p className="text-lg text-gray-800">
              To maximize conversions, we integrate conversion tracking tools that monitor user interactions on your product pages. This enables us to track performance from social media ads, direct marketing, and organic search, providing actionable insights into how visitors engage with your listings. By understanding user behavior, we continuously refine and adjust our approach to ensure your pages drive the highest possible conversion rates.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              <img
                src={ProductListingConversion}
                alt="Product Listing Conversion Tracking"
                className="w-full h-auto rounded-md shadow-lg"
              />
              <ul className="col-span-2 list-disc ml-6 text-lg space-y-2">
                <li>Monitor user interactions to identify conversion drivers and optimize product pages accordingly.</li>
                <li>Track conversions from social media and marketing campaigns directly to your listings.</li>
                <li>Use insights from tools like Google Search Console to maintain and enhance SEO performance.</li>
              </ul>
            </div>
          </article>

          <hr className="mb-8" />

          {/* Section 4: Tracking Performance with Google Search Console */}
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaChartLine className="mr-2" /> Monitoring and Adjusting for Success
            </h2>
            <p className="text-lg text-gray-800">
              Ongoing performance monitoring is crucial to ensuring the success of your product listings. We use Google Search Console and other analytics tools to track visibility, traffic, and user engagement. By regularly analyzing this data, we adapt our strategies to stay ahead of changes in the market, keeping your product pages optimized and effective in driving sales.
            </p>
            <ul className="list-disc ml-6 text-lg space-y-2">
              <li>Regularly track site performance and adjust strategies based on data insights.</li>
              <li>Analyze traffic sources to refine SEO and CRO efforts continually.</li>
              <li>Ensure your listings remain relevant and competitive with ongoing optimizations.</li>
            </ul>
          </article>
        </section>

        {/* Conclusion and Call-to-Action */}
        <footer className="mt-16">
          <hr className="mb-8" />
          <p className="text-lg text-gray-800 text-center">
            Our comprehensive SEO and CRO approach ensures that your product listings are not only visible to your target audience but also primed for conversions. With advanced technologies and data-driven insights, we elevate your product pages to perform at their best.
            <br/>
        
            Want to hear about our SEO strategies for websites?{" "}
            <a
              href="/Portfolio/seo-boost-strategy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-500"
            >
              click here
            </a>.
          </p>
          <hr className="mt-8" />
          <p className="text-lg text-gray-800 text-center mt-4">
            If you're ready to boost your product listings' visibility and drive sales, contact Shoreline Business Solutions today to learn how we can tailor our strategy to fit your needs.
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

export default PortfolioProductListingSEOAndCRO;
