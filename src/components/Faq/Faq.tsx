'use client';

import React, { useState } from 'react';
import { PlusCircle, MinusCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FaqProps {
  textColor: string;
  faqs: FAQItem[];
}

const FAQList: React.FC<FaqProps> = ({ textColor, faqs }) => {
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
            <span className="font-medium">{faq.question}</span>
            {openIndex === index ? (
              <MinusCircle className="w-3 h-3" />
            ) : (
              <PlusCircle className="w-3 h-3" />
            )}
          </button>

          {openIndex === index && (
            <p className="mt-2 text-sm">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQList;
