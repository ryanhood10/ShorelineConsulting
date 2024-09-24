import React from "react";
import Picture1 from '../../assets/DocumentPictures/WebsiteBuildsLandscape1.webp';
import Picture2 from '../../assets/DocumentPictures/WebsiteBuildsLandscape2.webp';
import Picture3 from '../../assets/DocumentPictures/WebsiteBuildsLandscape3.webp';

const WebsiteBuildsDoc = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center py-12">
      <div className="bg-gray-900 rounded-2xl text-white border-gray-600 border-2 max-w-5xl w-full px-8 py-12 md:px-16 lg:px-24">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-12">
          Shoreline Business Solutions 
          <br/>
           Website Builds
        </h1>

        {/* Introduction */}
        <section className="mb-16">
          <p className="text-lg leading-relaxed">
            At Shoreline Business Solutions, we specialize in creating custom websites, e-commerce platforms, and web applications that are tailored to meet the unique needs of your business. Our websites are built from the ground up using code, offering limitless scalability and flexibility as your business grows. Whether you need a high-converting landing page, a robust e-commerce store, or a complex web application, we have the expertise to bring your vision to life.
          </p>
        </section>

        {/* Section 1: Business Landing Pages */}
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
              Crafting high-converting, future-proof websites is our specialty. We ensure that your website is dynamic, mobile-friendly, and equipped with call-to-actions that drive engagement. Our landing pages are designed to capture attention and convert visitors into customers with key features like:
            </p>
            <ul className="text-start pl-6 space-y-3 text-lg">
              <li><strong className="text-blue-400">Responsive Design:</strong> Optimized for all devices, ensuring a seamless user experience on mobile, tablet, and desktop.</li>
              <li><strong className="text-blue-400">Clear Call-to-Actions:</strong> Strategically placed buttons and forms to guide visitors towards taking action.</li>
              <li><strong className="text-blue-400">Contact Forms:</strong> User-friendly forms to capture leads, inquiries, and customer feedback.</li>
              <li><strong className="text-blue-400">SEO Optimization:</strong> Enhanced for search engine visibility to help attract organic traffic and boost rankings.</li>
              <li><strong className="text-blue-400">Fast Loading Times:</strong> Performance-optimized to deliver a fast, smooth browsing experience.</li>
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
              We build secure, scalable online stores tailored to your business needs. Leveraging platforms like Shopify and custom PHP, our e-commerce solutions focus on providing a seamless shopping experience that drives sales. Key features include:
            </p>
            <ul className="text-start pl-6 space-y-3 text-lg">
              <li><strong className="text-blue-400">Consistent Themes:</strong> A cohesive design that reflects your brand and enhances the user experience.</li>
              <li><strong className="text-blue-400">Dynamic Buttons:</strong> Custom buttons designed to make the checkout process intuitive and user-friendly.</li>
              <li><strong className="text-blue-400">Customer Data Collection:</strong> Capture essential customer information, send order receipts, and upsell products in the shopping cart.</li>
              <li><strong className="text-blue-400">Security:</strong> Secure payment gateways and robust data protection to safeguard customer transactions.</li>
              <li><strong className="text-blue-400">Scalability:</strong> Built to handle high traffic volumes and large product inventories without compromising performance.</li>
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
              Our expertise extends to building high-performance web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). We develop custom applications that meet your specific business needs, offering:
            </p>
            <ul className="text-start pl-6 space-y-3 text-lg">
              <li><strong className="text-blue-400">Scalable Backend:</strong> Flexible database solutions using MongoDB for NoSQL and SQL for more structured data needs.</li>
              <li><strong className="text-blue-400">Efficient Frontend:</strong> Fast-loading, dynamic interfaces built with React.js for enhanced user interaction.</li>
              <li><strong className="text-blue-400">Modern Styling:</strong> Tailwind CSS for responsive, visually appealing designs that look great on any screen.</li>
              <li><strong className="text-blue-400">Performance Optimization:</strong> Regular performance audits to ensure fast, efficient operation.</li>
              <li><strong className="text-blue-400">Security Best Practices:</strong> Implementing industry-standard security measures to protect your application and user data.</li>
            </ul>
          </div>
        </section>
        <hr className="border-t border-gray-600 my-8"/>


        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-semibold text-cyan-500 mb-6">Get Started Today!</h2>
          <p className="mb-6 text-lg">
            Ready to build your custom website, e-commerce store, or web application? Our team is here to help you every step of the way. Contact us today, and let’s start building your digital future!
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
            <a className="text-blue-500 hover:text-blue-300" href="/Solutions/website-builds">
              Learn More
            </a>{" "}
            about our Website Builds
          </p>
        </div>
      </div>
    </div> 
  );
};

export default WebsiteBuildsDoc;
