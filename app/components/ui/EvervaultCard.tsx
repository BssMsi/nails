"use client";
import { useMotionValue } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useMotionTemplate, motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const EvervaultCard = ({
  text,
  subText,
  className,
  author,
}: {
  text?: string;
  subText?: string;
  className?: string;
  author?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    let str = generateRandomString(1500);
    setRandomString(str);
  }, []);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(1500);
    setRandomString(str);
  }

  return (
    <div
      className={cn(
        "p-0.5 bg-transparent md:aspect-square flex items-center justify-center w-full md:h-full relative",
        className
      )}
    >
      <div
        onMouseMove={onMouseMove}
        className="group/card md:rounded-3xl rounded-xl w-full relative overflow-hidden md:bg-transparent bg-gray-900 border border-white/[0.2] flex items-center justify-center md:h-full"
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
          className="hidden md:block"
        />
        <div className="relative z-10 flex flex-col items-start justify-between p-6 md:p-8 w-full md:items-center">
          <div className="relative flex flex-col items-start md:items-center justify-center text-white w-full">
            <div className="absolute w-full h-full bg-white/[0.8] dark:bg-black/[0.8] blur-sm rounded-full md:block hidden" />
            <span className="text-white z-20 text-xl md:text-2xl font-bold md:text-center mb-2 md:mb-2">{text}</span>
            {subText && (
              <div className="flex flex-col gap-1">
                <span className="text-neutral-400 z-20 text-sm md:text-sm md:text-center">{subText}</span>
                {author && (
                  <span className="text-neutral-400 z-20 text-sm md:text-sm md:text-center">{author}</span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export function CardPattern({ mouseX, mouseY, randomString, className }: any) {
  let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className={cn("pointer-events-none", className)}>
      <div className="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] opacity-0 group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-blue-700 opacity-0 group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover/card:opacity-100 mix-blend-overlay"
        style={style}
      >
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}; 