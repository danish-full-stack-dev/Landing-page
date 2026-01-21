'use client';

import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function PricingPlans() {
  const plans = [
    {
      name: 'Starter SEO',
      price: 1500,
      period: '/month',
      description: 'Perfect for early-stage software companies',
      deliverables: [
        'Monthly SEO audit & recommendations',
        'Keyword research & targeting',
        'On-page optimization (up to 10 pages)',
        'Monthly performance report',
        'Technical SEO consultation',
        'Email support',
      ],
      highlighted: false,
    },
    {
      name: 'Growth SEO',
      price: 3500,
      period: '/month',
      description: 'For scaling software businesses',
      deliverables: [
        'All Starter features',
        'Ongoing content strategy & creation',
        'Backlink building campaign',
        'Competitor analysis & strategy',
        'Rank tracking (up to 200 keywords)',
        'Monthly strategy calls',
        'Priority support',
        'Custom integrations',
      ],
      highlighted: true,
      badge: 'POPULAR',
    },
    {
      name: 'Enterprise SEO',
      price: 'Custom',
      period: '',
      description: 'For large enterprises with complex needs',
      deliverables: [
        'All Growth features',
        'Unlimited content & strategy',
        'Dedicated SEO team',
        'Real-time rank tracking',
        'Custom dashboards & reporting',
        'Quarterly business reviews',
        'Priority phone support',
        'White-label options',
      ],
      highlighted: false,
      cta: 'Contact Sales',
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
          <p className="text- text-purple-600 font-semibold mb-3 uppercase tracking-wide">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            SEO Pricing & Plans
          </h2>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto text-base md:text-lg">
            Choose the plan that fits your business stage and growth goals
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-4 ${
                plan.highlighted
                  ? 'bg-linear-to-br from-purple-950 via-slate-900 to-black border-2 border-purple-500 shadow-2xl shadow-purple-500/30 md:scale-105 md:hover:scale-110'
                  : 'bg-linear-to-br from-slate-800 to-slate-900 border border-gray-700 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/20'
              }`}
            >
              {/* Animated background */}
              <div className={`absolute inset-0 bg-linear-to-r from-purple-600 to-purple-400 opacity-0 transition-opacity duration-300 ${plan.highlighted ? 'group-hover:opacity-10' : 'group-hover:opacity-5'}`}></div>

              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-linear-to-r from-purple-600 to-purple-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg shadow-purple-500/30">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="p-8 md:p-10 relative z-10">
                {/* Plan Name */}
                <h3 className="text-2xl font-black text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  {typeof plan.price === 'number' ? (
                    <>
                      <div className="flex items-baseline space-x-2">
                        <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-purple-700">
                          ${plan.price.toLocaleString()}
                        </span>
                        <span className="text-gray-400 font-medium">{plan.period}</span>
                      </div>
                    </>
                  ) : (
                    <div className="text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-purple-300">{plan.price}</div>
                  )}
                </div>
                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-6 rounded-lg font-bold mb-8 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 relative overflow-hidden group/btn ${
                    plan.highlighted
                      ? 'bg-linear-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-600 text-white shadow-lg hover:shadow-2xl hover:shadow-purple-500/50'
                      : 'bg-slate-700 hover:bg-slate-600 text-gray-200 border border-gray-600 hover:border-purple-500'
                  }`}
                >
                  <span>{plan.cta || 'Get Started'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Features List */}
                <div className="space-y-4">
                  {plan.deliverables.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-slate-800 bg-opacity-50 border border-gray-700 rounded-lg p-6 md:p-8 text-center">
          <p className="text-gray-300">
            💡 <span className="font-semibold">All plans include:</span> Initial SEO audit, keyword
            research, technical review, monthly reporting, and ongoing optimization.
          </p>
        </div>
      </div>
    </section>
  );
}
