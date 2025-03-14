"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface Item {
  title: string;
  description: string;
  link: string;
  image: string;
}

export default function EvervaultCard({
  item,
  className,
}: {
  item: Item;
  className?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={cn(
        "relative h-96 w-full rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 overflow-hidden",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Background grid effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
      </div>

      {/* Card content */}
      <div className="relative z-10 h-full flex flex-col">
        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
        <p className="text-gray-300 mb-4 flex-grow">{item.description}</p>
        
        <div className="mt-auto">
          <a
            href={item.link}
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            Read Report
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        style={{
          border: "2px solid rgba(255, 255, 255, 0.1)",
        }}
        animate={{
          borderColor: isHovered
            ? "rgba(255, 255, 255, 0.3)"
            : "rgba(255, 255, 255, 0.1)",
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}