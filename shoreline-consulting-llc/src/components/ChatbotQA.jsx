import React, { useState } from 'react';
import { FaRobot, FaCog, FaCode, FaFileAlt, FaChartLine } from 'react-icons/fa'; // Adding icons for visual enhancement

const ChatbotQA = () => {
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
      question: "How can an AI chatbot help my business?",
      answer: "Our AI chatbots provide instant, 24/7 customer support, automate routine tasks, and collect valuable customer data like emails and preferences. This can help boost customer satisfaction and streamline marketing efforts."
    },
    {
      question: "Can you integrate the chatbot with my current system?",
      answer: "Yes, we offer seamless integration with your website. The chatbot is cloud-hosted. So, the process is simple with a copy-paste implementation that causes no disruption to your existing systems."
    },
    {
      question: "What kind of data insights can I expect from the chatbot?",
      answer: "Our AI chatbots collect and analyze customer behavior data, allowing you to refine marketing strategies and improve customer interactions based on chat history and data insights."
    },
    {
      question: "Can I customize the chatbot's responses?",
      answer: "Yes, we build custom AI chatbots tailored to your business needs. You can set the tone, language, and specific responses based on the most common questions from your customers."
    },
    {
      question: "Will I receive a document of the chatbot for future use?",
      answer: "Absolutely. We can provide a JSON document of your chatbot, which can be integrated into future conversational AI technologies, ensuring that your chatbot evolves with the industry."
    },
    {
      question: "How do you maintain and update the chatbot after launch?",
      answer: "After the chatbot goes live, we offer ongoing support and improvements. We continuously collect data to optimize the chatbot’s performance and adapt it to your evolving business needs."
    }
  ];

  return (
    <section className="bg-slate-200 text-gray-900 py-16 px-6 md:px-12 lg:px-24">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">COMMON QUESTIONS ABOUT AI CHATBOTS</h1>
        <p className="text-lg text-gray-600">Learn more about how our AI chatbots can revolutionize your business.</p>
      </div>

      {/* Accordion Q&A */}
      <div className="mx-auto max-w-4xl">
        {questions.map((item, index) => (
          <div key={index} className="border-b border-gray-500">
            {/* Question */}
            <div
              onClick={() => toggleQuestion(index)}
              className="flex justify-between items-center py-4 cursor-pointer hover:text-blue-500 transition-colors"
            >
              <h4 className="text-lg md:text-xl flex items-center space-x-2">
                {index === 0 && <FaRobot className="text-blue-600" />}
                {index === 1 && <FaCog className="text-blue-600" />}
                {index === 2 && <FaChartLine className="text-blue-600" />}
                {index === 3 && <FaCode className="text-blue-600" />}
                {index === 4 && <FaFileAlt className="text-blue-600" />}
                {index === 5 && <FaCog className="text-blue-600" />}
                <span>{item.question}</span>
              </h4>
              <span className="text-lg md:text-xl">{activeIndex === index ? '-' : '+'}</span>
            </div>

            {/* Answer */}
            {activeIndex === index && (
              <div className="pb-4 text-gray-700 text-base md:text-lg">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChatbotQA;
