"use client";

import React from "react";
import { motion } from "framer-motion";
import { NAILS_DATA } from "../../lib/utils";
import GoogleMap from "./GoogleMap";

const ContactUs = () => {
  return (
    <div className="container mx-auto px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        Contact Us
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Registered Address */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
        >
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Registered Address</h2>
            <address className="not-italic mb-4">
              <p>{NAILS_DATA.contact.registeredAddress.line1}</p>
              <p>{NAILS_DATA.contact.registeredAddress.line2}</p>
              <p>
                {NAILS_DATA.contact.registeredAddress.city},{" "}
                {NAILS_DATA.contact.registeredAddress.state}{" "}
                {NAILS_DATA.contact.registeredAddress.zip}
              </p>
              <p>{NAILS_DATA.contact.registeredAddress.country}</p>
            </address>
          </div>
          <div className="h-64 relative">
            <GoogleMap
              lat={NAILS_DATA.contact.registeredAddress.mapCoordinates.lat}
              lng={NAILS_DATA.contact.registeredAddress.mapCoordinates.lng}
              zoom={14} // Reduced zoom level for better visibility
              href={NAILS_DATA.contact.registeredAddress.href}
            />
          </div>
        </motion.div>

        {/* Alternative Address */}
        <motion.div
          id="alternative-address"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
        >
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Alternative Address</h2>
            <address className="not-italic mb-4">
              <p>{NAILS_DATA.contact.alternativeAddress.line1}</p>
              <p>{NAILS_DATA.contact.alternativeAddress.line2}</p>
              <p>
                {NAILS_DATA.contact.alternativeAddress.city},{" "}
                {NAILS_DATA.contact.alternativeAddress.state}{" "}
                {NAILS_DATA.contact.alternativeAddress.zip}
              </p>
              <p>{NAILS_DATA.contact.alternativeAddress.country}</p>
            </address>
          </div>
          <div className="h-64 relative">
            <GoogleMap
              lat={NAILS_DATA.contact.alternativeAddress.mapCoordinates.lat}
              lng={NAILS_DATA.contact.alternativeAddress.mapCoordinates.lng}
              zoom={14} // Reduced zoom level for better visibility
            />
          </div>
        </motion.div>
      </div>

      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>{NAILS_DATA.contact.phone}</span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>{NAILS_DATA.contact.email}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;