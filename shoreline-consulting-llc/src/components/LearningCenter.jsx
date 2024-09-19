import React from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Import Link from react-scroll
import Chart2 from '../assets/Globe.png'; 
import BlogPoster from '../assets/HitchHikerBlog.webp';
import CertBlog from '../assets/CertBlog.webp';

const LearningCenter = () => {
  return (
    <section className="bg-slate-200 text-gray-900 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
            LEARNING CENTER
          </h1>
          <h4 className="text-lg lg:text-xl text-gray-600 mt-4">
            {/* Scroll Links */}
            <ScrollLink to="blog-section" smooth={true} className="cursor-pointer text-blue-600 hover:underline mx-2">
              BLOG POSTS
            </ScrollLink>
            |
            <ScrollLink to="docs-section" smooth={true} className="cursor-pointer text-blue-600 hover:underline mx-2">
              DOCS
            </ScrollLink>
            |
            <ScrollLink to="stay-connected-section" smooth={true} className="cursor-pointer text-blue-600 hover:underline mx-2">
              STAY CONNECTED
            </ScrollLink>
          </h4>
          <hr className="mt-8 w-full border-t-2 border-gray-300" />
        </div>

        <div className="container mx-auto">
          {/* Blog Section */}
          <div id="blog-section" className="flex flex-col md:flex-row items-start gap-8 mb-16">
            {/* Text Section */}
            <div className="md:w-1/3">
              <p className="text-black font-semibold mb-2">BLOG</p>
              <h2 className="text-2xl font-bold text-black mb-4">
                Crafting a Strong Online Foundation: Essential Strategies for Digital Success
              </h2>
              <p className="text-gray-800 mb-6">
                Key strategies for online Success:
                <br />
                Perfect & Practical Tools
              </p>
              <a
                href="/Blog/crafting-online-presence"
                className="text-blue-600 font-semibold hover:underline"
              >
                READ HERE
              </a>
            </div>

            {/* Image Section */}
            <div className="md:w-2/3">
              <a href="https://prophet.com/2024/06/uncommon-growth-strategies/">
                <img src={Chart2} alt="Growth Strategies" className="w-[50%] rounded-lg shadow-lg" />
              </a>
            </div>
          </div>

          {/* Recent Posts */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Recent Blog Posts</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              {/* Post 1 */}
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <a href="/Blog/selecting-the-right-database" className="block" target="_self">
                  <div
                    className="bg-cover bg-center h-48"
                    style={{
                      backgroundImage: `url(${BlogPoster})`,
                    }}
                  ></div>
                  <div className="p-4">
                    <p className="text-sm uppercase font-semibold text-gray-500">Blog</p>
                    <h3 className="text-xl font-semibold">
                      A Hitchhikers Guide to Selecting the Right Database Solution
                    </h3>
                  </div>
                </a>
              </div>

              {/* Post 2 */}
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <a href="/Blog/certified-ai-winners" className="block" target="_self">
                  <div
                    className="bg-cover bg-center h-48"
                    style={{
                      backgroundImage: `url(${CertBlog})`,
                    }}
                  ></div>
                  <div className="p-4">
                    <p className="text-sm uppercase font-semibold text-gray-500">Blog</p>
                    <h3 className="text-xl font-semibold">
                      Certified Winners: Our New Favorite AI Tools
                    </h3>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center">
          <a
            href="/Blog"
            className="text-black font-semibold hover:underline inline-flex items-center gap-2"
          >
            VIEW ALL BLOG POSTS
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <g
                fill="none"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinejoin="round"
                strokeMiterlimit="10"
              >
                <circle cx="16" cy="16" r="15.12"></circle>
                <path d="M16.14 10.93L22.21 16l-6.07 5.07M8.23 16h13.98"></path>
              </g>
            </svg>
          </a>
        </div>
<div id="docs-section"  ></div>
      </div>
    </section>
  );
};

export default LearningCenter;
