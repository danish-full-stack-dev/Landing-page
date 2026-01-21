'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp } from 'lucide-react';

export default function CaseStudies() {
  const [activeSlide, setActiveSlide] = useState(0);

  const caseStudies = [
    {
      company: 'TechFlow (SaaS)',
      result: '312% organic traffic growth',
      timeline: '6 months',
      challenge: 'Competing against established players in crowded SaaS market',
      solution: 'Targeted long-tail keywords, technical SEO overhaul, content strategy',
      metrics: [
        { label: 'Traffic Growth', value: '312%' },
        { label: 'Keywords Ranked', value: '500+' },
        { label: 'Leads Generated', value: '400+' },
      ],
      beforeAfter: { before: '2K visits/mo', after: '8.2K visits/mo' },
    },
    {
      company: 'CloudSoft (Enterprise)',
      result: 'First page rankings for 50+ keywords',
      timeline: '10 months',
      challenge: 'Enterprise software, high search difficulty, budget-conscious',
      solution: 'Content hub strategy, backlink campaign, technical optimization',
      metrics: [
        { label: 'Page 1 Keywords', value: '50+' },
        { label: 'Traffic', value: '+245%' },
        { label: 'SQL Leads', value: '280+' },
      ],
      beforeAfter: { before: '5K visits/mo', after: '17.3K visits/mo' },
    },
    {
      company: 'FinanceHub (Fintech)',
      result: 'Increased qualified leads by 189%',
      timeline: '8 months',
      challenge: 'Highly regulated industry, tough competition, compliance constraints',
      solution: 'Regulatory-compliant content, brand authority building, technical SEO',
      metrics: [
        { label: 'Qualified Leads', value: '+189%' },
        { label: 'Organic Revenue', value: '+245%' },
        { label: 'Conversion Rate', value: '+42%' },
      ],
      beforeAfter: { before: '150 leads/mo', value: '434 leads/mo' },
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const study = caseStudies[activeSlide];

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
            Case Studies
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Proven Results for Software Companies
          </h2>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto text-base md:text-lg">
            See how we've helped companies like yours achieve breakthrough growth
          </p>
        </div>

        {/* Case Study Carousel */}
        <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-900 border border-gray-700 hover:border-purple-500 rounded-2xl p-8 md:p-12 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left - Main Result */}
            <div>
              <div className="mb-6">
                <p className="text-purple-600 text-sm font-bold uppercase tracking-wide mb-2">Featured Case Study</p>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                  {study.company}
                </h3>
                <div className="flex items-baseline space-x-2 mb-6">
                  <TrendingUp className="w-6 h-6 text-purple-600 flex-shrink-0" />
                  <p className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-700">
                    {study.result}
                  </p>
                </div>
                <p className="text-gray-400 font-medium">
                  <span className="text-white font-bold">Timeline:</span> {study.timeline}
                </p>
              </div>

              <div className="space-y-6 md:space-y-8">
                {/* Challenge */}
                <div className="bg-slate-800 bg-opacity-50 border border-gray-700 rounded-lg p-4 hover:border-purple-500 transition-all duration-300">
                  <p className="text-purple-600 text-sm font-bold uppercase tracking-wide mb-2">Challenge</p>
                  <p className="text-gray-300">{study.challenge}</p>
                </div>

                {/* Solution */}
                <div className="bg-slate-800 bg-opacity-50 border border-gray-700 rounded-lg p-4 hover:border-purple-500 transition-all duration-300">
                  <p className="text-purple-600 text-sm font-bold uppercase tracking-wide mb-2">Solution</p>
                  <p className="text-gray-300">{study.solution}</p>
                </div>

                {/* Before/After */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800 border border-gray-600 rounded-lg p-4 hover:border-purple-500 transition-all duration-300">
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-wide mb-2">Before</p>
                    <p className="text-xl font-bold text-gray-300">
                      {study.beforeAfter.before}
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-600 to-purple-700 bg-opacity-20 border border-purple-500 border-opacity-50 rounded-lg p-4 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                    <p className="text-purple-300 text-xs font-bold uppercase tracking-wide mb-2">After</p>
                    <p className="text-xl font-bold text-purple-300">
                      {study.beforeAfter.after || study.beforeAfter.value}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Metrics */}
            <div className="space-y-4 md:space-y-6">
              {study.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="group bg-gradient-to-r from-purple-600 to-purple-500 opacity-15 hover:opacity-30 border border-purple-500 border-opacity-30 hover:border-opacity-100 rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 cursor-pointer"
                >
                  <p className="text-gray-400 text-sm font-medium group-hover:text-purple-300 transition-colors">{metric.label}</p>
                  <p className="text-4xl md:text-5xl font-black text-purple-300 mt-2">
                    {metric.value}
                  </p>
                </div>
              ))}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-gray-600 hover:border-purple-500 rounded-lg p-6 mt-8 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <p className="text-gray-400 text-sm mb-3 font-medium">Ready to see similar results?</p>
                <button className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  View More Cases
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center space-x-4 mt-8 md:mt-10">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-slate-800 hover:bg-slate-700 border border-gray-700 hover:border-purple-500 text-gray-400 hover:text-purple-400 transition-all duration-300 flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex space-x-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeSlide
                    ? 'bg-purple-500 w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-slate-800 hover:bg-slate-700 border border-gray-700 hover:border-purple-500 text-gray-400 hover:text-purple-400 transition-all duration-300 flex items-center justify-center"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
