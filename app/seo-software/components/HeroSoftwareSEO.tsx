'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function HeroSoftwareSEO() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden pt-20">
      <div className="absolute inset-0 z-10 w-full h-full">
        <img
          src="/seobg.png" 
          alt="SEO Background"
          className="object-cover w-full opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-black to-slate-900 opacity-30"></div>
      </div>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.25; }
        }
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        .pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }
      `}</style>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl pulse-glow"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-purple-500 opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-purple-900 opacity-5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-6xl w-full">
         

          {/* Headline */}
          <div className="text-center mb-6 md:mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4 drop-shadow-lg">
              Data-Driven{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 animate-pulse">
                SEO Services
              </span>{' '}
              That Grow Your Software Business
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-light">
              We help startups & enterprises rank higher, attract qualified traffic, and convert users into customers.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 md:mb-16">
            <button className="group relative inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold px-8 md:px-10 py-4 md:py-5 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 w-full sm:w-auto text-base md:text-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <span className="relative flex items-center space-x-2">
                <span>Get Free SEO Audit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button className="group relative inline-flex items-center justify-center space-x-2 border-2 border-purple-400 text-gray-200 hover:text-white font-bold px-8 md:px-10 py-4 md:py-5 rounded-xl transition-all duration-300 w-full sm:w-auto text-base md:text-lg overflow-hidden hover:shadow-xl hover:shadow-purple-500/20">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <span className="relative">View Case Studies</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
