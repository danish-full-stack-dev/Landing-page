import React from "react";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import FeaturesBenefits from "./components/FeaturesBenefits";
import Capabilities from "./components/Capabilities";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import BottomCTA from "./components/BottomCTA";

export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <SocialProof />
      <FeaturesBenefits />
      <Capabilities />
      <Testimonials />
      <Pricing />
      <FAQ />
      <BottomCTA />
    </div>
  );
}
