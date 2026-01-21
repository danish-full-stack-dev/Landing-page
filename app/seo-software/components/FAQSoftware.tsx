'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSoftware() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How long does SEO take to show results?',
      answer:
        'Most clients start seeing noticeable improvements within 3-4 months, with significant growth typically visible after 6-12 months. This depends on competition level, website condition, and industry. We focus on sustainable, long-term growth rather than quick wins.',
    },
    {
      question: 'Is SEO better than paid ads?',
      answer:
        'Both have their place. SEO provides long-term, sustainable growth and better ROI over time. Paid ads give immediate visibility but cost per click increases. We recommend a balanced strategy: SEO for long-term rankings, paid ads for immediate visibility while rankings build.',
    },
    {
      question: 'Do you guarantee rankings?',
      answer:
        'No legitimate SEO agency can guarantee specific rankings. Google updates algorithms constantly. However, we guarantee effort, transparency, and measurable progress. Were confident in our strategies because theyre data-backed and proven with our clients.',
    },
    {
      question: 'Is SEO safe for my website?',
      answer:
        'Yes, absolutely. We use only white-hat SEO techniques that follow Google guidelines. We never use black-hat tactics like keyword stuffing, cloaking, or buying links. Our goal is sustainable, safe growth that wont result in penalties.',
    },
    {
      question: 'How do you report progress?',
      answer:
        'We provide detailed monthly reports showing: keyword rankings, traffic changes, lead generation, revenue impact, and recommended optimizations. You get access to real-time dashboards and monthly strategy calls to discuss results and next steps.',
    },
    {
      question: 'Do you work with established companies or startups?',
      answer:
        'We work with both. Our Starter plan is designed for early-stage startups. Growth plan for scaling businesses. Enterprise plan for large companies. Regardless of stage, we provide the same quality expertise tailored to your budget and timeline.',
    },
    {
      question: 'What makes your team different from other agencies?',
      answer:
        'Our team combines SEO expertise with in-house developers. We specialize in software, SaaS, and tech companies. We understand your market, your technical challenges, and your growth metrics. Plus, we focus on long-term relationships, not quick projects.',
    },
    {
      question: 'Whats included in the initial consultation?',
      answer:
        'Your free initial consultation includes a comprehensive SEO audit, competitive analysis, market opportunity assessment, and a custom strategy recommendation. Well discuss your goals, timeline, budget, and next steps. No obligation.',
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-gradient-to-b 
from-[#050505] 
via-[#0E0E10] 
to-[#070707]
">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-2xl text-purple-600 font-semibold mb-3 uppercase tracking-wide">
            Questions?
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 mt-4 text-base md:text-lg">
            Everything you need to know about our SEO services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 md:space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-slate-800 to-slate-900 border border-gray-700 hover:border-purple-500 rounded-lg transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between hover:bg-slate-700 hover:bg-opacity-30 transition-all duration-300"
              >
                <span className="text-left text-base md:text-lg font-semibold text-white">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-purple-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 md:px-8 pb-5 md:pb-6 border-t border-gray-700">
                  <p className="text-gray-300 leading-relaxed text-base">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Help */}
        <div className="mt-16 md:mt-20 bg-gradient-to-r from-purple-950 via-slate-900 to-black border border-purple-500 border-opacity-20 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-400 mb-6 text-base md:text-lg">
            Our SEO experts are ready to answer any questions and discuss your specific situation.
          </p>
          <button className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-600 text-white font-semibold rounded-lg transition-all duration-300 text-base md:text-lg">
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
