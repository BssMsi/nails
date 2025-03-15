"use client";

import React from "react";
import { motion } from "framer-motion";
import { NAILS_DATA } from "../../lib/utils";
import SvgMaskEffect from "./SvgMaskEffect";
import TextGenerateEffect from "./TextGenerateEffect";
import TextRevealCard from "./TextRevealCard";
import AppleCardsCarousel from "./AppleCardsCarousel";
import FocusCards from "./FocusCards";
import ParallaxScroll from "./ParallaxScroll";
import { TeamCarousel } from "@/app/components/TeamCarousel";

const WhoWeAre = () => {
  return (
    <div className="container mx-auto px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        Who We Are
      </motion.h1>

      {/* Organization Section */}
      <div id="organization" className="mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Organization
        </motion.h2>

        {/* Purpose with SVG Mask Effect */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Purpose</h3>
          <SvgMaskEffect
            revealText={NAILS_DATA.organization.purpose}
            className="max-w-4xl mx-auto"
          />
        </div>

        {/* Objectives with Text Generate Effect */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Objectives</h3>
          <div className="max-w-4xl mx-auto">
            <TextGenerateEffect
              words={NAILS_DATA.organization.objectives.join(" • ")}
            />
          </div>
        </div>

        {/* About Society with Text Generate Effect */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">About Society</h3>
          <div className="max-w-4xl mx-auto">
            <TextGenerateEffect
              words={NAILS_DATA.organization.aboutSociety}
            />
          </div>
        </div>

        {/* Scope of Work with Text Reveal Card */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Scope of Work</h3>
          <div className="flex justify-center">
            <TextRevealCard
              text={NAILS_DATA.organization.scopeOfWork.join(" • ")}
              className="max-w-4xl"
            />
          </div>
        </div>
      </div>

      {/* Founding Members Section */}
      <div id="founding-members" className="mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Founding Members
        </motion.h2>
        {/* <AppleCardsCarousel items={NAILS_DATA.foundingMembers} /> */}

        <TeamCarousel teamMembers={NAILS_DATA.foundingMembers} />
      </div>

      {/* Advisory Board Section */}
      <div id="advisory-board" className="mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Advisory Board
        </motion.h2>
        <FocusCards items={NAILS_DATA.advisoryBoard} />
      </div>

      {/* Team Section */}
      <div id="team">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Team
        </motion.h2>
        <ParallaxScroll items={NAILS_DATA.team} />
      </div>
    </div>
  );
};

export default WhoWeAre;