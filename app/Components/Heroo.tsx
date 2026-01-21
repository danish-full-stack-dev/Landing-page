"use client";

import Image from "next/image";

export default function HeroExact() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-r from-[#3a0a45] via-[#4b1361] to-[#120016] text-white">

      {/* CENTER CIRCLE */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[360px] h-[560px] md:w-[480px] md:h-[480px] lg:w-[560px] lg:h-[560px]">
          <Image
            src="/foundation.png"
            alt="Center Orb"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* TEXT LAYER */}
     <div className="relative z-10 flex min-h-screen items-center">
  <div className="w-full max-w-7xl mx-auto px-6 relative">

    {/* BIG HEADING */}
    <h1 className="font-extrabold tracking-tight leading-[0.9] text-center">
      <span className="
        block 
        text-[206px] 
        sm:text-[120px] 
        md:text-[150px] 
        lg:text-[180px]
      ">
        We are
      </span>

      <span className="
        block 
        text-[110px] 
        sm:text-[140px] 
        md:text-[180px] 
        lg:text-[220px]
      ">
        all kin
      </span>
    </h1>

    {/* RIGHT DESCRIPTION */}
    <p className="absolute right-6 top-[52%] -translate-y-1/2 max-w-xs text-2xl font-bold text-white/90">
      Get rewarded when you explore, build, play and engage.
    </p>

  </div>
</div>

    </section>
  );
}
