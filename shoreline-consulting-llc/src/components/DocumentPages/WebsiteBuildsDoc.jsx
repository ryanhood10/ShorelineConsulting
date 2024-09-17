import React from "react";
import Picture1 from '../../assets/DocumentPictures/WebsiteBuildsLandscape1.webp';
import Picture2 from '../../assets/DocumentPictures/WebsiteBuildsLandscape2.webp';
import Picture3 from '../../assets/DocumentPictures/WebsiteBuildsLandscape3.webp';

const WebsiteBuildsDoc = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center py-12">
      <div className="bg-gray-900 rounded-2xl text-white border-gray-600 border-2 max-w-5xl w-full px-8 py-12 md:px-16 lg:px-24">
        
        <h1 className="text-4xl font-bold text-center mb-12 ">
          Shoreline Business Solutions: Website Builds
        </h1>

        {/* Section 1: Website Builds */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-cyan-500 mb-6">Business Landing Pages</h2>
          <div className="space-y-8">
            <div className="w-3/5 mx-auto mb-6">
              <img
                src={Picture1}
                alt="Website Builds"
                className="w-full h-auto shadow-xl rounded-2xl object-contain"
              />
            </div>
            <p className="text-lg leading-relaxed">
              Crafting high-converting, future-proof websites. We ensure that your website is dynamic, mobile-friendly, and has call-to-actions that convert. A perfect landing page includes:
            </p>
            <ul className="text-start pl-6 space-y-3 text-lg">
              <li><strong className="text-blue-400">Responsive Design:</strong> Mobile-friendly layouts that look great on all devices.</li>
              <li><strong className="text-blue-400">Clear Call-to-Actions:</strong> Strategically placed buttons and forms to drive user engagement.</li>
              <li><strong className="text-blue-400">Contact Forms:</strong> Easy-to-use forms to capture leads and inquiries.</li>
              <li><strong className="text-blue-400">SEO Optimization:</strong> Ensuring high visibility on search engines.</li>
              <li><strong className="text-blue-400">Fast Loading Times:</strong> Optimized for speed to enhance user experience.</li>
            </ul>
          </div>
        </section>

        <hr className="border-t border-gray-600 my-8"/>

        {/* Section 2: E-commerce Sites */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-cyan-500 mb-6">E-commerce Sites</h2>
          <div className="space-y-8">
            <div className="w-3/5 mx-auto mb-6">
              <img
                src={Picture2}
                alt="E-commerce Sites"
                className="w-full shadow-xl rounded-2xl h-auto object-contain"
              />
            </div>
            <p className="text-lg leading-relaxed">
              Secure and scalable online stores. We build e-commerce sites using Shopify and custom PHP, ensuring:
            </p>
            <ul className="text-start pl-6 space-y-3 text-lg">
              <li><strong className="text-blue-400">Consistent Themes:</strong> A cohesive design for a seamless user experience.</li>
              <li><strong className="text-blue-400">Dynamic Buttons:</strong> Custom buttons for easy checkout.</li>
              <li><strong className="text-blue-400">Customer Data Collection:</strong> Capturing emails, sending receipts, and upselling in the shopping cart.</li>
              <li><strong className="text-blue-400">Security:</strong> Secure payment gateways and data protection.</li>
              <li><strong className="text-blue-400">Scalability:</strong> Handling high traffic and large product inventories with ease.</li>
            </ul>
          </div>
        </section>

        <hr className="border-t border-gray-600 my-8"/>

        {/* Section 3: Web Applications */}
        <section>
          <h2 className="text-3xl font-semibold text-cyan-500 mb-6">Web Applications</h2>
          <div className="space-y-8">
            <div className="w-3/5 mx-auto mb-6">
              <img
                src={Picture3}
                alt="Web Applications"
                className="w-full shadow-xl rounded-2xl h-auto object-contain"
              />
            </div>
            <p className="text-lg leading-relaxed">
              We specialize in building high-performance web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). Our process includes:
            </p>
            <ul className="text-start pl-6 space-y-3 text-lg">
              <li><strong className="text-blue-400">Scalable Backend:</strong> Using MongoDB for NoSQL databases, and SQL for larger datasets when needed.</li>
              <li><strong className="text-blue-400">Efficient Frontend:</strong> React.js for fast load times and reusable components.</li>
              <li><strong className="text-blue-400">Modern Styling:</strong> Tailwind CSS for responsive and modern design.</li>
              <li><strong className="text-blue-400">Performance Optimization:</strong> Regular audits for performance improvements.</li>
              <li><strong className="text-blue-400">Security Best Practices:</strong> Ensuring data security and user protection.</li>
            </ul>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-semibold text-cyan-500 mb-6">Get Started Today!</h2>
          <p className="mb-6 text-lg">Ready to build your custom website, e-commerce store, or web application? Contact us today and let's get started!</p>
          <a
            href="/Contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition duration-300"
          >
            Contact Us
          </a>
        </div>
        <div className="text-center mt-6">
            <p><a className="text-blue-500 hover:text-blue-300" href="/Solutions/website-builds">Learn More</a> about our Website Builds</p>
</div>
      </div>
    </div> 
  );
};

export default WebsiteBuildsDoc;
