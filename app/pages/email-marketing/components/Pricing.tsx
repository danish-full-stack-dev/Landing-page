"use client";
import { motion } from "framer-motion";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      features: ["Up to 500 contacts", "Basic templates", "Email support"],
    },
    {
      name: "Pro",
      price: "$29/month",
      features: [
        "Up to 10,000 contacts",
        "Advanced templates",
        "Automation",
        "Analytics",
        "Priority support",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Unlimited contacts",
        "All features",
        "Dedicated account manager",
        "Custom integrations",
        "24/7 support",
      ],
    },
  ];

  return (
    <section className="bg-black text-gray-500 py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute h-100 w-100 bg-white/5 blur-2xl rounded-br-full rounded-t-full -bottom-20 left-0"></div>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Pricing Plans
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: false }}
              key={index}
              className={`bg-black ${index === 1 && "scale-107"} ${index === 2 && "scale-115"} p-8 rounded-lg text-center border border-gray-400/60 relative flex justify-center flex-col items-center`}
            >
              <h3
                className={`text-2xl sm:text-3xl font-semibold mb-4 ${index === 2 ? "text-[#9C27B0]" : "text-white/80 "}`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-4xl sm:text-5xl font-bold ${index === 1 && "text-[#9C27B0]"} ${index === 2 && "text-[#9C27B0]"} mb-6`}
              >
                {plan.price}
              </p>
              <ul className="text-left space-y-2 pb-16">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-white/80">
                    <span className="text-green-400 mr-2">✓</span> {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-[#9C27B0] hover:bg-[#6a107a] text-white/80 font-semibold py-2 px-6 rounded-2xl transition duration-300 bottom-5 absolute">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
