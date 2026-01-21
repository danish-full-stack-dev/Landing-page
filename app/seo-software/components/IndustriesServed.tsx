'use client';

import React from 'react';
import {
  Laptop,
  Rocket,
  CreditCard,
  Heart,
  ShoppingCart,
  BookOpen,
  Building2,
  BarChart3,
} from 'lucide-react';

export default function IndustriesServed() {
  const industries = [
    { icon: Laptop, name: 'Software Houses' },
    { icon: Rocket, name: 'SaaS Startups' },
    { icon: CreditCard, name: 'Fintech' },
    { icon: Heart, name: 'HealthTech' },
    { icon: ShoppingCart, name: 'E-commerce' },
    { icon: BookOpen, name: 'EdTech' },
    { icon: Building2, name: 'Enterprise' },
    { icon: BarChart3, name: 'Analytics' },
  ];

  return (
    <section className="relative w-full py-32 md:py-40 bg-gradient-to-b 
from-[#050505] 
via-[#0E0E10] 
to-[#070707]
 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[900px] h-[900px] bg-purple-700/10 blur-[180px] rounded-full"></div>
      </div>

      <div className="relative max-w-[90rem] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-28">
          <span className="inline-block mb-6 px-16 py-5 text-base font-semibold tracking-wider text-purple-600 border border-purple-500/30 rounded-full">
            INDUSTRIES WE SERVE
          </span>

          <h2 className="text-5xl md:text-6xl font-black text-white">
            Built for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-700">
              Software & Tech Businesses
            </span>
          </h2>
        </div>

        {/* Orbit Layout */}
        <div className="relative flex items-center justify-center h-[680px] md:h-[760px]">
          {/* Center Core */}
          <div className="relative z-10 w-64 h-64 rounded-full bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center text-center shadow-2xl shadow-purple-500/40">
            <span className="text-white font-bold text-xl leading-tight">
              Industries
              <br />
              We Power
            </span>
          </div>

          {/* Orbit Ring */}
          <div className="absolute w-[560px] h-[560px] border border-purple-500/20 rounded-full animate-spin-slow"></div>

          {/* Industry Nodes */}
          {industries.map((item, index) => {
            const Icon = item.icon;
            const angle = (360 / industries.length) * index;
            return (
              <div
                key={index}
                style={{
                  transform: `rotate(${angle}deg) translate(280px) rotate(-${angle}deg)`,
                }}
                className="absolute group"
              >
                <div className="relative w-20 h-20 rounded-full bg-white flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:bg-purple-600 shadow-xl shadow-purple-500/30">
                  <Icon className="w-9 h-9 text-purple-600 group-hover:text-white transition-colors" />
                </div>

                {/* Label */}
                <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 text-base text-gray-400 group-hover:text-purple-400 transition-colors whitespace-nowrap">
                  {item.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Slow spin animation */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 36s linear infinite;
        }
      `}</style>
    </section>
  );
}
