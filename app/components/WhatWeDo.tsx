"use client";

import React from "react";
import { GlareCard } from "./ui/GlareCard";

const whatWeDoItems = [
  {
    title: "AI Research & Development",
    description: "Conducting cutting-edge research in artificial intelligence, focusing on responsible AI development and practical applications in legal and sustainability domains.",
  },
  {
    title: "Legal Framework Analysis",
    description: "Analyzing and developing legal frameworks that govern AI implementation, ensuring compliance with regulations while promoting innovation.",
  },
  {
    title: "Sustainability Solutions",
    description: "Creating sustainable solutions that leverage AI technology to address environmental challenges and promote eco-friendly practices.",
  },
  {
    title: "Knowledge Sharing",
    description: "Facilitating knowledge exchange between academic institutions, industry experts, and government agencies to advance AI research and applications.",
  },
  {
    title: "Policy Development",
    description: "Contributing to the development of policies that promote responsible AI adoption while considering environmental and social impacts.",
  },
  {
    title: "Community Engagement",
    description: "Building a strong community of researchers, practitioners, and stakeholders committed to advancing AI for sustainable solutions.",
  }
];

export const WhatWeDo = () => {
  return (
    <div className="min-h-screen bg-[#0E0E10] flex flex-col items-center justify-center relative overflow-hidden py-20">
      <div className="relative w-full max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 pb-16">
          What We Do
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whatWeDoItems.map((item, index) => (
            <GlareCard key={index} className="flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </GlareCard>
          ))}
        </div>
      </div>
    </div>
  );
}; 