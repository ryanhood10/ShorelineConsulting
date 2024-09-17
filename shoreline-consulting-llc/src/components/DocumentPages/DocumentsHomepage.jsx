import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation

const documents = [
  {
    title: "AI Chatbots: Features & Getting Started",
    description: "Learn how to set up and utilize AI Chatbots for customer service and business automation.",
    href: "/docs/ai-agents",
  },
  {
    title: "Databases & Database Management",
    description: "Explore our database selection process and custom management interfaces.",
    href: "/docs/database-management",
  },
  {
    title: "Website Builds",
    description: "Craft high-converting landing pages, e-commerce sites, and web applications.",
    href: "/docs/website-builds",
  },
  {
    title: "Search Engine Optimization",
    description: "Understand SEO strategies, tools, and how we help you rank higher in search engines.",
    href: "/docs/seo",
  },
  {
    title: "Click Rate Optimization",
    description: "Boost your website's conversion rate with tailored CRO strategies and analysis.",
    href: "/docs/cro",
  },
];

const DocumentsHomepage = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-cyan-500 mb-4">Documentation</h1>
        <p className="text-lg text-gray-300">Access our professional guides on AI, Databases, Website Development, SEO, and CRO strategies. <br/>
        <span className="text-blue-500">Select a topic below</span></p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full px-8">
        {documents.map((doc, index) => (
          <Link
            key={index}
            to={doc.href}
            className="bg-gray-800 hover:bg-gray-700 transition duration-300 p-6 rounded-xl shadow-xl text-white"
          >
            <h2 className="text-2xl font-semibold mb-2">{doc.title}</h2>
            <p className="text-gray-400">{doc.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DocumentsHomepage;
