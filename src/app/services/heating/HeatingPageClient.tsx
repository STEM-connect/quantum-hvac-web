"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import { CheckCircle, ArrowLeft, ChevronRight, DollarSign, Star, Shield, Award, Flame } from "lucide-react";

export default function HeatingPageClient() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <HeroSection
          title="Furnace & Heating Services Toronto"
          subtitle="Expert furnace repair, installation & maintenance for Toronto & GTA homes. 24/7 emergency heating service. Keep your family warm all winter."
          backgroundImage="/images/company/photo-1.jpg"
        />

        {/* Racing Stripe Divider */}
        <div className="h-2 bg-gradient-to-r from-[#0066CC] via-[#00BCD4] to-[#E63946]"></div>

        {/* Breadcrumb Navigation */}
        <section className="bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-[#0066CC] transition-colors">
                Home
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <Link href="/services" className="hover:text-[#0066CC] transition-colors">
                Services
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <Link href="/services/residential" className="hover:text-[#0066CC] transition-colors">
                Residential
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-[#0066CC] font-medium">Heating</span>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="bg-[#0066CC] text-white py-6">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <Flame className="h-8 w-8" />
                <div className="font-bold text-lg">Stay Warm</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Award className="h-8 w-8" />
                <div className="font-bold text-lg">Expert Service</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <DollarSign className="h-8 w-8" />
                <div className="font-bold text-lg">Save on Energy</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Shield className="h-8 w-8" />
                <div className="font-bold text-lg">24/7 Emergency</div>
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
                className="flex items-center text-[#0066CC] hover:text-[#0055AA] mb-6 font-medium"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Residential Services
              </Link>
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Furnace & Heating Services in Toronto
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                At Quantum HVAC System Inc., we provide comprehensive heating
                services to Toronto, Mississauga, Brampton, Vaughan, and the entire GTA.
                Our certified technicians are experts in all types of heating systems,
                from high-efficiency furnaces to modern heat pumps and radiant heating solutions.
                With 15+ years of experience, we're Toronto's trusted heating contractor.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              {/* Service 1 */}
              <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Furnace Installation & Replacement Toronto
                </h2>
                <p className="text-gray-700 mb-6">
                  Whether you need a new furnace installed or your existing one
                  replaced, our team provides expert guidance on selecting the
                  right system for your Toronto home and budget, followed by
                  professional installation.
                </p>
                <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                  <Image
                    src="/images/company/photo-2.jpg"
                    alt="Furnace Installation Toronto"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0066CC] mr-2 mt-1 flex-shrink-0" />
                    <span>High-efficiency furnace options (96%+ AFUE)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0066CC] mr-2 mt-1 flex-shrink-0" />
                    <span>Professional sizing and installation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0066CC] mr-2 mt-1 flex-shrink-0" />
                    <span>Removal and disposal of old equipment</span>
                  </li>
                </ul>
              </div>

              {/* Service 2 */}
              <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Emergency Furnace Repair Toronto
                </h2>
                <p className="text-gray-700 mb-6">
                  When your heating system breaks down in Toronto's cold winters,
                  our 24/7 emergency repair services ensure you're never left in the cold.
                  Our technicians diagnose and fix issues quickly and efficiently.
                </p>
                <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                  <Image
                    src="/images/company/photo-3.jpg"
                    alt="Emergency Furnace Repair Toronto"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0066CC] mr-2 mt-1 flex-shrink-0" />
                    <span>24/7 emergency repair service across GTA</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0066CC] mr-2 mt-1 flex-shrink-0" />
                    <span>Comprehensive diagnostic assessment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0066CC] mr-2 mt-1 flex-shrink-0" />
                    <span>Transparent pricing with no hidden fees</span>
                  </li>
                </ul>
              </div>

              {/* Service 3 */}
              <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Boiler Services Toronto
                </h2>
                <p className="text-gray-700 mb-6">
                  Our technicians are skilled in all aspects of boiler
                  installation, maintenance, and repair for Toronto homes,
                  ensuring your hot water and steam heating systems operate efficiently.
                </p>
                <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                  <Image
                    src="/images/company/photo-4.jpg"
                    alt="Boiler Services Toronto"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0066CC] mr-2 mt-1 flex-shrink-0" />
                    <span>Boiler installation and replacement</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0066CC] mr-2 mt-1 flex-shrink-0" />
                    <span>Annual maintenance and tune-ups</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0066CC] mr-2 mt-1 flex-shrink-0" />
                    <span>Energy efficiency upgrades</span>
                  </li>
                </ul>
              </div>

              {/* Service 4 */}
              <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Heat Pump Services Toronto
                </h2>
                <p className="text-gray-700 mb-6">
                  Heat pumps offer both heating and cooling capabilities, making
                  them an efficient year-round solution for Toronto homes. We provide expert
                  installation, maintenance, and repair services for all heat pump systems.
                </p>
                <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                  <Image
                    src="/images/company/photo-1.jpg"
                    alt="Heat Pump Services Toronto"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0066CC] mr-2 mt-1 flex-shrink-0" />
                    <span>Air-source and ground-source heat pumps</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0066CC] mr-2 mt-1 flex-shrink-0" />
                    <span>Ductless mini-split heat pump systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0066CC] mr-2 mt-1 flex-shrink-0" />
                    <span>Seasonal maintenance and performance optimization</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-blue-50 rounded-lg p-8 mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Heating Service Areas in GTA
              </h2>
              <p className="text-gray-700 mb-4">
                We provide furnace repair, heating installation, and HVAC services throughout the Greater Toronto Area:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Toronto", "North York", "Scarborough", "Etobicoke", "Mississauga", "Brampton", "Vaughan", "Markham", "Richmond Hill", "Oakville", "Burlington", "Milton"].map((area) => (
                  <div key={area} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#0066CC] mr-2" />
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Quantum HVAC for Heating in Toronto
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Certified Technicians
                  </h3>
                  <p className="text-gray-700">
                    Our heating specialists are fully certified and undergo
                    continuous training to stay current with the latest
                    technologies and techniques.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Energy Efficiency Focus
                  </h3>
                  <p className="text-gray-700">
                    We help you select and maintain heating systems that
                    minimize energy consumption while maximizing comfort and
                    savings on your utility bills.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Comprehensive Warranties
                  </h3>
                  <p className="text-gray-700">
                    All our heating installations and repairs come with
                    industry-leading warranties for your peace of mind.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-[#0066CC] text-white rounded-lg p-8 shadow-lg text-center">
              <h2 className="text-2xl font-bold mb-4">
                Need Furnace Repair or Heating Service in Toronto?
              </h2>
              <p className="text-lg mb-2">
                Contact us today for a free consultation and estimate.
              </p>
              <p className="text-xl font-bold mb-6">
                Call (647) 704-1780 for 24/7 Emergency Service
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
                    className="bg-transparent border-white text-white hover:bg-white hover:text-[#0066CC]"
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
