"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function TextGenerateEffect({ words }: { words: string }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      
      // Start generating text
      const interval = setInterval(() => {
        if (currentIndex < words.length) {
          setDisplayedText(words.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          clearInterval(interval);
        }
      }, 20); // Speed of text generation
      
      return () => clearInterval(interval);
    }
  }, [inView, controls, words, currentIndex]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 }
      }}
      transition={{ duration: 0.5 }}
      className="p-8 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md"
    >
      <p className="text-lg md:text-xl leading-relaxed">
        {displayedText}
        {currentIndex < words.length && (
          <span className="animate-pulse">|</span>
        )}
      </p>
    </motion.div>
  );
}