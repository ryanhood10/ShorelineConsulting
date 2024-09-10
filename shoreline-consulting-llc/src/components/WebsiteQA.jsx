import React, { useState } from 'react';

const WebsiteQA = () => {
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
      question: "How do you determine the cost of a project?",
      answer: "The cost is based on the complexity and scope of the project. After discussing your needs, we’ll provide an estimate and work with you to ensure the project fits within your budget."
    },
    {
      question: "What is your development process?",
      answer: "Our process includes an initial consultation to understand your needs, research, design, development, testing, and launch. Each phase is customized to your project’s requirements."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity and functionality. We’ll provide an estimated time frame after understanding the full scope of your project."
    },
    {
      question: "Can you integrate my existing systems or tools?",
      answer: "Yes, we specialize in building custom solutions that integrate seamlessly with your existing systems, whether it’s a CRM, API, or other third-party services."
    },
    {
      question: "What technologies do you use?",
      answer: "We prefer to use React for its flexibility and scalability, but we adapt to your needs and select the best technology stack for your specific project."
    }
  ];

  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-12 lg:px-24">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">COMMON QUESTIONS ABOUT WEB DEVELOPMENT</h1>
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

export default WebsiteQA;
