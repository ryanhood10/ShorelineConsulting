import React from "react";
import Picture1 from '../../assets/DocumentPictures/ChatbotLandscape1.webp';
import Picture2 from '../../assets/DocumentPictures/ChatbotLandscape2.webp';
import Picture3 from '../../assets/DocumentPictures/ChatbotLandscape3.webp';

const ChatbotDocument = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center py-12">
      {/* Floating Document Container */}
      <div className=" bg-gray-900  rounded-2xl text-white border-gray-600 border-2 max-w-5xl w-full px-8 py-12 md:px-16 lg:px-24">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-12 ">
          Shoreline Business Solutions Chatbots: The Future of Customer Service
        </h1>

        {/* Section 1: Use Cases */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-cyan-500 mb-6">Use Cases</h2>
          <div className="space-y-8">
            {/* Image 1 */}
            <div className="w-3/5 mx-auto mb-6">
              <img
                src={Picture1}
                alt="Chatbot Use Cases"
                className="w-full h-auto shadow-xl rounded-2xl object-contain"
              />
            </div>
            <ul className=" pl-6 leading-relaxed space-y-3 text-lg">
              <li><strong>Instant Gratification:</strong> Available 24/7 to answer client questions in real-time.</li>
              <li><strong>Targeted Marketing:</strong> Collect valuable data like emails, phone numbers, and client preferences.</li>
              <li><strong>Data Insights:</strong> Use customer behavior data to improve strategies, and view chat history to understand clients’ needs.</li>
              <li><strong>Speak Their Language:</strong> Create chatbots in multiple languages to serve a broader audience.</li>
              <li><strong>Seamless Integration:</strong> Simple copy-paste implementation with no disruption to your website.</li>
            </ul>
          </div>
        </section>

        {/* Section 2: Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-cyan-500  mb-6">Key Features</h2>
          <div className="space-y-8">
            {/* Image 2 */}
            <div className="w-3/5 rounded-xl mx-auto mb-6">
              <img
                src={Picture2}
                alt="Chatbot Key Features"
                className="w-full shadow-xl rounded-2xl h-auto object-contain"
              />
            </div>
            <ul className=" pl-6 leading-relaxed space-y-3 text-lg">
              <li><strong>Operational Efficiency:</strong> Automate routine tasks like appointment bookings and basic inquiries, so your team can focus on what they do best.</li>
              <li><strong>Enhanced Engagement:</strong> Provide immediate responses to customers’ most common questions, keeping them engaged and satisfied.</li>
              <li><strong>Custom Solutions:</strong> We’ll custom-train your chatbot to integrate with your existing booking systems, CRM, or other tools.</li>
              <li><strong>Future-Proofing:</strong> Save a json document of you chatbot. Allowing you to upload your conversation tree and data into new emerging AI technologies.</li>
              <li><strong>Data Storage & Insights:</strong> Easily store chatbot training data and access detailed analytics reports to improve performance.</li>
            </ul>
          </div>
        </section>

        {/* Section 3: Getting Started */}
        <section>
          <h2 className="text-3xl font-semibold text-cyan-500  mb-6">Getting Started with Your Custom AI Chatbot</h2>
          <div className="space-y-8">
            {/* Image 3 */}
            <div className="w-3/5 mx-auto mb-6">
              <img
                src={Picture3}
                alt="Chatbot Getting Started"
                className="w-full shadow-xl rounded-2xl h-auto object-contain"
              />
            </div>
            <h3 className="text-2xl font-semibold"> Steps to get started</h3>
            <ol className="list-decimal pl-6 text-gray-300 leading-relaxed space-y-3 text-lg">
              <li><strong className="text-white">Send Us Your Requirements:</strong>   Begin by sending us a message outlining your vision for the chatbot, including the features you want, customer service improvements, and tone preferences.</li>
              <li><strong className="text-white">Initial Meeting & Discussion:</strong>  During the first meeting, we will discuss common customer questions, your chatbot’s tone, and specific pain points with your current customer service.</li>
              <li><strong className="text-white">Review Proposal & Agreement:</strong>   We will follow up with a detailed proposal outlining the scope, features, and timeline of the project. Once approved, we begin development.</li>
              <li><strong className="text-white">Development & Data Collection:</strong>   We will train the chatbot based on your data and customer interactions, continuously collecting data to optimize performance.</li>
              <li><strong className="text-white">Ongoing Improvements:</strong>  After launch, we offer continuous support, optimization, and marketing automation to further improve interactions.</li>
            </ol>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-semibold text-cyan-500 mb-6">Get Started Today!</h2>
          <p className="mb-6 text-lg">Ready to build your custom AI chatbot? Contact us today and let's get started!</p>
          <a
            href="/Contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition duration-300"
          >
            Contact Us
          </a>
        </div>
        <div className="text-center mt-6">
            <p><a className="text-blue-500 hover:text-blue-300" href="/Solutions/ai-agents">Learn More</a> about our AI Agent Solutions</p>
</div>
      </div>
    </div>
  );
};

export default ChatbotDocument;
