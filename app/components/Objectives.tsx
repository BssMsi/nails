"use client";
import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

export const Objectives = ({ objectives }: { objectives: string[] }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-black dark:bg-grid-white/[0.05] relative flex flex-col items-center justify-center py-10 md:py-20">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative z-20 flex flex-col items-center justify-center px-4">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400 pb-8 md:pb-16">
          Our Objectives
        </h2>
        <div className="flex flex-col space-y-12 md:space-y-24 max-w-4xl">
          {objectives.map((objective, index) => (
            <div 
              key={index} 
              className="flex items-start gap-3 md:gap-6 opacity-0 animate-fade-in"
              style={{
                animationDelay: `${index * 0.15}s`,
                animationFillMode: "forwards"
              }}
            >
              <span className="text-lg md:text-xl lg:text-2xl font-bold text-neutral-800 dark:text-neutral-200 mt-1 md:mt-1.5">
                {(index + 1).toString().padStart(2, '0')}.
              </span>
              <div className="flex-1">
                <TextGenerateEffect
                  words={objective}
                  className="text-left"
                  duration={0.4}
                  staggerDelay={0.05}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 