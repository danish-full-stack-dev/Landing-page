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
            Built on Strong <br /> Web Technologies
          </h2>

          <p className="mt-6 text-lg text-gray-300">
            Our web development services are powered by the latest technologies
            and best practices, ensuring robust, secure, and high-performance
            solutions.
          </p>

          <div className="mt-12 space-y-10 text-xl border-t border-gray-800 pt-8">
            <Feature
              title="Modern Frameworks"
              text="Built with React, Next.js, and other cutting-edge technologies for optimal performance."
            />

            <Feature
              title="Security First"
              text="Implementing best security practices to protect your applications and user data."
              link
            />

            <Feature
              title="Scalable Architecture"
              text="Designed to grow with your business, from small sites to enterprise applications."
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
