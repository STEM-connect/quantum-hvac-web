import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import { CheckCircle, ArrowLeft } from "lucide-react";

export default function HeatingPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <HeroSection
          title="Heating Services"
          subtitle="Keep your home warm and comfortable with our professional heating solutions."
          backgroundImage="https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?w=1400&q=90"
        />

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Link
                href="/services"
                className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to All Services
              </Link>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Professional Heating Solutions
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                At Quantum HVAC System Inc., we provide comprehensive heating
                services to ensure your home or business stays warm and
                comfortable during the coldest months. Our certified technicians
                are experts in all types of heating systems, from traditional
                furnaces to modern heat pumps and radiant heating solutions.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              {/* Service 1 */}
              <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Furnace Installation & Replacement
                </h3>
                <p className="text-gray-700 mb-6">
                  Whether you need a new furnace installed or your existing one
                  replaced, our team provides expert guidance on selecting the
                  right system for your space and budget, followed by
                  professional installation.
                </p>
                <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80"
                    alt="Furnace Installation"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>High-efficiency furnace options</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Professional sizing and installation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Removal and disposal of old equipment</span>
                  </li>
                </ul>
              </div>

              {/* Service 2 */}
              <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Heating System Repair
                </h3>
                <p className="text-gray-700 mb-6">
                  When your heating system breaks down, our emergency repair
                  services ensure you're never left in the cold. Our technicians
                  diagnose and fix issues quickly and efficiently.
                </p>
                <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80"
                    alt="Heating Repair"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>24/7 emergency repair service</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Comprehensive diagnostic assessment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Transparent pricing with no hidden fees</span>
                  </li>
                </ul>
              </div>

              {/* Service 3 */}
              <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Boiler Services
                </h3>
                <p className="text-gray-700 mb-6">
                  Our technicians are skilled in all aspects of boiler
                  installation, maintenance, and repair, ensuring your hot water
                  and steam heating systems operate efficiently.
                </p>
                <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1510077143771-1b6a5ca97c3d?w=800&q=80"
                    alt="Boiler Services"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Boiler installation and replacement</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Annual maintenance and tune-ups</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Energy efficiency upgrades</span>
                  </li>
                </ul>
              </div>

              {/* Service 4 */}
              <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Heat Pump Services
                </h3>
                <p className="text-gray-700 mb-6">
                  Heat pumps offer both heating and cooling capabilities, making
                  them an efficient year-round solution. We provide expert
                  installation, maintenance, and repair services for all heat
                  pump systems.
                </p>
                <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1631545308539-8cf3fad6e5cc?w=800&q=80"
                    alt="Heat Pump Services"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Air-source and ground-source heat pumps</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Ductless mini-split heat pump systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      Seasonal maintenance and performance optimization
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Quantum HVAC for Your Heating Needs
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Certified Technicians
                  </h4>
                  <p className="text-gray-700">
                    Our heating specialists are fully certified and undergo
                    continuous training to stay current with the latest
                    technologies and techniques.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Energy Efficiency Focus
                  </h4>
                  <p className="text-gray-700">
                    We help you select and maintain heating systems that
                    minimize energy consumption while maximizing comfort and
                    savings.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Comprehensive Warranties
                  </h4>
                  <p className="text-gray-700">
                    All our heating installations and repairs come with
                    industry-leading warranties for your peace of mind.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-blue-600 text-white rounded-lg p-8 shadow-lg text-center">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Improve Your Heating System?
              </h3>
              <p className="text-lg mb-6">
                Contact us today for a free consultation and estimate on our
                heating services.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="shadow-md hover:shadow-lg"
                >
                  Request a Quote
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
                >
                  Schedule Service
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
