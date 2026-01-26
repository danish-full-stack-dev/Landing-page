"use client";
import { motion } from "framer-motion";

const SocialProof = () => {
  return (
    <section className="bg-black py-20 px-4 sm:px-6 lg:px-8 h-[60dvh] relative">
      <div className="absolute h-100 w-100 bg-white/5 blur-2xl rounded-tl-full rounded-b-full top-0 right-0"></div>
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center h-full">
        <div className="flex flex-col flex-wrap justify-center items-center sm:gap-12 lg:gap-16">
          {/* Client Logos */}

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl text-gray-500 font-bold text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Trusted by
          </motion.h2>
          <div className="flex space-x-12">
            <div className="bg-gray-900/50 rounded p-4 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
              <span className="text-gray-400 text-xs sm:text-sm">Logo 1</span>
            </div>
            <div className="bg-gray-900/50 rounded p-4 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
              <span className="text-gray-400 text-xs sm:text-sm">Logo 2</span>
            </div>
            <div className="bg-gray-900/50 rounded p-4 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
              <span className="text-gray-400 text-xs sm:text-sm">Logo 3</span>
            </div>
            <div className="bg-gray-900/50 rounded p-4 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
              <span className="text-gray-400 text-xs sm:text-sm">Logo 4</span>
            </div>
            <div className="bg-gray-900/50 rounded p-4 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
              <span className="text-gray-400 text-xs sm:text-sm">Logo 5</span>
            </div>
            <div className="bg-gray-900/50 rounded p-4 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
              <span className="text-gray-400 text-xs sm:text-sm">Logo 1</span>
            </div>
            <div className="bg-gray-900/50 rounded p-4 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
              <span className="text-gray-400 text-xs sm:text-sm">Logo 2</span>
            </div>
            <div className="bg-gray-900/50 rounded p-4 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
              <span className="text-gray-400 text-xs sm:text-sm">Logo 3</span>
            </div>
            <div className="bg-gray-900/50 rounded p-4 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
              <span className="text-gray-400 text-xs sm:text-sm">Logo 4</span>
            </div>
          </div>
        </div>
        {/* Trust Indicators */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
          <div className="text-[#9C27B0] text-lg sm:text-xl">
            ★★★★★ 4.9/5 on Capterra
          </div>
          <div className="text-[#9C27B0] text-lg sm:text-xl">
            ★★★★★ 4.8/5 on G2
          </div>
          <div className="text-[#9C27B0] text-lg sm:text-xl">
            ★★★★★ 4.9/5 on Trustpilot
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
