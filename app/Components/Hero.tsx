"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-linear-to-b from-white/5 via-transparent to-black" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-40">
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-[#9C27B0] sm:text-5xl md:text-6xl">
          Linear is a purpose-built tool for
          <br className="hidden sm:block" /> planning and building products
        </h1>

        <p className="mt-6 max-w-2xl text-base text-white sm:text-lg">
          Empower your business with cutting-edge web development services.
          <br />
          Build responsive, scalable, and user-friendly web solutions.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Link
            href="#"
            className="rounded-lg bg-[#9C27B0] hover:bg-white/20 px-6 py-3 text-sm font-medium text-white transition border border-white/20"
          >
            Start Building
          </Link>

          <Link
            href="#"
            className="flex items-center gap-2 text-sm text-gray-300 hover:text-white"
          >
            <span className="text-gray-400">New:</span> Linear agent for Slack
            <span className="text-lg">→</span>
          </Link>
        </div>
      </div>

      {/* Hero Background Image */}
      <div className=" mt-60 pointer-events-none absolute top-[280px] left-1/2 w-full max-w-5xl -translate-x-1/2 -rotate-2 opacity-90">
        <Image
          src="/herobg.png"
          alt="Linear dashboard preview"
          width={1600}
          height={800}
          className="rounded-xl shadow-2xl w-full h-auto"
        />
      </div>

      {/* Hero Content - Below Hero Section */}
      <div className="relative z-10 mx-auto mt-[680px] max-w-6xl px-6 pb-32 text-center">
        <p className="text-xl font-medium text-[#9C27B0]">
          Powering the world's best product teams.
        </p>
        <p className="mt-2 text-sm text-white">
          From next-gen startups to established enterprises.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-4">
          <span className="text-lg font-semibold text-gray-300">OpenAI</span>
          <span className="text-lg font-semibold text-gray-300">Cash App</span>
          <span className="text-lg font-semibold text-gray-300">scale</span>
          <span className="text-lg font-semibold text-gray-300">ramp</span>

          <span className="text-lg font-semibold text-gray-300">▲ Vercel</span>
          <span className="text-lg font-semibold text-gray-300">coinbase</span>
          <span className="text-lg font-semibold text-gray-300">BOOM</span>
          <span className="text-lg font-semibold text-gray-300">CURSOR</span>
        </div>
      </div>
    </section>
  );
}
