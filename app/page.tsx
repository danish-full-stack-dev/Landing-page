"use client";

import Image from "next/image";
import Link from "next/link";
import Hero from "./Components/Hero";
import ModernProductTeams from "./Components/ModernTeam";
import Ai from "./Components/ArtificalIntelligence";
import ProjectPlanning from "./Components/ProjectPlanning";
import TaskTracking from "./Components/TaskTracking";
import FoundationsSection from "./Components/FoundationSection";
import CollaborateSection from "./Components/CollaborateSection";
import HeroKin from "./Components/Heroo";

export default function Main() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <HeroKin/>
      {/* <Hero/>
      <div>
        <ModernProductTeams/>
      </div>
      <div>
        <Ai/>
      </div>
      <div>
        <ProjectPlanning/>
      </div>
      <div>
        <TaskTracking/>
      </div>
      <div>
        <CollaborateSection/>
      </div>
      <div>
        <FoundationsSection/>
      </div> */}
    </section>
  );
}
