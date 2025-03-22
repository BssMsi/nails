"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import Image from "next/image";
import dynamic from 'next/dynamic';

const FloatingNavbar = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation items
  const navItems = [
    { name: "Who We Are", href: "#who-we-are" },
    { name: "What We Do", href: "#what-we-do" },
    { name: "Donors", href: "#donors" },
    { name: "Partners", href: "#partners" },
    { name: "Resources", href: "#resources" },
    { name: "Contact Us", href: "#contact-us" },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = navItems.map((item) => item.href.substring(1));
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

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted, navItems]);

  // Close the menu when clicking a link on mobile
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const navContent = (
    <nav
      className={cn(
        "px-4 sm:px-6 py-2 rounded-full flex items-center justify-between bg-white/80 dark:bg-black/80 backdrop-blur-md border border-gray-200 dark:border-gray-800 shadow-lg transition-all duration-300",
        isScrolled ? "w-auto" : "w-auto",
        isMenuOpen ? "rounded-2xl" : "rounded-full"
      )}
    >
      <div className="flex items-center gap-2 mr-2 sm:mr-4">
        {mounted ? (
          <Image
            src="/logo.png"
            alt="NAILS Society Logo"
            width={28}
            height={28}
            className="object-contain"
            priority
            unoptimized
          />
        ) : (
          <div className="w-7 h-7 bg-gray-200 dark:bg-gray-800 rounded-full" />
        )}
        <span className="text-sm md:text-base font-semibold bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-400 whitespace-nowrap">
          NAILS Society
        </span>
      </div>

      {/* Desktop navigation */}
      <div className="hidden md:flex items-center space-x-1 lg:space-x-2 xl:space-x-4">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={cn(
              "relative px-2 lg:px-3 xl:px-4 py-1 lg:py-2 rounded-full text-xs lg:text-sm font-medium transition-colors whitespace-nowrap",
              activeSection === item.href.substring(1)
                ? "text-white"
                : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            )}
          >
            {mounted && activeSection === item.href.substring(1) && (
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

      {/* Mobile hamburger menu button */}
      <button 
        className="md:hidden flex items-center justify-center p-2" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <div className="relative w-6 h-5">
          <span className={`absolute h-0.5 w-6 bg-gray-700 dark:bg-gray-300 transform transition duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`absolute top-2 h-0.5 w-6 bg-gray-700 dark:bg-gray-300 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`absolute top-4 h-0.5 w-6 bg-gray-700 dark:bg-gray-300 transform transition duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
        </div>
      </button>
    </nav>
  );

  return (
    <div className="fixed top-6 inset-x-0 z-50 flex flex-col items-center">
      <div className="w-[95%] max-w-5xl xl:max-w-6xl">
        {navContent}
        
        {/* Mobile dropdown menu */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden mt-2 w-full bg-white/95 dark:bg-black/95 rounded-lg shadow-lg backdrop-blur-md border border-gray-200 dark:border-gray-800 overflow-hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col p-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleNavClick}
                  className={cn(
                    "px-4 py-3 rounded-md text-sm font-medium transition-colors",
                    activeSection === item.href.substring(1)
                      ? "bg-primary text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

// Export as a dynamic component with SSR disabled and no prerender
export default dynamic(() => Promise.resolve(FloatingNavbar), {
  ssr: false,
});