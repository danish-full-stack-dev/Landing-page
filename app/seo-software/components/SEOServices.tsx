'use client';

import React from 'react';
import {
  Zap,
  FileText,
  Link2,
  MapPin,
  Package,
  ShoppingCart,
  PenTool,
  Smartphone,
} from 'lucide-react';

export default function SEOServices() {
  const services = [
    { icon: Zap, title: 'Technical SEO', description: 'Core Web Vitals, indexing, crawlability, structured data, and speed optimization.' },
    { icon: FileText, title: 'On-Page SEO', description: 'Keyword targeting, content structure, internal linking, and meta optimization.' },
    { icon: Link2, title: 'Off-Page SEO', description: 'High-quality backlinks, authority building, digital PR, and brand mentions.' },
    { icon: MapPin, title: 'Local SEO', description: 'Google Business Profile, local citations, reviews, and geo-ranking strategies.' },
    { icon: Package, title: 'SaaS / Software SEO', description: 'SEO strategies tailored for SaaS funnels, demos, and freemium models.' },
    { icon: ShoppingCart, title: 'E-commerce SEO', description: 'Product pages, category optimization, schema, and conversion tracking.' },
    { icon: PenTool, title: 'SEO Content Writing', description: 'Pillar pages, blogs, landing pages, and technical SEO content.' },
    { icon: Smartphone, title: 'Web & App SEO', description: 'Web apps, mobile performance, indexing, and cross-platform SEO.' },
  ];

  return (
    <section className="relative w-full py-20 md:py-28 bg-gradient-to-b 
from-[#050505] 
via-[#0E0E10] 
to-[#070707]
 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 bg-purple-700/10 blur-[140px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block mb-4 px-14 py-4 text-sm font-semibold tracking-wider text-purple-600 border border-purple-500/30 rounded-full">
            OUR SEO SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Powerful SEO Solutions for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-700">
              Software-Driven Businesses
            </span>
          </h2>
          <p className="mt-5 text-gray-400 max-w-3xl mx-auto text-lg">
            End-to-end SEO services designed to increase visibility, authority, and conversions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 transition-all duration-500 hover:-translate-y-4 hover:border-purple-500/50 hover:shadow-[0_30px_80px_-20px_rgba(168,85,247,0.35)]"
              >
                {/* Neon side accent */}
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-600 to-purple-400 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>

                {/* Icon */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 w-14 h-14 bg-purple-600/30 blur-xl rounded-full group-hover:scale-125 transition-transform"></div>
                  <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-purple-500 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>

                {/* Hover CTA */}
                <div className="mt-6 text-sm font-semibold text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore service →
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
