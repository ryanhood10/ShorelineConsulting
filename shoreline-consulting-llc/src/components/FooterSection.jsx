import React from 'react';
import Stamp from "../assets/SquareStampLogo.png";

const FooterSection = () => {
  return (
    <div className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between">
          <div className="grid w-full grid-cols-2 gap-8 md:grid-cols-5 xl:grid-cols-5">
            <div className="shrink-0 text-sm md:text-base text-center md:text-left">
              <span className="text-body leading-[1.0625rem]">Solutions</span>
              <div className="mt-[0.875rem] flex flex-col gap-2 text-gray-300 [&>a:focus]:underline [&>a:focus]:outline-none [&>a:hover]:underline [&>a:focus]:text-cyan-500 [&>a:hover]:text-cyan-500">
                <a href="/customers/">Customers</a>
                <a href="/solutions/rag/">RAG</a>
                <a href="/solutions/semantic/">Semantic Search</a>
                <a href="/solutions/multi-modal/">Multi-Modal Search</a>
                <a href="/solutions/candidate-generation/">Candidate Generation</a>
                <a href="/solutions/classification/">Classification</a>
              </div>
            </div>
            <div className="shrink-0 text-sm md:text-base text-center md:text-left">
              <span className="text-body leading-[1.0625rem]">Resources</span>
              <div className="mt-[0.875rem] flex flex-col gap-2 text-gray-300 [&>a:focus]:underline [&>a:focus]:outline-none [&>a:hover]:underline [&>a:focus]:text-cyan-500 [&>a:hover]:text-cyan-500">
                <a href="/learn/">Learning Center</a>
                <a href="/community/">Community</a>
                <a href="/blog/">Pinecone Blog</a>
                <a href="https://support.pinecone.io/">Support Center</a>
                <a href="https://status.pinecone.io/">System Status</a>
                <a href="/learn/vector-database/">What is a Vector Database?</a>
                <a href="/learn/retrieval-augmented-generation/">What is Retrieval Augmented Generation (RAG)?</a>
              </div>
            </div>
            <div className="shrink-0 text-sm md:text-base text-center md:text-left">
              <span className="text-body leading-[1.0625rem]">Company</span>
              <div className="mt-[0.875rem] flex flex-col gap-2 text-gray-300 [&>a:focus]:underline [&>a:focus]:outline-none [&>a:hover]:underline [&>a:focus]:text-cyan-500 [&>a:hover]:text-cyan-500">
                <a href="/company/">About</a>
                <a href="/partners/">Partners</a>
                <a href="/careers/">Careers</a>
                <a href="/newsroom/">Newsroom</a>
                <a href="/contact/">Contact</a>
              </div>
            </div>
            <div className="shrink-0 text-sm md:text-base text-center md:text-left">
              <span className="text-body leading-[1.0625rem]">Legal</span>
              <div className="mt-[0.875rem] flex flex-col gap-2 text-gray-300 [&>a:focus]:underline [&>a:focus]:outline-none [&>a:hover]:underline [&>a:focus]:text-cyan-500 [&>a:hover]:text-cyan-500">
                <a href="/legal/">Customer Terms</a>
                <a href="/terms/">Website Terms</a>
                <a href="/privacy/">Privacy</a>
                <a href="/cookies/">Cookies</a>
                <a href="#">Cookie Preferences</a>
              </div>
            </div>

            {/* Image container, hidden on mobile and displayed on md and above */}
            <div className="hidden md:block w-full shrink-0 xl:mr-20 mb-8 xl:mb-0">
              <img
                className="w-full rounded-md"
                src={Stamp}
                alt="Approved Tech Consulting"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
