'use client';
import Starter from '../ui/Starter';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { useState } from 'react';

const Roles = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Accounting',
      answer: 'No open roles at the moment',
    },
    {
      question: 'Customer Relations',
      answer: 'No open roles at the moment',
    },
    {
      question: 'Human Resources',
      answer: 'No open roles at the moment',
    },
    {
      question: 'Logistics',
      answer: 'No open roles at the moment',
    },
    {
      question: 'Marketing',
      answer: 'No open roles at the moment',
    },
    {
      question: 'Operations',
      answer: 'No open roles at the moment',
    },
    {
      question: 'Sales',
      answer: 'No open roles at the moment',
    },
    {
      question: 'Technical Support',
      answer: 'No open roles at the moment',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const mid = Math.ceil(faqs.length / 2);
  const leftFAQs = faqs.slice(0, mid);
  const rightFAQs = faqs.slice(mid);

  const renderItem = (faq, index) => {
    const isOpen = openIndex === index;

    return (
      <div
        key={index}
        className="card-hover overflow-hidden rounded-lg bg-[#F5F5F5] shadow-sm"
        data-animate="fade-up"
        style={{ transitionDelay: `${index * 60}ms` }}
      >
        <button onClick={() => toggleFAQ(index)} className="w-full p-1 text-left transition-colors">
          <div
            className={`flex w-full items-center justify-between rounded-lg px-5 py-4 transition-all duration-200 ${
              isOpen ? 'bg-white' : ''
            }`}
          >
            <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
            <div className="ml-4 shrink-0">
              {isOpen ? (
                <FiMinus className="h-5 w-5 text-gray-600 transition-transform duration-200" />
              ) : (
                <FiPlus className="h-5 w-5 text-gray-600 transition-transform duration-200" />
              )}
            </div>
          </div>
        </button>

        <div
          className="grid overflow-hidden transition-all duration-300 ease-in-out"
          style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
        >
          <div className="min-h-0">
            <div className="px-6 py-5">
              <p className="text-base leading-relaxed text-gray-600">{faq.answer}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="border-border b-bottom border-dashed py-16 lg:py-20" data-animate="fade-up">
      <section className="mx-auto flex max-w-[1440px] flex-col items-center gap-20 px-5">
        <div data-animate="fade-up">
          <Starter heading="Open Roles at Our Company" />
        </div>

        <div className="grid w-full max-w-6xl grid-cols-1 items-start gap-6 md:grid-cols-2">
          <div className="space-y-4">{leftFAQs.map((faq, i) => renderItem(faq, i))}</div>

          <div className="space-y-4">
            {rightFAQs.map((faq, i) => renderItem(faq, i + leftFAQs.length))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Roles;
