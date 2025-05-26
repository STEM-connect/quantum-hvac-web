"use client";

import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  backgroundImage?: string;
}

const HeroSection = ({
  title = "Your Trusted HVAC Experts",
  subtitle = "With over 15 years of experience, we're dedicated to keeping your home comfortable all year round.",
  ctaText = "Request a Quote",
  backgroundImage = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&q=90",
}: HeroSectionProps) => {
  return (
    <section className="relative h-[600px] w-full bg-gray-100 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Container */}
      <div className="relative h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">{subtitle}</p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-md transition-colors shadow-lg hover:shadow-xl"
            >
              {ctaText}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white/20 font-medium px-8 py-3 rounded-md transition-colors shadow-lg hover:shadow-xl"
            >
              Schedule Service
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
