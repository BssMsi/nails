"use client";

import React, { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

interface Item {
  name: string;
  logo?: string;
}

export default function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  items: Item[];
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  pauseOnHover?: boolean;
  className?: string;
}) {
  const [duplicatedItems, setDuplicatedItems] = useState<Item[]>([]);

  // Duplicate items to create the infinite effect
  useEffect(() => {
    setDuplicatedItems([...items, ...items]);
  }, [items]);

  // Set animation duration based on speed
  const speedMap = {
    slow: "40s",
    normal: "25s",
    fast: "15s",
  };

  return (
    <div
      className={cn(
        "overflow-hidden relative",
        className
      )}
    >
      <div
        className={cn(
          "flex min-w-full gap-4 py-4",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          "--animation-duration": speedMap[speed],
          "--animation-direction": direction === "left" ? "forwards" : "reverse",
        } as React.CSSProperties}
      >
        {/* First set of items */}
        <div
          className={cn(
            "flex items-center justify-around gap-4 min-w-full animate-scroll"
          )}
        >
          {duplicatedItems.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[200px] h-[100px] flex items-center justify-center rounded-xl bg-white dark:bg-gray-800 shadow-md p-4"
            >
              {item.logo ? (
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <div className="text-center font-medium">{item.name}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}