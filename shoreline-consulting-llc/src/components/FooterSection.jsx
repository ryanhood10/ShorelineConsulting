import React from 'react';
import Stamp from "../assets/SquareStampLogo.png";

const FooterSection = () => {
  return (
    <div className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between">
          <div className="grid w-full grid-cols-2 gap-8 md:grid-cols-4 xl:grid-cols-4">
            <div className="shrink-0 text-sm md:text-base text-center md:text-left">
              <span className="text-lg leading-[1.0625rem]">Solutions</span>
              <div className="mt-[0.875rem] flex flex-col gap-2 text-gray-300 [&>a:focus]:underline [&>a:focus]:outline-none [&>a:hover]:underline [&>a:focus]:text-cyan-500 [&>a:hover]:text-cyan-500">
                <a href="/Solutions/website-builds">Website Builds</a>
                <a href="/Solutions/ai-agents">AI Agent</a>
                <a href="/Solutions/database-management">Database Management</a>
                <a href="/Solutions/seo-strategies">Search Engine Optimization </a>
                <a href="/Solutions/cro-strategies">Conversion Rate Optimization </a>
              </div>
            </div>
            <div className="shrink-0 text-sm md:text-base text-center md:text-left">
              <span className="text-lg leading-[1.0625rem]">Resources</span>
              <div className="mt-[0.875rem] flex flex-col gap-2 text-gray-300 [&>a:focus]:underline [&>a:focus]:outline-none [&>a:hover]:underline [&>a:focus]:text-cyan-500 [&>a:hover]:text-cyan-500">
                <a href="/Learn">Learning Center</a>
                <a href="/docs">Documents</a>
                <a href="/Blog">Blog Posts</a>
               
              </div>
            </div>
            <div className="shrink-0 text-sm md:text-base text-center md:text-left">
              <span className="text-lg leading-[1.0625rem]">Company</span>
              <div className="mt-[0.875rem] flex flex-col gap-2 text-gray-300 [&>a:focus]:underline [&>a:focus]:outline-none [&>a:hover]:underline [&>a:focus]:text-cyan-500 [&>a:hover]:text-cyan-500">
                <a href="/Company">About</a>
                <a href="/partners/">Partners</a>
                <a href="/careers/home">Careers</a>
                <a href="/Contact">Contact</a>
              </div>
            </div>
        

            {/* Image container, hidden on mobile and displayed on md and above */}
            <div className="w-[80%] mx-auto  md:w-full shrink-0 xl:mr-20 mb-8 xl:mb-0">
              <img
                className="w-full rounded-md"
                src={Stamp}
                alt="Approved Tech Solutions"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
