"use client";
import { useRouter } from "next/navigation";

export default function Main() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex justify-center items-center gap-5">
      <button
        className="px-8 py-2 border-blue-700 border text-lg rounded-3xl"
        onClick={() => router.push("/pages/media-buying")}
      >
        Media buying
      </button>
      <button
        className="px-8 py-2 border-blue-700 text-lg border rounded-3xl"
        onClick={() => router.push("/pages/web-development")}
      >
        Web development
      </button>

      <button
        className="px-8 py-2 border-blue-700 text-lg border rounded-3xl"
        onClick={() => router.push("/pages/email-marketing")}
      >
        Email marketing
      </button>

      <button
        className="px-8 py-2 border-blue-700 text-lg border rounded-3xl"
        onClick={() => router.push("/seo-software")}
      >
        SEO services
      </button>

      <button
        className="px-8 py-2 border-blue-700 text-lg border rounded-3xl"
        onClick={() => router.push("/pages/ai-automation")}
      >
        AI Automation
      </button>
    </div>
  );
}
