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
    <div className="min-h-screen bg-[#0E0E10] flex flex-col items-center justify-center relative overflow-hidden py-20">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#0E0E10] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <h2 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 pb-16 relative z-20">
        Scope of Work
      </h2>
      <div className="w-[90%] max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-20">
        {scopes.map((scope, index) => (
          <div key={index} className="w-full">
            <TextRevealCard
              text={scope.text}
              revealText={scope.revealText}
              className="w-full"
            >
              <TextRevealCardTitle>
                {scope.title}
              </TextRevealCardTitle>
              <TextRevealCardDescription>
                <ul className="list-disc list-inside space-y-2">
                  {scope.description.map((item, idx) => (
                    <li key={idx} className="text-[#a9a9a9] text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </TextRevealCardDescription>
            </TextRevealCard>
          </div>
        ))}
      </div>
        <div className="flex justify-center items-center py-6">
            By integrating technology, law, and sustainability, the society aims to drive positive environmental and social change globally.
        </div>
    </div>
  );
}; 