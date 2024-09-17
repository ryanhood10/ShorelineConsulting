import React from "react";
import Picture1 from '../../assets/DocumentPictures/DatabaseManagement1.webp';
import Picture2 from '../../assets/DocumentPictures/DatabaseManagement2.webp';

const DatabaseManagementDoc = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center py-12">
      {/* Floating Document Container */}
      <div className="bg-gray-900 rounded-2xl text-white border-gray-600 border-2 max-w-5xl w-full px-8 py-12 md:px-16 lg:px-24">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-12 ">
          Shoreline Business Solutions: Database Management
        </h1>

        {/* Section 1: Database Selection */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-cyan-500 mb-6">Database Selection</h2>
          <div className="space-y-8">
            {/* Image 1 */}
            <div className="w-3/5 mx-auto mb-6">
              <img
                src={Picture1}
                alt="Database Selection"
                className="w-full h-auto shadow-xl rounded-2xl object-contain"
              />
            </div>
            <p className="text-lg leading-relaxed">
              Choosing the right database is crucial for your business's success. At Shoreline Business Solutions, we assess your unique requirements to recommend the most appropriate database system. We specialize in both SQL and NoSQL databases, offering solutions tailored to your specific needs:
            </p>
            <ul className="text-start pl-6 space-y-3 text-lg">
              <li><strong className="text-blue-400">SQL Databases:</strong> Ideal for structured data, relational models, and complex queries.</li>
              <li><strong className="text-blue-400">NoSQL Databases (MongoDB):</strong> Best for handling large volumes of unstructured or semi-structured data, providing scalability and flexibility.</li>
              <li><strong className="text-blue-400">Private Media Hosting:</strong> We offer secure private hosting for video and media content using Google Cloud, ensuring fast access and reliable storage solutions.</li>
              <li><strong className="text-blue-400">Scalability & Security:</strong> Our databases are designed for high-level security and the ability to scale with your business growth.</li>
            </ul>
          </div>
        </section>

        <hr className="border-t border-gray-600 my-8" />

        {/* Section 2: Database Interfaces */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-cyan-500 mb-6">Custom Database Interfaces</h2>
          <div className="space-y-8">
            {/* Image 2 */}
            <div className="w-3/5 mx-auto mb-6">
              <img
                src={Picture2}
                alt="Database Interfaces"
                className="w-full h-auto shadow-xl rounded-2xl object-contain"
              />
            </div>
            <p className="text-lg leading-relaxed">
              Managing your database efficiently is just as important as selecting the right one. We build custom database interfaces tailored to your internal or external use cases, making it easy to interact with and manage your data:
            </p>
            <ul className="text-start pl-6 space-y-3 text-lg">
              <li><strong className="text-blue-400">Easy-to-Use Tools:</strong> Our interfaces are designed for ease of use, allowing for simple data management, reporting, and editing.</li>
              <li><strong className="text-blue-400">Custom Dashboards:</strong> We build intuitive dashboards for monitoring, editing, and analyzing your data in real-time.</li>
              <li><strong className="text-blue-400">User Access Management:</strong> Control user roles and permissions to ensure secure access to sensitive data.</li>
              <li><strong className="text-blue-400">API Integrations:</strong> Seamlessly integrate your database with third-party applications or internal systems to enhance business processes.</li>
            </ul>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-semibold text-cyan-500 mb-6">Get Started with Our Database Management Solutions</h2>
          <p className="mb-6 text-lg">Whether you need help selecting the right database or building custom interfaces for managing your data, we're here to help. Contact us today and let's get started!</p>
          <a
            href="/Contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition duration-300"
          >
            Contact Us
          </a>
        </div>
        <div className="text-center mt-6">
            <p><a className="text-blue-500 hover:text-blue-300" href="/Solutions/database-management">Learn More</a> about our AI Agent Solutions</p>
</div>
      </div>
    </div>
  );
};

export default DatabaseManagementDoc;
