'use client';

import React from 'react';
import { ArrowRight, Zap, Shield } from 'lucide-react';

export default function FinalCTASoftware() {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-gradient-to-b 
from-[#050505] 
via-[#0E0E10] 
to-[#070707]
 border-t border-gray-800 overflow-hidden relative">
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-600 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500 opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Main CTA Content */}
        <div className="group relative bg-gradient-to-br from-purple-950 via-slate-900 to-black border-2 border-purple-500 border-opacity-30 hover:border-opacity-100 rounded-3xl p-8 md:p-16 text-center transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-400 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>

          <div className="max-w-3xl mx-auto relative z-10">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl mb-6 shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:scale-110">
              <Zap className="w-8 h-8 text-white" />
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 group-hover:text-purple-300 transition-colors duration-300">
              Ready to Grow Your Business with SEO?
            </h2>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed font-light">
              Get a free, comprehensive SEO audit and custom strategy. No obligations. No fluff.
              Just a clear roadmap to growing your software business through organic search.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-10 max-w-2xl mx-auto">
              <div className="flex items-center space-x-3 justify-center md:justify-start bg-slate-800 bg-opacity-50 border border-gray-700 rounded-lg p-4 hover:border-purple-500 transition-all duration-300">
                <Shield className="w-6 h-6 text-purple-600 flex-shrink-0" />
                <span className="text-gray-300 text-sm md:text-base font-medium">White-hat SEO only</span>
              </div>
              <div className="flex items-center space-x-3 justify-center md:justify-end bg-slate-800 bg-opacity-50 border border-gray-700 rounded-lg p-4 hover:border-purple-500 transition-all duration-300">
                <Zap className="w-6 h-6 text-purple-600 flex-shrink-0" />
                <span className="text-gray-300 text-sm md:text-base font-medium">Results-driven approach</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="group/btn relative inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-600 text-white font-bold px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 w-full sm:w-auto text-lg overflow-hidden">
                <span className="relative flex items-center space-x-2">
                  <span>Request Free SEO Consultation</span>
                  <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>

            {/* Trust Text */}
            <p className="text-sm text-gray-500 font-medium">
              ✓ 30-minute strategic consultation  •  ✓ No commitment required  •  ✓ Actionable recommendations
            </p>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16 md:mt-20">
          {[
            { label: 'Free Audit', value: '✓' },
            { label: 'Custom Strategy', value: '✓' },
            { label: 'No Sales Pressure', value: '✓' },
            { label: 'Same Day Response', value: '✓' },
          ].map((stat, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-800 to-slate-900 border border-gray-700 hover:border-purple-500 rounded-lg p-4 md:p-6 text-center transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 transform hover:-translate-y-2"
            >
              <p className="text-purple-600 font-black text-2xl md:text-3xl group-hover:text-purple-300 transition-colors">{stat.value}</p>
              <p className="text-gray-400 text-xs md:text-sm mt-2 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
