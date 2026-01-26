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
    <section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-linear-to-t from-gray-900/50 to-transparent"></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Powerful Integrations
        </motion.h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-purple-500 h-full"></div>
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              className={`flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -150 : 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                type: "spring",
              }}
              viewport={{ once: true }}
            >
              <div
                className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} max-w-lg`}
              >
                <motion.div
                  className="bg-purple-600 rounded-full p-5 mr-6 ml-6 relative z-10"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <integration.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-2 text-purple-400">
                    {integration.title}
                  </h3>
                  <p className="text-gray-300">{integration.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
