import React from "react";
import Picture1 from '../../assets/DocumentPictures/DatabaseManagement1.webp';
import Picture2 from '../../assets/DocumentPictures/DatabaseManagement2.webp';

const DatabaseManagementDoc = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center py-12">
      {/* Floating Document Container */}
      <div className="bg-gray-900 rounded-2xl text-white border-gray-600 border-2 max-w-5xl w-full px-8 py-12 md:px-16 lg:px-24">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-12">
          Shoreline Business Solutions: 
          <br/> 
          Database Management
        </h1>

        {/* Introduction */}
        <section className="mb-16">
          <p className="text-lg leading-relaxed">
            At Shoreline Business Solutions, we provide comprehensive database management services tailored to your business needs. Whether you're looking to implement a new database, manage existing data, or create custom interfaces for enhanced data interaction, we have the expertise and tools to support your success. Our solutions are designed to ensure high performance, security, and scalability, making data management efficient and accessible.
          </p>
        </section>

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
              Choosing the right database is crucial for your business's success. We evaluate your unique requirements to recommend the most suitable database system, ensuring your data is secure, scalable, and accessible. Our expertise covers a wide range of database solutions, including:
            </p>
            <ul className="text-start pl-6 space-y-3 text-lg">
              <li><strong className="text-blue-400">SQL Databases:</strong> Perfect for structured data, relational models, and complex queries, offering reliable performance and integrity.</li>
              <li><strong className="text-blue-400">NoSQL Databases (MongoDB):</strong> Ideal for large volumes of unstructured data, providing flexibility, scalability, and efficient data handling.</li>
              <li><strong className="text-blue-400">Private Media Hosting:</strong> Securely manage and stream your video and media content with Google Cloud, ensuring fast access and reliable storage.</li>
              <li><strong className="text-blue-400">Scalability & Security:</strong> Our solutions are designed to grow with your business, offering high-level security protocols to protect your data.</li>
            </ul>
          </div>
        </section>

        <hr className="border-t border-gray-600 my-8" />

        {/* Section 2: Custom Database Interfaces */}
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
              Managing your database efficiently is as important as selecting the right system. Our custom database interfaces provide intuitive, user-friendly access to your data, tailored to your business operations. Whether for internal management or external applications, our interfaces are designed to enhance interaction and control over your data.
            </p>
            <ul className="text-start pl-6 space-y-3 text-lg">
              <li><strong className="text-blue-400">Easy-to-Use Tools:</strong> Simplify data management, reporting, and editing with intuitive interfaces designed for your needs.</li>
              <li><strong className="text-blue-400">Custom Dashboards:</strong> Monitor, edit, and analyze your data in real time with custom-built dashboards.</li>
              <li><strong className="text-blue-400">User Access Management:</strong> Control roles and permissions to ensure secure access to sensitive data.</li>
              <li><strong className="text-blue-400">API Integrations:</strong> Seamlessly connect your database with third-party applications, enhancing your business processes.</li>
            </ul>
          </div>
        </section>

        <hr className="border-t border-gray-600 my-8" />

        {/* Section 3: Cloud Hosting and Live Deployment */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-cyan-500 mb-6">Cloud Hosting and Live Deployment</h2>
          <p className="text-lg leading-relaxed">
            Our database solutions are hosted in the cloud, providing unparalleled scalability, security, and accessibility. Cloud hosting ensures your data is always backed up, protected, and available when you need it. Our Database Manager can be deployed to a live website, customized to match your branding and operational needs, making data management straightforward and effective.
          </p>
          <ul className="text-start pl-6 space-y-3 text-lg">
            <li><strong className="text-blue-400">Scalable and Secure:</strong> Cloud hosting adapts to your business growth, offering flexible storage and high-level security.</li>
            <li><strong className="text-blue-400">Live Website Deployment:</strong> Your database interface will be tailored and deployed directly to your site for real-time management.</li>
            <li><strong className="text-blue-400">Continuous Updates:</strong> Easily update and add features to adapt to evolving business requirements.</li>
          </ul>
        </section>

        <hr className="border-t border-gray-600 my-8" />

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-semibold text-cyan-500 mb-6">Get Started with Our Database Management Solutions</h2>
          <p className="mb-6 text-lg">
            Start your database journey with Shoreline Business Solutions. From selecting the right database to creating custom interfaces, we offer tailored solutions that empower your business. Contact us today to explore how we can help you manage your data more effectively!
          </p>
          <a
            href="/Contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition duration-300"
          >
            Contact Us
          </a>
        </div>
        <div className="text-center mt-6">
          <p>
            <a className="text-blue-500 hover:text-blue-300" href="/Solutions/database-management">
              Learn More
            </a>{" "}
            about our Database Management Services
          </p>
        </div>
      </div>
    </div>
  );
};

export default DatabaseManagementDoc;
