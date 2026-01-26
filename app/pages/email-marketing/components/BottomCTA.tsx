"use client";
import { motion } from "framer-motion";

const BottomCTA = () => {
  return (
    <section className="text-gray-500 py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute h-100 w-100 bg-white/5 blur-2xl rounded-br-full rounded-t-full bottom-20 left-0"></div>
      <div className="absolute h-100 w-100 bg-white/5 blur-2xl rounded-tl-full rounded-t-full bottom-20 right-0"></div>
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Ready to Grow Your Business?
        </motion.h2>
        <p className="text-lg sm:text-xl mb-8 text-white/80">
          Join thousands of marketers who trust our platform to deliver results.
        </p>
        <button className="bg-[#9C27B0] hover:bg-[#6a107a] text-white/80 font-semibold py-2 px-6 rounded-2xl transition duration-300">
          Start Your Free Trial Today
        </button>
      </div>
    </section>
  );
};

export default BottomCTA;
