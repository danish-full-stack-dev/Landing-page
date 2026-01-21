'use client';

import React from 'react';
import { Check } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: '100% White-Hat SEO',
      description:
        'We follow Google guidelines strictly. No black-hat tactics, no shortcuts, no penalties.',
    },
    {
      title: 'In-House Developers + SEO',
      description:
        'Our team combines SEO expertise with technical development skills for holistic optimization.',
    },
    {
      title: 'Agile & Scalable Strategies',
      description:
        'Flexible approach that grows with your business. Adjust strategies as your needs evolve.',
    },
    {
      title: 'Monthly Performance Reports',
      description:
        'Transparent, data-driven reporting. See exactly what we did and what results you got.',
    },
    {
      title: 'Long-Term Ranking Focus',
      description:
        'We build sustainable rankings that last. Not focused on quick wins, but real growth.',
    },
    {
      title: 'Industry-Specific Expertise',
      description:
        'We specialize in software, SaaS, fintech, and tech. We understand your market.',
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-gradient-to-b 
from-[#050505] 
via-[#0E0E10] 
to-[#070707]
">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-2xl text-purple-600 font-semibold mb-3 uppercase tracking-wide">
            Why Choose Us
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Why Software Companies Choose Our Software House
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-800 to-slate-900 border border-gray-700 hover:border-purple-500 rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-600 to-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Box */}
        <div className="mt-16 md:mt-20 bg-gradient-to-r from-purple-950 via-slate-900 to-black border border-purple-500 border-opacity-20 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Our Commitment to Your Success
            </h3>
            <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed">
              We don't believe in one-size-fits-all SEO. Every software company is unique, with
              unique challenges and opportunities. That's why we start with a comprehensive audit,
              deeply understand your business, and build a custom strategy designed specifically for
              your goals.
            </p>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Your success is our success. We're committed to delivering measurable results and
              transparent communication every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
