import React, { useState } from 'react';

const DatabaseQA = () => {
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
      question: "What types of databases do you manage?",
      answer: "We specialize in managing both SQL and NoSQL databases, including MongoDB and SQL. We also offer database hosting solutions for video and photo storage via Google Cloud and other providers."
    },
    {
      question: "Can you help with database selection?",
      answer: "Yes, we work closely with clients to understand their business needs and select the best database solution, whether it’s a SQL database, NoSQL solution like MongoDB, or hybrid approaches."
    },
    {
      question: "What services do you provide for database management?",
      answer: "Our services include database design, setup, optimization, backups, scaling, and private cloud hosting. We ensure your database runs efficiently and securely."
    },
    {
      question: "How do you ensure data security?",
      answer: "We implement industry-standard security protocols such as encryption, role-based access control, regular audits, and data backups to ensure your data remains secure and protected."
    },
    {
      question: "Can you integrate my database with existing systems?",
      answer: "Yes, we offer seamless integration of databases with your existing systems, such as CRMs, APIs, or third-party services to ensure your data flows smoothly across all platforms."
    }
  ];

  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-12 lg:px-24">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">COMMON QUESTIONS ABOUT DATABASE MANAGEMENT</h1>
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

export default DatabaseQA;
