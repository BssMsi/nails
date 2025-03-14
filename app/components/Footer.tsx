"use client";

import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const sections = {
    "Who We Are": [
      { name: "Organization", href: "#who-we-are" },
      { name: "Founding Members", href: "#founding-members" },
      { name: "Advisory Board", href: "#advisory-board" },
      { name: "Team", href: "#team" },
    ],
    "What We Do": [
      { name: "National", href: "#national" },
      { name: "International", href: "#international" },
    ],
    "Resources": [
      { name: "Reports", href: "#reports" },
      { name: "Publications", href: "#publications" },
      { name: "Photos", href: "#photos" },
      { name: "Videos", href: "#videos" },
    ],
    "Contact Us": [
      { name: "Registered Address", href: "#contact-us" },
      { name: "Alternative Address", href: "#alternative-address" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {Object.entries(sections).map(([sectionName, links]) => (
            <div key={sectionName}>
              <h3 className="text-xl font-bold mb-4">{sectionName}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} NAILS - Network for AI, Legal and sustainable solutions society. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;