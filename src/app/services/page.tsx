import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import {
  Thermometer,
  Wind,
  Fan,
  Wrench,
  Settings,
  RefreshCw,
  CheckCircle,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header is in layout.tsx */}

      <main>
        {/* Hero Section */}
        <HeroSection
          title="Our HVAC Services"
          subtitle="Comprehensive heating, cooling, and ventilation solutions for residential and commercial properties."
          backgroundImage="https://images.unsplash.com/photo-1621905251189-08b45249be80?w=1400&q=90"
        />

        {/* Services Overview */}
        <ServicesGrid />

        {/* Detailed Service Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heating Services */}
            <div className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center mb-4">
                    <Thermometer className="h-8 w-8 text-blue-600 mr-3" />
                    <h2 className="text-3xl font-bold text-gray-900">
                      Heating Services
                    </h2>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">
                    Keep your home or business warm and comfortable during the
                    coldest months with our comprehensive heating services. Our
                    certified technicians are experts in all types of heating
                    systems.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Furnace installation, repair, and maintenance",
                      "Boiler services and hot water systems",
                      "Heat pump installation and servicing",
                      "Radiant floor heating solutions",
                      "Energy-efficient heating system upgrades",
                      "Thermostat installation and programming",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/services/heating">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Learn More About Heating
                    </Button>
                  </Link>
                </div>
                <div className="order-1 lg:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?w=800&q=80"
                    alt="Heating Services"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Air Conditioning Services */}
            <div className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1581788604067-711fd259af0b?w=800&q=80"
                    alt="Air Conditioning Services"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center mb-4">
                    <Wind className="h-8 w-8 text-blue-600 mr-3" />
                    <h2 className="text-3xl font-bold text-gray-900">
                      Air Conditioning Services
                    </h2>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">
                    Stay cool and comfortable during the hottest days with our
                    reliable air conditioning services. We provide expert
                    installation, maintenance, and repair for all types of
                    cooling systems.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Central air conditioning installation and repair",
                      "Ductless mini-split system services",
                      "Commercial cooling solutions",
                      "AC maintenance and tune-ups",
                      "Emergency air conditioning repairs",
                      "Energy-efficient system upgrades",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/services/air-conditioning">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Learn More About Cooling
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Ventilation Services */}
            <div className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center mb-4">
                    <Fan className="h-8 w-8 text-blue-600 mr-3" />
                    <h2 className="text-3xl font-bold text-gray-900">
                      Ventilation Services
                    </h2>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">
                    Improve your indoor air quality and ensure proper airflow
                    throughout your property with our professional ventilation
                    services. Proper ventilation is essential for a healthy
                    indoor environment.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Air duct cleaning and sanitization",
                      "Ventilation system design and installation",
                      "Air purification solutions",
                      "Exhaust fan installation and repair",
                      "Attic ventilation services",
                      "Indoor air quality assessments",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/services/ventilation">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Learn More About Ventilation
                    </Button>
                  </Link>
                </div>
                <div className="order-1 lg:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80"
                    alt="Ventilation Services"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Maintenance Services */}
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80"
                    alt="Maintenance Services"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center mb-4">
                    <Settings className="h-8 w-8 text-blue-600 mr-3" />
                    <h2 className="text-3xl font-bold text-gray-900">
                      Maintenance Services
                    </h2>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">
                    Protect your HVAC investment and ensure optimal performance
                    with our comprehensive maintenance services. Regular
                    maintenance extends the life of your system and prevents
                    costly breakdowns.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Seasonal HVAC tune-ups and inspections",
                      "Preventative maintenance programs",
                      "Filter replacement services",
                      "System cleaning and optimization",
                      "Performance testing and adjustments",
                      "Extended warranty maintenance",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/services/maintenance">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Learn More About Maintenance
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Equipment */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Professional Equipment
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We use only the highest quality tools and equipment to ensure
                the best results for your HVAC needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md group">
                <Image
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80"
                  alt="HVAC Diagnostic Tools"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <h3 className="text-white font-medium">
                    Advanced Diagnostic Tools
                  </h3>
                </div>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md group">
                <Image
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80"
                  alt="HVAC Installation Equipment"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <h3 className="text-white font-medium">
                    Installation Equipment
                  </h3>
                </div>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md group">
                <Image
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80"
                  alt="HVAC Service Vehicles"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <h3 className="text-white font-medium">
                    Fully Equipped Service Vehicles
                  </h3>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Service Areas
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We proudly serve residential and commercial clients throughout
                the Greater Toronto Area.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
              {[
                "Toronto",
                "Mississauga",
                "Brampton",
                "Markham",
                "Vaughan",
                "Richmond Hill",
                "Oakville",
                "Burlington",
                "Hamilton",
                "Pickering",
                "Ajax",
                "Whitby",
              ].map((area, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <p className="font-medium text-gray-800">{area}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white"></div>
              <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-white"></div>
            </div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Need HVAC Service? We're Here to Help!
            </h2>
            <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
              Contact us today for a free consultation and estimate on any of
              our services.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/quote">
                <Button
                  size="lg"
                  variant="secondary"
                  className="shadow-lg hover:shadow-xl transition-shadow"
                >
                  Request a Quote
                </Button>
              </Link>
              <Link href="/schedule">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white hover:text-blue-600 shadow-lg hover:shadow-xl transition-shadow"
                >
                  Schedule Service
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer is in layout.tsx */}
    </div>
  );
}
