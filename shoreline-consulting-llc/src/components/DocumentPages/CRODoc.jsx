import React from "react";
import Picture1 from '../../assets/DocumentPictures/CROLandscape1.webp';
import Picture2 from '../../assets/DocumentPictures/CROLandscape2.webp';

const CRODoc = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center py-12">
      {/* Floating Document Container */}
      <div className="bg-gray-900 rounded-2xl text-white border-gray-600 border-2 max-w-5xl w-full px-8 py-12 md:px-16 lg:px-24">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-12 ">
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
              Conversion Rate Optimization (CRO) is the process of improving your website to convert more visitors into leads or customers. It's not just about increasing traffic but about turning your existing traffic into revenue by making strategic changes to your site’s design, content, and functionality. 
            </p>
            <p className="text-lg leading-relaxed">
              CRO includes analyzing how users interact with your website, identifying pain points or friction in the user experience, and systematically optimizing each part of the sales funnel to ensure that more visitors complete the desired action, such as making a purchase, signing up for a newsletter, or filling out a contact form. 
            </p>
            <p className="text-lg leading-relaxed">
              By focusing on usability, user behavior, and psychological triggers, we ensure that every element of your website is aligned with increasing conversions and generating higher ROI from your marketing efforts.
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
              At Shoreline Business Solutions, we use a combination of data-driven tools and proven strategies to improve your website’s conversion rate. Here’s how we optimize your website for better conversions:
            </p>
            <h3 className="text-2xl font-semibold text-blue-400 mt-4">1. Conversion Funnel Optimization</h3>
            <p className="text-lg leading-relaxed">
              We analyze your existing sales funnel to identify and eliminate points of friction. From the initial visit to the final conversion, we ensure a seamless and efficient user journey. This involves refining calls-to-action (CTAs), simplifying navigation, and ensuring each page leads the user closer to converting.
            </p>
            
            <h3 className="text-2xl font-semibold text-blue-400 mt-4">2. Data-Driven Redesign</h3>
            <p className="text-lg leading-relaxed">
              Our <span className="text-cyan-300 font-bold">Conversion Catalyst</span> process is a complete redesign approach, backed by data and user behavior insights. We use tools like <span className="text-cyan-300 font-bold">Hotjar</span> and <span className="text-cyan-300 font-bold">Google Analytics</span> to track user activity and identify areas for improvement. This ensures that the changes we make are rooted in real-world data, leading to measurable performance improvements.
            </p>

            <h3 className="text-2xl font-semibold text-blue-400 mt-4">3. Marketing Conversion Analysis</h3>
            <p className="text-lg leading-relaxed">
              We evaluate the quality of traffic your marketing campaigns bring to your site. Using <span className="text-cyan-300 font-bold">Semrush</span> and <span className="text-cyan-300 font-bold">Google Analytics</span>, we analyze which campaigns are driving valuable traffic and adjust your marketing funnel to improve lead quality and conversion rates.
            </p>

            <h3 className="text-2xl font-semibold text-blue-400 mt-4">4. Shopify & E-commerce Optimization</h3>
            <p className="text-lg leading-relaxed">
              For e-commerce clients, especially those using Shopify, we optimize product pages, checkout flows, and upsell strategies. By integrating <span className="text-cyan-300 font-bold">Shopify analytics</span>, <span className="text-cyan-300 font-bold">AI product recommendations</span>, and dynamic buttons that guide customers through a frictionless shopping experience, we maximize conversions. This also includes email collection for retargeting and abandoned cart recovery.
            </p>

            <h3 className="text-2xl font-semibold text-blue-400 mt-4">5. Website Copy & Aesthetic Analysis</h3>
            <p className="text-lg leading-relaxed">
              We ensure that your website's copy is clear, concise, and persuasive. The right copy, paired with strong visual design, can significantly impact how users engage with your site. We also evaluate your site’s overall aesthetic to ensure it aligns with your brand and builds trust, making visitors feel confident in their decision to convert.
            </p>

            <h3 className="text-2xl font-semibold text-blue-400 mt-4">6. CRO Tracking & Reporting Tools</h3>
            <p className="text-lg leading-relaxed">
              To measure and track success, we implement tools like <span className="text-cyan-300 font-bold">Google Tag Manager</span> for funnel tracking and <span className="text-cyan-300 font-bold">Heatmaps</span> for user behavior analysis. We also use <span className="text-cyan-300 font-bold">A/B testing</span> to compare different page elements and <span className="text-cyan-300 font-bold">Session Recording</span> to understand user behavior in real time. These tools help us refine our strategies and continuously optimize for higher conversion rates.
            </p>
          </div>
        </section>

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
