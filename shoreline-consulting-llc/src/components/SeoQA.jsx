import React, { useState } from 'react';

const SeoQA = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const questions = [
    {
      question: "What is included in the free technical SEO report?",
      answer: "Our free technical SEO report includes an analysis of your website’s performance, page load speed, site structure, and SEO best practices. We also provide actionable recommendations to improve your rankings."
    },
    {
      question: "How long does it take to see SEO results?",
      answer: "SEO is a long-term strategy, and it can take anywhere from 3 to 6 months to start seeing significant improvements. However, this depends on the competitiveness of your industry and the current state of your website."
    },
    {
      question: "Do you optimize for mobile performance?",
      answer: "Yes, optimizing for mobile is a key part of our SEO strategy. We ensure your website is responsive, fast-loading, and provides a great user experience across all devices, which contributes to better search engine rankings."
    },
    {
      question: "How do you improve page load times and Lighthouse scores?",
      answer: "We optimize your website’s code, compress images, and implement caching strategies to improve performance. These changes not only help with page load times but also improve your Google Lighthouse score, which affects your SEO rankings."
    },
    {
      question: "Do you handle social media and Google Business linking?",
      answer: "Yes, we link your social media profiles and Google Business account to ensure consistent branding and improved online visibility across all platforms."
    },
    {
      question: "What is product listing optimization for eCommerce?",
      answer: "For eCommerce brands, we optimize product listings using natural language search, trend analysis, and metadata. This ensures that your products are visible and relevant in search engines, driving more traffic to your listings."
    },
    {
      question: "Can you integrate tracking and analytics tools?",
      answer: "Yes, we integrate tools like Google Analytics and Google Search Console to monitor your site’s performance, track user behavior, and provide insights to optimize your SEO strategy further."
    },
    {
      question: "How often do you perform SEO audits?",
      answer: "Once optimized, we reccomend regular SEO audits monthly, quartly, or yearly, depending on your business needs. This includes tracking keyword rankings, traffic, and site performance to adjust your strategy as needed."
    }
  ];
  
  

  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-12 lg:px-24">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">COMMON QUESTIONS ABOUT SEO</h1>
      </div>

      {/* Accordion Q&A */}
      <div className="mx-auto max-w-4xl">
        {questions.map((item, index) => (
          <div key={index} className="border-b border-gray-700">
            {/* Question */}
            <div
              onClick={() => toggleQuestion(index)}
              className="flex justify-between items-center py-4 cursor-pointer hover:text-blue-400 transition-colors"
            >
              <h4 className="text-lg md:text-xl">{item.question}</h4>
              <span className="text-lg md:text-xl">
                {activeIndex === index ? '-' : '+'}
              </span>
            </div>

            {/* Answer */}
            {activeIndex === index && (
              <div className="pb-4 text-gray-400 text-base md:text-lg">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SeoQA;
