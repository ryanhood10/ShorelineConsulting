import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AIHero from "../assets/AIHero.webp";
import StampLogo from "../assets/stamp2logo.webp"
import ProductsShowcase from './ProductsShowcase';

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

const Solutions = () => {
  const navigate = useNavigate();
  const [laptopImgRef, laptopImgVisible] = useVisible();
  const [emailDivRef, emailDivVisible] = useVisible();
  const [emailImgRef, emailImgVisible] = useVisible();


  const handleViewContact = () => navigate("/connect");

  const animationClasses = (isVisible) =>
    `transition-all duration-1000 ease-in-out transform ${
      isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
    }`;

  return (
    <>
      <div className="p-5">
        <div className="max-w-7xl mx-auto">
          {/* Laptop and Our Solutions section */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-20 items-center my-12">
            <img
              ref={laptopImgRef}
              
              className={`rounded-xl md:order-1 mx-auto`}
              style={{ width: "70%", height: "45vh" }}
              src={StampLogo}
              alt="Stamp of Approval"
            />
            <div
              ref={laptopImgRef}
              className={`space-y-4 md:order-2 ${animationClasses(
                laptopImgVisible
              )}`}
            >
              <h1 className="text-2xl sm:text-1xl lg:text-3xl text-gray-900 ">
                Our Solutions
              </h1>
              <p id='ai-section' className="text-lg text-gray-700 text-justify">
                Elevate your business to new heights with our innovative
                solutions. Implement the power of AI chatbots and data analytics
                to automate and refine your customer service, gain deeper
                understanding of your clients and boost customer satisfaction.
                Our custom website builds not only enhance your online presence
                but also fortify your brand's image. With search engine
                optimized text and layout, we ensure you shine brighter on
                Google. Witness the transformation our products can bring. Book
                a call today and let's chart a path to your business's brighter
                future.
              </p>
            </div>
          </div>

          {/* Customized AI Chatbots section */}
<div  className="flex flex-col md:grid md:grid-cols-2 gap-20 items-center my-12">
<img
    ref={emailImgRef}
    className={`rounded-xl md:order-2 ${animationClasses(emailImgVisible)} mx-auto`}
    src={AIHero}
    alt="AI Chatbots"
    style={{ width: "70%", height: "45vh" }}
    />
  <div
    ref={emailDivRef}
    className={`space-y-4 md:order-1 ${animationClasses(emailDivVisible)}`}
  >
    <h1  className="text-2xl sm:text-1xl lg:text-3xl text-gray-900">
      Customized AI Chatbots
    </h1>
    <p className="text-lg text-gray-700 text-justify pb-4">
      Our AI chatbots, expertly trained for customer service and marketing, respond swiftly 
      and accurately to client questions. Opt for training based on your data, collaborate 
      with us for tailored solutions, or both. With our in-depth data analytics, monitor 
      client conversations to enhance satisfaction by better understanding your customers. 
      The result? Significant time and money savings. Choose Akira Web Solutions for AI-driven 
      excellence.
    </p>
    
    {/* Learn More About Chatbots and Contact Us Buttons */}
<div className="space-x-6">
  {/* Learn More About Chatbots Button */}
  <a
    href="/Solutions/ai-agents"
    className="border border-gray-400 text-gray-600 rounded-md font-medium py-3 px-6 hover:border-purple-500 hover:text-purple-500 transition duration-300"
  >
    Learn More About Our Chatbots
  </a>

  {/* Contact Us Button */}
  <a
    href="/Contact"
    className="bg-blue-500 rounded-md font-medium py-3 px-6 text-white hover:bg-blue-400 transition duration-300"
  >
    Contact Us
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
