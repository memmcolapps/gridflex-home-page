'use client';

import React, { useState } from 'react';
import { PlusCircle, MinusCircle } from 'lucide-react';

interface FaqProps{
  textColor: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Can I control meters remotely using the dashboard?',
    answer: 'Yes, you can perform remote connect, disconnect, and configuration operations.'
  },
  {
    question: 'Can the system send alerts?',
    answer: 'I guess'
  },
  {
    question: 'How secure is the system?',
    answer: `I don't know I didn't build it. `
  },
  {
    question: 'Can multiple users access the dashboard?',
    answer: `I guess do u wanna access it ?`
  },
  {
    question: 'Can I generate reports from the dashboard?',
    answer: `You should be able to  `
  }
];

const FAQList: React.FC<FaqProps> = ({textColor}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`w-full text-${textColor}`}>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-200 py-4">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center text-left"
          >
            <span className="font-medium ">{faq.question}</span>
            {openIndex === index ? (
              <MinusCircle className=" w-3 h-3" />
            ) : (
              <PlusCircle className=" w-3 h-3" />
            )}
          </button>

          {openIndex === index && (
            <p className="mt-2  text-sm">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQList;
