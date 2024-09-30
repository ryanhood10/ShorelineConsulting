import React, { useState } from 'react';
import WebAppImage from '../assets/flowchart.webp';
import DatabaseImage from '../assets/Databases.png';

import btcBayWebsite from '../assets/websitePics/btcBayWebsite.png';
import SeaverMarketing1 from '../assets/PortfolioPictures/SeaverHeader.png';
// import TrashHaul from '../assets/pictures/NashTrashHaul.png';
import PMTwebsite from '../assets/pictures/PMTwebsite.png';
import ShorelineLogo from '../assets/PalmTreeTransparent.png';
import BondsSouthEastSite from '../assets/websitePics/BondsSoutheastSite.png';
import ModelMaker from '../assets/websitePics/3DModelSite.png';
import CreativeColoringSite from '../assets/websitePics/CreativeColoring.png';
import VincentPeachSite from '../assets/websitePics/VincentPeachSite.png';
import ShopifyConversion from '../assets/websitePics/ShopifyConversion5.png';
import GoogleA from '../assets/websitePics/GoogleA4.png';
import ChatbotHeader from '../assets/PortfolioPictures/BitcoinBayChatbotHeader.webp'; 
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const PortfolioHome = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Adjusted responsive settings for the carousel to handle various screen sizes
  const responsive = {
    mobile: {
      breakpoint: { max: 768, min: 0 }, // Adjusted breakpoint to match Tailwind's small screens
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1023, min: 768 }, // Tailwind's medium screens (tablet)
      items: 2,
    },
    desktop: {
      breakpoint: { max: 4000, min: 1024 }, // Tailwind's large screens
      items: 3,
    },
  };

  // Portfolio projects data categorized
  const categorizedProjects = {
    'Landing Pages': [
      {
        title: 'Bonds Southeast Inc',
        description: 'A modern website that reduces friction in the bonds industry',
        image: BondsSouthEastSite,
        date: '2023',
        details: 'We revitalized Bonds Southeast Inc\'s website, bringing it to the forefront of modern design with improved user experience and SEO-optimized content.',
        link: '/Portfolio/bonds-southeast',
      },
      {
        title: 'Seaver Marketing Group',
        description: 'A professional marketing website that funnels clients to book meetings',
        image: SeaverMarketing1,
        date: '2023',
        details: 'We crafted a conversion-focused website for Seaver Marketing Group, optimized with SEO and analytics.',
        link: '/Portfolio/seaver-marketing-group',
      },
      // {
      //   title: 'Nash Trash Haul',
      //   description: 'A Dynamic Landing Page',
      //   image: TrashHaul,
      //   date: '2023',
      //   details: 'We created a visually appealing and SEO-optimized website for Nashville Trash Haul.',
      //   link: '/Portfolio/pmt-site',
      // },
      {
        title: 'PMT Site',
        description: 'Optimized Landing Page for Subcontracting Business',
        image: PMTwebsite,
        date: '2023',
        details: 'We crafted a website with SEO and Google Analytics integration, helping the company grow their online presence.',
        link: '/Portfolio/pmt-site',
      },
    ],
    'Web Apps': [
      {
        title: 'Saas Shell Page',
        description: 'A professional Software as a Service Landing page. Optimized with Stripe to manage subscription services',
        image: WebAppImage,
        date: 'May 5, 2023',
        details: `Performance optimized, Subscription Service Ready. Let us be the launch pad to ensure your Saas Product reaches its potential. You can focus on your application, we will handle the rest!`,
        link: '/Portfolio/saas-shell',
      },
      {
        title: 'Bitcoin Bay',
        description: 'An optimized website fully equipped with customer tools for success.',
        image: btcBayWebsite,
        date: '2023',
        details: 'We designed a website that concisely communicates information and funnels clients to sign-up for the application; while storing & collecting their information for further marketing efforts.',
        link: '/Portfolio/bitcoin-bay',
      },
    ],
    'E-Commerce Sites': [
      {
        title: 'Creative Coloring',
        description: 'An expressive e-commerce website',
        image: CreativeColoringSite,
        date: 'March 2, 2023',
        details: 'We developed a platform using secure payment gateways and fast loading times.',
        link: '/Portfolio/creative-coloring',
      },
      {
        title: 'Vincent Peach',
        description: 'A luxury e-commerce experience',
        image: VincentPeachSite,
        date: 'March 2, 2023',
        details: 'We redesigned a site that gives users a high-end shopping experience while directing them towards sales.',
        link: '/Portfolio/vincent-peach',
      },
    ],
    'CRO & SEO': [
      {
        title: 'Product Listing SEO & CRO',
        description: 'Improving Google Ranking through AI natural language & relevant keyword tags',
        image: ShopifyConversion,
        date: 'January 10, 2023',
        details: 'We improved our client\'s search engine ranking through comprehensive SEO strategies.',
        link: '/Portfolio/product-listing-optimization',
      },
      {
        title: 'SEO Boost Strategy',
        description: 'Improving ranking through SEO best practices',
        image: GoogleA,
        date: 'January 10, 2023',
        details: 'We improved our client\'s search engine ranking through comprehensive SEO strategies.',
        link: '/Portfolio/seo-boost-strategy',
      },
    ],
    Databases: [
      {
        title: 'Cloud Database Manager',
        description: 'A Customized Data Solution',
        image: DatabaseImage,
        date: 'August 22, 2022',
        details: 'Securily hosted on the cloud, we ensure that your data is always protected and available. Get a custom-built interface to manage your data.',
        link: '/Portfolio/database-manager',
      },
    ],
    'AI Projects': [
      {
        title: 'Automating Customer Service with AI',
        description: 'Cutting-edge AI chatbot solution for managing new clients',
        image: ChatbotHeader,
        date: 'June 30, 2023',
        details: 'We built an AI tools suite to optimize business operations and streamline workflows.',
        link: '/Portfolio/bitcoin-bay-chatbot',
      },
      {
        title: '3D Model Maker- LumaAI',
        description: 'Boost your marketing efforts by incorporating 3D models of your products',
        image: ModelMaker,
        date: 'July 15, 2023',
        details: `This project involved creating a custom interface to interact with Luma AI's 3D Model API. As a user, you may upload a video of any object scan - resulting in a 3D model being produced in just a few short minutes. Please read "Best Practices" page for instructions on the video scan. `,
        link: '/Portfolio/3d-model-maker',
      },
    ],
  };

  return (
    <section className="bg-slate-50 py-12">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="flex items-center justify-center pb-4">
          <img src={ShorelineLogo} alt="Shoreline Logo" className="h-16 w-20 md:h-20 md:w-24 mr-4" />
          {/* <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">Portfolio</h1> */}
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Projects / 
           <br className='block sm:hidden'/>
           Strategies / 
           <br className='block sm:hidden'/>

             Case Studies</h2>
          <img src={ShorelineLogo} alt="Shoreline Logo" className="h-16 w-20 md:h-20 md:w-24 ml-4 transform scale-x-[-1]" />
        </div>
        <div className="text-center mb-8">
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Explore our work across various domains, including Websites, Web Apps, E-Commerce, SEO, Databases, and AI Projects.
          </p>
        </div>

        {/* Categories */}
        {Object.keys(categorizedProjects).map((category) => (
          <div key={category} className="mb-12">
            <hr className="mb-8" />
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{category}</h3>
            {/* Carousel */}
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={false}
              arrows={true}
              itemClass="px-4"
              containerClass="p-4"
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
                  className="bg-white shadow-md rounded-lg mx-auto cursor-pointer hover:shadow-xl transition-shadow duration-300 w-[300px] h-[350px] flex flex-col"
                  onClick={() => setSelectedProject({ ...project, category })}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-4 flex-1 flex flex-col justify-between overflow-hidden">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 truncate">{project.title}</h3>
                    <p className="text-gray-600 mb-2 flex-1 overflow-hidden text-ellipsis">{project.description}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        ))}

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 max-w-lg mx-auto shadow-lg">
              <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-48 object-contain mb-4 rounded" />
              <p className="text-gray-700 mb-4">{selectedProject.details}</p>
              <p className="text-gray-700 mb-4">
                To read more,{' '}
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-500"
                >
                  click here
                </a>.
              </p>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioHome;
