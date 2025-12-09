"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Shield, Clock, Award } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  backgroundImage?: string;
}

const HeroSection = ({
  title = "Industrial-Grade HVAC Solutions",
  subtitle = "Expert services across Industrial & Commercial HVAC, Refrigeration, Custom Sheet Metal Fabrication, and Residential HVAC",
  ctaText = "Get Free Quote",
  backgroundImage = "/images/company/photo-4.jpg", // Quantum HVAC branded service van
}: HeroSectionProps) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[700px] w-full bg-brand-slate-900 overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-900/90 via-brand-slate-900/80 to-brand-blue-800/90"></div>
      </motion.div>

      {/* Animated geometric pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rotate-45 animate-pulse"></div>
        <div className="absolute bottom-40 right-32 w-24 h-24 border-2 border-white rotate-12"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 border-2 border-white -rotate-45"></div>
      </div>

      {/* Content Container */}
      <motion.div
        style={{ opacity }}
        className="relative h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center"
      >
        <div className="max-w-4xl text-white">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              {title}
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-10 text-gray-100 leading-relaxed max-w-3xl"
          >
            {subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Link href="/quote">
              <Button
                size="lg"
                className="bg-brand-blue-500 hover:bg-brand-blue-600 text-white font-semibold px-10 py-7 text-lg rounded-lg transition-all shadow-2xl hover:shadow-brand-blue-500/50 hover:scale-105"
              >
                {ctaText}
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-10 py-7 text-lg rounded-lg transition-all shadow-2xl hover:shadow-red-500/50 hover:scale-105"
              >
                Emergency Service
              </Button>
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-6 md:gap-8"
          >
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/20">
              <Clock className="w-6 h-6 text-brand-cyan-400" />
              <span className="font-semibold text-sm md:text-base">24/7 Service</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/20">
              <Shield className="w-6 h-6 text-brand-cyan-400" />
              <span className="font-semibold text-sm md:text-base">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/20">
              <Award className="w-6 h-6 text-brand-cyan-400" />
              <span className="font-semibold text-sm md:text-base">15+ Years Experience</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
