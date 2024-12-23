import React, { useState } from "react";

const CodeExamples = () => {
  const [activeText, setActiveText] = useState(0);

  const texts = [
    'Contact our sales and get connected with your personal agent that understands your needs and the technologies required to meet them. Get 24/7 Support on your website or application.',
    'Our custom tailored solutions will automate your business with AI, better manage your customer service with CRM integrations, and increase your online sales through expert SEO services.',
    'We improve your business by selecting custom tailored solutions for you, ensuring that you save on time and cost and have time to focus on business growth.'
  ];

  return (
    <section id="code-examples" className="py-12 md:py-18 lg:py-25 xl:py-37">
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start md:justify-center">
          <h2 className="text-3xl font-light text-center md:text-left md:text-[3.375rem]/[120%] text-slate-900">
            Start and <span className="md:block">grow effortlessly</span>
          </h2>
          <div className="mt-[2.625rem] flex flex-wrap justify-center md:justify-start items-start gap-5 xs:gap-x-[2.625rem]">
            <button
              className={`text-left text-body hover:text-blue-500 lg:text-2xl ${
                activeText === 0 ? 'text-blue-500 underline decoration-cyan-500 underline-offset-4' : 'text-slate-400'
              } transition-colors`}
              onClick={() => setActiveText(0)}
            >
              Start
            </button>
            <button
              className={`text-left text-body hover:text-blue-500 lg:text-2xl ${
                activeText === 1 ? 'text-blue-500 underline decoration-cyan-500 underline-offset-4' : 'text-slate-400'
              } transition-colors`}
              onClick={() => setActiveText(1)}
            >
              Automate
            </button>
            <button
              className={`text-left text-body hover:text-blue-500 lg:text-2xl ${
                activeText === 2 ? 'text-blue-500 underline decoration-cyan-500 underline-offset-4' : 'text-slate-400'
              } transition-colors`}
              onClick={() => setActiveText(2)}
            >
              Grow
            </button>
          </div>
          <div className="mt-6 md:max-w-[26.25rem] text-center md:text-left text-slate-600">
            <p className={activeText === 0 ? 'visible' : 'hidden'}>{texts[0]}</p>
            <p className={activeText === 1 ? 'visible' : 'hidden'}>{texts[1]}</p>
            <p className={activeText === 2 ? 'visible' : 'hidden'}>{texts[2]}</p>
          </div>
          <a
            href="/Contact"
            className="mt-6 inline-block underline underline-offset-2 hover:text-blue-500 md:mt-[2.625rem] text-slate-600"
          >
            Contact Us &gt;
          </a>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start md:justify-center mt-12 md:mt-0">
          <div className="relative bg-slate-100 p-8 rounded-lg shadow-lg w-full">
            <div className="flex justify-between items-center w-full mb-4">
              {/* "What we do" centered */}
              <h2 className="text-3xl font-light md:text-[2.375rem]/[120%] text-blue-500 text-center flex-1">
                What we do
              </h2>
              {/* Sign Up link aligned to the right */}
              <a
                href="/Contact"
                className="group flex items-center gap-1 text-blue-500 hover:text-blue-400 ml-auto"
              >
                Get Started
                <svg width="11" height="11" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12.1406 0.44043H13.0781V1.37793V10.7529V11.6904H11.2031V10.7529V3.64355L2.49219 12.3545L1.82812 13.0186L0.5 11.6904L1.16406 11.0264L9.875 2.31543H2.76562H1.82812V0.44043H2.76562H12.1406Z"
                    className="fill-blue-500 group-hover:fill-blue-400"
                  />
                </svg>
              </a>
            </div>
            <div className="max-w-[40rem]">
              <div className="relative my-12 grid w-full rounded-lg bg-gray-800 text-[0.75rem] leading-[1.3125rem]">
                {/* Replace video tag with Vimeo iframe */}
                <div style={{ padding: "66.25% 0 0 0", position: "relative" }}>
                  <iframe
src="https://player.vimeo.com/video/1020756333?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}
                    title="Shoreline Intro"
                  ></iframe>
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeExamples;
