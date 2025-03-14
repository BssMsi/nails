"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "../../lib/utils";

interface ParallaxItem {
  name: string;
  role: string;
  image: string;
}

export default function ParallaxScroll({
  items,
  className,
}: {
  items: ParallaxItem[];
  className?: string;
}) {
  const gridRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start end", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const rowVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  // Split items into rows
  const firstRow = items.slice(0, Math.ceil(items.length / 3));
  const secondRow = items.slice(
    Math.ceil(items.length / 3),
    Math.ceil((items.length / 3) * 2)
  );
  const thirdRow = items.slice(Math.ceil((items.length / 3) * 2));

  return (
    <div
      ref={gridRef}
      className={cn("relative h-[80vh] overflow-hidden", className)}
    >
      <motion.div
        variants={rowVariants}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
        style={{ y: translateFirst }}
        className="flex space-x-4 mb-4"
      >
        {firstRow.map((item, idx) => (
          <motion.div
            key={idx}
            className="relative flex-shrink-0 w-80 h-80 rounded-lg overflow-hidden"
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
            }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${item.image || "https://via.placeholder.com/500"})`,
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="text-primary">{item.role}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={rowVariants}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 0.5, staggerChildren: 0.1, delay: 0.1 }}
        style={{ y: translateSecond }}
        className="flex space-x-4 mb-4 -ml-20"
      >
        {secondRow.map((item, idx) => (
          <motion.div
            key={idx}
            className="relative flex-shrink-0 w-80 h-80 rounded-lg overflow-hidden"
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
            }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${item.image || "https://via.placeholder.com/500"})`,
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="text-primary">{item.role}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={rowVariants}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 0.5, staggerChildren: 0.1, delay: 0.2 }}
        style={{ y: translateThird }}
        className="flex space-x-4"
      >
        {thirdRow.map((item, idx) => (
          <motion.div
            key={idx}
            className="relative flex-shrink-0 w-80 h-80 rounded-lg overflow-hidden"
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
            }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${item.image || "https://via.placeholder.com/500"})`,
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="text-primary">{item.role}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}