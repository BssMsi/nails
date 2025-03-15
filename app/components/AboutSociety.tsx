"use client";
import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

export const AboutSociety = ({ about }: { about: string[] }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-black dark:bg-grid-white/[0.05] relative flex flex-col items-center justify-center py-20">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative z-20 flex flex-col items-center justify-center px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400 pb-16">
          About Our Society
        </h2>
        <div className="flex flex-col space-y-16 max-w-4xl">
          {about.map((paragraph, index) => (
            <div 
              key={index} 
              className="opacity-0 animate-fade-in"
              style={{
                animationDelay: `${index * 0.3}s`,
                animationFillMode: "forwards"
              }}
            >
              <TextGenerateEffect
                words={paragraph}
                className="text-left"
                duration={0.7}
                filter={true}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 