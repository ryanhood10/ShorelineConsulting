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
      question: "What does custom programming cost?",
      answer: "The cost of custom programming varies based on the size of the project, but generally speaking, we bill at $120/hour. We always give estimates and quotes ahead of time and keep an open line of communication with our clients so they always know about any scope/cost changes before any additional work is done."
    },
    {
      question: "How long does a project normally take?",
      answer: "The time frame for each development project depends on several factors. It’s based on the size of the project, the functionality being requested, and how quickly we get responses from you when requesting resources and approvals."
    },
    {
      question: "How does the process work?",
      answer: "For most projects, we break it down into phases: Strategy session, research & information gathering, design concepts/revisions, programming implementation, testing, and launch."
    },
    {
      question: "How does maintenance work?",
      answer: "Maintenance depends on the nature of the software. Some projects may not need updates for years, while others require regular updates. We create a custom solution that fits your needs."
    },
    {
      question: "What software tools do you use?",
      answer: "We often use WordPress due to its flexibility, but our development team has a diverse skill set and can adapt to the needs of just about any project."
    }
  ];

  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-12 lg:px-24">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">COMMON QUESTIONS ABOUT PROGRAMMING</h1>
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
