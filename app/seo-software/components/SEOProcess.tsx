'use client';

import React from 'react';
import { CheckCircle2, Search, Wrench, FileText, Link, TrendingUp } from 'lucide-react';

export default function SEOProcess() {
  const steps = [
    {
      icon: Search,
      number: 1,
      title: 'SEO Audit & Market Research',
      description:
        'We conduct a comprehensive technical audit, analyze your competitors, and identify market opportunities specific to your software niche.',
    },
    {
      icon: CheckCircle2,
      number: 2,
      title: 'Keyword & Competitor Analysis',
      description:
        'Research high-intent keywords your software buyers are searching for. Analyze competitor strategies to find gaps and opportunities.',
    },
    {
      icon: Wrench,
      number: 3,
      title: 'Technical Optimization',
      description:
        'Fix crawlability issues, improve site speed, optimize Core Web Vitals, implement structured data, and ensure mobile responsiveness.',
    },
    {
      icon: FileText,
      number: 4,
      title: 'Content Strategy & Optimization',
      description:
        'Create SEO-optimized content strategy. Develop cornerstone content, blog posts, and landing pages targeting buyer intent keywords.',
    },
    {
      icon: Link,
      number: 5,
      title: 'Authority Building (Backlinks)',
      description:
        'Develop high-quality backlink strategy through industry partnerships, PR outreach, guest posts, and digital PR campaigns.',
    },
    {
      icon: TrendingUp,
      number: 6,
      title: 'Tracking, Reporting & Optimization',
      description:
        'Monthly performance reviews with real metrics. Continuous optimization based on data, traffic trends, and ranking changes.',
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-gradient-to-b 
from-[#050505] 
via-[#0E0E10] 
to-[#070707]
 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-2xl text-purple-600 font-semibold mb-3 uppercase tracking-wide">
            Our Process
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Our 6-Step SEO Process
          </h2>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto text-base md:text-lg">
            A proven, transparent approach to building long-term SEO success
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="space-y-6 md:space-y-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="flex gap-6 md:gap-8">
                {/* Left - Icon & Number */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-purple-600 to-purple-500 flex items-center justify-center mb-4">
                    <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-1 h-12 md:h-16 bg-gradient-to-b from-purple-600 to-slate-800 mt-2"></div>
                  )}
                </div>

                {/* Right - Content */}
                <div className="flex-grow pt-2 md:pt-3">
                  <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-gray-700 hover:border-purple-500 rounded-xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        {step.title}
                      </h3>
                      <span className="text-purple-600 font-bold text-lg md:text-xl">
                        Step {step.number}
                      </span>
                    </div>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
