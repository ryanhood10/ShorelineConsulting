import React, { useState, useRef, useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import CROImage from "../assets/CROImage.png"; // Replace with your CRO image

// Custom hook for visibility detection
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

const CROSeller = () => {
  const [imageRef, imageVisible] = useVisible();
  const [textRef, textVisible] = useVisible();

  const animationClasses = (isVisible) =>
    `transition-all duration-1000 ease-in-out transform ${
      isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
    }`;

  return (
    <div className="bg-gray-900 text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Intro Section */}
        <div className={`text-center space-y-4 ${animationClasses(textVisible)}`}>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-200">
            Boost Your Conversions with Expert CRO
          </h1>
          <p className="text-lg text-gray-300 italic font-semibold tracking-wide leading-relaxed">
            Optimize your website’s performance to turn more visitors into customers and get the most from your marketing efforts.
          </p>
          <p className="text-md text-gray-400">
            We provide end-to-end conversion rate optimization services to ensure your website is user-friendly, efficient, and aesthetically aligned with your brand. Here's how we do it:
          </p>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center mt-12">
          {/* Image Section */}
          <img
            ref={imageRef}
            className={`rounded-xl mx-auto ${animationClasses(imageVisible)}`}
            style={{ width: '50%', height: '35vh' }}
            src={CROImage} // Use your CRO image here
            alt="Conversion Rate Optimization"
          />

          {/* Text Section */}
          <div
            ref={textRef}
            className={`space-y-4 ${animationClasses(textVisible)}`}
          >
            {/* Key Features List */}
            <ul className="space-y-3 text-md text-gray-400">
              <li className="flex items-center">
                <FaCheckCircle className="text-green-400 mr-2" />
                <strong>Usability Improvement:</strong> We enhance mobile and desktop navigation to improve user experience and reduce friction.
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-400 mr-2" />
                <strong>Marketing Conversion Analysis:</strong> We evaluate the quality of visitors from your marketing campaigns to ensure they convert into leads and sales.
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-400 mr-2" />
                <strong>Conversion Funnel Optimization:</strong> We streamline your sales funnel to make it clear and efficient, maximizing conversion rates at every step.
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-400 mr-2" />
                <strong>Website Copy Analysis:</strong> We refine your content to highlight key product benefits and optimize it for better calls-to-action.
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-400 mr-2" />
                <strong>Aesthetic Analysis:</strong> We ensure your site is visually consistent, professional, and designed to build trust with your customers.
              </li>
         
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CROSeller;
