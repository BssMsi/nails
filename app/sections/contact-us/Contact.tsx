"use client";

import React from "react";
import { NAILS_DATA } from "../../lib/utils";
import GoogleMap from "../../components/ui/GoogleMap";
import { HiOutlineOfficeBuilding, HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

export const Contact = () => {
  const locations = [
    {
      title: "Registered Office",
      ...NAILS_DATA.contact.registeredAddress,
      icon: <HiOutlineOfficeBuilding className="w-6 h-6" />,
    },
    {
      title: "Alternative Office",
      ...NAILS_DATA.contact.alternativeAddress,
      icon: <HiOutlineOfficeBuilding className="w-6 h-6" />,
    },
  ];

  const markers = locations.map((location) => ({
    lat: location.mapCoordinates.lat,
    lng: location.mapCoordinates.lng,
    title: location.title,
  }));

  // Calculate center point between two locations
  const center = {
    lat:
      (locations[0].mapCoordinates.lat + locations[1].mapCoordinates.lat) / 2,
    lng:
      (locations[0].mapCoordinates.lng + locations[1].mapCoordinates.lng) / 2,
  };

  return (
    <div className="min-h-screen bg-[#0E0E10] flex flex-col items-center justify-center relative overflow-hidden py-20">
      <div className="relative w-full max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 pb-16">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {locations.map((location, index) => (
              <div
                key={index}
                className="bg-neutral-900/50 backdrop-blur-sm rounded-xl p-6 hover:bg-neutral-900/70 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  {location.icon}
                  <h3 className="text-xl font-semibold text-neutral-200">
                    {location.title}
                  </h3>
                </div>
                <div className="space-y-2 text-neutral-400">
                  <p>{location.line1}</p>
                  <p>{location.line2}</p>
                  <p>{`${location.city}, ${location.state} ${location.zip}`}</p>
                  <p>{location.country}</p>
                  <a
                    href={location.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
            ))}

            <div className="bg-neutral-900/50 backdrop-blur-sm rounded-xl p-6 hover:bg-neutral-900/70 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <HiOutlinePhone className="w-6 h-6" />
                  <a
                    href={`tel:${NAILS_DATA.contact.phone}`}
                    className="text-neutral-200 hover:text-neutral-100 transition-colors"
                  >
                    {NAILS_DATA.contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <HiOutlineMail className="w-6 h-6" />
                  <a
                    href={`mailto:${NAILS_DATA.contact.email}`}
                    className="text-neutral-200 hover:text-neutral-100 transition-colors"
                  >
                    {NAILS_DATA.contact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="h-full">
            <GoogleMap center={center} markers={markers} />
          </div>
        </div>
      </div>
    </div>
  );
}; 