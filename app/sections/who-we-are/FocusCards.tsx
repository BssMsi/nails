"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface FocusCardItem {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export default function FocusCards({
  items,
  className,
}: {
  items: FocusCardItem[];
  className?: string;
}) {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", className)}>
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          className={cn(
            "group relative h-80 cursor-pointer overflow-hidden rounded-lg",
            focusedIndex === idx ? "z-10" : "",
            focusedIndex !== null && focusedIndex !== idx ? "opacity-50" : ""
          )}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          viewport={{ once: true }}
          onMouseEnter={() => setFocusedIndex(idx)}
          onMouseLeave={() => setFocusedIndex(null)}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{
              backgroundImage: `url(${item.image || "https://via.placeholder.com/500"})`,
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 transition-opacity duration-500" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
            <motion.h3
              className="text-xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 + 0.1 }}
              viewport={{ once: true }}
            >
              {item.name}
            </motion.h3>
            <motion.p
              className="text-primary font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 + 0.2 }}
              viewport={{ once: true }}
            >
              {item.role}
            </motion.p>
            <motion.p
              className="mt-2 text-sm text-gray-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              {item.bio}
            </motion.p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}