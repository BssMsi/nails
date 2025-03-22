"use client";
import React, { useState, useRef, useEffect } from "react";

// Utility function to highlight words
const highlightWords = (text: string, shouldHighlight: boolean = false) => {
  let result = text;
  [
    "Network for AI, Legal, and Sustainable Solutions Society",
    "Artificial Intelligence (AI), legal research, and sustainability",
    "government agencies, NGOs, industry experts, and academic institutions",
    "environmental sustainability and regulatory compliance",
    "social and environmental initiatives",
    "ethical AI adoption and ESG compliance",
    "AI research and legal studies",
    "global and national best practices"
  ].forEach(word => {
    const regex = new RegExp(`(${word})`, 'gi');
    result = result.replace(regex, (match) => 
      `<span class="transition-colors duration-300 ${shouldHighlight ? 'text-red-500' : ''}">${match}</span>`
    );
  });
  return result;
};

export const Purpose = () => {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const updateMousePosition = (e: React.MouseEvent) => {
    if (isMobile) return; // Don't update mouse position on mobile
    
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const maskSize = 400;

  return (
    <div className="min-h-screen bg-[#0E0E10] flex flex-col items-center justify-center relative overflow-hidden py-20">
      <div className="relative w-full max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 pb-8 md:pb-16">
          Our Purpose
        </h2>
        
        <div 
          ref={containerRef}
          onMouseMove={updateMousePosition}
          className="max-w-4xl mx-auto relative min-h-[500px] md:min-h-[700px] rounded-lg"
        >
          {/* Dark Background with Grid */}
          <div className="absolute inset-0 bg-[#0E0E10]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:44px_44px]" />
          </div>

          {!isMobile && (
            <>
              {/* Dimmed Text Layer - Only show on desktop */}
              <div className="absolute inset-0 p-4 md:p-8">
                <div className="space-y-4 md:space-y-6 text-base md:text-lg lg:text-xl">
                  <div 
                    className="leading-relaxed text-white/20"
                    onMouseEnter={() => setHoveredIndex(0)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    dangerouslySetInnerHTML={{ 
                      __html: highlightWords("The Network for AI, Legal, and Sustainable Solutions Society is dedicated to advancing responsible Artificial Intelligence (AI), legal research, and sustainability by leveraging insights from government agencies, NGOs, industry experts, and academic institutions.", false) 
                    }}
                  />
                  <div 
                    className="leading-relaxed text-white/20"
                    onMouseEnter={() => setHoveredIndex(1)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    dangerouslySetInnerHTML={{ 
                      __html: highlightWords("Our purpose is to:", false) 
                    }}
                  />
                  <ul className="list-disc list-outside space-y-4 pl-6">
                    <li
                        className="leading-relaxed text-white/20"
                        onMouseEnter={() => setHoveredIndex(2)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <span dangerouslySetInnerHTML={{ 
                          __html: highlightWords("Promote environmental sustainability and regulatory compliance by staying informed on evolving policies and best practices.", false) 
                        }} />
                    </li>
                    <li
                        className="leading-relaxed text-white/20"
                        onMouseEnter={() => setHoveredIndex(3)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <span dangerouslySetInnerHTML={{ 
                          __html: highlightWords("Support social and environmental initiatives by engaging with NGOs and community organizations working towards sustainable development.", false) 
                        }} />
                    </li>
                    <li
                        className="leading-relaxed text-white/20"
                        onMouseEnter={() => setHoveredIndex(4)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <span dangerouslySetInnerHTML={{ 
                          __html: highlightWords("Encourage ethical AI adoption and ESG compliance by learning from responsible private sector enterprises.", false) 
                        }} />
                    </li>
                    <li 
                        className="leading-relaxed text-white/20"
                        onMouseEnter={() => setHoveredIndex(5)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <span dangerouslySetInnerHTML={{ 
                          __html: highlightWords("Stay at the forefront of AI research and legal studies through knowledge exchange with universities and research institutions.", false) 
                        }} />
                    </li>
                    <li 
                        className="leading-relaxed text-white/20"
                        onMouseEnter={() => setHoveredIndex(6)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <span dangerouslySetInnerHTML={{ 
                          __html: highlightWords("Align with global and national best practices in sustainability, legal frameworks, and technology policies to create a meaningful impact.", false) 
                        }} />
                    </li>
                  </ul>
                </div>
              </div>

              {/* Revealed Content with Grid - Only for desktop */}
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
                      <div 
                        className="leading-relaxed text-white"
                        onMouseEnter={() => setHoveredIndex(0)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        dangerouslySetInnerHTML={{ 
                          __html: highlightWords("The Network for AI, Legal, and Sustainable Solutions Society is dedicated to advancing responsible Artificial Intelligence (AI), legal research, and sustainability by leveraging insights from government agencies, NGOs, industry experts, and academic institutions.", 0 === hoveredIndex) 
                        }}
                      />
                      <div 
                        className="leading-relaxed text-white"
                        onMouseEnter={() => setHoveredIndex(1)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        dangerouslySetInnerHTML={{ 
                          __html: highlightWords("Our purpose is to:", false) 
                        }}
                      />
                      <ul className="list-disc list-outside space-y-4 pl-6">
                        <li 
                            className="leading-relaxed text-white"
                            onMouseEnter={() => setHoveredIndex(2)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <span dangerouslySetInnerHTML={{ 
                              __html: highlightWords("Promote environmental sustainability and regulatory compliance by staying informed on evolving policies and best practices.", 2 === hoveredIndex) 
                            }} />
                        </li>
                        <li 
                            className="leading-relaxed text-white"
                            onMouseEnter={() => setHoveredIndex(3)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <span dangerouslySetInnerHTML={{ 
                              __html: highlightWords("Support social and environmental initiatives by engaging with NGOs and community organizations working towards sustainable development.", 3 === hoveredIndex) 
                            }} />
                        </li>
                        <li 
                            className="leading-relaxed text-white"
                            onMouseEnter={() => setHoveredIndex(4)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <span dangerouslySetInnerHTML={{ 
                              __html: highlightWords("Encourage ethical AI adoption and ESG compliance by learning from responsible private sector enterprises.", 4 === hoveredIndex) 
                            }} />
                        </li>
                        <li 
                            className="leading-relaxed text-white"
                            onMouseEnter={() => setHoveredIndex(5)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <span dangerouslySetInnerHTML={{ 
                              __html: highlightWords("Stay at the forefront of AI research and legal studies through knowledge exchange with universities and research institutions.", 5 === hoveredIndex) 
                            }} />
                        </li>
                        <li 
                            className="leading-relaxed text-white"
                            onMouseEnter={() => setHoveredIndex(6)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <span dangerouslySetInnerHTML={{ 
                              __html: highlightWords("Align with global and national best practices in sustainability, legal frameworks, and technology policies to create a meaningful impact.", 6 === hoveredIndex) 
                            }} />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          {/* Mobile view - show text with highlights directly */}
          {isMobile && (
            <div className="relative p-4 md:p-8">
              <div className="space-y-4 md:space-y-6 text-base md:text-lg">
                <div 
                  className="leading-relaxed text-white"
                  dangerouslySetInnerHTML={{ 
                    __html: highlightWords("The Network for AI, Legal, and Sustainable Solutions Society is dedicated to advancing responsible Artificial Intelligence (AI), legal research, and sustainability by leveraging insights from government agencies, NGOs, industry experts, and academic institutions.", true) 
                  }}
                />
                <div 
                  className="leading-relaxed text-white"
                  dangerouslySetInnerHTML={{ 
                    __html: highlightWords("Our purpose is to:", false) 
                  }}
                />
                <ul className="list-disc list-outside space-y-3 md:space-y-4 pl-6">
                  <li className="leading-relaxed text-white">
                    <span dangerouslySetInnerHTML={{ 
                      __html: highlightWords("Promote environmental sustainability and regulatory compliance by staying informed on evolving policies and best practices.", true) 
                    }} />
                  </li>
                  <li className="leading-relaxed text-white">
                    <span dangerouslySetInnerHTML={{ 
                      __html: highlightWords("Support social and environmental initiatives by engaging with NGOs and community organizations working towards sustainable development.", true) 
                    }} />
                  </li>
                  <li className="leading-relaxed text-white">
                    <span dangerouslySetInnerHTML={{ 
                      __html: highlightWords("Encourage ethical AI adoption and ESG compliance by learning from responsible private sector enterprises.", true) 
                    }} />
                  </li>
                  <li className="leading-relaxed text-white">
                    <span dangerouslySetInnerHTML={{ 
                      __html: highlightWords("Stay at the forefront of AI research and legal studies through knowledge exchange with universities and research institutions.", true) 
                    }} />
                  </li>
                  <li className="leading-relaxed text-white">
                    <span dangerouslySetInnerHTML={{ 
                      __html: highlightWords("Align with global and national best practices in sustainability, legal frameworks, and technology policies to create a meaningful impact.", true) 
                    }} />
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}; 