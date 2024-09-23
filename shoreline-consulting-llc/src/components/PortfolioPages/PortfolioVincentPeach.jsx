import React from "react";
import { Link } from "react-router-dom"; // Ensure react-router-dom is installed if using React Router
import VincentPeachHeader from '../../assets/PortfolioPictures/VincentPeachHeader.png';
import VincentPeachMobileHeader from '../../assets/PortfolioPictures/VincentPeachHeaderMobile.png';
import VincentPeachCollectionMobile from '../../assets/PortfolioPictures/VincentPeachCollectionMobile.png';
import VincentPeachProductListing from '../../assets/PortfolioPictures/VincentPeachProductListing.png';
import VincentPeachCollection from '../../assets/PortfolioPictures/VincentPeachCollection.png';
import { FaSearch, FaTags, FaGem } from "react-icons/fa"; // Icons for each section
import Logo from '../../assets/PalmTreeTransparent.png';

const PortfolioVincentPeach = () => {
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
            Vincent Peach Fine Jewelry - Elevating SEO and E-Commerce Organization
          </h1>
          <p className="text-gray-600 text-lg">
            An SEO-driven overhaul of Vincent Peach’s Shopify store, enhancing visibility, relevance, and sales through strategic optimization of product listings, collections, and metadata.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <img
              src={VincentPeachMobileHeader}
              alt="Vincent Peach Mobile Header"
              className="w-full h-auto rounded-md shadow-lg"
            />
            <img
              src={VincentPeachHeader}
              alt="Vincent Peach Header"
              className="col-span-2 w-full h-auto rounded-md shadow-lg"
            />
          </div>
        </header>

        {/* Portfolio Body */}
        <section className="space-y-16">
          {/* Project Overview */}
          <article className="space-y-6">
            <p className="text-lg text-gray-800">
              Vincent Peach Fine Jewelry, a renowned retailer in Middle Tennessee, needed a significant upgrade to their online SEO strategy. Despite their active online sales, their existing SEO was ineffective due to irrelevant keywords and poorly optimized metadata. We embarked on a comprehensive cleanup and reorganization of their Shopify store to enhance their Google search performance, drive more relevant traffic, and ultimately increase sales.
            </p>
          </article>

          <hr className="mb-8" />

          {/* Section 1: Consistent Imagery and Mobile Responsiveness */}
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaGem className="mr-2" /> Consistent Imagery and Mobile Responsiveness
            </h2>
            <p className="text-lg text-gray-800">
              We ensured all product collections had consistent and professional imagery, enhancing the overall shopping experience. By standardizing product images across collections and optimizing the mobile responsiveness of product listings, we provided a cohesive and engaging visual presentation that reflects the quality of Vincent Peach’s fine jewelry.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <img
                src={VincentPeachCollectionMobile}
                alt="Vincent Peach Collection Mobile"
                className="w-full rounded-md shadow-lg"
              />
              <ul className="list-disc ml-6 text-lg space-y-2">
                <li>Standardized collection imagery to present a cohesive brand identity.</li>
                <li>Enhanced mobile responsiveness for a consistent user experience across devices.</li>
                <li>Improved visual appeal to reflect the premium nature of the products.</li>
              </ul>
            </div>
          </article>

          <hr className="mb-8" />

          {/* Section 2: Optimizing Product Listings for SEO and Visibility */}
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaSearch className="mr-2" /> Optimizing Product Listings for SEO and Visibility
            </h2>
            <p className="text-lg text-gray-800">
              Our efforts focused on enhancing each product listing to improve SEO and deliver relevant information. We used JavaScript to dynamically present additional, context-rich details that align with current natural language search trends, making each listing more informative and engaging for users. We cleaned up the metadata, ensuring that each product included precise information such as size, materials, and collection, and removed unnecessary or outdated keywords that diluted their SEO impact.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              <img
                src={VincentPeachProductListing}
                alt="Vincent Peach Product Listing"
                className="w-full h-auto rounded-md shadow-lg"
              />
              <ul className="col-span-2 list-disc my-auto ml-6 text-lg space-y-2">
                <li>Used JavaScript to incorporate more detailed, relevant product information.</li>
                <li>Cleaned up metadata to include accurate descriptions of size, material, and collection.</li>
                <li>Utilized AI and keyword tools to focus on relevant, high-impact keywords targeting their audience.</li>
                <li>Added product reviews to increase credibility and conversions.</li>
                <li>Enhanced SEO visibility, leading to increased traffic and sales from Google searches.</li>
              </ul>
            </div>
          </article>

          <hr className="mb-8" />

          {/* Section 3: Organized Collections and Product Listings */}
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaTags className="mr-2" /> Organized Collections and Product Listings
            </h2>
            <p className="text-lg text-gray-800">
              We reorganized the product listings and collections, grouping related items to provide a logical and intuitive shopping experience. By ensuring that similar items were grouped and cross-referenced, we increased the likelihood of additional purchases. This organized approach helped create a streamlined path for customers, making it easier for them to explore the jewelry that best fits their needs.
            </p>
            <img
              src={VincentPeachCollection}
              alt="Vincent Peach Collection"
              className="w-full rounded-md shadow-lg"
            />
            <ul className="list-disc ml-6 text-lg space-y-2">
              <li>Grouped similar products to create a more intuitive browsing experience.</li>
              <li>Enhanced cross-referencing within collections to drive upsells and related purchases.</li>
              <li>Created a seamless pathway for users to navigate between products and collections.</li>
            </ul>
          </article>
        </section>

        {/* Conclusion and Call-to-Action */}
        <footer className="mt-16">
          <hr className="mb-8" />
          <p className="text-lg text-gray-800 text-center">
            Vincent Peach’s revamped Shopify store now delivers a polished, SEO-optimized, and organized shopping experience. By aligning the site’s structure with current search trends and enhancing product presentation, we’ve positioned Vincent Peach Fine Jewelry to continue attracting relevant Google hits and increasing sales.
            <br/>
        
        To view their website,{" "}
        <a
          href="https://www.vincentpeach.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-500"
        >
          click here
        </a>.
      </p>
      
      <hr className="mt-8"/>
      
                <p className="text-lg text-gray-800 text-center mt-4">
            If you're looking to enhance your eCommerce platform’s SEO and improve your online visibility, contact Shoreline Business Solutions today to learn how we can help transform your business.
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

export default PortfolioVincentPeach;
