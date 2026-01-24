"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Clock, Users, TrendingUp } from "lucide-react";

const BestPractices = () => {
  const practices = [
    {
      icon: Mail,
      title: "Personalization",
      description:
        "Use recipient data to create tailored messages that resonate with your audience.",
    },
    {
      icon: Clock,
      title: "Optimal Timing",
      description:
        "Send emails at the right time to maximize open rates and engagement.",
    },
    {
      icon: Users,
      title: "Segmentation",
      description:
        "Divide your audience into groups for more targeted and effective campaigns.",
    },
    {
      icon: TrendingUp,
      title: "A/B Testing",
      description:
        "Test different subject lines, content, and designs to optimize performance.",
    },
  ];

  return (
    <section className="bg-black text-gray-500 py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute h-100 w-100 bg-white/5 blur-2xl rounded-br-full rounded-t-full -bottom-20 right-0"></div>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          Email Marketing Best Practices
        </motion.h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#9C27B0] h-full"></div>
          {practices.map((practice, index) => (
            <motion.div
              key={index}
              className={`flex items-center mb-8 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div
                className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className="bg-[#9C27B0] rounded-full p-4 mr-4 ml-4">
                  <practice.icon className="w-8 h-8 text-white" />
                </div>
                <div
                  className={`bg-white/5 p-6 rounded-lg max-w-md ${index % 2 === 0 ? "text-left" : "text-right"}`}
                >
                  <h3 className="text-xl font-semibold mb-2 text-[#9C27B0]">
                    {practice.title}
                  </h3>
                  <p className="text-gray-300">{practice.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestPractices;
