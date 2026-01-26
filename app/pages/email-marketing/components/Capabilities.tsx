"use client";
import { motion } from "framer-motion";

const Capabilities = () => {
  const capabilities = [
    {
      title: "Template Builder",
      description:
        "Create stunning emails with our intuitive drag-and-drop editor. No coding required.",
      image: "Drag-and-Drop Editor Preview",
    },
    {
      title: "Marketing Automation",
      description:
        "Set up drip campaigns and behavior-triggered emails to nurture your leads automatically.",
      image: "Workflows Diagram",
    },  
    {
      title: "Audience Segmentation",
      description:
        "Target the right people with advanced CRM integration and segmentation tools.",
      image: "CRM Dashboard Preview",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Detailed Capabilities
        </motion.h2>
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex-1">
                <motion.h3
                  className="text-2xl sm:text-3xl font-semibold mb-4 text-purple-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {capability.title}
                </motion.h3>
                <motion.p
                  className="text-gray-300 text-lg mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {capability.description}
                </motion.p>
              </div>
              <motion.div
                className="flex-1 bg-gray-800 rounded-lg h-64 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ rotate: 2, scale: 1.05 }}
              >
                <span className="text-gray-400 text-center">
                  {capability.image}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Capabilities;
