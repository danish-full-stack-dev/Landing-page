"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  {
    eyebrow: "Client Collaboration",
    title: "Build what clients actually need",
    image: "/herobg.png",
  },
  {
    eyebrow: "Version Control",
    title: "Efficient Git workflows for seamless development",
    image: "/issuetracking.png",
  },
  {
    eyebrow: "Mobile Optimization",
    title: "Responsive design for all devices",
    image: "/productdirection.png",
  },
  {
    eyebrow: "Feedback Integration",
    title: "Incorporate client feedback into development",
    image: "/producteteam.png",
  },
  {
    eyebrow: "Agile Processes",
    title: "Iterative development with regular updates",
    image: "/craftedperfection.png",
  },
];

export default function CollaborateSection() {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    if (!ref.current) return;
    ref.current.scrollBy({
      left: dir * 420,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative bg-black py-32 overflow-hidden">
      {/* Background fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900/80 to-black" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <span className="flex items-center gap-2 text-sm text-purple-400">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
              Workflows and integrations
            </span>

            <h2 className="mt-6 text-[#9C27B0] text-5xl md:text-6xl font-semibold leading-tight">
              Collaborate across <br /> tools and teams
            </h2>
          </div>

          <p className="text-lg text-white max-w-xl self-center">
            Expand the capabilities of the Linear system with a wide variety of
            integrations that keep everyone in your organization aligned and
            focused.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative max-w-full mx-auto px-6 ml-100">
        <div className="relative">
          <div
            ref={ref}
            className="flex gap-8 overflow-hidden scroll-smooth no-scrollbar pb-4"
          >
            {cards.map((card, i) => (
              <div
                key={i}
                className="relative min-w-[380px] h-[480px] rounded-[24px]
                border border-white/10
                bg-white/[0.02]
                backdrop-blur-xl
                overflow-hidden
                shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
              >
                {/* Background image */}
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />

                {/* Dark vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

                {/* Inner glow */}
                <div className="absolute inset-0 rounded-[24px] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]" />

                {/* Content */}
                <div className="absolute bottom-0 p-6">
                  <p className="text-sm text-gray-400">{card.eyebrow}</p>
                  <h3 className="mt-2 text-lg font-medium leading-snug text-white">
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-3 mt-20">
            <button
              onClick={() => scroll(-1)}
              className="h-14 w-14 rounded-full border border-white/15 text-white hover:bg-white/10 transition flex items-center justify-center"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => scroll(1)}
              className="h-14 w-14 rounded-full border border-white/15 text-white hover:bg-white/10 transition flex items-center justify-center"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
