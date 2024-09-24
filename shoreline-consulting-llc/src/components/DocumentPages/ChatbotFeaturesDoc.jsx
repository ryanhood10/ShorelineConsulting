import React from "react";
import Picture1 from '../../assets/DocumentPictures/ChatbotLandscape1.webp';
import Picture2 from '../../assets/DocumentPictures/ChatbotLandscape2.webp';
import Picture3 from '../../assets/DocumentPictures/ChatbotLandscape3.webp';

const ChatbotDocument = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center py-12">
      {/* Floating Document Container */}
      <div className="bg-gray-900 rounded-2xl text-white border-gray-600 border-2 max-w-5xl w-full px-8 py-12 md:px-16 lg:px-24">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-12">
          Shoreline Business Solutions Chatbots:
          <br/>
           The Future of Customer Service
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
            <ul className="pl-6 leading-relaxed space-y-3 text-lg">
              <li><strong>Instant Gratification:</strong> Available 24/7 to answer client questions in real-time, enhancing customer satisfaction.</li>
              <li><strong>Targeted Marketing:</strong> Collect valuable data such as emails, phone numbers, and client preferences, improving marketing strategies.</li>
              <li><strong>Data Insights:</strong> Use customer behavior data to refine business strategies, and access chat histories to better understand clients’ needs.</li>
              <li><strong>Speak Their Language:</strong> Offer multilingual chatbots to cater to a global audience, enhancing accessibility and engagement.</li>
              <li><strong>Seamless Integration:</strong> Easily integrate chatbots with existing platforms using simple copy-paste implementation, ensuring no disruption to your website operations.</li>
            </ul>
          </div>
        </section>

        <hr className="border-t border-gray-600 my-8" />

        {/* Section 2: Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-cyan-500 mb-6">Key Features</h2>
          <div className="space-y-8">
            {/* Image 2 */}
            <div className="w-3/5 rounded-xl mx-auto mb-6">
              <img
                src={Picture2}
                alt="Chatbot Key Features"
                className="w-full shadow-xl rounded-2xl h-auto object-contain"
              />
            </div>
            <ul className="pl-6 leading-relaxed space-y-3 text-lg">
              <li><strong>Operational Efficiency:</strong> Automate routine tasks such as appointment bookings and basic inquiries, freeing up your team for higher-value activities.</li>
              <li><strong>Enhanced Engagement:</strong> Provide immediate responses to common customer questions, boosting engagement and customer satisfaction.</li>
              <li><strong>Custom Solutions:</strong> Custom-train chatbots to integrate seamlessly with your existing booking systems, CRM, or other essential business tools.</li>
              <li><strong>Future-Proofing:</strong> Save chatbot configurations in a JSON format, allowing easy updates and integration into new and emerging AI technologies.</li>
              <li><strong>Data Storage & Insights:</strong> Securely store training data and access comprehensive analytics reports to enhance chatbot performance over time.</li>
            </ul>
          </div>
        </section>

        <hr className="border-t border-gray-600 my-8" />

        {/* Section 3: Getting Started */}
        <section>
          <h2 className="text-3xl font-semibold text-cyan-500 mb-6">Getting Started with Your Custom AI Chatbot</h2>
          <div className="space-y-8">
            {/* Image 3 */}
            <div className="w-3/5 mx-auto mb-6">
              <img
                src={Picture3}
                alt="Chatbot Getting Started"
                className="w-full shadow-xl rounded-2xl h-auto object-contain"
              />
            </div>
            <h3 className="text-2xl font-semibold">Steps to Get Started</h3>
            <ol className="list-decimal pl-6 text-gray-300 leading-relaxed space-y-3 text-lg">
              <li><strong className="text-white">Send Us Your Requirements:</strong> Provide an overview of your vision, desired features, and improvements to your customer service process.</li>
              <li><strong className="text-white">Initial Meeting & Discussion:</strong> Discuss frequently asked questions, preferred chatbot tone, and any current service pain points.</li>
              <li><strong className="text-white">Review Proposal & Agreement:</strong> Receive a detailed proposal outlining the project scope, features, and timeline. Upon approval, development begins.</li>
              <li><strong className="text-white">Development & Data Collection:</strong> Train the chatbot using your specific data, continuously collecting feedback to optimize its performance.</li>
              <li><strong className="text-white">Ongoing Improvements:</strong> Post-launch, we provide ongoing support, optimization, and marketing enhancements to improve chatbot interactions.</li>
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
