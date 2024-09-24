import React from "react";
import { Link } from "react-router-dom"; // Ensure react-router-dom is installed if using React Router
import ChatbotHeader from '../../assets/PortfolioPictures/BitcoinBayChatbotHeader.webp'; 
import ConversationTree from '../../assets/PortfolioPictures/ConversationTree.webp'; 
import ChatbotDemo from '../../assets/PortfolioPictures/ChatbotDemo.webp'; 
import { FaComments, FaChartLine, FaCogs, FaSyncAlt } from "react-icons/fa"; // Icons for each section
import Logo from '../../assets/PalmTreeTransparent.png';

const PortfolioBitcoinBayChatbot = () => {
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
            Bitcoin Bay Chatbot - Automating Customer Support
          </h1>
          <p className="text-gray-600 text-lg">
            Enhancing Bitcoin Bay's customer service through a custom-built AI chatbot that automates support, reduces service tickets, and boosts engagement.
          </p>
          <img
            src={ChatbotHeader}
            alt="Bitcoin Bay Chatbot Header"
            className="w-full rounded-md shadow-lg mt-8"
          />
        </header>

        {/* Portfolio Body */}
        <section className="space-y-16">
          {/* Project Overview */}
          <article className="space-y-6">
            <p className="text-lg text-gray-800">
              Bitcoin Bay needed a solution to handle their increasing customer service demand efficiently. We developed a custom AI chatbot designed to automate customer inquiries, manage common account-related questions, and provide real-time support, significantly reducing the volume of service tickets and enhancing overall user experience.
            </p>
          </article>

          <hr className="mb-8" />

          {/* Section 1: Understanding Requirements and Initial Development */}
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaComments className="mr-2" /> Understanding Requirements and Initial Development
            </h2>
            <p className="text-lg text-gray-800">
              Our process began with a thorough consultation with Bitcoin Bay’s team, including our customer service specialists, to identify common pain points and key questions from users. We developed a conversation tree to map out the chatbot's flow, ensuring that it could handle typical inquiries and provide accurate, helpful responses.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <img
                src={ConversationTree}
                alt="Chatbot Conversation Tree"
                className="w-full rounded-md shadow-lg"
              />
              <ul className="list-disc ml-6 text-lg space-y-2">
                <li>Consulted with customer service specialists to understand frequent user issues.</li>
                <li>Created a detailed conversation tree to guide chatbot development.</li>
                <li>Designed the initial demo based on Bitcoin Bay’s specific needs and user queries.</li>
              </ul>
            </div>
          </article>

          <hr className="mb-8" />

          {/* Section 2: Demo, Testing, and Iteration */}
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaSyncAlt className="mr-2" /> Demo, Testing, and Iteration
            </h2>
            <p className="text-lg text-gray-800">
              After creating the initial chatbot demo, we tested it extensively with Bitcoin Bay’s team to identify any gaps or additional functionalities needed. We refined the bot’s capabilities, adding features such as CRM integration and real-time data collection to further enhance its performance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <img
                src={ChatbotDemo}
                alt="Chatbot Demo"
                className="w-full mx-auto rounded-md shadow-lg"
              />
              <ul className="list-disc ml-6 text-lg space-y-2">
                <li>Conducted testing sessions to ensure the chatbot met Bitcoin Bay's requirements.</li>
                <li>Added additional layers of interaction to handle more complex queries.</li>
                <li>Integrated CRM systems for seamless data management and customer interaction tracking.</li>
              </ul>
            </div>
          </article>

          <hr className="mb-8" />

          {/* Section 3: Deployment and Continuous Optimization */}
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaChartLine className="mr-2" /> Deployment and Continuous Optimization
            </h2>
            <p className="text-lg text-gray-800">
              Following successful testing, the chatbot was deployed on Bitcoin Bay’s platform. We provided continuous monitoring and optimization during the initial months, ensuring the bot effectively managed inquiries, collected valuable data insights, and improved over time. The chatbot helped in reducing customer service response times, resolving routine queries instantly, and even upselling relevant products.
            </p>
            <ul className="list-disc ml-6 text-lg space-y-2">
              <li>Launched the chatbot with a focus on enhancing customer engagement and satisfaction.</li>
              <li>Regularly monitored chatbot performance and refined its responses for optimal results.</li>
              <li>Enabled advanced data insights, including conversation analytics and customer behavior tracking.</li>
            </ul>
          </article>

          <hr className="mb-8" />

          {/* Section 4: Benefits of Chatbot Integration */}
<article className="space-y-4">
  <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
    <FaCogs className="mr-2" /> Benefits of Chatbot Integration
  </h2>
  <p className="text-lg text-gray-800">
    The chatbot has become an invaluable asset to Bitcoin Bay, automating routine customer support tasks, collecting customer feedback, and improving overall service efficiency. It allows the team to focus on more complex issues while the bot handles basic inquiries, provides instant gratification for users, and supports the company’s marketing efforts by gathering data and promoting targeted upsells. The chatbot is implemented as an easy-to-install widget that appears as a button on the bottom right of the website, making it simple for visitors to engage without disrupting their browsing experience.
  </p>
  <ul className="list-disc ml-6 text-lg space-y-2">
    <li>Automated routine tasks, reducing the need for manual customer service intervention.</li>
    <li>Improved user engagement with real-time responses and support availability 24/7.</li>
    <li>Collected valuable data on customer interactions to inform business decisions.</li>
    <li>Easy-to-install widget appearing as a chatbot button on the bottom right of the website.</li>
  </ul>
</article>

        </section>

        {/* Conclusion and Call-to-Action */}
        <footer className="mt-16">
          <hr className="mb-8" />
          <p className="text-lg text-gray-800 text-center">
            Bitcoin Bay’s custom chatbot has revolutionized their customer service, providing immediate, efficient support that enhances the overall user experience. With continuous optimization and data-driven insights, the chatbot remains a crucial part of their digital strategy.
            <br/>
          </p>
          <p className="text-lg text-gray-800 text-center mt-4">
            Ready to streamline your customer service with a custom chatbot? Contact Shoreline Business Solutions today to learn how we can help you build a chatbot tailored to your needs.
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

export default PortfolioBitcoinBayChatbot;
