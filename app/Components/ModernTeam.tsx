"use client";

import { useState } from "react";
import { X, Zap, Sparkles } from "lucide-react";
import Image from "next/image";

const cardData = [
  {
    id: 1,
    title: "Purpose-built for\nproduct development",
    image: "/producteteam.png",
    modalTitle: "Purpose-built for product development",
    modalDescription:
      "Linear is designed specifically for modern product teams. With features tailored to your workflow, it helps you ship faster and more efficiently.\n\nFrom issue tracking to project planning, every feature is crafted to support the way high-performing product teams work.",
    showImage: true,
  },
  {
    id: 2,
    title: "Designed to move fast",
    image: "/designspeed.png",
    modalTitle: "Designed to move fast",
    modalDescription:
      "Linear is built in pursuit of high-performance. With its keyboard-first design, realtime sync, and zero-friction workflows, it delivers a focused experience ideal for fast-paced development environments.\n\nLinear's obsessive focus on speed not only results in improved developer productivity, but also enables teams to move faster.",
    animation: true,
  },
  {
    id: 3,
    title: "Crafted to perfection",
    image: "/craftedperfection.png",
    modalTitle: "Crafted to perfection",
    modalDescription:
      "Every pixel, interaction, and detail in Linear is carefully designed to create a delightful and efficient experience for product teams.\n\nFrom the subtle animations to the thoughtful keyboard shortcuts, Linear's interface is a testament to design excellence.",
    showPerfection: true,
  },
];

export default function ModernProductTeams() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const openModal = (cardId: number) => {
    setSelectedCard(cardId);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  const activeCard = cardData.find((card) => card.id === selectedCard);

  return (
    <>
      <section className="relative w-full bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 pb-40 pt-32">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            <h2 className="text-6xl text-[#9C27B0] font-semibold leading-tight tracking-tight sm:text-5xl">
              Made for modern
              <br />
              product teams
            </h2>

            <p className="max-w-md text-lg leading-relaxed text-white">
              Linear is shaped by the practices and principles that distinguish
              world-class product teams from the rest: relentless focus, fast
              execution, and a commitment to the quality of craft.{" "}
              <span className="cursor-pointer text-[#9C27B0] hover:underline">
                Make the switch →
              </span>
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-3">
            {cardData.map((card) => (
              <div
                key={card.id}
                className="group relative overflow-hidden rounded-3xl bg-white/[0.03] p-6 backdrop-blur cursor-pointer"
              >
                {/* BG IMAGE */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30"
                  style={{ backgroundImage: `url('${card.image}')` }}
                />
                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative h-48 rounded-2xl bg-black/40" />
                <p className="relative mt-6 text-lg font-medium whitespace-pre-line">
                  {card.title}
                </p>

                <button
                  onClick={() => openModal(card.id)}
                  className="absolute bottom-6 right-6 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/70 hover:bg-white/10 transition"
                >
                  +
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selectedCard && activeCard && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-3xl mx-4 bg-neutral-900 rounded-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white/70 hover:bg-black/60 hover:text-white transition"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Content */}
            <div className="p-12">
              {/* Card 1 - Product Development Image/Illustration */}
              {activeCard.showImage && (
                <div className="mb-8 flex justify-center">
                  <div className="relative w-full max-w-md h-64 rounded-2xl overflow-hidden border border-white/10">
                    <Image
                      src={activeCard.image}
                      alt={activeCard.modalTitle}
                      fill
                      className="object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
                    
                    {/* Overlay icons */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex gap-8">
                        <div className="w-16 h-16 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                          <Zap className="h-8 w-8 text-purple-400" />
                        </div>
                        <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                          <Sparkles className="h-8 w-8 text-cyan-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Card 2 - Animation Section */}
              {activeCard.animation && (
                <div className="mb-8 flex justify-center">
                  <div className="relative">
                    {/* Speed indicator */}
                    <div className="text-6xl font-bold text-gray-500 mb-6">
                      50ms
                    </div>
                    {/* Animated lines */}
                    <div className="space-y-3">
                      {[...Array(12)].map((_, i) => (
                        <div
                          key={i}
                          className="h-1 bg-gray-600 rounded-full"
                          style={{
                            width: `${200 + i * 40}px`,
                            animation: `slideIn 1.5s ease-out ${i * 0.1}s infinite`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Card 3 - Perfection Grid */}
              {activeCard.showPerfection && (
                <div className="mb-8 flex justify-center">
                  <div className="relative w-full max-w-md">
                    {/* Grid of perfect squares */}
                    <div className="grid grid-cols-8 gap-2">
                      {[...Array(64)].map((_, i) => (
                        <div
                          key={i}
                          className="aspect-square rounded-md bg-gradient-to-br from-purple-500/30 to-cyan-500/30 border border-white/10"
                          style={{
                            animation: `fadeInScale 0.6s ease-out ${i * 0.02}s both`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Title */}
              <h2 className="text-4xl font-semibold text-white mb-6">
                {activeCard.modalTitle}
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-400 leading-relaxed whitespace-pre-line">
                {activeCard.modalDescription}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Animation Keyframes */}
      <style jsx global>{`
        @keyframes slideIn {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(0);
            opacity: 0.5;
          }
        }
        
        @keyframes fadeInScale {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}