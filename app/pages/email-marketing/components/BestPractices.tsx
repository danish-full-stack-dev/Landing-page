"use client";
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
    <section className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-linear-to-br from-purple-800/10 to-pink-800/10"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, rotate: -10 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Email Marketing Best Practices
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {practices.map((practice, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-8 rounded-xl shadow-2xl"
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
            >
              <motion.div
                className="flex items-center mb-6"
                whileHover={{ scale: 1.1 }}
              >
                <div className="bg-purple-600 rounded-full p-4 mr-4">
                  <practice.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-purple-400">
                  {practice.title}
                </h3>
              </motion.div>
              <p className="text-gray-300 text-lg leading-relaxed">
                {practice.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestPractices;
