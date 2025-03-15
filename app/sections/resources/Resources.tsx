"use client";

import React from "react";
import { motion } from "framer-motion";
import { NAILS_DATA } from "../../lib/utils";
import ContainerScrollAnimation from "./ContainerScrollAnimation";
import Carousel from "./Carousel";
import { Reports } from "@/app/components/Reports";
import { Publications } from "@/app/components/Publications";

const Resources = () => {
  return (
    <div className="container mx-auto px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        Resources
      </motion.h1>

      {/* Reports Section */}
      <Reports />

      {/* Publications Section */}
      <Publications />

      {/* Photos Section */}
      <div id="photos" className="mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Photos
        </motion.h2>
        <Carousel items={NAILS_DATA.resources.photos} />
      </div>

      {/* Videos Section */}
      <div id="videos">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Videos
        </motion.h2>
        <Carousel items={NAILS_DATA.resources.videos} isVideo />
      </div>
    </div>
  );
};

export default Resources;