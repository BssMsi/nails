"use client";

import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

interface MapProps {
  center: {
    lat: number;
    lng: number;
  };
  markers: Array<{
    lat: number;
    lng: number;
    title: string;
  }>;
}

const mapStyles = {
  height: "400px",
  width: "100%",
  borderRadius: "1rem",
};

const Map = ({ center, markers }: MapProps) => {
  const [loadError, setLoadError] = useState(false);

  const mapOptions = {
    zoom: 12,
    mapTypeControl: true,
    streetViewControl: true,
    fullscreenControl: true,
    zoomControl: true,
    styles: [
      {
        featureType: "all",
        elementType: "labels.text.fill",
        stylers: [{ color: "#ffffff" }],
      },
      {
        featureType: "all",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#000000" }, { lightness: 13 }],
      },
      {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [{ color: "#000000" }],
      },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [{ color: "#144b53" }, { lightness: 14 }, { weight: 1.4 }],
      },
      {
        featureType: "landscape",
        elementType: "all",
        stylers: [{ color: "#08304b" }],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{ color: "#0c4152" }, { lightness: 5 }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [{ color: "#000000" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#0b434f" }, { lightness: 25 }],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry.fill",
        stylers: [{ color: "#000000" }],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry.stroke",
        stylers: [{ color: "#0b3d51" }, { lightness: 16 }],
      },
      {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [{ color: "#000000" }],
      },
      {
        featureType: "transit",
        elementType: "all",
        stylers: [{ color: "#146474" }],
      },
      {
        featureType: "water",
        elementType: "all",
        stylers: [{ color: "#021019" }],
      },
    ],
  };

  if (loadError) {
    return (
      <div 
        className="w-full h-[400px] rounded-2xl bg-neutral-900/50 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center"
      >
        <h3 className="text-xl font-semibold text-neutral-200 mb-4">
          Map temporarily unavailable
        </h3>
        <div className="space-y-2 text-neutral-400">
          {markers.map((marker, index) => (
            <a
              key={index}
              href={`https://www.google.com/maps/search/?api=1&query=${marker.lat},${marker.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-neutral-300 transition-colors"
            >
              {marker.title} →
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <LoadScript 
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
      onError={() => setLoadError(true)}
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={mapOptions.zoom}
        center={center}
        options={mapOptions}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={{ lat: marker.lat, lng: marker.lng }}
            title={marker.title}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map; 