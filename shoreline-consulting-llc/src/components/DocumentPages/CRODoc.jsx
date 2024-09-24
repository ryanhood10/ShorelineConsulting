import React from "react";
import Picture1 from '../../assets/DocumentPictures/CROLandscape1.webp';
import Picture2 from '../../assets/DocumentPictures/CROLandscape2.webp';

const CRODoc = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center py-12">
      {/* Floating Document Container */}
      <div className="bg-gray-900 rounded-2xl text-white border-gray-600 border-2 max-w-5xl w-full px-8 py-12 md:px-16 lg:px-24">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-12">
          Shoreline Business Solutions: Conversion Rate Optimization (CRO)
        </h1>

        {/* Section 1: What is CRO? */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-cyan-500 mb-6">What is CRO?</h2>
          <div className="space-y-8">
            {/* Image 1 */}
            <div className="w-3/5 mx-auto mb-6">
              <img
                src={Picture1}
                alt="What is CRO"
                className="w-full h-auto shadow-xl rounded-2xl object-contain"
              />
            </div>
            <p className="text-lg leading-relaxed">
              Conversion Rate Optimization (CRO) is the art and science of enhancing your website's performance to turn more visitors into customers. Unlike strategies that focus solely on increasing traffic, CRO aims to maximize the value of your existing audience by fine-tuning design, content, and user experience. 
            </p>
            <p className="text-lg leading-relaxed">
              CRO involves a comprehensive analysis of user behavior, pinpointing barriers that prevent conversions, and implementing targeted improvements throughout the sales funnel. This could involve adjusting CTAs, optimizing page load speeds, or refining product descriptions, all aimed at guiding users towards completing a desired action.
            </p>
            <p className="text-lg leading-relaxed">
              By leveraging usability insights, behavioral data, and psychological triggers, our CRO strategies ensure every element of your site is crafted to enhance engagement and drive conversions, maximizing your ROI.
            </p>
          </div>
        </section>

        <hr className="border-t border-gray-600 my-8" />

        {/* Section 2: CRO Strategies */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-cyan-500 mb-6">CRO Strategies</h2>
          <div className="space-y-8">
            {/* Image 2 */}
            <div className="w-3/5 mx-auto mb-6">
              <img
                src={Picture2}
                alt="CRO Strategies"
                className="w-full h-auto shadow-xl rounded-2xl object-contain"
              />
            </div>
            <p className="text-lg leading-relaxed">
              Our tailored CRO services are designed to optimize every aspect of your website, ensuring a seamless and engaging user experience that leads to higher conversion rates. Here's how we enhance your site’s performance:
            </p>
            <h3 className="text-2xl font-semibold text-blue-400 mt-4">1. Conversion Funnel Optimization</h3>
            <p className="text-lg leading-relaxed">
              We meticulously analyze your sales funnel, identifying friction points and opportunities for improvement. By streamlining the user journey—from landing page to checkout—we create a more intuitive path that naturally leads visitors towards conversion.
            </p>
            
            <h3 className="text-2xl font-semibold text-blue-400 mt-4">2. Data-Driven Redesign</h3>
            <p className="text-lg leading-relaxed">
              Through our approach, we use insights from tools like <span className="text-cyan-300 font-bold">Hotjar</span> and <span className="text-cyan-300 font-bold">Google Analytics</span> to inform our redesign efforts. This ensures that each adjustment is backed by real user data, leading to measurable gains in performance.
            </p>

            <h3 className="text-2xl font-semibold text-blue-400 mt-4">3. Marketing Conversion Analysis</h3>
            <p className="text-lg leading-relaxed">
              Leveraging <span className="text-cyan-300 font-bold">Semrush</span> and <span className="text-cyan-300 font-bold">Google Analytics</span>, we assess the effectiveness of your marketing campaigns. Our goal is to attract high-quality traffic that is more likely to convert, optimizing your marketing ROI.
            </p>

            <h3 className="text-2xl font-semibold text-blue-400 mt-4">4. Shopify & E-commerce Optimization</h3>
            <p className="text-lg leading-relaxed">
              For e-commerce clients, we enhance product pages, checkout processes, and upsell opportunities using <span className="text-cyan-300 font-bold">Shopify Analytics</span> and <span className="text-cyan-300 font-bold">AI-driven recommendations</span>. We focus on creating a smooth and engaging shopping experience that reduces cart abandonment and boosts sales.
            </p>

            <h3 className="text-2xl font-semibold text-blue-400 mt-4">5. Website Copy & Aesthetic Analysis</h3>
            <p className="text-lg leading-relaxed">
              Clear, persuasive copy paired with visually appealing design can significantly influence user behavior. We evaluate and optimize your website’s content and aesthetic to align with your brand, build trust, and encourage conversions.
            </p>

            <h3 className="text-2xl font-semibold text-blue-400 mt-4">6. CRO Tracking & Reporting Tools</h3>
            <p className="text-lg leading-relaxed">
              We use advanced tools such as <span className="text-cyan-300 font-bold">Google Tag Manager</span>, <span className="text-cyan-300 font-bold">Heatmaps</span>, and <span className="text-cyan-300 font-bold">A/B Testing</span> to measure, track, and refine your site’s performance. Continuous monitoring allows us to adjust strategies based on real-time user data, ensuring sustained improvement.
            </p>
          </div>
        </section>

        <hr className="border-t border-gray-600 my-8" />

   {/* Learn More Section */}
   <div className="text-center mt-6">
          <p className="text-lg">
            Want to learn more about our CRO strategy? <a className="text-blue-500 hover:text-blue-300" href="/Solutions/cro-strategies">Click here</a> 
          </p>
        </div>
        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-semibold text-cyan-500 mb-6">Start Boosting Your Conversions Today!</h2>
          <p className="mb-6 text-lg">
            Ready to optimize your website for better conversion rates and higher ROI? Contact us today and let's start improving your website’s performance!
          </p>
          <a
            href="/Contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition duration-300"
          >
            Contact Us
          </a>
        </div>
        
     
      </div>
    </div>
  );
};

export default CRODoc;
