import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'; // Add icons as needed

const ConnectWithUs = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="text-center max-w-7xl mx-auto p-8">
      <h4 className="text-lg lg:text-xl text-cyan-500 mt-4">STAY CONNECTED</h4>
        <p className="text-md lg:text-lg text-gray-500">WHERE TO FIND US</p>
      <hr className="mt-8 w-full border-t-2 border-gray-300 " />

        {/* Social Media Row */}
        <div className="mt-6 mb-12">
  <h3 className="text-lg font-semibold mb-4">SOCIAL MEDIA</h3>
  <ul className="flex  md:pl-48 md:justify-start space-x-16 justify-center">
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

        <hr className="mt-8 mb-8 w-full border-t-2 border-gray-300 " />

        {/* Connect Section */}
        <div className="connect-footer-row grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400">
              Stay in the loop. Get the latest insights on crucial technologies for growth and transformation.
            </p>
            <a
              href="/newsletter/subscribe"
              className="mt-4 inline-block border-2 border-blue-400 rounded-lg p-2 text-blue-400 hover:text-cyan-500 hover:border-cyan-500 "
            >
              SUBSCRIBE
            </a>
          </div>
          <hr className="mt-8 mb-8 w-full border-t-2 border-gray-300 block md:hidden " />

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">
              Need help with a project, or want to inquire about working together?
              <br/> Send us a message!
            </p>
            <a
              href="/Contact"
              className="mt-4 inline-block border-2 border-blue-400 rounded-lg p-2 text-blue-400 hover:text-cyan-500 hover:border-cyan-500 "
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
