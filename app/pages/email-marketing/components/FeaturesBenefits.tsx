"use client";
import React from "react";
import { motion } from "framer-motion";
import { Zap, Target, Palette, BarChart3 } from "lucide-react";

const FeaturesBenefits = () => {
  const features = [
    {
      icon: Zap,
      title: "Automations",
      benefit: "Save Time with Smart Automation",
    },
    {
      icon: Target,
      title: "Segmentation",
      benefit: "Target the Right Audience",
    },
    {
      icon: Palette,
      title: "Templates",
      benefit: "Beautiful Designs in Minutes",
    },
    { icon: BarChart3, title: "Analytics", benefit: "Track Performance & ROI" },
  ];

  return (
    <section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-linear-to-r from-purple-900/20 to-blue-900/20"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Features & Benefits
        </motion.h2>
        <div className="space-y-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
            >
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg max-w-md">
                <motion.div
                  className="flex items-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="p-3 rounded-full bg-purple-600 mr-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-purple-400">
                    {feature.title}
                  </h3>
                </motion.div>
                <p className="text-gray-300 text-lg">{feature.benefit}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBenefits;
