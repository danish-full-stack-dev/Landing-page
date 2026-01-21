"use client";
import React from "react";
import ProjectPlanning from "@/app/components/ProjectPlanning";
import TaskTracking from "@/app/components/TaskTracking";
import CollaborateSection from "@/app/components/CollaborateSection";
import Hero from "@/app/components/Hero";
import ModernProductTeams from "@/app/components/ModernTeam";
import Ai from "@/app/components/ArtificalIntelligence";
import FoundationsSection from "@/app/components/FoundationSection";

export default function page() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <Hero />
      <div>
        <ModernProductTeams />
      </div>
      <div>
        <Ai />
      </div>
      <div>
        <ProjectPlanning />
      </div>
      <div>
        <TaskTracking />
      </div>
      <div>
        <CollaborateSection />
      </div>
      <div>
        <FoundationsSection />
      </div>
    </section>
  );
}
