export default function TeamworkCTA() {
  return (
    <div className="min-h-screen text-black flex items-center justify-center p-5">
      <div className="w-full max-w-9/12">
        {/* Awards Bar */}
        <div className="bg-linear-to-br from-[#c173cf] via-[#9C27B0] to-[#7e218f] backdrop-blur-md text-white rounded-3xl mb-16 flex items-center justify-center gap-4 md:gap-8 flex-wrap border border-white/10">
          {/* G2 Rating */}
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-extrabold text-lg text-[#ff492c]">
              G²
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-xl font-bold ">4.5</div>
              <div className="text-orange-400 text-base tracking-wider">
                ★★★★½
              </div>
            </div>
          </div>

          {/* Leader Badge */}
          <div className="relative -top-10">
            <img src="/bg.png" alt="bg" className="max-w-32 h-32" />
          </div>

          {/* Users Love Us Badge */}
          <div className="relative -top-16">
            <img src="/bg.png" alt="bg" className="max-w-40 h-40" />
          </div>

          {/* Highest User Adoption Badge */}
          <div className="relative -top-10">
            <img src="/bg.png" alt="bg" className="max-w-32 h-32" />
          </div>

          {/* Capterra Rating */}
          <div className="flex items-center gap-5">
            <div className="flex flex-col gap-2">
              <div className="text-xl font-bold ">4.5</div>
              <div className="text-orange-400 text-base tracking-wider">
                ★★★★½
              </div>
            </div>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-extrabold text-3xl text-[#ff492c]">
              C
            </div>
            <div className=" font-bold text-xl">Capterra</div>
          </div>
        </div>

        {/* CTA Content */}
        <div className="text-center py-6 px-5">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 max-w-4xl mx-auto">
            Ready to maximize ROI from every media dollar with our AI-powered
            platform?
          </h1>
          <div className="flex gap-5 justify-center flex-wrap">
            <button className="px-10 py-4 text-base font-semibold rounded-full bg-[#9C27B0] text-white hover:cursor-pointer hover:text-[#9C27B0] hover:bg-transparent border-2 border-transparent hover:border-[#9C27B0] hover:-translate-y-0.5 transition-all duration-300">
              Get started now
            </button>
            <button className="px-10 py-4 text-base font-semibold rounded-full bg-transparent  border-2 border-[#9C27B0] hover:cursor-pointer hover:bg-[#9C27B0] hover:border-transparent hover:text-white hover:-translate-y-0.5 transition-all duration-300">
              Book a demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
