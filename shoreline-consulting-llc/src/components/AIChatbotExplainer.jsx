import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ChatGPTLogo from '../assets/chatgptlogo2.png';
import IBMLogo from '../assets/credentiallogo2.webp';
import ChatbotImage from '../assets/flowchart.webp'; // Adjust the path to the actual image file location

function useVisible(initialVisibility = false) {
  const [isVisible, setIsVisible] = useState(initialVisibility);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return [ref, isVisible];
}

const AIChatbotExplainer = () => {
  const navigate = useNavigate();
  const [emailDivRef, emailDivVisible] = useVisible();
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };
  


  const animationClasses = (isVisible) =>
    `transition-all duration-1000 ease-in-out transform ${
      isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
    }`;

  return (
    <>
      <div className="p-5">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:grid md:grid-cols-3 gap-20 items-center my-12">

                      {/* Customized AI Chatbots section */}
            <div
              ref={emailDivRef}
              className={`space-y-4 ${animationClasses(
                emailDivVisible
              )}`}
            >
              <h1 className="text-2xl sm:text-1xl lg:text-3xl text-gray-900 ">
                Customized AI Chatbots
              </h1>
              <h3>
                Powered by
              </h3>
              <div className="flex flex-row justify-evenly md:grid md:grid-cols-3 gap-10 items-center my-12">
  <img src={ChatGPTLogo} className="w-1/4 md:w-auto" alt="ChatGPT Logo" />
  <p className="font-semibold text-lg"> & </p>
  <img src={IBMLogo} className="w-1/4 md:w-auto" alt="IBM Logo" />
</div>
              <p className="text-md text-gray-700 text-justify">
              Akira Web Solutions builds custom AI chatbots that provide instant, accurate answers to customer questions, 24/7. Tailored to your business, our chatbots improve customer service, automate tasks, and boost marketing efforts. With integrated data analytics, you can track and optimize performance, saving time and reducing costs. Elevate your business with AI-powered efficiency.
              </p>

            </div>

         
         {/* Second MAIN Section */}
             <div className="col-span-2">
      
      {/* Section 1: Introduction */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">
          Why Integrate an AI Chatbot with Us?
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Discover how our AI assistant can automate your business and elevate customer satisfaction.
        </p>
      </div>

      {/* Section 2: Key Features */}
      <div className="grid grid-cols-1 gap-12 items-center">
        <div className="rounded-lg hover:bg-slate-200 p-2">
          <button
            className="flex justify-between items-center w-full text-2xl font-bold text-gray-900  focus:outline-none"
            onClick={() => toggleSection("features")}
          >
            Key Features
            <span>{openSection === "features" ? "−" : "+"}</span>
          </button>
          {openSection === "features" && (
            <ul className="list-disc list-inside space-y-4 text-gray-600 mt-4 transition-opacity duration-500 ease-in">
              <li><strong>Instant Gratification:</strong> Available 24/7 to answer client questions in real-time.</li>
              <li><strong>Targeted Marketing:</strong> Collect valuable data like emails, phone numbers, and client preferences.</li>
              <li><strong>Data Insights:</strong> Use customer behavior data to improve strategies, and view chat history to understand clients’ needs.</li>
              <li><strong>Speak Their Language:</strong> Create chatbots in multiple languages to serve a broader audience.</li>
              <li><strong>Seamless Integration:</strong> Simple copy-paste implementation with no disruption to your website.</li>
            </ul>
          )}
        </div>
      </div>

      {/* Section 3: Benefits */}
      <div className="mt-4 rounded-lg hover:bg-slate-200 p-2">
        <button
          className="flex justify-between items-center w-full text-2xl font-bold text-gray-900 mb-4 focus:outline-none"
          onClick={() => toggleSection("benefits")}
        >
          The Benefits of Our AI Chatbots
          <span>{openSection === "benefits" ? "−" : "+"}</span>
        </button>
        {openSection === "benefits" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4 transition-opacity duration-500 ease-in">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-gray-700">Operational Efficiency</h4>
                <p className="text-gray-600">
                  Automate routine tasks like appointment bookings and basic inquiries, so your team can focus on what they do best.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-700">Enhanced Engagement</h4>
                <p className="text-gray-600">
                  Provide immediate responses to customers’ most common questions, keeping them engaged and satisfied.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-700">Custom Solutions</h4>
                <p className="text-gray-600">
                  We’ll custom-train your chatbot to integrate with your existing booking systems, CRM, or other tools.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-gray-700">Future-Proofing</h4>
                <p className="text-gray-600">
                  Your chatbot evolves with your business. Our chatbot can be upgraded to handle more complex tasks like personalized client interactions.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-700">Data Storage & Insights</h4>
                <p className="text-gray-600">
                  Easily store chatbot training data and access detailed analytics reports to improve performance and understand your customer.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 4: Future-Proofing & Custom Solutions */}
      <div className="mt-4 hover:bg-slate-200 p-2">
        <button
          className="flex justify-between items-center w-full text-2xl font-bold text-gray-900 mb-4 focus:outline-none"
          onClick={() => toggleSection("future-proofing")}
        >
          Future-Proofing & Custom Solutions
          <span>{openSection === "future-proofing" ? "−" : "+"}</span>
        </button>
        {openSection === "future-proofing" && (
          <div className="grid grid-cols-1 gap-12 mt-4 transition-opacity duration-500 ease-in">
            <div className="space-y-2 space-x-2 flex">
              <h4 className="text-md font-semibold text-gray-700">Evolving Chatbot Features</h4>
              <p className="text-gray-600">
                As your business grows, our chatbot can evolve to handle more complex tasks, like personalized client care plans or CRM integrations.
              </p>
            </div>
            <div className="space-y-2 space-x-2 flex">
              <h4 className="text-xl font-semibold text-gray-700">Seamless Customization</h4>
              <p className="text-gray-600">
                We’ll customize the chatbot to your exact needs, ensuring seamless integration with your existing systems. The chatbot evolves with the latest tech trends, including integration with new AI capabilities.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
          </div>


    
        </div>
      </div>
    </>
  );
};

export default AIChatbotExplainer;
