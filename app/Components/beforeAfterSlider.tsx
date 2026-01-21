import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const isDraggingRef = useRef(false);

  const handleMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x =
      (e.type.includes("mouse") ? e.clientX : e.touches[0].clientX) - rect.left;
    const percentage = (x / rect.width) * 100;

    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  const handleMouseDown = () => {
    isDraggingRef.current = true;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleMouseMove = (e) => {
    if (isDraggingRef.current) {
      handleMove(e);
    }
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <div
          ref={containerRef}
          className="relative w-full h-[60dvh] rounded-2xl overflow-hidden select-none"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
          onTouchMove={handleMove}
        >
          {/* After Image (Background) */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=800&fit=crop"
              alt="After"
              className="w-full h-full object-cover"
              draggable="false"
            />
            {/* After Label */}
            <div className="absolute bottom-8 right-8 text-pink-400 font-bold text-5xl drop-shadow-lg">
              After
            </div>
            {/* Gear Icons */}
            <div className="absolute top-8 left-1/2 flex gap-2">
              <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-white/60 rounded-full relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-6 bg-white/60"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center rotate-90">
                    <div className="w-2 h-6 bg-white/60"></div>
                  </div>
                </div>
              </div>
              <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                <div className="w-6 h-6 border-3 border-white/60 rounded-full relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1.5 h-5 bg-white/60"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center rotate-90">
                    <div className="w-1.5 h-5 bg-white/60"></div>
                  </div>
                </div>
              </div>
              <div className="w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white/60 rounded-full relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1 h-4 bg-white/60"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center rotate-90">
                    <div className="w-1 h-4 bg-white/60"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Before Image (Overlay) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=800&fit=crop"
              alt="Before"
              className="w-full h-full object-cover"
              style={{ width: `${(100 / sliderPosition) * 100}%` }}
              draggable="false"
            />
            {/* Before Label */}
            <div className="absolute bottom-8 left-8 text-white font-bold text-5xl drop-shadow-lg">
              Before
            </div>
            {/* Icon Bubbles */}
            <div className="absolute top-20 left-1/4 flex flex-col gap-4">
              {/* Excel Icon */}
              <div className="w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center">
                <div className="w-10 h-10 bg-green-600 rounded flex items-center justify-center text-white font-bold text-xl">
                  X
                </div>
              </div>
              {/* Colorful Icon */}
              <div className="w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center ml-20">
                <div className="flex gap-0.5">
                  <div className="w-2 h-6 bg-red-500 rounded"></div>
                  <div className="w-2 h-6 bg-yellow-400 rounded"></div>
                  <div className="w-2 h-6 bg-blue-500 rounded"></div>
                </div>
              </div>
              {/* Sync Icon */}
              <div className="w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center ml-10">
                <div className="text-2xl">↻</div>
              </div>
              {/* Checkmark Icon */}
              <div className="w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center ml-32 -mt-8">
                <div className="w-10 h-10 bg-blue-900 rounded flex items-center justify-center text-white text-xl">
                  ✓
                </div>
              </div>
              {/* Multicolor Dot Icon */}
              <div className="w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center ml-40 -mt-4">
                <div className="flex flex-col gap-1">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <div className="flex gap-1 justify-center">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Tangled Lines */}
            <svg
              className="absolute top-20 left-1/4 w-96 h-64 opacity-30"
              style={{ width: `${(100 / sliderPosition) * 100}%` }}
            >
              <path
                d="M 80 80 Q 150 100, 200 80 T 320 100"
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M 80 120 Q 180 140, 240 120 T 360 140"
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M 120 100 Q 200 80, 280 120"
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>

          {/* Slider Line and Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-30"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Slider Handle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center cursor-col-resize">
              <ChevronLeft className="w-5 h-5 text-slate-700 absolute -left-1" />
              <ChevronRight className="w-5 h-5 text-slate-700 absolute -right-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
