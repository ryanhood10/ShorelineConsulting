import React, { useState } from 'react';
import Globe from '../assets/Globe.png';
import WebAppImage from '../assets/flowchart.webp';
import ECommerceImage from '../assets/OnlineHome.webp';
import SEOImage from '../assets/SEOHero.webp';
import DatabaseImage from '../assets/Databases.png';
import AIToolsImage from '../assets/BondsWebsite.png';
import ChatBotImage from '../assets/BondsWebsite.png';
import BondsSoutheast1 from '../assets/pictures/BondsSoutheastHomepage.png';
import BitcoinBayBot from '../assets/pictures/BitcoinBayBot.png';
import SeaverMarketing1 from '../assets/pictures/SeaverMarketing1.png';
import TrashHaul from '../assets/pictures/NashTrashHaul.png';
import PMTwebsite from '../assets/pictures/PMTwebsite.png';
import ShorelineLogo from '../assets/PalmTreeTransparent.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const PortfolioHome = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // Portfolio projects data categorized
  const categorizedProjects = {
    Websites: [
      {
        title: 'Stellar Marketing Website',
        description: 'Crafting a brand presence for modern businesses',
        image: Globe,
        date: 'April 10, 2022',
        details: 'In this project, we helped a marketing company build a modern website that reflects their brand and engages users effectively.',
      },
      {
        title: 'Bonds Southeast Inc',
        description: 'A Modern Transformation',
        image: BondsSoutheast1,
        date: '2023',
        details: 'We revitalized Bonds Southeast Inc\'s website, bringing it to the forefront of modern design with improved user experience and SEO-optimized content.',
      },
      {
        title: 'Seaver Marketing Group',
        description: 'A Digital Revamp',
        image: SeaverMarketing1,
        date: '2023',
        details: 'We crafted a conversion-focused website for Seaver Marketing Group, optimized with SEO and analytics.',
      },
      {
        title: 'Nashville Trash Haul',
        description: 'A Dynamic Website',
        image: TrashHaul,
        date: '2023',
        details: 'We created a visually appealing and SEO-optimized website for Nashville Trash Haul.',
      },
      {
        title: 'PMT Site',
        description: 'Growing an Online Presence',
        image: PMTwebsite,
        date: '2023',
        details: 'We crafted a website with SEO and Google Analytics integration, helping the company grow their online presence.',
      },
    ],
    'Web Apps': [
      {
        title: 'TaskFlow Web App',
        description: 'A task management app for efficient teams',
        image: WebAppImage,
        date: 'May 5, 2023',
        details: 'TaskFlow is a robust task management tool built for collaboration across distributed teams.',
      },
      {
        title: 'BitcoinBay',
        description: 'AI-Powered Customer Service',
        image: BitcoinBayBot,
        date: '2023',
        details: 'We introduced an AI-driven chatbot for BitcoinBay to enhance customer service.',
      },
    ],
    'E-Commerce': [
      {
        title: 'E-Shop Online Platform',
        description: 'Creating a seamless e-commerce experience',
        image: ECommerceImage,
        date: 'March 2, 2023',
        details: 'We developed a platform using secure payment gateways and fast loading times.',
      },
    ],
    SEO: [
      {
        title: 'SEO Boost Strategy',
        description: 'Improving ranking through SEO best practices',
        image: SEOImage,
        date: 'January 10, 2023',
        details: 'We improved our client\'s search engine ranking through comprehensive SEO strategies.',
      },
    ],
    Databases: [
      {
        title: 'Cloud Database Migration',
        description: 'Seamless transition to cloud-based databases',
        image: DatabaseImage,
        date: 'August 22, 2022',
        details: 'We ensured zero downtime and enhanced data security with our migration services.',
      },
    ],
    'AI Projects': [
      {
        title: 'AI Tools Suite',
        description: 'Cutting-edge AI tools for business optimization',
        image: AIToolsImage,
        date: 'June 30, 2023',
        details: 'We built an AI tools suite to optimize business operations and streamline workflows.',
      },
      {
        title: 'Custom Chatbot Solution',
        description: 'AI-powered chatbot for enhanced customer support',
        image: ChatBotImage,
        date: 'July 15, 2023',
        details: 'This project involved creating a custom AI-powered chatbot to improve customer support.',
      },
    ],
  };

  return (
    <section className="bg-slate-50 py-12">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="flex items-center justify-center pb-4">
          <img src={ShorelineLogo} alt="Shoreline Logo" className="h-16 w-20 md:h-20 md:w-24 mr-4" />
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Portfolio</h2>
          <img src={ShorelineLogo} alt="Shoreline Logo" className="h-16 w-20 md:h-20 md:w-24 ml-4 transform scale-x-[-1]" />
        </div>
        <div className="text-center mb-8">
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">Explore our work across various domains, including Websites, Web Apps, E-Commerce, SEO, Databases, and AI Projects.</p>
        </div>
        <hr className="pb-8 w-full border-t-2 border-gray-300 " />

        {/* Categories */}
        {Object.keys(categorizedProjects).map((category) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{category}</h3>
            <hr className="pb-8 w-full border-t-2 border-gray-300 " />

            {/* Carousel */}
            <div className="relative px-8">
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={false}
                arrows={true}
                containerClass="p-12 "
                itemClass="px-4" // Adds padding between the items
                customLeftArrow={
                    <button
                      className="absolute left-[0px] top-1/2 transform -translate-y-1/2 bg-gray-500 text-white rounded-full p-3 hover:bg-cyan-500 transition-colors duration-300"
                      aria-label="Previous"
                    >
                      ←
                    </button>
                  }
                  customRightArrow={
                    <button
                      className="absolute right-[0px] top-1/2 transform -translate-y-1/2 bg-gray-500 text-white rounded-full p-3 hover:bg-cyan-500 transition-colors duration-300"
                      aria-label="Next"
                    >
                      →
                    </button>
                  }
                >
                {categorizedProjects[category].map((project, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-md rounded-lg w-80 cursor-pointer hover:shadow-xl transition-shadow duration-300"
                    onClick={() => setSelectedProject(project)}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full mb-2">
                        {category}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-2">{project.description}</p>
                      <p className="text-gray-500 text-sm">Completed on {project.date}</p>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        ))}

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 max-w-lg mx-auto shadow-lg">
              <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-48 object-cover mb-4 rounded" />
              <p className="text-gray-700 mb-4">{selectedProject.details}</p>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
                <hr className="pb-8 w-full border-t-2 border-gray-300 " />

      </div>

    </section>
  );
};

export default PortfolioHome;
