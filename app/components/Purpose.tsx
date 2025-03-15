"use client";
import React, { useState, useRef, useEffect } from "react";

// Temporary data structure until we have access to the actual data
const NAILS_DATA = {
  organization: {
    purpose: [
      "Revolutionizing the intersection of law and technology through innovative solutions.",
      "Creating sustainable solutions that empower legal professionals worldwide.",
      "Enhancing access to justice through technological innovation and collaboration.",
      "Building a more equitable and efficient legal ecosystem for everyone."
    ]
  }
};

export const Purpose = () => {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const updateMousePosition = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const maskSize = 600; // Fixed larger size for the mask

  return (
    <div className="min-h-screen bg-[#0E0E10] flex flex-col items-center justify-center relative overflow-hidden py-20">
      <div className="relative w-full max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 pb-16">
          Our Purpose
        </h2>
        
        <div 
          ref={containerRef}
          onMouseMove={updateMousePosition}
          className="max-w-4xl mx-auto relative min-h-[400px] rounded-lg"
        >
          {/* Dark Background with Grid */}
          <div className="absolute inset-0 bg-[#0E0E10]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:44px_44px]" />
          </div>

          {/* Dimmed Text Layer */}
          <div className="absolute inset-0 p-8">
            <div className="space-y-6 text-lg md:text-xl">
              {NAILS_DATA.organization.purpose.map((text: string, index: number) => (
                <div key={index} className="leading-relaxed text-white/20">{text}</div>
              ))}
            </div>
          </div>

          {/* Revealed Content with Grid */}
          {mounted && (
            <div
              className="absolute inset-0"
              style={{
                maskImage: 'url("/mask.svg")',
                maskSize: `${maskSize}px`,
                maskRepeat: "no-repeat",
                WebkitMaskImage: 'url("/mask.svg")',
                WebkitMaskSize: `${maskSize}px`,
                WebkitMaskRepeat: "no-repeat",
                maskPosition: `${mousePosition.x - maskSize/2}px ${mousePosition.y - maskSize/2}px`,
                WebkitMaskPosition: `${mousePosition.x - maskSize/2}px ${mousePosition.y - maskSize/2}px`,
              }}
            >
              {/* Grid Background Inside Mask */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[#0E0E10]">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:44px_44px]" />
                </div>
              </div>

              {/* Bright Text Inside Mask */}
              <div className="relative p-8">
                <div className="space-y-6 text-lg md:text-xl">
                  {NAILS_DATA.organization.purpose.map((text: string, index: number) => (
                    <div key={index} className="leading-relaxed text-white">{text}</div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}; 