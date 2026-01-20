"use client";
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const testimonials = [
  {
    company: "DigitalBoost Agency",
    quote:
      "The media buying platform transformed how we manage campaigns. We've seen a 50% increase in conversion rates.",
    author: "Sarah Johnson",
    role: "Media Director",
    videoThumb:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop",
  },
  {
    company: "AdVantage Media",
    quote:
      "We're still finding innovative tools that surprise and delight our clients all day long.",
    author: "Kyle Duford",
    role: "CEO and Creative Director",
    videoThumb:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=600&fit=crop",
  },
  {
    company: "ROI Masters",
    quote:
      "The analytics integration has streamlined our entire media buying workflow. It's become indispensable.",
    author: "Michael Chen",
    role: "Head of Performance",
    videoThumb:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=600&fit=crop",
  },
  {
    company: "Campaign Pros",
    quote:
      "Customer support is exceptional and the features keep getting better. This is exactly what we needed for media buying.",
    author: "Emma Rodriguez",
    role: "VP of Media Operations",
    videoThumb:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=600&fit=crop",
  },
];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(1);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  useEffect(() => {
    setInterval(() => {
      setActiveIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1,
      );
    }, 4000);
  }, [setActiveIndex]);

  return (
    <div className="text-black py-10">
      <div className="w-full mx-auto">
        {/* Header */}
        <h2 className="text-[42px] font-extrabold mx-auto w-fit my-14 text-center text-[#9C27B0]">
          {" "}
          With happier teams, the
          <br />
          <span>stories write themselves.</span>
        </h2>

        {/* Company Tabs */}
        <div className="flex justify-center mb-12 gap-6">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`pb-2 px-5 transition-all hover:cursor-pointer w-1/4 text-xl ${
                activeIndex === index
                  ? "text-black/50 border-b-2 border-[#9C27B0]"
                  : "text-black hover:text-black/50"
              }`}
            >
              {testimonial.company}
            </button>
          ))}
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="flex items-center justify-center gap-6">
            {/* Previous Button */}
            {/* <button
              onClick={handlePrev}
              className="hidden md:block p-3 rounded-full bg-transparent hover:cursor-pointer border-2 border-[#9C27B0] text-[#9C27B0] hover:border-transparent hover:text-white hover:bg-[#9C27B0] transition-colors z-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button> */}

            {/* Cards Container */}
            <div className="flex items-center justify-center  w-full text-white">
              {testimonials.map((testimonial, index) => {
                const isActive = index === activeIndex;

                return (
                  <div
                    key={index}
                    className={`transition-all duration-500 rounded-2xl overflow-hidden w-full ${
                      isActive ? "opacity-100 block" : "opacity-0 hidden"
                    }`}
                  >
                    <div className="bg-linear-to-br from-[#c173cf] via-[#9C27B0] to-[#7e218f] backdrop-blur rounded-2xl overflow-hidden">
                      <div className="grid md:grid-cols-2 gap-0">
                        {/* Video Thumbnail */}
                        <div className="relative aspect-video md:aspect-auto">
                          <img
                            src={testimonial.videoThumb}
                            alt={testimonial.company}
                            className="w-full h-full object-cover object-top"
                          />
                          <button className="absolute inset-0 flex items-center justify-center group">
                            <div className="w-16 h-16 rounded-full bg-[#9C27B0] flex items-center justify-center group-hover:bg-pink-600 transition-colors">
                              <Play
                                className="w-6 h-6 text-white ml-1"
                                fill="white"
                              />
                            </div>
                          </button>
                          <div className="absolute bottom-4 left-4 bg-slate-900/80 px-3 py-1 rounded text-sm">
                            {testimonial.company}
                          </div>
                        </div>

                        {/* Quote and Author */}
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                          <blockquote className="text-xl md:text-2xl mb-8 leading-relaxed">
                            "{testimonial.quote}"
                          </blockquote>

                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#9C27B0] to-purple-500" />
                            <div>
                              <div className="font-semibold">
                                {testimonial.author}
                              </div>
                              <div className="text-sm text-gray-400">
                                {testimonial.role}
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-6 text-sm">
                            <button className="flex items-center gap-2 hover:text-[#9C27B0] transition-colors">
                              <Play className="w-4 h-4" />
                              Watch the video
                            </button>
                            <button className="hover:text-[#9C27B0] transition-colors border-b border-gray-600 hover:border-[#9C27B0]">
                              Read the story
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Next Button */}
            {/* <button
              onClick={handleNext}
              className="hidden md:block p-3 rounded-full bg-transparent hover:cursor-pointer border-2 border-[#9C27B0] text-[#9C27B0] hover:border-transparent hover:text-white hover:bg-[#9C27B0] transition-colors z-10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button> */}
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-slate-700/50 hover:bg-slate-600/50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-slate-700/50 hover:bg-slate-600/50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeIndex === index
                    ? "bg-[#9C27B0] w-8"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
