import React from "react";
import Picture1 from '../../assets/DocumentPictures/SEO1.webp';
import Picture2 from '../../assets/DocumentPictures/SEO2.webp';

const SEODoc = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center py-12">
      {/* Floating Document Container */}
      <div className="bg-gray-900 rounded-2xl text-white border-gray-600 border-2 max-w-5xl w-full px-8 py-12 md:px-16 lg:px-24">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-12">
          Shoreline Business Solutions: Search Engine Optimization (SEO)
        </h1>

        {/* Section 1: What is SEO? */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-cyan-500 mb-6">What is SEO?</h2>
          <div className="space-y-8">
            {/* Image 1 */}
            <div className="w-3/5 mx-auto mb-6">
              <img
                src={Picture1}
                alt="What is SEO"
                className="w-full h-auto shadow-xl rounded-2xl object-contain"
              />
            </div>
            <p className="text-lg leading-relaxed">
              SEO, or Search Engine Optimization, is the process of improving the visibility and ranking of your website on search engines like Google. It involves optimizing various elements on your site—from keywords to content, to backend technical elements—to make sure search engines can easily crawl, understand, and rank your site.
            </p>
            <p className="text-lg leading-relaxed">
              Effective SEO ensures that when potential customers search for services or products related to your business, your website appears at the top of the search results. SEO involves several aspects: keyword research, on-page optimization, technical SEO, content creation, and backlink building. All of these components work together to enhance your website's visibility and drive organic traffic.
            </p>
          </div>
        </section>

        <hr className="border-t border-gray-600 my-8" />

        {/* Section 2: SEO Tools & Strategies */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-cyan-500 mb-6">SEO Tools & Strategies</h2>
          <div className="space-y-8">
            {/* Image 2 */}
            <div className="w-3/5 mx-auto mb-6">
              <img
                src={Picture2}
                alt="SEO Tools & Strategies"
                className="w-full h-auto shadow-xl rounded-2xl object-contain"
              />
            </div>
            <p className="text-lg leading-relaxed">
              At Shoreline Business Solutions, we employ a wide range of SEO tools and strategies to help your website rank higher and perform better. Our approach is data-driven, leveraging the best technology to optimize your website for better search engine rankings.
            </p>
            <p className="text-lg leading-relaxed">
              We use tools like <span className="text-cyan-300 font-bold">Google Gemini</span> to optimize for Natural Language Search, which helps your site rank for more complex, conversational search queries that are becoming increasingly popular. <span className="text-cyan-300 font-bold">Semrush</span> allows us to track keyword trends and stay ahead of the competition by targeting the most effective keywords for your industry. We also use <span className="text-cyan-300 font-bold">Google Analytics tags</span> to monitor traffic and behavior on your site, providing insights to make ongoing improvements.
            </p>
            <p className="text-lg leading-relaxed">
              We ensure your website is indexed correctly by adding <span className="text-cyan-300 font-bold">sitemaps to Google Search Console</span>, helping Google understand and crawl your site efficiently. Additionally, we use AI tools for <span className="text-cyan-300 font-bold">product research keywords</span> that can help identify underserved areas in your market, allowing you to target highly effective, niche keywords.
            </p>
            <p className="text-lg leading-relaxed">
              Our SEO strategies don’t just stop with these tools. We also incorporate <span className="text-cyan-300 font-bold">on-page optimization</span>, such as improving meta tags, headers, and image alt-text, while also focusing on <span className="text-cyan-300 font-bold">off-page SEO</span> by building high-quality backlinks to your site, which help increase domain authority and credibility in search engines. By combining these tools and strategies, we provide a comprehensive approach to achieving top rankings and long-term success for your website.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-semibold text-cyan-500 mb-6">Start Optimizing Your Website Today!</h2>
          <p className="mb-6 text-lg">
            Ready to improve your website's search engine rankings and drive more organic traffic? Contact us today, and let’s get started on building a customized SEO strategy tailored to your business needs!
          </p>
          <a
            href="/Contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition duration-300"
          >
            Contact Us
          </a>
        </div>
        <div className="text-center mt-6">
            <p><a className="text-blue-500 hover:text-blue-300" href="/Solutions/seo">Learn More</a> about our SEO Services</p>
</div>
      </div>
    </div>
  );
};

export default SEODoc;
