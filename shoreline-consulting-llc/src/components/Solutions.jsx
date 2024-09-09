import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AIHero from "../assets/AIHero.webp";
import WebDesignHero from "../assets/WebDesignHero.webp";
import DatabaseManagementHero from "../assets/DatabaseManagementHero.webp";
import SEOHero from "../assets/SEOHero.webp";

// Custom hook for visibility detection
function useVisibility(initialVisibility = false) {
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

const Solutions = () => {
  const navigate = useNavigate();

  // Separate visibility hooks for each section
  const [aiRef, aiVisible] = useVisibility();
  const [webDesignRef, webDesignVisible] = useVisibility();
  const [databaseRef, databaseVisible] = useVisibility();
  const [seoRef, seoVisible] = useVisibility();

  const animationClasses = (isVisible) =>
    `transition-all duration-1000 ease-in-out transform ${
      isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
    }`;

  return (
    <>
      <div className="p-5">
        <div className="max-w-7xl mx-auto">
          {/* Customized AI Chatbots section */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-20 items-center my-12">
            <img
              ref={aiRef}
              className={`rounded-xl md:order-2 ${animationClasses(aiVisible)} mx-auto`}
              src={AIHero}
              alt="AI Chatbots"
              style={{ width: "50%", height: "35vh" }}
            />
            <div ref={aiRef} className={`space-y-4 md:order-1 ${animationClasses(aiVisible)}`}>
              <h1 className="text-2xl sm:text-1xl lg:text-3xl text-gray-900">Optimized AI Chatbots</h1>
              <p  className="text-lg text-gray-700 text-center sm:text-justify italic font-semibold tracking-wide leading-relaxed">
              Our AI chatbots are expertly trained by customer service professionals to accurately respond
                to client questions.
</p>
              <p className="text-lg text-gray-700 text-justify pb-4">
                          Easily integrated into your CRM system, our AI chatbot will reduce customer friction, collect crucial customer data and improve customer satisfaction.
              </p>
              {/* Buttons */}
              <div className="flex flex-col space-y-4 text-sm lg:text-base md:flex-row md:space-x-6 md:space-y-0">
                <a
                  href="/Solutions/ai-agents"
                  className="border border-gray-400 text-gray-600 rounded-md font-medium py-3 px-6 hover:border-purple-500 hover:text-purple-500 transition duration-300"
                >
                  Learn More about our AI Chatbots
                </a>
                <a
                id='web-section'
                  href="/Contact"
                  className="bg-blue-700 rounded-md font-medium py-3 px-6 text-white hover:bg-blue-500 transition duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          {/* Custom Website Builds section */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-20 items-center my-12">
            <img
              ref={webDesignRef}
              className={`rounded-xl md:order-1 mx-auto ${animationClasses(webDesignVisible)}`}
              src={WebDesignHero}
              alt="Expert Website Design and Builds"
              style={{ width: "50%", height: "35vh" }}
            />
            <div ref={webDesignRef} className={`space-y-4 md:order-2 ${animationClasses(webDesignVisible)}`}>
              <h1 className="text-2xl sm:text-1xl lg:text-3xl text-gray-900">Custom Website Builds</h1>
              <p  className="text-lg text-gray-700 text-center sm:text-justify italic font-semibold tracking-wide leading-relaxed">
              Our custom websites are built from the ground up using code, allowing endless scalability and flexibility 
                for your business as it grows
</p>
              <p className="text-lg text-gray-700 text-justify pb-4">
              
                Whether you need a complex, feature-rich website, E-commerce site, or a simple landing page, we deliver websites 
                tailored to your needs and fully optimized for seamless integrations with any system.
              </p>
              {/* Buttons */}
              <div className="flex flex-col space-y-4 text-sm lg:text-base md:flex-row md:space-x-6 md:space-y-0">
                <a
                  href="/Contact"
                  className="bg-cyan-500 rounded-md font-medium py-3 px-6 text-white hover:bg-cyan-400 transition duration-300"
                >
                  Contact Us
                </a>
                <a
                id='data-section'
                  href="/Solutions/website-builds"
                  className="border border-gray-400 text-gray-600 rounded-md font-medium py-3 px-6 hover:border-blue-500 hover:text-blue-500 transition duration-300"
                >
                  Learn More about our Website Builds
                </a>
              </div>
            </div>
          </div>

          {/* Database Management section */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-20 items-center my-12">
            <img
              ref={databaseRef}
              className={`rounded-xl md:order-2 ${animationClasses(databaseVisible)} mx-auto`}
              src={DatabaseManagementHero}
              alt="Database Management"
              style={{ width: "50%", height: "35vh" }}
            />
            <div ref={databaseRef} className={`space-y-4 md:order-1 ${animationClasses(databaseVisible)}`}>
              <h1 className="text-2xl sm:text-1xl lg:text-3xl text-gray-900">Database Management</h1>
              <p  className="text-lg text-gray-700 text-center sm:text-justify italic font-semibold tracking-wide leading-relaxed">
              We handle database selection and management, ensuring your data is secure, scalable, and easily accessible.
</p>
              <p className="text-lg text-gray-700 text-justify pb-4">
                Whether you need a SQL or MongoDB solution, we manage updates, backups, and hosting. We can also build custom database management systems or APIs, giving you full control if you prefer to handle it in-house.
              </p>
              {/* Buttons */}
              <div className="flex flex-col space-y-4 text-sm lg:text-base md:flex-row md:space-x-6 md:space-y-0">
                <a
                  href="/Solutions/ai-agents"
                  className="border border-gray-400 text-gray-600 text-sm rounded-md font-medium py-3 px-6 hover:border-purple-500 hover:text-purple-500 transition duration-300"
                >
                  Learn More about our Database Management Systems
                </a>
                <a 
                id= 'seo-section'
                  href="/Contact"
                  className="bg-blue-700 rounded-md font-medium py-3 px-6 text-white hover:bg-blue-500 transition duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          {/* SEO section */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-20 items-center my-12">
            <img
              ref={seoRef}
              className={`rounded-xl md:order-1 mx-auto ${animationClasses(seoVisible)}`}
              src={SEOHero}
              alt="Search Engine Optimization"
              style={{ width: "50%", height: "35vh" }}
            />
            <div ref={seoRef} className={`space-y-4 md:order-2 ${animationClasses(seoVisible)}`}>
              <h1 className="text-2xl sm:text-1xl lg:text-3xl text-gray-900">Search Engine Optimization</h1>
              <p  className="text-lg text-gray-700 text-center sm:text-justify italic font-semibold tracking-wide leading-relaxed">
              Elevate your online presence with customized SEO strategies designed for long-term success.
</p>
              <p className="text-lg text-gray-700 text-justify">
                Using Google Search Console, technical SEO, backlink building, and social media integration, we provide a solid foundation to boost your visibility and attract the right audience.
              </p>
              {/* Buttons */}
              <div className="flex flex-col space-y-4 md:flex-row md:space-x-6 md:space-y-0">
                <a
                  href="/Contact"
                  className="bg-cyan-500 rounded-md font-medium py-3 px-6 text-white hover:bg-cyan-400 transition duration-300"
                >
                  Contact Us
                </a>
                <a
                  href="/Solutions/ai-agents"
                  className="border border-gray-400 text-gray-600 rounded-md font-medium py-3 px-6 hover:border-blue-500 hover:text-blue-500 transition duration-300"
                >
                  Learn More About Our SEO Strategies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Solutions;
