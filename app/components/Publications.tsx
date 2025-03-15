"use client";

import React from "react";
import { NAILS_DATA } from "../lib/utils";
import { EvervaultCard } from "./ui/EvervaultCard";

export const Publications = () => {
  return (
    <div className="min-h-screen bg-[#0E0E10] flex flex-col items-center justify-center relative overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 pb-16">
          Publications
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {NAILS_DATA.resources.publications.map((publication, index) => (
            <a
              key={index}
              href={publication.link}
              className="block transform hover:scale-[1.01] transition-transform duration-200"
            >
              <EvervaultCard
                text={publication.title}
                subText={`${publication.author} • ${publication.journal} • ${publication.year}`}
                className="w-full aspect-[4/5]"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}; 