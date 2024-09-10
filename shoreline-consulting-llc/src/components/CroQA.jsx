import React, { useState } from 'react';

const CroQA = () => {
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
      question: "What is Conversion Rate Optimization (CRO)?",
      answer: "CRO is the process of improving your website's performance to convert more visitors into customers. This involves optimizing usability, design, content, and conversion funnels."
    },
    {
      question: "How does CRO benefit my business?",
      answer: "CRO helps improve the effectiveness of your website, turning more visitors into paying customers. By optimizing key areas like usability and design, CRO ensures you get the most out of your marketing efforts."
    },
    {
      question: "What’s involved in a CRO audit?",
      answer: "Our CRO audit evaluates various elements of your website, including user experience, mobile and desktop navigation, content effectiveness, marketing conversions, and the overall aesthetic. We identify barriers to conversion and provide recommendations for improvement."
    },
    {
      question: "How do you optimize conversion funnels?",
      answer: "We analyze the customer journey from entry to conversion, identify drop-off points, and streamline the process to make it clear, concise, and user-friendly. This results in a shorter, more efficient sales funnel."
    },
    {
      question: "Do you handle website copy and design improvements?",
      answer: "Yes, we assess your website copy to ensure it effectively communicates key product benefits and includes strong calls-to-action. We also enhance the visual design to align with your branding and build trust with visitors."
    },
    {
      question: "How do you measure the effectiveness of CRO?",
      answer: "We track various metrics, such as conversion rates, bounce rates, and user engagement, before and after optimization. This allows us to measure the success of our CRO strategies and adjust accordingly for continuous improvement."
    },
    {
      question: "How long does it take to see results from CRO?",
      answer: "Results can vary based on the scope of the project, but typically, businesses see improvements in conversion rates within a few weeks to a couple of months. Continuous optimization further enhances long-term performance."
    },
    {
      question: "What kind of businesses benefit from CRO?",
      answer: "Any business with an online presence, whether eCommerce, service-based, or informational, can benefit from CRO. If your goal is to increase conversions from marketing traffic, CRO will help maximize your ROI."
    }
  ];

  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-12 lg:px-24">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">COMMON QUESTIONS ABOUT CRO</h1>
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

export default CroQA;
