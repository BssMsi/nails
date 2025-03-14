"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export default function TextRevealCard({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "w-full p-4 rounded-lg bg-gray-50 dark:bg-gray-800 shadow-md",
        className
      )}
    >
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full h-full overflow-hidden rounded-lg p-8"
      >
        <motion.div
          className="relative z-10 h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-lg md:text-xl font-medium leading-relaxed">
            {text}
          </div>
        </motion.div>

        <motion.div
          className="absolute inset-0 z-0 bg-gradient-to-br from-primary/20 to-secondary/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />

        <motion.div
          className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <span>Our Comprehensive Approach</span>
        </motion.div>
      </motion.div>
    </div>
  );
}