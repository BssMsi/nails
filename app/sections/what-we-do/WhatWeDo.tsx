"use client";

import React from "react";
import { motion } from "framer-motion";
import { NAILS_DATA } from "../../lib/utils";
import Timeline from "./Timeline";
import { WhatWeDo as WhatWeDoComponent } from "@/app/components/WhatWeDo";
import { GlareCard } from "@/app/components/ui/GlareCard";
const WhatWeDo = () => {
  return (
    <div className="container mx-auto px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        What We Do
      </motion.h1>
      <div className="text-center text-gray-400 mb-16">
        Our society undertakes a range of activities to drive meaningful progress in AI, legal studies, and sustainability:
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {NAILS_DATA.whatWeDo.map((item, index) => (
          <GlareCard key={index} className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4">{item.title}</h3>
              <p className="text-gray-400 text-lg md:text-xl lg:text-2xl">{item.description}</p>
            </div>
          </GlareCard>
        ))}
      </div>
      {/* TODO Use Background Overlay Card in future for videos on hover */}
      <div className="text-center text-gray-400 text-lg md:text-xl mb-16 mt-8">
        Our society is committed to fostering interdisciplinary collaboration, ensuring that AI innovations and legal frameworks are aligned with sustainable development goals.
      </div>
      {/* National Projects Section */}
      <div id="national" className="mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          National Projects
        </motion.h2>
        <Timeline items={NAILS_DATA.nationalProjects} />
      </div>

      {/* International Projects Section */}
      <div id="upcomingprojects">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
            Upcoming Projects
        </motion.h2>
        <Timeline items={NAILS_DATA.upcomingProjects} />
      </div>
    </div>
  );
};

  export default WhatWeDo;