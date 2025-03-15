"use client";

import React, { useState, useCallback } from 'react';
import { GoogleMap as GoogleMapComponent, LoadScript, Marker } from '@react-google-maps/api';

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

const GoogleMapWrapper = ({ center, markers }: MapProps) => {
  const [loadError, setLoadError] = useState(false);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback((map: google.maps.Map) => {
    const bounds = new window.google.maps.LatLngBounds();
    markers.forEach(marker => {
      bounds.extend({ lat: marker.lat, lng: marker.lng });
    });
    map.fitBounds(bounds, 60);
    setMap(map);
  }, [markers]);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const mapOptions = {
    zoom: 11,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    zoomControl: true,
    styles: [
      {
        featureType: "all",
        elementType: "labels.text.fill",
        stylers: [{ color: "#ffffff" }]
      },
      {
        featureType: "all",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#000000" }]
      },
      {
        featureType: "all",
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "administrative",
        elementType: "geometry",
        stylers: [{ color: "#000000" }, { weight: 0.5 }]
      },
      {
        featureType: "landscape",
        elementType: "all",
        stylers: [{ color: "#08304b" }]
      },
      {
        featureType: "poi",
        elementType: "all",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#000000" }, { lightness: 20 }]
      },
      {
        featureType: "road",
        elementType: "labels",
        stylers: [{ visibility: "simplified" }]
      },
      {
        featureType: "transit",
        elementType: "all",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "water",
        elementType: "all",
        stylers: [{ color: "#021019" }, { lightness: 10 }]
      }
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
      <GoogleMapComponent
        mapContainerStyle={mapStyles}
        zoom={mapOptions.zoom}
        center={center}
        options={mapOptions}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={{ lat: marker.lat, lng: marker.lng }}
            title={marker.title}
          />
        ))}
      </GoogleMapComponent>
    </LoadScript>
  );
};

export default GoogleMapWrapper; 