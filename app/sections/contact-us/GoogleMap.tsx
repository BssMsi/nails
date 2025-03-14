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
  // Create a Google Maps URL that opens in a new tab when clicked
  // This approach doesn't require an API key
  const googleMapsUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus`;
  
  // Alternative direct link to Google Maps
  const directLink = `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}`;

  return (
    <div className={cn("w-full h-full", className)}>
      <iframe
        src={googleMapsUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
        className="w-full h-full"
      ></iframe>
      
      {/* Fallback in case the iframe doesn't load properly */}
      <div className="absolute bottom-2 right-2 z-10">
        <a 
          href={directLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          Open in Google Maps
        </a>
      </div>
    </div>
  );
}