"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";
import Image from "next/image";

const FloatingNavbar = () => {
  const [activeSection, setActiveSection] = useState<string>("who-we-are");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Navigation items
  const navItems = [
    { name: "Who We Are", href: "#who-we-are" },
    { name: "What We Do", href: "#what-we-do" },
    { name: "Donors", href: "#donors" },
    { name: "Partners", href: "#partners" },
    { name: "Resources", href: "#resources" },
    { name: "Contact Us", href: "#contact-us" },
  ];

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      
      // Check if scrolled past the top
      setIsScrolled(window.scrollY > 20);
      
      // Find the current active section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 inset-x-0 z-50 flex justify-center"
      >
        <nav
          className={cn(
            "px-6 py-2 rounded-full flex items-center justify-between space-x-4 bg-white/80 dark:bg-black/80 backdrop-blur-md border border-gray-200 dark:border-gray-800 shadow-lg",
            isScrolled ? "w-auto" : "w-auto"
          )}
        >
          {/* Logo and Company Name */}
          <div className="flex items-center gap-3 mr-6">
            <Image
              src="/logo.png"
              alt="NAILS Society Logo"
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="text-base font-semibold bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-400 whitespace-nowrap">
              NAILS Society
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  activeSection === item.href.substring(1)
                    ? "text-white"
                    : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                )}
              >
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-primary rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </a>
            ))}
          </div>
        </nav>
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingNavbar;