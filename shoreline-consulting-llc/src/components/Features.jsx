import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto py-12 md:py-24 text-black px-4 sm:px-6 lg:px-8">
        <h2 className="max-w-[44.5625rem] text-3xl font-light md:text-[3.375rem] leading-[120%] mx-auto text-center md:text-left">
          More relevant results make better applications
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-x-12 lg:gap-y-20">
          <div className="space-y-6 text-center lg:text-left">
            <div className="flex h-24 w-24 mx-auto lg:mx-0 items-center justify-center bg-gray-200 rounded-full">
              <svg
                width="32"
                height="25"
                viewBox="0 0 32 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 12.1904V17.6904L13 20.4404V12.1904V11.4404L13.4375 10.8779L20 3.44043V2.19043H2V3.44043L8.5 10.8779L9 11.4404V12.1904ZM7 12.1904L0 4.19043V2.19043V0.19043H2H20H22V2.19043V4.19043L15 12.1904V21.8154V24.1904L13 22.8154L7 18.6904V12.1904ZM24 1.19043H25H31H32V3.19043H31H25H24V1.19043ZM21 11.1904H31H32V13.1904H31H21H20V11.1904H21ZM21 21.1904H31H32V23.1904H31H21H20V21.1904H21Z"
                  fill="#1C17FF"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-normal md:text-[2rem] leading-[130%]">
              Manage your<br /> Data
            </h3>
            <p className="text-base md:text-lg leading-[150%]">
              We will manage your data solutions by choosing the right {' '}
              <a
                href="https://docs.pinecone.io/docs/metadata-filtering"
                className="text-black underline hover:opacity-60"
              >
                database for you
              </a>{' '}
              to get just the results you want.
            </p>
          </div>

          <div className="space-y-6 text-center lg:text-left">
            <div className="flex h-24 w-24 mx-auto lg:mx-0 items-center justify-center bg-gray-200 rounded-full">
              <svg
                width="28"
                height="29"
                viewBox="0 0 28 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.125 12.1904H0.125C1.0625 5.44043 6.9375 0.19043 14 0.19043C19.0625 0.19043 23.5 2.94043 26 7.00293V3.19043V2.19043H28V3.19043V9.19043V10.1904H27.375H27H25.3125H21H20V8.19043H21H24.375C22.3125 4.62793 18.4375 2.19043 14 2.19043C8 2.19043 3.0625 6.56543 2.125 12.1904ZM14 26.1904C19.9375 26.1904 24.875 21.8779 25.8125 16.1904H27.8125C26.875 23.0029 21 28.1904 14 28.1904C8.875 28.1904 4.4375 25.5029 2 21.4404V25.1904V26.1904H0V25.1904V19.1904V18.1904H0.5625H1H2.625H7H8V20.1904H7H3.5625C5.625 23.8154 9.5 26.1904 14 26.1904Z"
                  fill="#1C17FF"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-normal md:text-[2rem] leading-[130%]">
              Expertly Made<br />Websites
            </h3>
            <p className="text-base md:text-lg leading-[150%]">
              As your online needs change, we build you a website designed for scalability, optimized for search engines, and dynamic to change with your needs.
            </p>
          </div>

          <div className="space-y-6 text-center lg:text-left">
            <div className="flex h-24 w-24 mx-auto lg:mx-0 items-center justify-center bg-gray-200 rounded-full">
              <svg
                width="34"
                height="33"
                viewBox="0 0 34 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 2.19043C11.9375 2.19043 7.375 4.87793 4.875 9.19043C2.3125 13.5654 2.3125 18.8779 4.875 23.1904C7.375 27.5654 11.9375 30.1904 17 30.1904C22 30.1904 26.5625 27.5654 29.0625 23.1904C31.625 18.8779 31.625 13.5654 29.0625 9.19043C26.5625 4.87793 22 2.19043 17 2.19043ZM17 32.1904C11.25 32.1904 6 29.1904 3.125 24.1904C0.25 19.2529 0.25 13.1904 3.125 8.19043C6 3.25293 11.25 0.19043 17 0.19043C22.6875 0.19043 27.9375 3.25293 30.8125 8.19043C33.6875 13.1904 33.6875 19.2529 30.8125 24.1904C27.9375 29.1904 22.6875 32.1904 17 32.1904ZM23.6875 12.9404L15.6875 20.9404L15 21.6279L14.25 20.9404L10.25 16.9404L9.5625 16.1904L11 14.8154L11.6875 15.5029L15 18.8154L22.25 11.5029L23 10.8154L24.375 12.1904L23.6875 12.9404Z"
                  fill="#1C17FF"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-normal md:text-[2rem] leading-[130%]">
              AI Solutions and<br />Chatbots
            </h3>
            <p className="text-base md:text-lg leading-[150%]">
              Get 24/7 support and increase customer satisfaction with an expertly made conversation tree made by customer service savaunts, ensuring your clients always find the answer to their problem within the <span> </span>
              <a
                href="https://docs.pinecone.io/docs/hybrid-search"
                className="text-black underline hover:opacity-60"
              >
                 AI Agent
              </a>
              .
            </p>
          </div>
          <div className="space-y-6 text-center lg:text-left">
            <div className="flex h-24 w-24 mx-auto lg:mx-0 items-center justify-center bg-gray-200 rounded-full">
              <svg
                width="32"
                height="29"
                viewBox="0 0 32 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 0.19043H14L17 4.19043H30H32V6.19043V26.1904V28.1904H30H2H0V26.1904V2.19043V0.19043H2ZM17 6.19043H16L15.375 5.44043L13 2.19043H2V26.1904H30V6.19043H17ZM15 19.1904C16.375 19.1904 17.6875 18.4404 18.4375 17.1904C19.125 16.0029 19.125 14.4404 18.4375 13.1904C17.6875 12.0029 16.375 11.1904 15 11.1904C13.5625 11.1904 12.25 12.0029 11.5 13.1904C10.8125 14.4404 10.8125 16.0029 11.5 17.1904C12.25 18.4404 13.5625 19.1904 15 19.1904ZM15 21.1904C11.6875 21.1904 9 18.5029 9 15.1904C9 11.8779 11.6875 9.19043 15 9.19043C18.3125 9.19043 21 11.8779 21 15.1904C21 16.5029 20.5625 17.6904 19.875 18.6904L22.6875 21.5029L23.375 22.2529L22 23.6279L21.25 22.9404L18.4375 20.1279C17.4375 20.8154 16.25 21.1904 15 21.1904Z"
                  fill="#1C17FF"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-normal md:text-[2rem] leading-[130%]">
              Search Engine<br />Optimization
            </h3>
            <p className="text-base md:text-lg leading-[150%]">
              Put your online store or website on the forefront of the web by leveraging our {' '}
              <a
                href="blog/rag-study"
                className="text-black underline hover:opacity-60"
              >
                Search Engine Optimization
              </a>{' '}
              tools. Set the foundation for your business's online growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
