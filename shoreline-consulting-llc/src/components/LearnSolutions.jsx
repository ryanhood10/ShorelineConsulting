import React, { useState } from 'react';
import { FaFileAlt } from 'react-icons/fa'; // Importing document icon

const LearnSolutions = () => {
  const [activeSection, setActiveSection] = useState('websitebuilds');

  const sections = {
    websitebuilds: {
      title: 'Website Builds',
      content: (
        <div className="flex flex-col lg:flex-row justify-around items-center lg:space-x-4 space-y-6 lg:space-y-0">
          <div className="text-center p-4 flex-1">
            <a
              href="/docs/website-builds"
              className="flex flex-col items-center space-y-4 group"
            >
              <FaFileAlt className="text-blue-400 text-4xl group-hover:text-cyan-500 transition duration-300" />
              <h3 className="text-xl font-semibold text-white group-hover:text-cyan-500 transition duration-300">
                Landing Pages
              </h3>
              <p className="text-gray-400 text-sm group-hover:text-cyan-500 transition duration-300">
                Crafting high-converting, future-proof websites.
              </p>
            </a>
          </div>

          <div className="lg:w-px lg:h-24 bg-gray-500 hidden lg:block"></div>

          <div className="text-center p-4 flex-1">
            <a
              href="/docs/website-builds/e-commerce"
              className="flex flex-col items-center space-y-4 group"
            >
              <FaFileAlt className="text-blue-400 text-4xl group-hover:text-cyan-500 transition duration-300" />
              <h3 className="text-xl font-semibold text-white group-hover:text-cyan-500 transition duration-300">
                E-commerce Sites
              </h3>
              <p className="text-gray-400 text-sm group-hover:text-cyan-500 transition duration-300">
                Secure and scalable online stores.
              </p>
            </a>
          </div>

          <div className="lg:w-px lg:h-24 bg-gray-500 hidden lg:block"></div>

          <div className="text-center p-4 flex-1">
            <a
              href="/docs/website-builds/web-apps"
              className="flex flex-col items-center space-y-4 group"
            >
              <FaFileAlt className="text-blue-400 text-4xl group-hover:text-cyan-500 transition duration-300" />
              <h3 className="text-xl font-semibold text-white group-hover:text-cyan-500 transition duration-300">
                Web Applications
              </h3>
              <p className="text-gray-400 text-sm group-hover:text-cyan-500 transition duration-300">
                Our technology stack and process.
              </p>
            </a>
          </div>
        </div>
      ),
    },
    chatbots: {
      title: 'AI Agents',
      content: (
        <div className="flex flex-col lg:flex-row justify-around items-center lg:space-x-4 space-y-6 lg:space-y-0">
          <div className="text-center p-4 flex-1">
            <a
              href="/docs/ai-agents"
              className="flex flex-col items-center space-y-4 group"
            >
              <FaFileAlt className="text-blue-400 text-4xl group-hover:text-cyan-500 transition duration-300" />
              <h3 className="text-xl font-semibold text-white group-hover:text-cyan-500 transition duration-300">
                Use Cases
              </h3>
              <p className="text-gray-400 text-sm group-hover:text-cyan-500 transition duration-300">
                How AI agents transform customer service and automation.
              </p>
            </a>
          </div>

          <div className="lg:w-px lg:h-24 bg-gray-500 hidden lg:block"></div>

          <div className="text-center p-4 flex-1">
            <a
              href="/docs/ai-agents"
              className="flex flex-col items-center space-y-4 group"
            >
              <FaFileAlt className="text-blue-400 text-4xl group-hover:text-cyan-500 transition duration-300" />
              <h3 className="text-xl font-semibold text-white group-hover:text-cyan-500 transition duration-300">
                Features
              </h3>
              <p className="text-gray-400 text-sm group-hover:text-cyan-500 transition duration-300">
                Key features of AI chatbots for business growth.
              </p>
            </a>
          </div>

          <div className="lg:w-px lg:h-24 bg-gray-500 hidden lg:block"></div>

          <div className="text-center p-4 flex-1">
            <a
              href="/docs/ai-agents"
              className="flex flex-col items-center space-y-4 group"
            >
              <FaFileAlt className="text-blue-400 text-4xl group-hover:text-cyan-500 transition duration-300" />
              <h3 className="text-xl font-semibold text-white group-hover:text-cyan-500 transition duration-300">
                Getting Started
              </h3>
              <p className="text-gray-400 text-sm group-hover:text-cyan-500 transition duration-300">
                Steps to implement your custom AI agent.
              </p>
            </a>
          </div>
        </div>
      ),
    },
    databasemanagement: {
      title: 'Database Management',
      content: (
        <div className="flex flex-col lg:flex-row justify-around items-center lg:space-x-4 space-y-6 lg:space-y-0">
          <div className="text-center p-4 flex-1">
            <a
              href="/docs/databases/database-selection"
              className="flex flex-col items-center space-y-4 group"
            >
              <FaFileAlt className="text-blue-400 text-4xl group-hover:text-cyan-500 transition duration-300" />
              <h3 className="text-xl font-semibold text-white group-hover:text-cyan-500 transition duration-300">
                Database Selection
              </h3>
              <p className="text-gray-400 text-sm group-hover:text-cyan-500 transition duration-300">
                Choosing the right database for your business.
              </p>
            </a>
          </div>

          <div className="lg:w-px lg:h-24 bg-gray-500 hidden lg:block"></div>

          <div className="text-center p-4 flex-1">
            <a
              href="/docs/databases/management-interfaces"
              className="flex flex-col items-center space-y-4 group"
            >
              <FaFileAlt className="text-blue-400 text-4xl group-hover:text-cyan-500 transition duration-300" />
              <h3 className="text-xl font-semibold text-white group-hover:text-cyan-500 transition duration-300">
                Management Interfaces
              </h3>
              <p className="text-gray-400 text-sm group-hover:text-cyan-500 transition duration-300">
                Manage your own database with a custom solution.
              </p>
            </a>
          </div>
        </div>
      ),
    },
    seo: {
      title: 'Search Engine Optimization',
      content: (
        <div className="flex flex-col lg:flex-row justify-around items-center lg:space-x-4 space-y-6 lg:space-y-0">
          <div className="text-center p-4 flex-1">
            <a
              href="/docs/seo/what-is-seo"
              className="flex flex-col items-center space-y-4 group"
            >
              <FaFileAlt className="text-blue-400 text-4xl group-hover:text-cyan-500 transition duration-300" />
              <h3 className="text-xl font-semibold text-white group-hover:text-cyan-500 transition duration-300">
                What is SEO
              </h3>
              <p className="text-gray-400 text-sm group-hover:text-cyan-500 transition duration-300">
                Understand the basics of SEO and how it works.
              </p>
            </a>
          </div>

          <div className="lg:w-px lg:h-24 bg-gray-500 hidden lg:block"></div>

          <div className="text-center p-4 flex-1">
            <a
              href="/docs/seo/tools-and-strategies"
              className="flex flex-col items-center space-y-4 group"
            >
              <FaFileAlt className="text-blue-400 text-4xl group-hover:text-cyan-500 transition duration-300" />
              <h3 className="text-xl font-semibold text-white group-hover:text-cyan-500 transition duration-300">
                SEO Tools & Strategies
              </h3>
              <p className="text-gray-400 text-sm group-hover:text-cyan-500 transition duration-300">
                Advanced tools and strategies for better Google rankings.
              </p>
            </a>
          </div>
        </div>
      ),
    },
    cro: {
      title: 'Conversion Rate Optimization',
      content: (
        <div className="flex flex-col lg:flex-row justify-around items-center lg:space-x-4 space-y-6 lg:space-y-0">
          <div className="text-center p-4 flex-1">
            <a
              href="/docs/cro/what-is-cro"
              className="flex flex-col items-center space-y-4 group"
            >
              <FaFileAlt className="text-blue-400 text-4xl group-hover:text-cyan-500 transition duration-300" />
              <h3 className="text-xl font-semibold text-white group-hover:text-cyan-500 transition duration-300">
                What is CRO
              </h3>
              <p className="text-gray-400 text-sm group-hover:text-cyan-500 transition duration-300">
                Fundamentals of Conversion Rate Optimization.
              </p>
            </a>
          </div>

          <div className="lg:w-px lg:h-24 bg-gray-500 hidden lg:block"></div>

          <div className="text-center p-4 flex-1">
            <a
              href="/docs/cro/strategies"
              className="flex flex-col items-center space-y-4 group"
            >
              <FaFileAlt className="text-blue-400 text-4xl group-hover:text-cyan-500 transition duration-300" />
              <h3 className="text-xl font-semibold text-white group-hover:text-cyan-500 transition duration-300">
                CRO Strategies
              </h3>
              <p className="text-gray-400 text-sm group-hover:text-cyan-500 transition duration-300">
                Proven strategies to maximize your conversion rates.
              </p>
            </a>
          </div>
        </div>
      ),
    },
  };

  return (
    <section className="bg-gray-900 text-white relative">
      {/* Heading Section */}
      <div className="text-center max-w-7xl mx-auto p-8">
        <h4 className="text-lg lg:text-xl text-cyan-500 mt-4">DOCS</h4>
        <p className="text-md lg:text-lg text-gray-500">SEARCH THROUGH OUR DOCUMENTS</p>

        <hr className="mt-8 w-full border-t-2 border-gray-300 hidden lg:block" />
      </div>

      {/* Mobile-friendly Header for Navigation */}
      <div className='px-4'>
      <div className="lg:hidden px-4 py-4 bg-gray-800 rounded-lg  text-center">
        <div className="flex justify-around space-x-4">
          {Object.keys(sections).map((sectionKey) => (
            <span
              key={sectionKey}
              onClick={() => setActiveSection(sectionKey)}
              className={`cursor-pointer text-sm transition duration-300 ${
                activeSection === sectionKey ? 'text-cyan-500' : 'text-gray-300 hover:text-cyan-500'
              }`}
            >
              {sections[sectionKey].title}
            </span>
          ))}
        </div>
      </div>
      </div>

      <div className="container max-w-7xl mx-auto px-6 lg:px-12 py-16 grid lg:grid-cols-4 gap-8">
        {/* Aside with navigation for larger screens */}
        <aside className="hidden lg:block sticky top-24 col-span-1 space-y-4 bg-gray-800 p-6 rounded-lg">
          {Object.keys(sections).map((sectionKey) => (
            <h4
              key={sectionKey}
              className={`cursor-pointer hover:text-blue-400 transition duration-300 ${
                activeSection === sectionKey ? 'text-blue-400' : ''
              }`}
              onClick={() => setActiveSection(sectionKey)}
            >
              {sections[sectionKey].title}
            </h4>
          ))}
        </aside>

        {/* Main content */}
        <div className="col-span-3 space-y-6">
          <section>
            <h2 className="text-2xl font-bold">{sections[activeSection].title}</h2>
            <div className="mt-4">{sections[activeSection].content}</div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default LearnSolutions;
