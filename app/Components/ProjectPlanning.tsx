"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import {
  Target,
  Layers,
  Diamond,
  BarChart3,
} from "lucide-react";

export default function ProjectPlanning() {
  const ITEMS = [
    {
      id: "docs",
      title: "Collaborative documents",
      description:
        "Write down product ideas and work together on feature specs in realtime.",
      image: "/productdirection.png",
    },
    {
      id: "comments",
      title: "Inline comments",
      description:
        "Discuss ideas directly where work happens and keep context intact.",
      image: "/productdirection.png",
    },
    {
      id: "commands",
      title: "Text-to-issue commands",
      description:
        "Seamlessly move between ideation and execution.",
      image: "/productdirection.png",
    },
  ];

  const [active, setActive] = useState(ITEMS[2].id);
  const activeItem = ITEMS.find((i) => i.id === active)!;

  return (
    <div className="min-h-screen flex flex-col items-center py-8 px-4">
      {/* HERO */}
      <div className="relative w-full max-w-6xl px-4">
  {/* Badge */}
  <div className="flex items-center gap-2 mb-6">
    <span className="h-2 w-2 rounded-full bg-[#9C27B0]" />
    <span className="text-sm text-white">Product Direction</span>
  </div>

  {/* Title - constrained width */}
  <div className="text-5xl md:text-6xl text-[#9C27B0] font-semibold mb-8 text-start max-w-3xl leading-tight">
    Set The Product Direction
  </div>

  {/* Description - constrained width */}
  <div className="text-lg mb-6 text-start text-white max-w-xl">
    Align your team around a unified product timeline. Plan, manage, and track all product initiatives with Linear's visual planning tools.
  </div>

  <div className="flex flex-wrap justify-start items-start gap-6 mb-12">
    <Link
      href="#"
      className="rounded-lg bg-[#9C27B0] hover:bg-white/20 px-6 py-3 text-sm font-medium text-white transition border border-white/20"
    >
      Learn more →
    </Link>
  </div>

  {/* Image positioned with minimal gap */}
  <div className="relative w-full">
    <div className="w-full max-w-4xl mx-auto transform -rotate-2">
      <Image
        src="/productdirection.png"
        alt="Linear dashboard preview"
        width={1400}
        height={800}
        className="rounded-xl shadow-2xl w-full h-auto"
      />
    </div>
  </div>
</div>

      {/* TWO IMAGE SECTION */}
      <div className="mx-auto flex max-w-7xl gap-16 border-t border-b border-gray-300/50 px-10 py-16 mt-32">
        <div className="flex-1 border-r border-gray-300/50 px-10">
        
          <h3 className="text-2xl text-[#9C27B0] font-semibold mb-4">
            Self-driving product operations
          </h3>
          <p className="text-lg text-gray-400 mb-10">
            Streamline your product development <br></br> workflows with AI assistance for
            routine, manual tasks.
          </p>

          <div className="relative h-96 mb-5 w-full overflow-hidden rounded-2xl bg-white/5">
            <Image
              src="/productdirection.png"
              alt="Triage Intelligence"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex-1 px-10">
          <h3 className="text-2xl text-[#9C27B0] font-semibold mb-4">
            Linear MCP
          </h3>
          <p className="text-lg text-gray-400 mb-10">
            Connect Linear to your favorite tools including Cursor, Claude,
            ChatGPT, and more.
          </p>

          <div className="relative h-96 w-full mb-5 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <Image
              src="/productdirection.png"
              alt="Linear MCP"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* IDEATE SECTION */}
      <section className="w-full bg-black py-32">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-semibold  mb-10 text-[#9C27B0]">
              Ideate and specify
              <br />
              what to build next
            </h2>

            <div className="space-y-6">
              {ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActive(item.id)}
                  className="group flex items-start gap-4 w-full text-left"
                >
                  <span
                    className={clsx(
                      "mt-1 h-5 w-[2px] rounded-full transition",
                      active === item.id
                        ? "bg-green-500"
                        : "bg-gray-700 group-hover:bg-gray-500"
                    )}
                  />
                  <p
                    className={clsx(
                      "text-lg transition",
                      active === item.id
                        ? "text-[#9C27B0]"
                        : "text-gray-500 group-hover:text-gray-300"
                    )}
                  >
                    {item.title}
                  </p>
                </button>
              ))}
            </div>
          </div>

          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {activeItem.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {activeItem.description}
              </p>
            </div>

            <div className="relative h-[420px] w-full overflow-hidden rounded-xl">
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ✅ BOTTOM FEATURES SECTION */}
      <section className="w-full border-t border-white/10 py-20">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <Feature
            icon={<Target size={18} />}
            title="Initiatives"
            desc="Coordinate strategic product efforts."
          />
          <Feature
            icon={<Layers size={18} />}
            title="Cross-team projects"
            desc="Collaborate across teams and departments."
          />
          <Feature
            icon={<Diamond size={18} />}
            title="Milestones"
            desc="Break projects down into concrete phases."
          />
          <Feature
            icon={<BarChart3 size={18} />}
            title="Progress insights"
            desc="Track scope, velocity, and progress over time."
          />
        </div>
      </section>
    </div>
  );
}

/* 🔹 Feature Item */
function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="space-y-3">
      <div className="text-white/80">{icon}</div>
      <h4 className="text-lg font-semibold text-[#9C27B0]">
        {title}
      </h4>
      <p className="text-sm text-white">
        {desc}
      </p>
    </div>
  );
}