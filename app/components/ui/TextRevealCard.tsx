"use client";
import React, { useEffect, useRef, useState, memo } from "react";
import { motion, useAnimation } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { cn } from "../../lib/utils";

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className,
}: {
  text: string;
  revealText: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const cardRef = useRef<HTMLDivElement | any>(null);
  const [left, setLeft] = useState(0);
  const [localWidth, setLocalWidth] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const controls = useAnimation();
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (cardRef.current) {
      const { left, width: localWidth } = cardRef.current.getBoundingClientRect();
      setLeft(left);
      setLocalWidth(localWidth);
    }
    
    // Start autoplay animation
    startAutoplay();
    
    return () => {
      if (autoplayRef.current) {
        clearTimeout(autoplayRef.current);
      }
    };
  }, []);
  
  const startAutoplay = () => {
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current);
    }
    
    // If mouse is over, don't autoplay
    if (isMouseOver) return;
    
    let direction = 1;
    let currentPercentage = widthPercentage;
    
    const animate = () => {
      // Increase or decrease percentage based on direction
      currentPercentage += direction * 0.5;
      
      // Change direction when reaching boundaries
      if (currentPercentage >= 100) {
        direction = -1;
      } else if (currentPercentage <= 0) {
        direction = 1;
      }
      
      setWidthPercentage(currentPercentage);
      
      // Continue animation
      autoplayRef.current = setTimeout(animate, 16);
    };
    
    animate();
  };

  function mouseMoveHandler(event: any) {
    event.preventDefault();

    const { clientX } = event;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  function mouseLeaveHandler() {
    setIsMouseOver(false);
    // Restart autoplay when mouse leaves
    startAutoplay();
  }

  function mouseEnterHandler() {
    setIsMouseOver(true);
    // Stop autoplay when mouse enters
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current);
    }
  }

  function touchMoveHandler(event: React.TouchEvent<HTMLDivElement>) {
    event.preventDefault();
    const clientX = event.touches[0]!.clientX;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  const rotateDeg = (widthPercentage - 50) * 0.1;
  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
      onTouchStart={mouseEnterHandler}
      onTouchEnd={mouseLeaveHandler}
      onTouchMove={touchMoveHandler}
      ref={cardRef}
      className={cn(
        "bg-[#1d1c20] border border-white/[0.08] rounded-lg p-4 md:p-6 relative overflow-hidden h-full flex flex-col",
        className
      )}
    >
      <div className="flex-1 mb-4">{children}</div>

      <div className="relative flex items-center justify-center overflow-hidden">
        <motion.div
          style={{
            width: "100%",
          }}
          animate={{
            opacity: widthPercentage > 0 ? 1 : 0,
            clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
          }}
          transition={{ duration: isMouseOver ? 0 : 0.4 }}
          className="absolute bg-[#1d1c20] z-20 will-change-transform"
        >
          <p
            style={{
              textShadow: "4px 4px 15px rgba(0,0,0,0.5)",
            }}
            className="text-lg py-5 font-bold text-white bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300 text-center w-full"
          >
            {revealText}
          </p>
        </motion.div>
        <motion.div
          animate={{
            left: `${widthPercentage}%`,
            rotate: `${rotateDeg}deg`,
            opacity: widthPercentage > 0 ? 1 : 0,
          }}
          transition={{ duration: isMouseOver ? 0 : 0.4 }}
          className="w-[8px] bg-gradient-to-b from-transparent via-neutral-800 to-transparent absolute z-50 will-change-transform"
        ></motion.div>

        <div className="overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white,transparent)] w-full">
          <p className="text-lg py-5 font-bold bg-clip-text text-transparent bg-[#323238] text-center w-full">
            {text}
          </p>
          <MemoizedStars />
        </div>
      </div>
    </div>
  );
};

export const TextRevealCardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2 className={twMerge("text-white text-lg lg:text-xl font-bold mb-4 text-center break-words hyphens-auto", className)}>
      {children}
    </h2>
  );
};

export const TextRevealCardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={twMerge("text-[#a9a9a9] text-md lg:text-lg break-words w-full", className)}>
      {children}
    </div>
  );
};

const Stars = () => {
  const randomMove = () => Math.random() * 4 - 2;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(80)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 10 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            backgroundColor: "white",
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block"
        ></motion.span>
      ))}
    </div>
  );
};

export const MemoizedStars = memo(Stars); 