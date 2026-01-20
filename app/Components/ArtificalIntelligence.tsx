import Image from "next/image";
import Link from "next/link";

export default function Ai() {
  return (
    <div className="min-h-screen flex flex-col items-center py-8 px-4">
      {/* Hero Section with relative positioning */}
      <div className="relative w-full max-w-6xl px-4">
  {/* Badge */}
  <div className="flex items-center gap-2 mb-6">
    <span className="h-2 w-2 rounded-full bg-[#9C27B0]" />
    <span className="text-sm text-white">Artificial intelligence</span>
  </div>

  {/* Title - constrained width */}
  <div className="text-5xl md:text-6xl text-[#9C27B0] font-semibold mb-8 text-start max-w-3xl leading-tight">
    AI-assisted product development
  </div>

  {/* Description - constrained width with better styling */}
  <div className="text-lg mb-6 text-start text-white max-w-xl">
    <span className="text-[#9C27B0] font-medium">Linear for Agents.</span> Choose from a variety of AI agents and start
    delegating work, from code generation to other technical tasks.
  </div>
  
  {/* Button */}
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
        src="/aiassistant.png"
        alt="Linear dashboard preview"
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
              src="/aiassistant.png"
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
              src="/aiassistant.png"
              alt="Linear MCP"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}