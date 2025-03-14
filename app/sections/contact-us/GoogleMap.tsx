"use client";

import React from "react";
import { cn } from "../../lib/utils";

export default function GoogleMap({
  lat,
  lng,
  zoom = 14,
  className,
}: {
  lat: number;
  lng: number;
  zoom?: number;
  className?: string;
}) {
  // In a real implementation, you would use the Google Maps API
  // For this example, we'll create a placeholder that would be replaced with actual Google Maps
  return (
    <div className={cn("w-full h-full bg-gray-200 dark:bg-gray-700", className)}>
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 dark:text-gray-400">
            Google Map would display here
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Coordinates: {lat}, {lng}
          </p>
        </div>
      </div>
    </div>
  );
}