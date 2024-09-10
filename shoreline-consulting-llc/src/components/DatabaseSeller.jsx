import React, { useState, useRef, useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import StampLogo from "../assets/Databases.png";

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

const DatabaseSeller = () => {
  const [laptopImgRef, laptopImgVisible] = useVisible();
  const [emailDivRef, emailDivVisible] = useVisible();

  const animationClasses = (isVisible) =>
    `transition-all duration-1000 ease-in-out transform ${
      isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
    }`;

  return (
    <div className="bg-gray-900 text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <img
          ref={laptopImgRef}
          className={`rounded-xl md:order-1 mx-auto ${animationClasses(laptopImgVisible)}`}
          style={{ width: '50%', height: '35vh' }}
          src={StampLogo}
          alt="Stamp of Approval"
        />

        {/* Text Section */}
        <div
          ref={emailDivRef}
          className={`space-y-4 md:order-2 ${animationClasses(emailDivVisible)}`}
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-200">
            Start Your Database Journey with Ease
          </h1>
          <p className="text-lg text-gray-300 italic font-semibold tracking-wide leading-relaxed text-center sm:text-justify">
            Getting started with our database solutions is seamless and hassle-free.
          </p>
          <p className="text-md text-gray-400 text-justify mt-4">
            We offer tailored solutions for SQL and MongoDB, ensuring your business is equipped with the right tools for success.
          </p>

          {/* Key Features List */}
          <ul className="space-y-3 text-md text-gray-400">
            <li className="flex items-center">
              <FaCheckCircle className="text-green-400 mr-2" />
              Easy-to-use interfaces and tools for editing and reporting on your database.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-400 mr-2" />
              Scalable databases with high-level security. 
            </li>
            
            <li className="flex items-center">
              <FaCheckCircle className="text-green-400 mr-2" />
              Google Cloud integration for private hosting of video and media files.
            </li>
            <li className='pt-4'>
            <a
                  href="/Contact"
                  className="bg-cyan-500 rounded-md font-medium py-3 px-6 text-gray-900 hover:bg-cyan-400 transition duration-300"
                >
                    Contact Us
                </a>
                </li>
          </ul>

        </div>
      </div>

    </div>
  );
};

export default DatabaseSeller;
