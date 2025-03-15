"use client";

import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";
import { cn } from "../lib/utils";

const MouseEnterContext = createContext<{
  mouseX: number;
  mouseY: number;
  setMouseX: (x: number) => void;
  setMouseY: (y: number) => void;
}>({
  mouseX: 0,
  mouseY: 0,
  setMouseX: () => {},
  setMouseY: () => {},
});

export const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  return (
    <MouseEnterContext.Provider value={{ mouseX, mouseY, setMouseX, setMouseY }}>
      <div
        className={cn(
          "py-20 flex items-center justify-center",
          containerClassName
        )}
      >
        <div
          className={cn(
            "relative flex flex-col items-center justify-center w-full h-full",
            className
          )}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { mouseX, mouseY, setMouseX, setMouseY } = useContext(MouseEnterContext);
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseXRel = e.clientX - centerX;
    const mouseYRel = e.clientY - centerY;

    setMouseX(mouseXRel / (rect.width / 2));
    setMouseY(mouseYRel / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    setMouseX(0);
    setMouseY(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative w-full h-full bg-slate-900 rounded-xl p-8",
        "transform-gpu transition-transform duration-100 ease-in-out will-change-transform",
        className
      )}
      style={{
        transform: `perspective(1000px) rotateY(${mouseX * 8}deg) rotateX(${
          mouseY * -8
        }deg)`,
      }}
    >
      {children}
    </div>
  );
};

export const CardItem = ({
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  as: Component = "div",
}: {
  children: React.ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
  as?: React.ElementType;
}) => {
  const { mouseX, mouseY } = useContext(MouseEnterContext);

  const style = {
    transform: `translate3d(${translateX}px, ${translateY}px, ${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
    transition: "transform 0.1s ease-in-out",
  };

  return (
    <Component className={cn("", className)} style={style}>
      {children}
    </Component>
  );
}; 