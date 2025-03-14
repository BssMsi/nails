"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface Publication {
  title: string;
  author: string;
  journal: string;
  year: string;
  link: string;
  image: string;
}

export default function ThreeDCardEffect({
  item,
  className,
}: {
  item: Publication;
  className?: string;
}) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;
    
    // Calculate rotation based on mouse position relative to card center
    const rotateY = ((e.clientX - cardCenterX) / (rect.width / 2)) * 10;
    const rotateX = -((e.clientY - cardCenterY) / (rect.height / 2)) * 10;
    
    setRotateX(rotateX);
    setRotateY(rotateY);
  };

  const handleMouseLeave = () => {
    // Reset rotation when mouse leaves
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "relative h-96 w-full rounded-xl bg-white dark:bg-gray-800 shadow-lg overflow-hidden cursor-pointer",
        className
      )}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.1s ease",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
    >
      {/* Card background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${item.image || "https://via.placeholder.com/500"})`,
          transform: "translateZ(-20px)",
          filter: "brightness(0.7)",
        }}
      />
      
      {/* Card content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black to-transparent">
        <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
        <p className="text-primary mb-1">{item.author}</p>
        <p className="text-gray-300 text-sm mb-1">{item.journal}</p>
        <p className="text-gray-400 text-sm mb-4">{item.year}</p>
        
        <a
          href={item.link}
          className="inline-flex items-center text-white bg-primary px-4 py-2 rounded-md hover:bg-primary/80 transition-colors"
          style={{ transform: "translateZ(20px)" }}
        >
          Read Publication
        </a>
      </div>
      
      {/* Shine effect */}
      <div
        className="absolute inset-0 opacity-0 hover:opacity-30 bg-gradient-to-tr from-transparent via-white to-transparent transition-opacity duration-300"
        style={{
          transform: `translateX(${rotateY * 10}px) translateY(${rotateX * 10}px)`,
        }}
      />
    </motion.div>
  );
}