'use client';

import React from 'react';
import { Rocket, BarChart3, Search, Zap } from 'lucide-react';

export default function WhatMakesUsDifferent() {
  const differences = [
    {
      icon: Rocket,
      title: 'Software-Focused SEO',
      description:
        'We specialize in SaaS, fintech, and enterprise software. We understand your buyers, your sales cycles, and your technical landscape.',
    },
    {
      icon: BarChart3,
      title: 'Data-Backed Strategy',
      description:
        'Every decision is backed by analytics. We analyze competitors, audit your site, and build strategies based on real market data.',
    },
    {
      icon: Search,
      title: 'Transparent Reporting',
      description:
        'Monthly dashboards with real metrics: rankings, traffic, leads generated, and ROI. No fluff, no guessing.',
    },
    {
      icon: Zap,
      title: 'In-House Technical Team',
      description:
        'Our SEO specialists are also developers. We fix technical issues, optimize server performance, and handle complex integrations.',
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
            Why We're Different
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            SEO Built for Software Companies
          </h2>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto text-base md:text-lg">
            We don't do generic SEO. We specialize in software businesses with specialized strategies
            that drive qualified leads.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {differences.map((diff, index) => {
            const IconComponent = diff.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800 to-slate-900 border border-gray-700 hover:border-purple-500 rounded-2xl p-8 md:p-10 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-400 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-purple-600  group-hover:opacity-40 flex items-center justify-center mb-6 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6 relative z-10">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-purple-600 transition-colors duration-300 relative z-10">
                  {diff.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed text-base group-hover:text-gray-200 transition-colors duration-300 relative z-10">
                  {diff.description}
                </p>

                {/* Top border accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
