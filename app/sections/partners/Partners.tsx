"use client";

import React from "react";
import { motion } from "framer-motion";
import { NAILS_DATA } from "../../lib/utils";
import InfiniteMovingCards from "../donors/InfiniteMovingCards";

const Partners = () => {
  return (
    <div className="container mx-auto px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        Partners
      </motion.h1>

      <div className="py-8">
        <InfiniteMovingCards
          items={NAILS_DATA.partners}
          direction="right"
          speed="normal"
        />
      </div>
    </div>
  );
};

export default Partners;