import React, { useState } from 'react';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const ConnectWithUs = () => {
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
    <footer className="bg-gray-900 text-white">
      <div  className="text-center max-w-7xl mx-auto p-8">
        <h4 className="text-lg lg:text-xl text-cyan-500 mt-4">STAY CONNECTED</h4>
        <p className="text-md lg:text-lg text-gray-500">WHERE TO FIND US</p>
        <hr className="mt-8 w-full border-t-2 border-gray-300" />
  
        {/* Social Media Row */}
        <div className="mt-6 mb-12">
          <h3 className="text-lg font-semibold mb-4">SOCIAL MEDIA</h3>
          <ul className="flex md:pl-48 md:justify-start space-x-16 justify-center">
            <li className="social-icon">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                <FaInstagram size={24} />
                <span className="sr-only">Link to Instagram</span>
              </a>
            </li>
            <li className="social-icon">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                <FaFacebook size={24} />
                <span className="sr-only">Link to Facebook</span>
              </a>
            </li>
            <li className="social-icon">
              <a
                href="https://www.linkedin.com/company/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                <FaLinkedin size={24} />
                <span className="sr-only">Link to LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>

        <hr className="mt-8 mb-8 w-full border-t-2 border-gray-300" />

        {/* Connect Section */}
        <div className="connect-footer-row grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400">
              Stay in the loop. Get the latest insights on crucial technologies for growth and transformation.
            </p>

            {/* Newsletter Subscription Form */}
            <div className="flex items-center justify-center space-x-4 mt-4">
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

          <hr className="mt-8 mb-8 w-full border-t-2 border-gray-300 block md:hidden" />

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">
              Need help with a project, or want to inquire about working together?
              <br /> Send us a message!
            </p>
            <a
              href="/Contact"
              className="mt-4 inline-block border-2 border-blue-400 rounded-lg p-2 text-blue-400 hover:text-cyan-500 hover:border-cyan-500"
            >
              CONNECT
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ConnectWithUs;
