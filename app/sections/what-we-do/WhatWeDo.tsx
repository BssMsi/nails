"use client";

import React from "react";
import { motion } from "framer-motion";
import { NAILS_DATA } from "../../lib/utils";
import Timeline from "./Timeline";

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
     <div>Our society undertakes a range of activities to drive meaningful progress in AI, legal studies, and sustainability:
Capacity Building & Training – Organizing workshops, training programs, and awareness campaigns for individuals and organizations.
Corporate Social Responsibility (CSR) Initiatives – Supporting projects related to green technology, environmental conservation, and social impact.
Project Management & Consulting – Assisting businesses and institutions in implementing AI-driven solutions and sustainability programs.
Monitoring & Evaluation – Offering services for carbon footprint assessment, ESG (Environmental, Social, and Governance) compliance, and sustainable development reporting.
Publications & Conferences – Disseminating knowledge through journals, reports, seminars, and networking events.
Research & Development – We conduct and support research in artificial intelligence, environmental sustainability, legal compliance, and emerging technologies.
Policy & Legal Advisory – Providing expert guidance on legal frameworks related to AI ethics, regulatory compliance, and sustainability.
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
          National
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
          International
        </motion.h2>
        <Timeline items={NAILS_DATA.upcomingProjects} />
      </div>
    </div>
  );
};

export default WhatWeDo;