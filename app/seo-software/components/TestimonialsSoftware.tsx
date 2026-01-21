'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSoftware() {
  const testimonials = [
    {
      quote:
        'Working with this team transformed our SEO strategy. They understood our SaaS product and market better than any agency we’ve worked with.',
      author: 'Alex Chen',
      role: 'CEO',
      company: 'TechFlow',
      result: '+312% organic growth',
    },
    {
      quote:
        'The transparency and professionalism are exceptional. Monthly reports are detailed and actionable.',
      author: 'Sarah Johnson',
      role: 'Marketing Manager',
      company: 'CloudSoft',
      result: '50+ page 1 keywords',
    },
    {
      quote:
        'They have developers on their SEO team. Technical issues get fixed fast — that’s rare.',
      author: 'Michael Rodriguez',
      role: 'Founder',
      company: 'FinanceHub',
      result: '+189% qualified leads',
    },
    {
      quote:
        'They understand SaaS growth metrics, not just rankings. That’s why the ROI is real.',
      author: 'Emma Williams',
      role: 'CMO',
      company: 'HealthTech Plus',
      result: '3× ROI',
    },
  ];

  return (
    <section className="relative w-full py-24 bg-gradient-to-b 
from-[#050505] 
via-[#0E0E10] 
to-[#070707]
 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[800px] h-[800px] bg-purple-700/10 blur-[160px] rounded-full"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block mb-4 px-14 py-4 text-sm font-semibold tracking-wider text-purple-600 border border-purple-500/30 rounded-full">
            CLIENT SIGNALS
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Trusted by
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-700">
              Software Leaders
            </span>
          </h2>
          <p className="mt-5 text-gray-400 text-lg max-w-3xl mx-auto">
            Live feedback from founders, CEOs, and growth teams we work with.
          </p>
        </div>

        {/* Signal Rail */}
        <div className="relative">
          {/* Vertical rail */}
          <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-purple-600/0 via-purple-500/50 to-purple-600/0"></div>

          {/* Signals */}
          <div className="space-y-20">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`relative flex items-center ${
                  i % 2 === 0 ? 'justify-start pr-12' : 'justify-end pl-12'
                }`}
              >
                {/* Rail Node */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-600 shadow-[0_0_25px_rgba(168,85,247,0.8)]"></div>

                {/* Testimonial Content */}
                <div className="max-w-md text-left">
                  <Quote className="w-6 h-6 text-purple-500 mb-4" />

                  <p className="text-gray-300 text-lg leading-relaxed mb-5">
                    “{t.quote}”
                  </p>

                  {/* Stars */}
                  <div className="flex space-x-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 fill-purple-500 text-purple-600"
                      />
                    ))}
                  </div>

                  {/* Author */}
                  <div className="text-sm">
                    <p className="text-white font-semibold">
                      {t.author}
                    </p>
                    <p className="text-gray-400">
                      {t.role}, {t.company}
                    </p>
                    <p className="text-purple-400 font-semibold mt-2">
                      {t.result}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Proof */}
        <div className="mt-24 flex flex-wrap justify-center gap-12 text-center">
          {[
            { value: '150+', label: 'Clients Served' },
            { value: '98%', label: 'Retention Rate' },
            { value: '4.9★', label: 'Avg Rating' },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-700">
                {stat.value}
              </p>
              <p className="mt-2 text-gray-400 text-xl uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
