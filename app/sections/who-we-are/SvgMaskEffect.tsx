"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export default function SvgMaskEffect({
  revealText,
  className,
}: {
  revealText: string;
  className?: string;
}) {
  const [isInView, setIsInView] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      setDimensions({
        width: textRef.current.offsetWidth,
        height: textRef.current.offsetHeight,
      });
    }
  }, [revealText]);

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-lg",
        className
      )}
    >
      <motion.div
        ref={textRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        onViewportEnter={() => setIsInView(true)}
        className="relative z-10 p-8 text-lg md:text-xl text-center font-medium leading-relaxed"
      >
        {revealText}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute inset-0 z-0"
      >
        <svg
          className="w-full h-full"
          width={dimensions.width}
          height={dimensions.height}
          viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_0_1"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width={dimensions.width}
            height={dimensions.height}
          >
            <rect width={dimensions.width} height={dimensions.height} fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_0_1)">
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.circle
                key={i}
                cx={Math.random() * dimensions.width}
                cy={Math.random() * dimensions.height}
                r={Math.random() * 100 + 50}
                fill={`hsl(${Math.random() * 360}, 70%, 60%, 0.1)`}
                initial={{ scale: 0, x: 0, y: 0 }}
                animate={
                  isInView
                    ? {
                        scale: Math.random() * 2 + 1,
                        x: (Math.random() - 0.5) * 200,
                        y: (Math.random() - 0.5) * 200,
                      }
                    : { scale: 0, x: 0, y: 0 }
                }
                transition={{
                  duration: Math.random() * 5 + 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </g>
        </svg>
      </motion.div>
    </div>
  );
}