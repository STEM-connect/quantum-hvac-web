import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import { CheckCircle, ArrowLeft } from "lucide-react";

export default function InstallationPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <HeroSection
          title="HVAC Installation Services"
          subtitle="Professional installation of heating, cooling, and ventilation systems for your home or business."
          backgroundImage="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1400&q=90"
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
                Expert HVAC Installation Services
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                At Quantum HVAC System Inc., we specialize in the professional
                installation of all types of heating, cooling, and ventilation
                systems. Our certified technicians ensure that your new
                equipment is properly sized, expertly installed, and optimized
                for maximum efficiency and performance.
              </p>
            </div>

            {/* Our Installation Process */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Installation Process
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    1
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Consultation & Assessment
                  </h4>
                  <p className="text-gray-700">
                    We begin with a thorough assessment of your space,
                    discussing your needs, preferences, and budget to determine
                    the ideal HVAC solution for your property.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    2
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    System Selection & Sizing
                  </h4>
                  <p className="text-gray-700">
                    We help you select the right equipment and properly size
                    your system using industry-standard calculations to ensure
                    optimal performance and efficiency.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    3
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Professional Installation
                  </h4>
                  <p className="text-gray-700">
                    Our certified technicians install your new system with
                    precision, following manufacturer specifications and
                    industry best practices.
                  </p>
                </div>
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
                    src="https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?w=800&q=80"
                    alt="Heating System Installation"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Gas and electric furnace installation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Boiler and radiant heating installation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
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
                    src="https://images.unsplash.com/photo-1581788604067-711fd259af0b?w=800&q=80"
                    alt="Cooling System Installation"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Central air conditioning installation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Ductless mini-split system installation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
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
                    src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80"
                    alt="Ventilation System Installation"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Air duct installation and modification</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Exhaust fan installation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
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
                    src="https://images.unsplash.com/photo-1567177662154-dfeb4c93b6ae?w=800&q=80"
                    alt="Smart Thermostat Installation"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Smart thermostat installation and setup</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Wi-Fi connectivity and app configuration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
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

            {/* Call to Action */}
            <div className="bg-blue-600 text-white rounded-lg p-8 shadow-lg text-center">
              <h3 className="text-2xl font-bold mb-4">
                Ready for a New HVAC System?
              </h3>
              <p className="text-lg mb-6">
                Contact us today for a free consultation and estimate on your
                installation project.
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
                    className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
                  >
                    Schedule Consultation
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
