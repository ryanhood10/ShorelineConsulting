import React from 'react';
import Chart2 from '../assets/Globe.png'; // Assuming you have this image in your assets
import BlogPoster from '../assets/HitchHikerBlog.webp';


const LearningCenter = () => {
  return (
    <section className="bg-slate-200  text-gray-900 py-12">
          <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                LEARNING CENTER     
     </h1>
          <h4 className="text-lg lg:text-xl text-gray-600 mt-4">
            BLOG POSTS | DOCS | NEWS
          </h4>
          <hr className="mt-8 w-full border-t-2 border-gray-300" />
        </div>
      <div className="container mx-auto">
        {/* Spacer for mobile */}
        <div className="hidden phone:block h-8" aria-hidden="true"></div>

        {/* Main Blog Post */}
        <div className="flex flex-col md:flex-row items-start gap-8 mb-16">
          {/* Text Section */}
          <div className="md:w-1/3">
            <p className="text-black font-semibold mb-2">BLOG</p>
            <h2 className="text-2xl font-bold text-black mb-4">
           Crafting a Website that Truly sets your Business Foundation.
            </h2>
            <p className="text-gray-800 mb-6">
              Key strategies for online Success: Perfect & Practical Tools
            </p>
            <a
              href="https://prophet.com/2024/06/uncommon-growth-strategies/"
              className="text-blue-600 font-semibold hover:underline"
            >
              READ HERE
            </a>
          </div>

          {/* Image Section */}
          <div className="md:w-2/3   ">
            <a 
            className=''
            href="https://prophet.com/2024/06/uncommon-growth-strategies/">
              <img
                src={Chart2}
                alt="Growth Strategies"
                className="w-[50%] rounded-lg shadow-lg"
              />
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
              <a
                href="https://prophet.com/2023/12/2024-cmo-trends/"
                className="block"
                target="_self"
              >
                <div
                  className="bg-cover bg-center h-48"
                  style={{
                    // backgroundImage: `url(https://prophet.com/wp-content/uploads/2022/02/CMO-Transformation-1494x800.png)`,
                    backgroundImage: `url(${BlogPoster})`,
                  }}
                ></div>
                <div className="p-4">
                  <p className="text-sm uppercase font-semibold text-gray-500">
                    Blog
                  </p>
                  <h3 className="text-xl font-semibold">
                  A Hitchhikers Guide to Selecting the Right Database Solution.
                  </h3>
                </div>
              </a>
            </div>

            {/* Post 2 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <a
                href="https://prophet.com/2023/12/2023-brand-winners-and-losers/"
                className="block"
                target="_self"
              >
                <div
                  className="bg-cover bg-center h-48"
                  style={{
                    backgroundImage: `url(https://prophet.com/wp-content/uploads/2023/12/Award_4A-1493x800.png)`,
                  }}
                ></div>
                <div className="p-4">
                  <p className="text-sm uppercase font-semibold text-gray-500">
                    Blog
                  </p>
                  <h3 className="text-xl font-semibold">
                    2023 Brand Winners and Losers
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
            href="https://prophet.com/thinking/all-posts/"
            className="text-black font-semibold hover:underline inline-flex items-center gap-2"
          >
            VIEW ALL THINKING
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
      </div>
    </section>
  );
};

export default LearningCenter;
