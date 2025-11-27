'use client';

import React, { useState } from 'react';
import Starter from '../ui/Starter';
import { FiPlus, FiMinus } from 'react-icons/fi';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const faqs = [
    {
      question: 'What types of businesses do you support?',
      answer:
        'We work with nearly every industry from standard eCommerce to high-risk sectors like CBD, vape, adult, and supplements. If traditional processors rejected you, we can help.',
    },
    {
      question: 'How fast can I get approved?',
      answer:
        'Our streamlined approval process typically takes 24-48 hours. We review applications quickly and provide fast decisions so you can start processing payments without delay.',
    },
    {
      question: 'Do you offer global payment processing?',
      answer:
        'Yes, we provide global payment processing solutions that allow you to accept payments from customers worldwide. Our platform supports multiple currencies and payment methods across different regions.',
    },
    {
      question: 'How are you different from Stripe or PayPal?',
      answer:
        'Unlike Stripe or PayPal, we specialize in high-risk businesses and offer more flexible approval processes. We provide dedicated support, transparent pricing, and solutions tailored for businesses that traditional processors often reject.',
    },
    {
      question: 'What are your payout times?',
      answer:
        'Payout times vary based on your business type and risk profile. Most businesses receive payouts within 2-5 business days, with some eligible for next-day payouts once established.',
    },
    {
      question: 'Can I integrate your system with my existing setup?',
      answer:
        'Absolutely! We offer comprehensive APIs, plugins, and integrations that work with most eCommerce platforms, shopping carts, and custom systems. Our developer-friendly documentation makes integration straightforward.',
    },
    {
      question: 'How do you handle chargebacks and fraud?',
      answer:
        'We provide advanced fraud prevention tools and chargeback management services. Our system includes real-time fraud detection, dispute resolution support, and tools to help minimize chargeback rates and protect your business.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="border-b border-dashed border-gray-300 py-16 lg:py-20">
      <section className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 px-5">
        <Starter
          heading="Got Questions? We've Got Answers."
          text="Learn how our platform works and keeps your payments running smoothly."
          label="FAQs"
        />
        <div className="w-full max-w-4xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="overflow-hidden rounded-lg bg-[#F5F5F5] shadow-sm">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-1 text-left transition-colors"
                >
                  <div
                    className={`flex w-full items-center justify-between rounded-lg px-5 py-4 transition-all duration-200 ${isOpen ? 'bg-white' : ''}`}
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
                  style={{
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                  }}
                >
                  <div className="min-h-0">
                    <div className="px-6 pb-5">
                      <p className="text-base leading-relaxed text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default FAQs;
