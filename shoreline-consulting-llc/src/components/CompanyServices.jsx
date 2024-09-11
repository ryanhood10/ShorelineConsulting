import React from 'react';

const CompanyServices = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Technology and Services
          </h2>
        </div>

        {/* Section Paragraph */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            From our flagship products for enterprise{' '}
            <a
              href="https://www.ibm.com/hybrid-cloud?lnk=hpUSbt1"
              className="text-blue-600 hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              hybrid cloud infrastructure
            </a>{' '}
            to next-generation AI, security, and storage solutions, find the
            answer to your business challenge, and engage{' '}
            <a
              href="https://www.ibm.com/consulting"
              className="text-blue-600 hover:text-blue-800"
              target="_self"
              rel="noopener noreferrer"
            >
              IBM Consulting
            </a>{' '}
            to scale transformation and reinvent how your business works with
            AI.
          </p>
        </div>

        {/* Call to Action Links */}
        <div className="max-w-lg mx-auto space-y-6">
          <a
            href="https://www.ibm.com/products/offers-and-discounts?lnk=hpUSbt1"
            className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition duration-300"
            target="_self"
            rel="noopener noreferrer"
          >
            Save on select IBM products today
          </a>

          <a
            href="https://www.ibm.com/products?lnk=hpUSbt2"
            className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition duration-300"
            target="_self"
            rel="noopener noreferrer"
          >
            View all products
          </a>
        </div>
      </div>
    </section>
  );
};

export default CompanyServices;
