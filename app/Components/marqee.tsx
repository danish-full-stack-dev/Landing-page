"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

function Marquee() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center start"],
  });

  const textColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#1f2937", "#ffffff"]
  );

  const brands: string[] = [
    "/ters.png",
    "/D&J.png",
    "/ellis&cco.png",
    "/goodies.png",
    "/outfiters.png",
    "/lvi-info.png",
    "/mpower.png",
    "/NERF.png",
    "/Rising Phonex.png",
    "/rye-assic.png",
    "/saya.png",
    "/sirona.png",
    "/WealthWise.png",
    "/zero.png",
    "/medisonbrook.png",
  ];

  return (
    <motion.section
      ref={sectionRef}
      className="transition-colors duration-300 relative bg-[#d6d7d8]"
    >
      {/* Brand Marquee */}
      <div className="overflow-hidden w-full py-5">
        <motion.div
          className="flex gap-16"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...brands, ...brands, ...brands].map((logo, idx) => (
            <Link key={idx} href={"/design"} className="">
              <div className="shrink-0 md:w-32 w-20 md:h-16 h-auto flex items-center  grayscale hover:grayscale-0 justify-center group relative">
                <img
                  src={logo}
                  alt={`Brand ${idx % brands.length}`}
                  className="max-h-20 object-contain"
                />
                <div className="absolute inset-0" />
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Marquee;
