import React from 'react';
import { FaDatabase, FaCloud, FaServer } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiGooglecloud } from 'react-icons/si'; // Importing logos

const DatabaseManagement = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-12 lg:px-24">
        <div className='max-w-7xl mx-auto'>
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Database Management Services</h1>
        <p className="text-lg md:text-xl text-gray-400">
          We offer comprehensive database management solutions tailored to your business needs, including SQL, MongoDB, and private hosting for media.
        </p>
      </div>

      {/* Service Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Database Selection */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex items-center space-x-4 mb-4">
            <FaDatabase className="text-blue-500 text-4xl" />
            <h2 className="text-2xl font-semibold">Database Selection</h2>
          </div>
          <p className="text-gray-400 mb-4">
            We help select the right database for your business, whether you need a SQL-based solution or a NoSQL option like MongoDB. Our expertise ensures your data is secure, scalable, and easily accessible.
          </p>
          <div className="flex justify-start space-x-4">
            <SiMysql className="text-blue-400 text-5xl" />
            <SiMongodb className="text-green-500 text-5xl" />
          </div>
        </div>

        {/* Private Hosting */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex items-center space-x-4 mb-4">
            <FaCloud className="text-yellow-400 text-4xl" />
            <h2 className="text-2xl font-semibold">Private Media Hosting</h2>
          </div>
          <p className="text-gray-400 mb-4">
            We offer private hosting solutions for storing and streaming large video and photo libraries using Google Cloud. Securely manage your content with reliable cloud infrastructure.
          </p>
          <div className="flex justify-start space-x-4">
            <SiGooglecloud className="text-blue-400 text-5xl" />
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-800 mt-12 p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Our Database Management Services?</h2>
        <p className="text-gray-400 mb-4">
          We provide customized database management solutions to fit your specific business requirements. From initial setup to ongoing management, we handle it all, ensuring optimal performance, security, and scalability.
        </p>
        <div className="flex justify-center space-x-6">
          <FaServer className="text-blue-500 text-4xl" />
          <FaDatabase className="text-green-500 text-4xl" />
          <FaCloud className="text-yellow-500 text-4xl" />
        </div>
      </div>
      </div>
    </section>
  );
};

export default DatabaseManagement;
