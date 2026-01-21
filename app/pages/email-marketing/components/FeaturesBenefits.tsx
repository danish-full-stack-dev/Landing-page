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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-black text-gray-500 h-[60dvh] px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute h-100 w-100 bg-white/5 blur-2xl rounded-br-full rounded-t-full -bottom-20 left-0"></div>
      <div className="max-w-7xl mx-auto h-full flex flex-col items-center justify-center">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-20"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Features & Benefits
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center flex flex-col items-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="p-3 rounded-2xl h-fit mb-10 border-gray-400/60 border-2">
                <feature.icon className="w-8 h-8 text-[#9C27B0] " />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300 ">{feature.benefit}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesBenefits;
