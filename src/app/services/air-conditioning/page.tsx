"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import { CheckCircle, ArrowLeft, ChevronRight, DollarSign, Star, Shield, Award, Snowflake } from "lucide-react";
import { motion } from "framer-motion";

export default function AirConditioningPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <HeroSection
          title="Air Conditioning Services"
          subtitle="Beat the heat with reliable cooling solutions for your home. From new AC installation to emergency repairs, we keep your family comfortable all summer."
          backgroundImage="/images/company/photo-3.jpg"
        />

        {/* Racing Stripe Divider */}
        <div className="h-2 bg-gradient-to-r from-[#0066CC] via-[#00BCD4] to-[#E63946]"></div>

        {/* Breadcrumb Navigation */}
        <section className="bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-[#E63946] transition-colors">
                Home
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <Link href="/services" className="hover:text-[#E63946] transition-colors">
                Services
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <Link href="/services/residential" className="hover:text-[#E63946] transition-colors">
                Residential
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-[#E63946] font-medium">Air Conditioning</span>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="bg-[#E63946] text-white py-6">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <Snowflake className="h-8 w-8" />
                <div className="font-bold text-lg">Stay Cool</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Shield className="h-8 w-8" />
                <div className="font-bold text-lg">24/7 Emergency</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Award className="h-8 w-8" />
                <div className="font-bold text-lg">Expert Techs</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <DollarSign className="h-8 w-8" />
                <div className="font-bold text-lg">Fair Pricing</div>
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
                className="flex items-center text-[#E63946] hover:text-[#C52A36] mb-6 font-medium"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Residential Services
              </Link>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Professional Air Conditioning Solutions
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Quantum HVAC System Inc. provides comprehensive air conditioning
                services to keep your home or business cool and comfortable
                during the hottest days. Our certified technicians are experts
                in all types of cooling systems, from central air conditioners
                to ductless mini-splits and everything in between.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              {/* Service 1 */}
              <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  AC Installation & Replacement
                </h3>
                <p className="text-gray-700 mb-6">
                  Whether you need a new air conditioning system installed or
                  your existing one replaced, our team provides expert guidance
                  on selecting the right system for your space and budget,
                  followed by professional installation.
                </p>
                <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                  <Image
                    src="/images/company/photo-1.jpg"
                    alt="AC Installation"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#E63946] mr-2 mt-1 flex-shrink-0" />
                    <span>Energy-efficient system options</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#E63946] mr-2 mt-1 flex-shrink-0" />
                    <span>Professional sizing and installation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#E63946] mr-2 mt-1 flex-shrink-0" />
                    <span>Removal and disposal of old equipment</span>
                  </li>
                </ul>
              </div>

              {/* Service 2 */}
              <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  AC Repair & Maintenance
                </h3>
                <p className="text-gray-700 mb-6">
                  When your cooling system breaks down, our emergency repair
                  services ensure you're never left in the heat. Our technicians
                  diagnose and fix issues quickly and efficiently.
                </p>
                <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                  <Image
                    src="/images/company/photo-2.jpg"
                    alt="AC Repair"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#E63946] mr-2 mt-1 flex-shrink-0" />
                    <span>24/7 emergency repair service</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#E63946] mr-2 mt-1 flex-shrink-0" />
                    <span>Seasonal maintenance programs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#E63946] mr-2 mt-1 flex-shrink-0" />
                    <span>Transparent pricing with no hidden fees</span>
                  </li>
                </ul>
              </div>

              {/* Service 3 */}
              <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Ductless Mini-Split Systems
                </h3>
                <p className="text-gray-700 mb-6">
                  Ductless mini-split systems offer flexible cooling solutions
                  for homes without existing ductwork or for adding cooling to
                  specific areas of your home.
                </p>
                <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                  <Image
                    src="/images/company/photo-4.jpg"
                    alt="Ductless Mini-Split Systems"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#E63946] mr-2 mt-1 flex-shrink-0" />
                    <span>Single and multi-zone options</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#E63946] mr-2 mt-1 flex-shrink-0" />
                    <span>Energy-efficient operation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#E63946] mr-2 mt-1 flex-shrink-0" />
                    <span>Quiet and discreet cooling</span>
                  </li>
                </ul>
              </div>

              {/* Service 4 */}
              <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Commercial Cooling Solutions
                </h3>
                <p className="text-gray-700 mb-6">
                  We provide specialized cooling solutions for businesses of all
                  sizes, from retail spaces to office buildings and industrial
                  facilities.
                </p>
                <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                  <Image
                    src="/images/company/photo-3.jpg"
                    alt="Commercial Cooling"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#E63946] mr-2 mt-1 flex-shrink-0" />
                    <span>Rooftop unit installation and service</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#E63946] mr-2 mt-1 flex-shrink-0" />
                    <span>VRF/VRV system solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#E63946] mr-2 mt-1 flex-shrink-0" />
                    <span>Customized maintenance contracts</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Quantum HVAC for Your Cooling Needs
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Expert Technicians
                  </h4>
                  <p className="text-gray-700">
                    Our cooling specialists are fully certified and undergo
                    continuous training to stay current with the latest
                    technologies and techniques.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Energy Efficiency Focus
                  </h4>
                  <p className="text-gray-700">
                    We help you select and maintain cooling systems that
                    minimize energy consumption while maximizing comfort and
                    savings.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Comprehensive Warranties
                  </h4>
                  <p className="text-gray-700">
                    All our cooling installations and repairs come with
                    industry-leading warranties for your peace of mind.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-[#E63946] text-white rounded-lg p-8 shadow-lg text-center">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Improve Your Cooling System?
              </h3>
              <p className="text-lg mb-6">
                Contact us today for a free consultation and estimate on our air
                conditioning services.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/quote">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="shadow-md hover:shadow-lg"
                  >
                    Request a Quote
                  </Button>
                </Link>
                <Link href="/schedule">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white hover:text-[#E63946]"
                  >
                    Schedule Service
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
