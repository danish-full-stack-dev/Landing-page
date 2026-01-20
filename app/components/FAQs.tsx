"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  id: number;
  number: string;
  question: string;
  answer: string;
}

export const FAQForTrading: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      id: 1,
      number: "01",
      question: "What is media buying and how does it work?",
      answer:
        "Media buying is the process of purchasing advertising space across various platforms like Google, Facebook, TV, and print. Our platform helps agencies manage campaigns, optimize spend, and track performance in real-time.",
    },
    {
      id: 2,
      number: "02",
      question: "How can AI improve media buying campaigns?",
      answer:
        "AI analyzes vast amounts of data to optimize ad targeting, predict performance, automate bidding, and provide insights for better decision-making, leading to higher ROI and more efficient campaigns.",
    },
    {
      id: 3,
      number: "03",
      question: "What platforms do you support for media buying?",
      answer:
        "We support all major platforms including Google Ads, Facebook/Instagram, LinkedIn, Twitter, TikTok, programmatic networks, and traditional media channels with unified reporting and optimization.",
    },
    {
      id: 4,
      number: "04",
      question: "Is your media buying platform secure and compliant?",
      answer:
        "Yes, we use advanced security protocols and are compliant with industry standards. Client data is protected, and we never use it to train third-party models.",
    },
  ];

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="py-10 px-8 relative text-black">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 bg-[#9C27B0] rounded-full flex items-center justify-center">
              <div className="relative">
                <div className="w-20 h-20  rounded-2xl shadow-lg bg-[#ffffff] flex items-center justify-center transform rotate-12">
                  <div className="w-8 h-8 bg-[#aa4dbb] rounded"></div>
                </div>
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-[#000000] rounded-full opacity-80"></div>
              </div>
            </div>
          </div>
          <h2 className="text-2xl md:text-5xl font-semibold mb-4 text-[#9C27B0]">
            FAQ on Media Buying
          </h2>
        </div>

        <div className="space-y-4 flex justify-center items-center flex-col w-3/4 mx-auto">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="border-b last:border-b-0 border-[#a042b1] pb-4 w-full"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full flex items-start justify-between py-4 text-left hover:opacity-70 transition group hover:cursor-pointer"
              >
                <div className="flex items-start gap-4 flex-1">
                  <span className="font-semibold text-lg text-[#9C27B0]">
                    {item.number}
                  </span>
                  <h3 className="text-xl font-normal flex-1 group-hover:translate-x-2 transition-transform duration-400">
                    {item.question}
                  </h3>
                </div>
                <ChevronDown
                  className={`w-6 h-6 transition-transform shrink-0 ml-4 text-[#9C27B0] group-hover:-translate-x-2 duration-400 ${
                    openItem === item.id ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {openItem === item.id && (
                <div className="ml-12 mt-2 pr-10">
                  <p className="leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
