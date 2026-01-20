import Image from "next/image";

export default function FoundationsSection() {
  return (
    <section className="bg-black text-white py-24 mt-10 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="text-lg text-gray-400 uppercase tracking-wide">
            Under the hood
          </span>

          <h2 className="text-[#9C27B0] mt-4 text-7xl md:text-7xl font-semibold leading-tight">
            Built on strong <br /> foundations
          </h2>

          <p className="mt-6 text-lg text-gray-300">
            Linear is so simple to use, it's easy to overlook the wealth of
            complex technologies packed under the hood that keep Linear robust,
            safe, and blazing fast.
          </p>

          <div className="mt-12 space-y-10 text-xl border-t border-gray-800 pt-8">
            <Feature
              title="Linear Sync Engine"
              text="Built with a high-performance architecture and an obsessive focus on speed."
            />

            <Feature
              title="Enterprise-ready security"
              text="Best-in-class security practices keep your work safe and secure at every layer."
              link
            />

            <Feature
              title="Engineered for scale"
              text="Built for teams of all sizes. From early-stage startups to global enterprises."
            />
          </div>

          {/* LOGOS ROW */}
          {/* <div className="mt-12 flex items-center gap-18">
            <div className="relative h-10 w-24 opacity-70 hover:opacity-100 transition">
              <Image
                src="/logo-soc2.svg"
                alt="SOC 2"
                fill
                className="object-contain"
              />
            </div>

            <div className="relative h-10 w-24 opacity-70 hover:opacity-100 transition">
              <Image
                src="/logo-gdpr.svg"
                alt="GDPR"
                fill
                className="object-contain"
              />
            </div>

            <div className="relative h-10 w-24 opacity-70 hover:opacity-100 transition">
              <Image
                src="/logo-hipaa.svg"
                alt="HIPAA"
                fill
                className="object-contain"
              />
            </div>
          </div> */}
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-2xl">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-gray-800/50 shadow-2xl">
              <Image
                src="/foundation.png"
                alt="Linear Sync Engine"
                fill
                className="object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function Feature({
  title,
  text,
  link = false,
}: {
  title: string;
  text: string;
  link?: boolean;
}) {
  return (
    <div>
      <h3 className="font-medium text-white">
        {title}
        {link && <span className="ml-2 text-gray-400">→</span>}
      </h3>
      <p className="mt-2 text-gray-400 max-w-md">{text}</p>
    </div>
  );
}