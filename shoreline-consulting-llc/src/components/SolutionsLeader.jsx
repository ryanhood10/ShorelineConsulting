import React, { useState, useRef, useEffect } from 'react';
import StampLogo from "../assets/stamp2logo.jpg";

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

const SolutionsLeader = () => {
  const [laptopImgRef, laptopImgVisible] = useVisible();
  const [emailDivRef, emailDivVisible] = useVisible();

  const animationClasses = (isVisible) =>
    `transition-all duration-1000 ease-in-out transform ${
      isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
    }`;

  return (
    <div className="max-w-7xl mx-auto">
    <div className="flex flex-col md:grid md:grid-cols-2 gap-20 items-center my-12">
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
        <h1 className="text-2xl sm:text-1xl lg:text-3xl text-gray-900 ">
  Our Solutions
</h1>
<p  className="text-lg text-gray-700 text-center sm:text-justify italic font-semibold tracking-wide leading-relaxed">
  We stay ahead on the latest technologies to ensure that your business has all the tools to achieve success.
</p>
<p className="text-md text-gray-700 text-justify mt-4">
  Whether you're getting started with a new business or you're well-established; <br />
  Shoreline is here to develop your online presence, integrate new technologies in your business, and deliver new insights on your customers.
</p>

      </div>
    </div>
    </div>
  );
};

export default SolutionsLeader;
