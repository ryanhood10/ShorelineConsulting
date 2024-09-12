import React, { useState } from 'react';

const BlogSubscription = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      // Mock subscription logic
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail(''); // Reset email input
      }, 2000); // Hide message after 2 seconds
    }
  };

  return (
    <article className="post-container bg-gray-900 text-white py-12">
      <div className="entry-content">
        <section className="section-content">
          <div className="container mx-auto px-4">
            {/* Flex columns */}
            <div className="flex flex-col md:flex-row md:space-x-8">
              {/* First Column: Heading */}
              <div className="flex-1 md:flex-none md:w-1/4 mb-6 md:mb-0">
                <h1 className="text-3xl font-bold" id="h-thinking">
                  Newsletter
                </h1>
              </div>

              {/* Second Column: Text, Input, and Button */}
              <div className="flex-1 md:w-1/3">
                <p className="text-lg leading-relaxed mb-6">
                  Want to stay informed on how to gain business advantages through tech? Subscribe to our Newsletter!
                </p>

                <div className="flex items-center justify-center space-x-4">
                  {/* Input Field */}
                  <input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="Enter your email"
  className="w-2/3 md:w-auto px-3 py-2 text-white bg-gray-600 border border-gray-700 rounded-md placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-gray-700"
/>


                  {/* Subscribe Button */}
                  <button
                    onClick={handleSubscribe}
                    className="inline-flex items-center text-lg font-semibold text-cyan-500 hover:text-teal-400 transition-colors duration-300"
                    style={{ '--bg-underline-color': '#22ffab' }}
                  >
                    SUBSCRIBE
                    <svg
                      className="ml-2 fill-none stroke-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 32 32"
                    >
                      <g
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                      >
                        <circle
                          className="arrow-icon--circle"
                          cx="16"
                          cy="16"
                          r="15.12"
                        ></circle>
                        <path
                          className="arrow-icon--arrow"
                          d="M16.14 10.93L22.21 16l-6.07 5.07M8.23 16h13.98"
                        ></path>
                      </g>
                    </svg>
                  </button>
                </div>

                {/* Subscribed Message */}
                {isSubscribed && (
                  <div className="mt-4 text-green-400 flex items-center space-x-2">
                    <span>Subscribed</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                )}
              </div>

              {/* Third Column (Optional) */}
              <div className="hidden md:flex-1 md:w-1/3"></div>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
};

export default BlogSubscription;
