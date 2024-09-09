import React from 'react';
import ChatbotDesignProcess from "../assets/ChatbotRoadmap.png";
import { FaEnvelope, FaComments, FaFileSignature, FaCogs, FaChartLine, FaRocket } from 'react-icons/fa'; // Added Rocket icon for the CTA

const ChatbotBenefits = () => {
  return (
    <div>
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Getting Started with Your Custom AI Chatbot
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Start building your personalized AI chatbot in a few simple steps. It's quick, efficient, and tailored to your business.
          </p>
        </div>

        {/* Steps Section - now with 6 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Step 1: Send Requirements */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <FaEnvelope className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800">Step 1: Send Us Your Requirements</h3>
            <p className="mt-4 text-gray-600 text-center">
              Begin by sending us a message outlining your vision for the chatbot, including the features you want, customer service improvements, and tone preferences.
            </p>
          </div>

          {/* Step 2: Initial Meeting */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <FaComments className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800">Step 2: Initial Meeting & Discussion</h3>
            <p className="mt-4 text-gray-600 text-center">
              During the first meeting, we will discuss common customer questions, your chatbot’s tone, and any specific pain points with your current customer service.
            </p>
          </div>

          {/* Step 3: Proposal & Agreement */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <FaFileSignature className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800">Step 3: Review Proposal & Agreement</h3>
            <p className="mt-4 text-gray-600 text-center">
              We will follow up with a detailed proposal outlining the scope, features, and timeline of the project. Once approved, we start chatbot development.
            </p>
          </div>

          {/* Step 4: Development & Data Collection */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <FaCogs className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800">Step 4: Development & Data Collection</h3>
            <p className="mt-4 text-gray-600 text-center">
              We will train the chatbot based on your specific data and customer interactions, and continuously collect data to optimize performance.
            </p>
          </div>

          {/* Step 5: Optimization & Upsells */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <FaChartLine className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800">Step 5: Ongoing Improvements</h3>
            <p className="mt-4 text-gray-600 text-center">
              After the chatbot is live, we offer continuous support, optimization, and marketing automation options to further improve customer interactions.
            </p>
          </div>

          {/* Call to Action - Step 6 */}
          <div className="flex flex-col items-center p-6 bg-slate-300 rounded-lg shadow-md ">
            <FaRocket className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800">Get Started Today!</h3>
            <p className="mt-4 text-gray-600 text-center">
              Ready to build your custom AI chatbot? Contact us today and let's get started!
            </p>
            <a
            href='/Contact'>
            <button 
            className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-400 transition duration-300 mt-6"
            >
              Contact Us
            </button>
            </a>

          </div>
        </div>
        </div>
     
      </div>
      <div className="bg-gray-200 py-6">

{/* Example Process Image */}
<h2 className="text-gray-900 text-3xl font-bold mt-8">Development Roadmap</h2>
<div className="flex justify-center mt-8">
  <img
    src={ChatbotDesignProcess}
    alt="AI Chatbot Design Process"
    className="w-[100vh] rounded-lg shadow-lg"
  />
</div>
</div>
    </div>
  );
};

export default ChatbotBenefits;
