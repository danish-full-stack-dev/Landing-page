'use client';

import React from 'react';
import {
  BarChart3,
  Search,
  Link2,
  TrendingUp,
  Bug,
  Zap,
  Rocket,
  Lightbulb,
  Tag,
  Target,
  PenTool,
  Flame,
} from 'lucide-react';

export default function ToolsTechnologies() {
  const tools = [
    { name: 'Google Analytics', icon: BarChart3 },
    { name: 'Search Console', icon: Search },
    { name: 'Ahrefs', icon: Link2 },
    { name: 'SEMrush', icon: TrendingUp },
    { name: 'Screaming Frog', icon: Bug },
    { name: 'GTmetrix', icon: Zap },
    { name: 'PageSpeed', icon: Rocket },
    { name: 'Lighthouse', icon: Lightbulb },
    { name: 'Schema.org', icon: Tag },
    { name: 'Rank Tracking', icon: Target },
    { name: 'Content Studio', icon: PenTool },
    { name: 'Hotjar', icon: Flame },
  ];

  return (
    <section className="relative w-full py-32 md:py-40 bg-gradient-to-b 
from-[#050505] 
via-[#0E0E10] 
to-[#070707]
 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[900px] h-[900px] bg-purple-700/10 blur-[200px] rounded-full"></div>
      </div>

      <div className="relative max-w-[90rem] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-28">
          <span className="inline-block mb-6 px-16 py-5 text-base font-semibold tracking-wider text-purple-600 border border-purple-500/30 rounded-full">
            TECH STACK
          </span>

          <h2 className="text-5xl md:text-6xl font-black text-white">
            Tools Powering
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-700">
              Our SEO Systems
            </span>
          </h2>

          <p className="mt-6 text-gray-400 text-xl max-w-4xl mx-auto">
            Enterprise-grade platforms integrated directly into our SEO workflows.
          </p>
        </div>

        {/* Stack Field */}
        <div className="relative flex flex-wrap justify-center gap-x-28 gap-y-20 max-w-[85rem] mx-auto">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div
                key={index}
                className="group flex items-center gap-6 cursor-default"
              >
                {/* Signal Dot */}
                <span className="relative flex h-4 w-4">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75 animate-ping"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-purple-600"></span>
                </span>

                {/* Tool */}
                <div className="flex items-center gap-4">
                  <Icon className="w-8 h-8 text-purple-600 group-hover:text-purple-300 transition" />
                  <span className="text-gray-300 text-2xl font-medium group-hover:text-white transition">
                    {tool.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Statement */}
        <div className="mt-32 text-center max-w-5xl mx-auto">
          <p className="text-2xl md:text-3xl font-semibold text-white leading-relaxed">
            We don’t just <span className="text-purple-600">use tools</span>.
            <br />
            We engineer systems around them.
          </p>
          <p className="mt-6 text-lg text-gray-400">
            Every platform is integrated into a repeatable, scalable SEO process
            built for software companies.
          </p>
        </div>
      </div>
    </section>
  );
}
