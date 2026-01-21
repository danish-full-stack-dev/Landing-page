"use client";
import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does email deliverability work?",
      answer:
        "We use advanced algorithms and partnerships with major email providers to ensure high deliverability rates.",
    },
    {
      question: "How long does setup take?",
      answer:
        "You can be up and running in under 15 minutes with our quick setup wizard.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We provide email support for all plans, with priority and phone support for Pro and Enterprise plans.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time with no penalties.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-gray-500 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-20 md:mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-black rounded-2xl border border-gray-400/60 transition duration-300"
            >
              <button
                className="w-full text-left p-6 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg sm:text-xl font-semibold text-white/80">
                    {faq.question}
                  </h3>
                  <span className="text-white/80 text-2xl">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 transition-all">
                  <p className="text-gray-500">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
