"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "../../lib/utils";
import EvervaultCard from "./EvervaultCard";

interface Item {
  title: string;
  description: string;
  link: string;
  image: string;
}

export default function ContainerScrollAnimation({
  items,
  className,
}: {
  items: Item[];
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div
      ref={containerRef}
      className={cn("relative h-[200vh]", className)}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {items.map((item, idx) => {
              // Calculate different progress values for each card
              const translateY = useTransform(
                scrollYProgress,
                [0, 0.5, 1],
                [100 * (idx + 1), 0, -100 * (idx + 1)]
              );
              const opacity = useTransform(
                scrollYProgress,
                [0.1, 0.3, 0.7, 0.9],
                [0, 1, 1, 0]
              );
              const scale = useTransform(
                scrollYProgress,
                [0.1, 0.3, 0.7, 0.9],
                [0.8, 1, 1, 0.8]
              );

              return (
                <motion.div
                  key={idx}
                  style={{ translateY, opacity, scale }}
                  className="w-full"
                >
                  <EvervaultCard item={item} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}