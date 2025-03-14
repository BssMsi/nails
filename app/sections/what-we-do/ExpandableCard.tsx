"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export default function ExpandableCard({
  title,
  year,
  onReadMore,
  className,
}: {
  title: string;
  year: string;
  onReadMore: () => void;
  className?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={cn(
        "w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onReadMore}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
    >
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400">{year}</p>
        
        <motion.div
          className="mt-4 flex justify-end"
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            height: isHovered ? "auto" : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <button
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onReadMore();
            }}
          >
            Read More
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}