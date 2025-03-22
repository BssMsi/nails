"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardTitle,
  TextRevealCardDescription,
} from "./ui/TextRevealCard";

export const ScopeOfWork = ({ scopes }: { scopes: Array<{
  title: string;
  description: string[];
  text: string;
  revealText: string;
}> }) => {
  return (
    <div className="min-h-screen bg-[#0E0E10] flex flex-col items-center justify-center relative overflow-hidden py-16 md:py-20">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#0E0E10] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 pb-8 md:pb-16 relative z-20">
        Scope of Work
      </h2>
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 relative z-20 px-4 md:px-6">
        {scopes.map((scope, index) => (
          <div key={index} className="w-full flex justify-center">
            <TextRevealCard
              text={scope.text}
              revealText={scope.revealText}
              className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <TextRevealCardTitle>
                {scope.title}
              </TextRevealCardTitle>
              <TextRevealCardDescription>
                <ul className="list-disc space-y-2 px-2">
                  {scope.description.map((item, idx) => (
                    <li key={idx} className="text-[#a9a9a9] text-lg md:text-xl lg:text-2xl ml-5 pl-1">
                      <span className="block">{item}</span>
                    </li>
                  ))}
                </ul>
              </TextRevealCardDescription>
            </TextRevealCard>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center py-8 mt-4 text-center text-[#a9a9a9] text-lg md:text-xl lg:text-2xl px-4 max-w-3xl mx-auto relative z-20">
        By integrating technology, law, and sustainability, the society aims to drive positive environmental and social change globally.
      </div>
    </div>
  );
}; 