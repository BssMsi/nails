"use client";

import React from "react";
import { motion } from "framer-motion";
import { NAILS_DATA } from "../../lib/utils";
import ContainerScrollAnimation from "./ContainerScrollAnimation";
import ThreeDCardEffect from "./ThreeDCardEffect";
import Carousel from "./Carousel";

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
      <div id="reports" className="mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Reports
        </motion.h2>
        <ContainerScrollAnimation items={NAILS_DATA.resources.reports} />
      </div>

      {/* Publications Section */}
      <div id="publications" className="mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Publications
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {NAILS_DATA.resources.publications.map((publication, idx) => (
            <ThreeDCardEffect key={idx} item={publication} />
          ))}
        </div>
      </div>

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