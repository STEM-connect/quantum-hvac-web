"use client";

import React from "react";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  Snowflake,
  Hammer,
  Home as HomeIcon,
  Shield,
  Clock,
  Zap,
  DollarSign,
  Award,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Star,
  CreditCard,
  FileCheck,
  Users,
  Wrench,
  ThumbsUp,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Racing Stripe Divider */}
        <div className="h-3 flex">
          <div className="flex-1 bg-quantum-blue"></div>
          <div className="flex-1 bg-quantum-red"></div>
          <div className="flex-1 bg-quantum-cyan"></div>
        </div>

        {/* NEW: Certification & Trust Bar */}
        <section className="py-16 bg-white border-y border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Trusted by Industry Leaders
              </h2>
              <p className="text-lg text-gray-600">
                Licensed, Certified, and Partnered with Top Manufacturers
              </p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8"
            >
              {[
                { name: "NATE Certified", icon: Award, stat: "Certified Technicians" },
                { name: "EPA Certified", icon: Shield, stat: "Refrigerant Handling" },
                { name: "BBB A+ Rating", icon: Star, stat: "Customer Satisfaction" },
                { name: "15+ Years", icon: TrendingUp, stat: "In Business" },
                { name: "Carrier Partner", icon: Building2, stat: "Factory Authorized" },
                { name: "Licensed & Insured", icon: FileCheck, stat: "Full Coverage" },
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex flex-col items-center text-center p-6 bg-gradient-to-b from-gray-50 to-white rounded-xl border border-gray-200 hover:border-quantum-blue hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-4 rounded-full bg-blue-100 mb-4">
                    <cert.icon className="w-8 h-8 text-quantum-blue" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-gray-600">{cert.stat}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-16"
            >
              <p className="text-center text-sm text-gray-500 mb-8 font-medium uppercase tracking-wider">Authorized Dealer for Premium Brands</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
                {[
                  { name: "Carrier", logo: "/images/brands/carrier.png" },
                  { name: "Trane", logo: "/images/brands/trane.png" },
                  { name: "Lennox", logo: "/images/brands/lennox.png" },
                  { name: "York", logo: "/images/brands/york.png" },
                  { name: "Goodman", logo: "/images/brands/goodman.png" },
                  { name: "Rheem", logo: "/images/brands/rheem.png" },
                ].map((brand, index) => (
                  <motion.div
                    key={brand.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="group"
                  >
                    <div className="relative bg-white rounded-xl border-2 border-gray-200 p-4 h-24 flex items-center justify-center hover:border-quantum-blue hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden">
                      <Image
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        width={140}
                        height={60}
                        className="object-contain max-h-14 w-auto grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="text-center text-xs text-gray-400 mt-6">
                Factory-trained technicians | Genuine parts | Extended warranties available
              </p>
            </motion.div>
          </div>
        </section>

        {/* Racing Stripe Divider */}
        <div className="h-3 flex">
          <div className="flex-1 bg-quantum-blue"></div>
          <div className="flex-1 bg-quantum-red"></div>
          <div className="flex-1 bg-quantum-cyan"></div>
        </div>

        {/* Service Division Cards - Enhanced with Professional Trust Indicators */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Professional HVAC Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Enterprise-grade climate control systems engineered for reliability and performance
              </p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* Industrial & Commercial HVAC */}
              <motion.div variants={fadeInUp}>
                <Link href="/services/commercial">
                  <Card className="group relative overflow-hidden h-full border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-quantum-blue to-blue-800 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10"></div>
                    <CardContent className="relative p-8 md:p-10">
                      <div className="flex items-start justify-between mb-6">
                        <div className="p-4 rounded-xl bg-white/20 backdrop-blur-sm">
                          <Building2 className="w-10 h-10 md:w-12 md:h-12 text-white" />
                        </div>
                        <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                          500+ Installations
                        </Badge>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        Industrial & Commercial HVAC
                      </h3>
                      <p className="text-blue-50 text-lg leading-relaxed mb-4">
                        Enterprise-grade climate control solutions for large-scale facilities, warehouses, and commercial buildings with advanced Building Management Systems (BMS) integration.
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-blue-100 font-medium">Free Consultation</span>
                        <span className="text-sm text-blue-100 font-medium">EPA Certified</span>
                      </div>
                      <div className="flex items-center text-white font-semibold group-hover:gap-2 transition-all">
                        Learn More
                        <ArrowRight className="w-5 h-5 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>

              {/* Commercial & Industrial Refrigeration */}
              <motion.div variants={fadeInUp}>
                <Link href="/services/refrigeration">
                  <Card className="group relative overflow-hidden h-full border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-quantum-cyan to-cyan-700 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10"></div>
                    <CardContent className="relative p-8 md:p-10">
                      <div className="flex items-start justify-between mb-6">
                        <div className="p-4 rounded-xl bg-white/20 backdrop-blur-sm">
                          <Snowflake className="w-10 h-10 md:w-12 md:h-12 text-white" />
                        </div>
                        <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                          24/7 Service
                        </Badge>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        Commercial & Industrial Refrigeration
                      </h3>
                      <p className="text-cyan-50 text-lg leading-relaxed mb-4">
                        Mission-critical refrigeration systems for restaurants, supermarkets, cold storage facilities, and food processing operations with preventive maintenance programs.
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-cyan-100 font-medium">Emergency Response</span>
                        <span className="text-sm text-cyan-100 font-medium">HACCP Compliant</span>
                      </div>
                      <div className="flex items-center text-white font-semibold group-hover:gap-2 transition-all">
                        Learn More
                        <ArrowRight className="w-5 h-5 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>

              {/* Custom Sheet Metal Fabrication */}
              <motion.div variants={fadeInUp}>
                <Link href="/services/sheet-metal">
                  <Card className="group relative overflow-hidden h-full border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-quantum-slate to-slate-900 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10"></div>
                    <CardContent className="relative p-8 md:p-10">
                      <div className="flex items-start justify-between mb-6">
                        <div className="p-4 rounded-xl bg-white/20 backdrop-blur-sm">
                          <Hammer className="w-10 h-10 md:w-12 md:h-12 text-white" />
                        </div>
                        <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                          Custom Design
                        </Badge>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        Custom Sheet Metal Fabrication
                      </h3>
                      <p className="text-slate-50 text-lg leading-relaxed mb-4">
                        Precision engineered metal fabrication for custom ductwork, HVAC components, and specialized industrial applications with CAD/CAM capabilities.
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-slate-100 font-medium">In-House Fabrication</span>
                        <span className="text-sm text-slate-100 font-medium">Quick Turnaround</span>
                      </div>
                      <div className="flex items-center text-white font-semibold group-hover:gap-2 transition-all">
                        Learn More
                        <ArrowRight className="w-5 h-5 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>

              {/* Residential HVAC */}
              <motion.div variants={fadeInUp}>
                <Link href="/services/residential">
                  <Card className="group relative overflow-hidden h-full border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-quantum-red to-red-700 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10"></div>
                    <CardContent className="relative p-8 md:p-10">
                      <div className="flex items-start justify-between mb-6">
                        <div className="p-4 rounded-xl bg-white/20 backdrop-blur-sm">
                          <HomeIcon className="w-10 h-10 md:w-12 md:h-12 text-white" />
                        </div>
                        <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                          1000+ Homes
                        </Badge>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        Residential HVAC
                      </h3>
                      <p className="text-red-50 text-lg leading-relaxed mb-4">
                        Professional home comfort solutions including installation, preventive maintenance, and repair of heating, cooling, and indoor air quality systems.
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-red-100 font-medium">Same-Day Service</span>
                        <span className="text-sm text-red-100 font-medium">Financing Available</span>
                      </div>
                      <div className="flex items-center text-white font-semibold group-hover:gap-2 transition-all">
                        Learn More
                        <ArrowRight className="w-5 h-5 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Racing Stripe Divider */}
        <div className="h-3 flex">
          <div className="flex-1 bg-quantum-blue"></div>
          <div className="flex-1 bg-quantum-red"></div>
          <div className="flex-1 bg-quantum-cyan"></div>
        </div>

        {/* NEW: Financing Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Flexible Financing Options
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Make your HVAC investment affordable with our competitive financing programs
              </p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            >
              <motion.div variants={fadeInUp}>
                <Card className="h-full border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 mb-6">
                      <CreditCard className="w-10 h-10 text-quantum-blue" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      0% APR for 12 Months
                    </h3>
                    <p className="text-gray-600 mb-6">
                      No interest for a full year on qualifying systems. Subject to credit approval.
                    </p>
                    <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                      Most Popular
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-2 border-cyan-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-cyan-100 to-cyan-200 mb-6">
                      <DollarSign className="w-10 h-10 text-quantum-cyan" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Low Monthly Payments
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Flexible payment plans up to 120 months. Fixed rates as low as 4.99% APR.
                    </p>
                    <Badge className="bg-cyan-100 text-cyan-700 border-cyan-200">
                      Extended Terms
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-2 border-red-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-red-100 to-red-200 mb-6">
                      <CheckCircle className="w-10 h-10 text-quantum-red" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Quick Approval
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Apply online in minutes and get instant approval. Simple application process.
                    </p>
                    <Badge className="bg-red-100 text-red-700 border-red-200">
                      Fast & Easy
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <Link href="/quote">
                <Button
                  size="lg"
                  className="bg-quantum-blue hover:bg-blue-700 text-white font-semibold px-10 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Apply for Financing Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <p className="text-sm text-gray-500 mt-4">
                Financing provided through approved lending partners. Terms and conditions apply.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Racing Stripe Divider */}
        <div className="h-3 flex">
          <div className="flex-1 bg-quantum-blue"></div>
          <div className="flex-1 bg-quantum-red"></div>
          <div className="flex-1 bg-quantum-cyan"></div>
        </div>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-5"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Proven Track Record of Excellence
              </h2>
              <p className="text-lg text-blue-200 mb-2">
                Delivering superior HVAC solutions since 2009
              </p>
              <p className="text-xl font-semibold text-quantum-cyan italic">
                Where Passion Meets Dedication
              </p>
            </motion.div>
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
            >
              {[
                { number: "15+", label: "Years in Business", icon: Award },
                { number: "2,500+", label: "Systems Installed", icon: TrendingUp },
                { number: "1,000+", label: "Five-Star Reviews", icon: Star },
                { number: "24/7", label: "Emergency Service", icon: Clock },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className="inline-block p-4 rounded-full bg-cyan-500/20 mb-4">
                    <stat.icon className="w-8 h-8 text-quantum-cyan" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Racing Stripe Divider */}
        <div className="h-3 flex">
          <div className="flex-1 bg-quantum-blue"></div>
          <div className="flex-1 bg-quantum-red"></div>
          <div className="flex-1 bg-quantum-cyan"></div>
        </div>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white relative">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iMSIgZmlsbD0iIzk0YTNiOCIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Industry Leaders Choose Quantum HVAC
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Unmatched expertise, reliability, and service excellence in commercial and residential HVAC systems
              </p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: Shield,
                  title: "NATE & EPA Certified Technicians",
                  description: "Industry-leading certifications with ongoing professional development. Our technicians average 10+ years of field experience.",
                  color: "blue",
                },
                {
                  icon: Clock,
                  title: "24/7 Emergency Response Team",
                  description: "Guaranteed 2-hour emergency response time. Mission-critical system failures receive immediate priority dispatch.",
                  color: "cyan",
                },
                {
                  icon: Zap,
                  title: "Energy Management Solutions",
                  description: "Advanced building automation and IoT-enabled systems reduce operating costs by up to 40% while improving comfort.",
                  color: "orange",
                },
                {
                  icon: Award,
                  title: "Factory Authorized Dealer",
                  description: "Direct partnerships with Carrier, Trane, and Lennox provide access to extended warranties and priority parts availability.",
                  color: "blue",
                },
                {
                  icon: Wrench,
                  title: "Preventive Maintenance Programs",
                  description: "Comprehensive service agreements with scheduled inspections prevent 95% of system failures and extend equipment lifespan.",
                  color: "cyan",
                },
                {
                  icon: FileCheck,
                  title: "Licensed, Bonded & Insured",
                  description: "Fully compliant with all state and federal regulations. $5M liability coverage protects your investment.",
                  color: "orange",
                },
              ].map((feature, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                    <CardContent className="p-8">
                      <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br from-brand-${feature.color}-100 to-brand-${feature.color}-200 mb-4`}>
                        <feature.icon className={`w-8 h-8 text-brand-${feature.color}-600`} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* NEW: Customer Reviews & Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-8 h-8 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                1,000+ Five-Star Reviews
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our commitment to excellence is reflected in every customer experience
              </p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            >
              {[
                {
                  name: "Michael Rodriguez",
                  role: "Facilities Manager",
                  company: "TechCorp Industries",
                  review: "Quantum HVAC installed a complete 20-ton commercial system for our 30,000 sq ft facility. The project was completed ahead of schedule and within budget. Their technical expertise and professionalism are unmatched.",
                  project: "Commercial HVAC Installation",
                  rating: 5,
                },
                {
                  name: "Jennifer Martinez",
                  role: "Restaurant Owner",
                  company: "Harbor View Seafood",
                  review: "We had a critical walk-in cooler failure on a Friday night. Quantum's emergency team arrived within 90 minutes and had us operational by morning. They saved thousands in lost inventory. Absolutely exceptional service.",
                  project: "Emergency Refrigeration Repair",
                  rating: 5,
                },
                {
                  name: "David Thompson",
                  role: "Property Manager",
                  company: "Westside Residential Group",
                  review: "We've used Quantum for preventive maintenance across our 50-unit residential portfolio for 5 years. Their proactive approach has reduced our HVAC-related service calls by 80%. Outstanding reliability.",
                  project: "Preventive Maintenance Program",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-1 mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="w-5 h-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <p className="text-gray-700 mb-6 leading-relaxed italic">
                        "{testimonial.review}"
                      </p>
                      <div className="border-t border-gray-200 pt-6">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-bold text-gray-900">
                              {testimonial.name}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {testimonial.role}
                            </p>
                            <p className="text-sm text-gray-500">
                              {testimonial.company}
                            </p>
                          </div>
                          <div className="p-2 rounded-lg bg-blue-50">
                            <ThumbsUp className="w-5 h-5 text-quantum-blue" />
                          </div>
                        </div>
                        <Badge className="mt-4 bg-gray-100 text-gray-700 border-gray-200">
                          {testimonial.project}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                <div className="flex items-center gap-2">
                  <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  <span className="text-3xl font-bold text-gray-900">4.9</span>
                </div>
                <div className="text-left border-l border-gray-300 pl-4">
                  <p className="font-semibold text-gray-900">Average Rating</p>
                  <p className="text-sm text-gray-600">Based on 1,000+ Google Reviews</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Racing Stripe Divider */}
        <div className="h-3 flex">
          <div className="flex-1 bg-quantum-blue"></div>
          <div className="flex-1 bg-quantum-red"></div>
          <div className="flex-1 bg-quantum-cyan"></div>
        </div>

        {/* Featured Projects with HVAC Images */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Featured Projects & Installations
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional HVAC installations across commercial, industrial, and residential sectors
              </p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            >
              {[
                {
                  title: "Commercial Chiller Installation",
                  description: "Large-scale rooftop chiller system for downtown commercial building with advanced cooling capacity and energy-efficient design.",
                  image: "/images/company/photo-2.jpg",
                  category: "Commercial HVAC",
                  categoryColor: "blue",
                  specs: "Multi-Ton Chiller | Completed 2024",
                },
                {
                  title: "AAON Rooftop HVAC System",
                  description: "Multi-unit AAON rooftop HVAC installation for industrial facility with comprehensive climate control and ventilation systems.",
                  image: "/images/company/photo-3.jpg",
                  category: "Industrial HVAC",
                  categoryColor: "cyan",
                  specs: "AAON Multi-Unit | Completed 2025",
                },
                {
                  title: "Electrical Controls & Automation",
                  description: "Professional electrical panel installation and BMS integration for automated building management and monitoring systems.",
                  image: "/images/company/photo-1.jpg",
                  category: "Controls",
                  categoryColor: "orange",
                  specs: "BMS Integration | Completed 2024",
                },
                {
                  title: "Industrial Cooling Tower Installation",
                  description: "Industrial-grade cooling system installation with high-capacity rooftop units for large commercial facility operations.",
                  image: "/images/company/photo-2.jpg",
                  category: "Industrial",
                  categoryColor: "blue",
                  specs: "Cooling Tower System | Completed 2025",
                },
                {
                  title: "Commercial HVAC Equipment",
                  description: "Commercial rooftop HVAC equipment installation featuring premium AAON units for optimal climate control and efficiency.",
                  image: "/images/company/photo-3.jpg",
                  category: "Commercial AC",
                  categoryColor: "cyan",
                  specs: "Rooftop Equipment | Completed 2024",
                },
                {
                  title: "Control Systems Integration",
                  description: "Advanced electrical controls and monitoring systems with professional panel installation for comprehensive facility automation.",
                  image: "/images/company/photo-1.jpg",
                  category: "Automation",
                  categoryColor: "orange",
                  specs: "Control Systems | Completed 2025",
                },
              ].map((project, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white">
                    <div className="relative h-64 overflow-hidden bg-gray-100">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <Badge className={`bg-brand-${project.categoryColor}-600 text-white border-none`}>
                          {project.category}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white text-sm font-medium">
                          {project.specs}
                        </p>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex items-center text-quantum-blue font-semibold group-hover:gap-2 transition-all">
                        View Case Study
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-quantum-blue hover:bg-blue-700 text-white font-semibold px-10 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Contact Us for More Projects
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Racing Stripe Divider */}
        <div className="h-3 flex">
          <div className="flex-1 bg-quantum-blue"></div>
          <div className="flex-1 bg-quantum-red"></div>
          <div className="flex-1 bg-quantum-cyan"></div>
        </div>

        {/* Professional CTA Section */}
        <section className="py-24 bg-gradient-to-br from-quantum-blue via-blue-700 to-blue-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10"></div>

          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
            <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-quantum-cyan blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 max-w-5xl">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Partner with Industry-Leading HVAC Experts
              </h2>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
                Schedule a comprehensive system assessment with our certified technicians. From new installations to emergency repairs, we deliver enterprise-grade HVAC solutions with guaranteed satisfaction.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <Link href="/quote">
                  <Button
                    size="lg"
                    className="bg-white text-quantum-blue hover:bg-gray-100 font-bold px-10 py-7 text-lg rounded-lg shadow-2xl hover:shadow-white/50 hover:scale-105 transition-all"
                  >
                    Request Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-quantum-red hover:bg-red-700 text-white font-bold px-10 py-7 text-lg rounded-lg shadow-2xl hover:shadow-red-500/50 hover:scale-105 transition-all border-2 border-transparent hover:border-white"
                  >
                    24/7 Emergency Dispatch
                  </Button>
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-100">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="hidden sm:block w-px h-6 bg-blue-300"></div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  <span>Factory Certified</span>
                </div>
                <div className="hidden sm:block w-px h-6 bg-blue-300"></div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>2-Hour Response Time</span>
                </div>
              </div>
              <p className="text-blue-200 mt-8 text-lg">
                Service Hotline: <a href="tel:+1234567890" className="font-bold text-white hover:text-quantum-cyan transition-colors">(123) 456-7890</a>
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
