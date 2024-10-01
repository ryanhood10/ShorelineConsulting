import React from "react";
import { Link } from "react-router-dom"; // Ensure react-router-dom is installed if using React Router
// import DatabaseHeader from '../../assets/PortfolioPictures/DatabaseHeader.png'; // Example image of the database interface
// import DatabaseInputs from '../../assets/PortfolioPictures/DatabaseInputs.png'; // Image showing inputs and outputs of the database
// import DatabaseHeader from '../../assets/PortfolioPictures/DatabaseHeader.png';
import DatabaseInputs from '../../assets/PortfolioPictures/DatabaseInput.png';
import Logo from '../../assets/PalmTreeTransparent.png';
import {  FaCode, FaCogs, FaCloud, FaGlobe } from "react-icons/fa";
import ReactLogo from '../../assets/credentiallogo7.jpeg';
import PostgresLogo from '../../assets/credentiallogo6.png';
import Expressjs from '../../assets/ExpressjsLogo.png';
import NodejsLogo from '../../assets/NodejsLogo.png';



const PortfolioDatabaseManager = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-5xl mx-auto bg-white p-8 md:p-16 rounded-lg shadow-xl relative">
        {/* Back to Portfolio Link */}
        <Link
          to="/Portfolio"
          className="absolute top-4 left-4 flex items-center text-blue-600 hover:text-blue-500 transition duration-300"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a.75.75 0 0 1-.53-.22l-6.75-6.75a.75.75 0 0 1 0-1.06l6.75-6.75a.75.75 0 1 1 1.06 1.06L4.81 10h13.44a.75.75 0 0 1 0 1.5H4.81l5.72 5.72a.75.75 0 0 1-.53 1.28z"
              clipRule="evenodd"
            />
          </svg>
          Portfolio
        </Link>

        {/* Portfolio Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
            Database Manager - Custom SQL Database Interfaces for Your Data Management Needs
          </h1>
          <p className="text-gray-600 text-lg">
            A powerful solution for managing and interacting with your data using customized SQL database interfaces.
          </p>
          {/* Demo Video */}
          <video
            src="https://res.cloudinary.com/didbhdjxz/video/upload/v1727796751/DemoDatabaseManager_wo6qzp.mp4"
            controls
            className="w-full rounded-md shadow-lg mt-8"
            alt="Demo video of the Database Manager"
          >
            Your browser does not support the video tag.
          </video>
          <p className="text-sm text-gray-500 mt-2">* This video is a demo of how the Database Manager works.</p>
        </header>

        {/* Portfolio Body */}
        <section className="space-y-16">
          {/* Project Overview */}
          <article className="space-y-6">
            <p className="text-lg text-gray-800">
              Our Database Manager project provides a custom interface for interacting with SQL databases, allowing you to manage your data efficiently. With this solution, users can input data, run queries, and filter information to suit their needs. We offer the flexibility to build specialized interfaces that make data management intuitive and tailored to specific business requirements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <img
                src={DatabaseInputs}
                alt="Database Inputs and Outputs"
                className="w-full h-auto rounded-md shadow-lg"
              />
              <ul className="list-disc text-start ml-6 text-lg space-y-2">
                <li>Customizable interfaces for inputting, managing, and querying data.</li>
                <li>Ability to print and filter data for specific business needs.</li>
                <li>Secure, efficient, and adaptable to any SQL-based database.</li>
              </ul>
            </div>
          </article>

          <hr className="mb-8" />

          {/* Section 1: Technology Stack */}
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaCogs className="mr-2" /> Technology Stack
            </h2>
            <p className="text-lg text-gray-800">
              The Database Manager project leverages powerful technologies to provide a seamless and flexible experience for managing your SQL databases. Our approach ensures high performance, security, and adaptability.
            </p>
            <ul className="list-disc ml-6 text-lg text-start space-y-2">
              <li>
                <strong>Node.js:</strong> A robust runtime environment that allows for scalable and high-performance applications.
              </li>
              <li>
                <strong>Express.js:</strong> A flexible framework for building web applications and APIs.
              </li>
              <li>
                <strong>PostgreSQL:</strong> A powerful, open-source object-relational database system.
              </li>
              <li>
                <strong>React:</strong> A JavaScript library for building user interfaces efficiently.
              </li>
            </ul>
            {/* Placeholder for technology logos */}
            <div className="flex justify-center space-x-4 px-4 mt-6">
              <img src={NodejsLogo} alt="Node.js Logo" className="h-16" />
              <img src={Expressjs} alt="Express.js Logo" className="h-16" />
              <img src={PostgresLogo} alt="PostgreSQL Logo" className="h-16" />
              <img src={ReactLogo} alt="React Logo" className="h-16" />
            </div>
          </article>

          <hr className="mb-8" />

          <hr className="mb-8" />

          {/* Section 3: Cloud Hosting for Scalability and Security */}
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaCloud className="mr-2" /> Cloud Hosting for Scalability and Security
            </h2>
            <p className="text-lg text-gray-800">
              Our database solutions are cloud-hosted, providing unparalleled scalability, security, and accessibility. By hosting your database in the cloud, we ensure that your data is always backed up, easily accessible, and protected against unauthorized access. Cloud hosting allows your database to scale with your business needs, offering flexible storage and performance options that can grow as your data grows.
            </p>
            <ul className="list-disc text-start ml-6 text-lg space-y-2">
              <li>Reliable data backup and recovery options.</li>
              <li>Enhanced security protocols to protect against unauthorized access and data breaches.</li>
              <li>Scalability to meet the growing demands of your business without hardware limitations.</li>
            </ul>
          </article>

          <hr className="mb-8" />

          {/* Section 4: Live Deployment and Custom Formatting */}
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaGlobe className="mr-2" /> Live Deployment and Custom Formatting
            </h2>
            <p className="text-lg text-gray-800">
              Your Database Manager will be deployed to a live website and formatted to your specific needs. We ensure that your database interface is not only functional but also visually aligned with your business brand and operational workflows. This level of customization allows for an intuitive user experience, making data management straightforward and effective for all users.
            </p>
            <ul className="list-disc text-start ml-6 text-lg space-y-2">
              <li>Deploys directly to your live website, providing real-time data management capabilities.</li>
              <li>Custom formatting options to align with your business’s branding and user needs.</li>
              <li>Adaptable to evolving requirements, allowing easy updates and feature additions.</li>
            </ul>
          </article>

          <hr className="mb-8" />

          {/* Section 5: How to Run the Project */}
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-600 text-center flex items-center justify-center">
              <FaCode className="mr-2" /> How to Run the Project (for Developers)
            </h2>
            <p className="text-lg text-gray-800">
              Follow these steps to set up and run the Database Manager project:
            </p>
            <ul className="list-disc ml-6 text-lg space-y-2">
              <li>Clone the repository.</li>
              <li>Run <code>npm install</code> to install the required dependencies.</li>
              <li>
                Create a <code>.env</code> file in the root directory and add your MySQL database credentials:
                <br />
                <code>DB_HOST=&lt;your_host&gt;</code>
                <br />
                <code>DB_USER=&lt;your_user&gt;</code>
                <br />
                <code>DB_PASS=&lt;your_password&gt;</code>
                <br />
                <code>DB_NAME=&lt;your_database_name&gt;</code>
              </li>
              <li>Import the provided SQL schema files into your MySQL database.</li>
              <li>Run the application with <code>node index.js</code>.</li>
            </ul>
          </article>
        </section>

        {/* Conclusion and Call-to-Action */}
        <footer className="mt-16">
          <hr className="mb-8" />
          <p className="text-lg text-gray-800 text-center">
            Our custom Database Manager solution is designed to meet your data management needs with flexible, cloud-hosted interfaces tailored to your business. From live deployment to customized formatting, we provide all the tools needed for effective data management.
          </p>
          <hr className="mb-8 mt-8" />

          <p className="text-lg text-gray-800 text-center mt-4">
            Contact Shoreline Business Solutions today to learn how we can create a custom database management solution tailored to your needs.
          </p>
          <a
            href="/Contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition duration-300 mt-4"
          >
            Get in Touch
          </a>

          {/* Company Branding */}
          <div className="mt-12 flex items-center justify-center">
            <img className="h-16" src={Logo} alt="Shoreline" />
            <p className="text-gray-600">&copy; 2024 Shoreline Business Solutions. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PortfolioDatabaseManager;
