"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import { CheckCircle, ArrowLeft, DollarSign, Star, Shield, Award, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function InstallationPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <HeroSection
          title="HVAC Installation & Replacement"
          subtitle="Professional installation of high-efficiency heating and cooling systems. Expert service, fair pricing, and comfort you can count on."
          backgroundImage="/images/company/photo-1.jpg"
        />

        {/* Breadcrumb Navigation */}
        <section className="bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-brand-orange-500 transition-colors">
                Home
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <Link href="/services" className="hover:text-brand-orange-500 transition-colors">
                Services
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <Link href="/services/residential" className="hover:text-brand-orange-500 transition-colors">
                Residential
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-brand-orange-500 font-medium">Installation</span>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="bg-brand-orange-500 text-white py-6">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <Award className="h-8 w-8" />
                <div className="font-bold text-lg">Expert Installation</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Star className="h-8 w-8" />
                <div className="font-bold text-lg">100% Satisfaction</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Shield className="h-8 w-8" />
                <div className="font-bold text-lg">Warranty Included</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <DollarSign className="h-8 w-8" />
                <div className="font-bold text-lg">0% Financing</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Link
                href="/services/residential"
                className="flex items-center text-brand-orange-500 hover:text-brand-orange-600 mb-6 font-medium"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Residential Services
              </Link>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                New HVAC Installation for Your Home
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Installing a new HVAC system is a big decision for your family. At Quantum HVAC,
                we make it easy with expert guidance, professional installation, and systems that
                save you money on energy bills. Our certified technicians ensure your new equipment
                is properly sized and installed for years of reliable comfort.
              </p>
            </div>

            {/* Our Installation Process */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Installation Process
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-brand-orange-50 to-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-brand-orange-100"
                >
                  <div className="w-12 h-12 bg-brand-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    1
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Free In-Home Consultation
                  </h4>
                  <p className="text-gray-700">
                    We visit your home to assess your needs, discuss comfort goals,
                    and understand your budget. No pressure, just honest advice.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-brand-orange-50 to-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-brand-orange-100"
                >
                  <div className="w-12 h-12 bg-brand-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    2
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    System Selection & Quote
                  </h4>
                  <p className="text-gray-700">
                    We recommend the perfect system for your home and provide
                    upfront pricing with financing options to fit your budget.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-brand-orange-50 to-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-brand-orange-100"
                >
                  <div className="w-12 h-12 bg-brand-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    3
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Expert Installation
                  </h4>
                  <p className="text-gray-700">
                    Our certified team installs your system with care, ensures
                    everything works perfectly, and shows you how to use it.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              {/* Service 1 */}
              <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Heating System Installation
                </h3>
                <p className="text-gray-700 mb-6">
                  We install a wide range of heating systems, including
                  furnaces, boilers, heat pumps, and radiant heating solutions
                  for both residential and commercial properties.
                </p>
                <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                  <Image
                    src="/images/company/photo-2.jpg"
                    alt="Heating System Installation"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Gas and electric furnace installation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Boiler and radiant heating installation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Heat pump system installation</span>
                  </li>
                </ul>
              </div>

              {/* Service 2 */}
              <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Cooling System Installation
                </h3>
                <p className="text-gray-700 mb-6">
                  From central air conditioning to ductless mini-splits, we
                  install cooling systems designed to keep your space
                  comfortable during the hottest months.
                </p>
                <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                  <Image
                    src="/images/company/photo-3.jpg"
                    alt="Cooling System Installation"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Central air conditioning installation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Ductless mini-split system installation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Commercial cooling system installation</span>
                  </li>
                </ul>
              </div>

              {/* Service 3 */}
              <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Ventilation System Installation
                </h3>
                <p className="text-gray-700 mb-6">
                  We install comprehensive ventilation systems to improve indoor
                  air quality, control humidity, and ensure proper airflow
                  throughout your property.
                </p>
                <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                  <Image
                    src="/images/company/photo-4.jpg"
                    alt="Ventilation System Installation"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Air duct installation and modification</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Exhaust fan installation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Energy recovery ventilator (ERV) installation</span>
                  </li>
                </ul>
              </div>

              {/* Service 4 */}
              <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Smart Thermostat Installation
                </h3>
                <p className="text-gray-700 mb-6">
                  Upgrade your HVAC system with smart thermostat technology for
                  improved comfort, convenience, and energy savings.
                </p>
                <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                  <Image
                    src="/images/company/photo-1.jpg"
                    alt="Smart Thermostat Installation"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Smart thermostat installation and setup</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Wi-Fi connectivity and app configuration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Programming and optimization for energy savings</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Quantum HVAC for Your Installation
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Certified Technicians
                  </h4>
                  <p className="text-gray-700">
                    Our installation team consists of fully certified and
                    experienced professionals who follow industry best
                    practices.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Quality Equipment
                  </h4>
                  <p className="text-gray-700">
                    We install only high-quality, energy-efficient equipment
                    from trusted manufacturers with proven reliability.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Comprehensive Warranties
                  </h4>
                  <p className="text-gray-700">
                    All our installations come with industry-leading warranties
                    on both equipment and labor for your peace of mind.
                  </p>
                </div>
              </div>
            </div>

            {/* Financing Section */}
            <div className="mb-16 bg-gradient-to-r from-brand-orange-500 to-brand-orange-600 rounded-2xl p-10 text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4">
                    Flexible Financing Options
                  </h3>
                  <p className="text-orange-100 mb-6 text-lg">
                    Don't let cost stop you from getting the comfort your family deserves.
                    We offer flexible payment plans with approved credit.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                      <span>From $79/month with approved credit</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                      <span>$0 down payment options available</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                      <span>0% financing on select systems (OAC)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-center mb-4">
                    <div className="text-sm text-orange-100 mb-2">New System Starting From</div>
                    <div className="text-5xl font-bold">$79</div>
                    <div className="text-orange-100">/month</div>
                  </div>
                  <p className="text-sm text-orange-100 text-center">
                    Based on approved credit. Terms and conditions apply.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-brand-orange-500 to-brand-orange-600 text-white rounded-2xl p-10 shadow-2xl text-center">
              <h3 className="text-3xl font-bold mb-4">
                Ready for a New HVAC System?
              </h3>
              <p className="text-xl mb-8 text-orange-100">
                Get a free, no-obligation quote today. Expert advice, fair pricing, guaranteed satisfaction.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/quote">
                  <Button
                    size="lg"
                    className="bg-white text-brand-orange-500 hover:bg-orange-50 font-semibold px-10 py-7 text-lg shadow-xl"
                  >
                    Get Free Quote
                  </Button>
                </Link>
                <Link href="/schedule">
                  <Button
                    size="lg"
                    className="bg-brand-orange-700 hover:bg-brand-orange-800 text-white font-semibold px-10 py-7 text-lg border-2 border-white"
                  >
                    Schedule Consultation
                  </Button>
                </Link>
              </div>
              <p className="mt-6 text-orange-100">
                Or call us now: <a href="tel:416-555-0123" className="font-bold text-white hover:underline">416-555-0123</a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
