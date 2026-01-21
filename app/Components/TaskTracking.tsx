import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Flame, Filter, LayoutGrid, Workflow } from "lucide-react";

export default function TaskTracking() {
  return (
    <div className="min-h-screen flex flex-col items-center py-8 px-4">
      {/* Hero Section */}
      <div className="relative w-full max-w-6xl px-4">
        {/* Badge */}
        <div className="flex items-center gap-2 mb-6">
          <span className="h-2 w-2 rounded-full bg-[#9C27B0]" />
          <span className="text-sm text-white">Task Management</span>
        </div>

        {/* Title - constrained width */}
        <div className="text-5xl md:text-6xl text-[#9C27B0] font-semibold mb-8 text-start max-w-3xl leading-tight">
          Efficient Task Tracking for Web Projects
        </div>

        {/* Description - constrained width */}
        <div className="text-lg mb-12 text-start text-white max-w-xl">
          Streamlined for speed and efficiency. Manage tasks, track progress,
          and collaborate seamlessly on your web development projects.
        </div>

        {/* Image positioned with minimal gap */}
        <div className="relative w-full">
          <div className="w-full max-w-4xl mx-auto transform -rotate-2">
            <Image
              src="/issuetracking.png"
              alt="Task tracking dashboard"
              width={1400}
              height={800}
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto flex max-w-7xl gap-16 border-t border-b border-gray-300/50 px-10 py-16 mt-32">
        {/* LEFT SECTION */}
        <div className="flex-1 border-r border-gray-300/50 px-10">
          <h3 className="text-2xl text-[#9C27B0] font-semibold mb-4">
            Self-driving product operations
          </h3>
          <p className="text-lg text-white mb-10">
            Streamline your product development workflows with AI assistance for
            routine, manual tasks.
          </p>

          <div className="relative h-96 mb-5 w-full overflow-hidden rounded-2xl bg-white/5">
            <Image
              src="/issuetracking.png"
              alt="Triage Intelligence"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex-1 px-10">
          <h3 className="text-2xl text-[#9C27B0] font-semibold mb-4">
            Linear MCP
          </h3>
          <p className="text-lg text-white mb-10">
            Connect Linear to your favorite tools including Cursor, Claude,
            ChatGPT, and more.
          </p>

          <div className="relative h-96 w-full mb-5 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <Image
              src="/issuetracking.png"
              alt="Linear MCP"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Bottom Features Section */}
      <div className="relative w-full bg-black overflow-hidden">
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-10 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="flex items-start gap-3">
              <div className="mt-1">
                <Workflow className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-lg  mb-2 text-[#9C27B0]">
                  Tailored workflows
                </p>
                <p className="text-white text-sm leading-relaxed">
                  Track progress across custom issue flows for your team.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1">
                <LayoutGrid className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-[#9C27B0] text-lg  font-medium mb-2">
                  Custom views
                </p>
                <p className="text-white text-sm leading-relaxed">
                  Switch between list and board. Group issues with swimlanes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1">
                <Filter className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-[#9C27B0] text-lg  font-medium mb-2">
                  Filters
                </p>
                <p className="text-white text-sm leading-relaxed">
                  Refine issue lists down to what's most relevant to you.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1">
                <Flame className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-[#9C27B0] text-lg font-medium mb-2">SLAs</p>
                <p className="text-white text-sm leading-relaxed">
                  Automatically apply deadlines to time-sensitive tasks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
