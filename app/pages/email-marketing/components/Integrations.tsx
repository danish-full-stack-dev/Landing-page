"use client";
import React from "react";
import { motion } from "framer-motion";
import { Zap, Database, Shield, Smartphone } from "lucide-react";

const Integrations = () => {
  const integrations = [
    {
      icon: Zap,
      title: "CRM Integration",
      description:
        "Seamlessly connect with popular CRM platforms to sync your contacts and data.",
    },
    {
      icon: Database,
      title: "E-commerce Platforms",
      description:
        "Integrate with Shopify, WooCommerce, and more for automated order updates.",
    },
    {
      icon: Shield,
      title: "Security Tools",
      description:
        "Ensure compliance with GDPR and other regulations through secure integrations.",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description:
        "Sync with mobile marketing tools for cross-platform campaign management.",
    },
  ];

  return (
    <section className="bg-white/5 text-gray-500 py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute h-100 w-100 bg-white/5 blur-2xl rounded-br-full rounded-t-full -top-20 left-0"></div>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Powerful Integrations
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              className="text-center flex flex-col items-center hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false }}
            >
              <div className="bg-[#9C27B0] rounded-full p-6 mb-4">
                <integration.icon className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#9C27B0]">
                {integration.title}
              </h3>
              <p className="text-gray-300 text-sm">{integration.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
