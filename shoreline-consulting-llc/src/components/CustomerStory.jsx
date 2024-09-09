import React from 'react';
import GrahamNash from '../assets/usericon.png'; // Path to the image
import RyanSeaver from '../assets/usericon.png'; // Path to the image
import BondsLogo from '../assets/BondsSouthLogo.png'; // Path to the logo
import SherlockLogo from '../assets/SherlockSocialLogo.png'; // Path to the logo

const CustomerStory = () => {
  return (
    <section className="bg-white py-12 max-w-7xl mx-auto">
      <div className="container mx-auto grid gap-10 md:grid-cols-2">
        {/* Story 1 - Graham Nash */}
        <a
          href="/Portfolio"
          className="flex flex-col group bg-gray-200 rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          <div className="p-8 flex flex-col gap-6 text-black h-full relative">
            {/* Large Quotation Marks */}
            <div className="absolute top-0 left-0 text-[80px] text-gray-300 leading-none">
              &ldquo;
            </div>
            <p className="text-2xl font-light relative z-10">
              Shoreline redesigned our website, making it more user-friendly. They improved our Google search hits with technical SEO and Google Business strategies. Our online presence has never been better.
            </p>
            <div className="absolute right-16 bottom-24 text-[80px] text-gray-300 leading-none">
              &rdquo;
            </div>
            <div className="flex justify-between items-center mt-auto relative z-10">
              <div className="flex gap-4">
                <div className="h-14 w-14 rounded-full bg-blue-900">
                  <img
                    src={GrahamNash}
                    alt="Graham Nash"
                    className="rounded-full saturate-0 contrast-125 brightness-110"
                  />
                </div>
                <div>
                  <p className="font-bold">Graham Nash</p>
                  <p className="font-extralight">
                    Bonds Southeast Inc.
                  </p>
                </div>
              </div>
              <div className="h-20 w-40">
                <img
                  src={BondsLogo}
                  alt="Bonds Southeast Logo"
                  className='rounded-lg'
                />
              </div>
            </div>
          </div>
          <div className="mt-auto bg-blue-700 p-4 text-white flex justify-center items-center gap-2 hover:brightness-90 transition-all">
            <p className="hover:underline">Our Past Projects</p>
            <svg
              width="13"
              height="14"
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6406 0.870361H12.5781V1.80786V11.1829V12.1204H10.7031V11.1829V4.07349L1.99219 12.7844L1.32812 13.4485L0 12.1204L0.664062 11.4563L9.375 2.74536H2.26562H1.32812V0.870361H2.26562H11.6406Z"
                fill="white"
              />
            </svg>
          </div>
        </a>

        {/* Story 2 - Ryan Seaver */}
        <a
          href="/Portfolio"
          className="flex flex-col group bg-gray-200 rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          <div className="p-8 flex flex-col gap-6 text-black h-full relative">
            {/* Large Quotation Marks */}
            <div className="absolute top-0 left-0 text-[80px] text-gray-300 leading-none">
              &ldquo;
            </div>
            <p className="text-2xl font-light relative z-10">
              Shoreline has been incredibly responsive and helpful in setting up our SaaS application. They provided excellent support throughout the process, ensuring everything runs smoothly.
            </p>
            <div className="absolute right-16 bottom-24 text-[80px] text-gray-300 leading-none">
              &rdquo;
            </div>
            <div className="flex justify-between items-center mt-auto relative z-10">
              <div className="flex gap-4">
                <div className="h-14 w-14 rounded-full bg-blue-900">
                  <img
                    src={RyanSeaver}
                    alt="Ryan Seaver"
                    className="rounded-full saturate-0 contrast-125 brightness-110"
                  />
                </div>
                <div>
                  <p className="font-bold">Ryan Seaver</p>
                  <p className="font-extralight">Sherlock Social</p>
                </div>
              </div>
              <div className=" h-20 w-40">
                <img
                  src={SherlockLogo}
                  alt="Sherlock Social Logo"
                  className='rounded-lg'
                />
              </div>
            </div>
          </div>
          <div className="mt-auto bg-blue-700 p-4 text-white flex justify-center items-center gap-2 hover:brightness-90 transition-all">
            <p id='ai-section' className="hover:underline">Our Past Projects</p>
            <svg
              width="13"
              height="14"
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6406 0.870361H12.5781V1.80786V11.1829V12.1204H10.7031V11.1829V4.07349L1.99219 12.7844L1.32812 13.4485L0 12.1204L0.664062 11.4563L9.375 2.74536H2.26562H1.32812V0.870361H2.26562H11.6406Z"
                fill="white"
              />
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
};

export default CustomerStory;
