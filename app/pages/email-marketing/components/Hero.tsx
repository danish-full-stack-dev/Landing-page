"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen bg-black text-gray-500 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
      <motion.div 
        className="inset-0 absolute"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        {/* Placeholder for hero image/video */}
        <img
          src="/heroBG2.png"
          alt="nothing"
          className="h-full object-cover w-full opacity-30"
        />
      </motion.div>

      <motion.div
        className="max-w-7xl mx-auto text-center absolute"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Grow Your Business with{" "}
          <span className="text-[#9C27B0]">Simple Email Marketing</span>
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Reach your audience effectively with our intuitive drag-and-drop email
          builder, powerful automation, and insightful analytics.
        </motion.p>
        <motion.button
          className="bg-[#9C27B0] hover:bg-[#6a107a] text-white/80 font-semibold py-2 px-6 rounded-2xl transition duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Free Trial
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
