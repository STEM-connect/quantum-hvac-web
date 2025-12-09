"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import {
  Factory,
  Wind,
  Thermometer,
  Gauge,
  Wrench,
  AlertCircle,
  CheckCircle,
  Award,
  Clock,
  Shield,
  TrendingDown,
  Building2,
  Zap,
  Cog,
  ChevronRight,
  Phone,
  Users,
  Warehouse,
  HardHat,
  Fan,
} from "lucide-react";

export default function IndustrialHVACPage() {
  const services = [
    {
      icon: Fan,
      title: "Industrial Ventilation Systems",
      description: "High-capacity ventilation solutions for manufacturing plants, warehouses, and industrial facilities.",
      features: [
        "Process exhaust systems",
        "Dust collection systems",
        "Fume extraction",
        "Make-up air units",
      ],
    },
    {
      icon: Thermometer,
      title: "Process Heating & Cooling",
      description: "Specialized HVAC systems designed to meet precise temperature requirements for industrial processes.",
      features: [
        "Process chillers",
        "Industrial heating systems",
        "Temperature control units",
        "Heat exchangers",
      ],
    },
    {
      icon: Wind,
      title: "Large-Scale Air Handling",
      description: "Custom air handling units designed for high-volume industrial applications.",
      features: [
        "Custom AHU design",
        "Rooftop units",
        "Modular systems",
        "Energy recovery ventilators",
      ],
    },
    {
      icon: Cog,
      title: "Industrial Controls & Automation",
      description: "Advanced building automation systems for optimal efficiency and monitoring.",
      features: [
        "BMS integration",
        "PLC-based controls",
        "Remote monitoring",
        "Energy management systems",
      ],
    },
    {
      icon: Wrench,
      title: "Preventive Maintenance Programs",
      description: "Comprehensive maintenance plans to keep your industrial HVAC systems running at peak efficiency.",
      features: [
        "Scheduled inspections",
        "Filter replacement programs",
        "Belt and bearing maintenance",
        "Performance optimization",
      ],
    },
    {
      icon: AlertCircle,
      title: "24/7 Emergency Services",
      description: "Round-the-clock emergency repair services to minimize costly downtime.",
      features: [
        "Immediate response",
        "Fully stocked service vehicles",
        "Experienced technicians",
        "Priority scheduling",
      ],
    },
  ];

  const industries = [
    { icon: Factory, name: "Manufacturing Plants", description: "Heavy manufacturing and assembly facilities" },
    { icon: Warehouse, name: "Warehouses & Distribution", description: "Large-scale storage and logistics centers" },
    { icon: Cog, name: "Food Processing", description: "Food and beverage production facilities" },
    { icon: Building2, name: "Data Centers", description: "Mission-critical cooling for server facilities" },
    { icon: HardHat, name: "Mining & Extraction", description: "Ventilation for mining operations" },
    { icon: Zap, name: "Power Generation", description: "HVAC for power plants and utilities" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <HeroSection
          title="Industrial HVAC Solutions Built for Heavy-Duty Performance"
          subtitle="Powerful climate control and ventilation systems engineered for manufacturing, warehousing, and industrial operations."
          backgroundImage="/images/company/photo-4.jpg"
          ctaText="Request Industrial Quote"
        />

        {/* Breadcrumb Navigation */}
        <section className="bg-gray-50 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-[#0066CC] transition-colors">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/services" className="hover:text-[#0066CC] transition-colors">
                Services
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gray-900 font-medium">Industrial HVAC</span>
            </nav>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Heavy-Duty HVAC for Industrial Environments
              </h2>
              <p className="text-lg text-gray-700">
                Industrial facilities require specialized HVAC solutions that can handle extreme conditions,
                large volumes, and demanding operational requirements. Quantum HVAC System Inc. delivers
                robust industrial climate control systems designed for maximum reliability and efficiency.
              </p>
            </div>

            {/* Racing Stripe Divider */}
            <div className="h-1 bg-gradient-to-r from-[#0066CC] via-[#00BCD4] to-[#E63946] mb-12"></div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="text-center p-6 bg-[#0066CC]/10 rounded-lg border-2 border-[#0066CC]/20 hover:border-[#0066CC] transition-colors">
                <div className="flex justify-center mb-3">
                  <Award className="h-10 w-10 text-[#0066CC]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">15+</h3>
                <p className="text-sm text-gray-600">Years Industrial Experience</p>
              </div>
              <div className="text-center p-6 bg-[#0066CC]/10 rounded-lg border-2 border-[#0066CC]/20 hover:border-[#0066CC] transition-colors">
                <div className="flex justify-center mb-3">
                  <Factory className="h-10 w-10 text-[#0066CC]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">200+</h3>
                <p className="text-sm text-gray-600">Industrial Projects</p>
              </div>
              <div className="text-center p-6 bg-[#0066CC]/10 rounded-lg border-2 border-[#0066CC]/20 hover:border-[#0066CC] transition-colors">
                <div className="flex justify-center mb-3">
                  <Clock className="h-10 w-10 text-[#0066CC]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">24/7</h3>
                <p className="text-sm text-gray-600">Emergency Response</p>
              </div>
              <div className="text-center p-6 bg-[#0066CC]/10 rounded-lg border-2 border-[#0066CC]/20 hover:border-[#0066CC] transition-colors">
                <div className="flex justify-center mb-3">
                  <Shield className="h-10 w-10 text-[#0066CC]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">99.9%</h3>
                <p className="text-sm text-gray-600">System Uptime</p>
              </div>
            </div>
          </div>
        </section>

        {/* Racing Stripe Divider */}
        <div className="h-2 bg-gradient-to-r from-[#0066CC] via-[#00BCD4] to-[#E63946]"></div>

        {/* Industrial Services Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Comprehensive Industrial HVAC Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From ventilation systems to process cooling, we provide complete HVAC solutions
                engineered for industrial applications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-8 border-2 border-gray-100 hover:border-[#0066CC]"
                  >
                    <div className="flex items-center justify-center w-16 h-16 bg-[#0066CC]/10 rounded-lg mb-6">
                      <IconComponent className="h-8 w-8 text-[#0066CC]" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckCircle className="h-4 w-4 text-[#0066CC] mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/quote"
                      className="text-[#0066CC] hover:text-[#0055AA] font-medium inline-flex items-center"
                    >
                      Get a Quote
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Industries We Serve
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Specialized industrial HVAC solutions for diverse heavy-duty applications
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => {
                const IconComponent = industry.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-6 bg-gray-50 rounded-lg hover:bg-[#0066CC]/5 transition-colors group"
                  >
                    <div className="flex justify-center mb-4">
                      <IconComponent className="h-12 w-12 text-gray-600 group-hover:text-[#0066CC] transition-colors" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{industry.name}</h3>
                    <p className="text-sm text-gray-600">{industry.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Industrial Projects */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Featured Industrial Projects
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Real results from our industrial HVAC installations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src="/images/company/photo-1.jpg"
                    alt="Manufacturing Plant HVAC"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#0066CC] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Manufacturing
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Automotive Parts Manufacturer
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Complete ventilation system overhaul for a 100,000 sq ft manufacturing
                    facility with specialized dust collection and air filtration.
                  </p>
                  <div className="border-t pt-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500 mb-1">Energy Savings</p>
                        <p className="font-semibold text-[#0066CC]">38%</p>
                      </div>
                      <div>
                        <p className="text-gray-500 mb-1">Air Quality</p>
                        <p className="font-semibold text-[#0066CC]">+95%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src="/images/company/photo-2.jpg"
                    alt="Data Center Cooling"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#0066CC] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Data Center
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Enterprise Data Center
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Precision cooling system installation for a Tier 3 data center
                    with redundant systems and advanced monitoring capabilities.
                  </p>
                  <div className="border-t pt-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500 mb-1">Uptime</p>
                        <p className="font-semibold text-[#0066CC]">99.999%</p>
                      </div>
                      <div>
                        <p className="text-gray-500 mb-1">PUE Improvement</p>
                        <p className="font-semibold text-[#0066CC]">1.4 to 1.2</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src="/images/company/photo-3.jpg"
                    alt="Warehouse Ventilation"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#0066CC] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Warehouse
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Distribution Center HVAC
                  </h3>
                  <p className="text-gray-600 mb-4">
                    High-volume air circulation and temperature control system for
                    a 250,000 sq ft regional distribution warehouse.
                  </p>
                  <div className="border-t pt-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500 mb-1">Coverage</p>
                        <p className="font-semibold text-[#0066CC]">250K sq ft</p>
                      </div>
                      <div>
                        <p className="text-gray-500 mb-1">Cost Reduction</p>
                        <p className="font-semibold text-[#0066CC]">32%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Quantum HVAC for Industrial Projects
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Partner with us for industrial HVAC solutions that deliver performance and reliability
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/company/photo-4.jpg"
                  alt="Industrial HVAC Installation"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#0066CC]/10 rounded-lg flex items-center justify-center mr-4">
                      <TrendingDown className="h-6 w-6 text-[#0066CC]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Reduce Operating Costs
                      </h3>
                      <p className="text-gray-600">
                        Our energy-efficient industrial HVAC systems can reduce your utility
                        costs by up to 40% while maintaining optimal working conditions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#0066CC]/10 rounded-lg flex items-center justify-center mr-4">
                      <Shield className="h-6 w-6 text-[#0066CC]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Minimize Downtime
                      </h3>
                      <p className="text-gray-600">
                        With 24/7 emergency support and preventive maintenance programs,
                        we keep your operations running without costly interruptions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#0066CC]/10 rounded-lg flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-[#0066CC]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Improve Worker Safety
                      </h3>
                      <p className="text-gray-600">
                        Proper ventilation and air quality systems protect your workforce
                        from airborne contaminants and maintain safe working temperatures.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#0066CC]/10 rounded-lg flex items-center justify-center mr-4">
                      <Gauge className="h-6 w-6 text-[#0066CC]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Meet Compliance Requirements
                      </h3>
                      <p className="text-gray-600">
                        Our systems are designed to meet OSHA, EPA, and industry-specific
                        regulations for air quality and environmental standards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-[#0066CC] to-[#0055AA] relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white"></div>
              <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-white"></div>
            </div>

            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              Ready to Upgrade Your Industrial HVAC System?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Get a free consultation and custom quote for your industrial facility. Our
              engineers are ready to design the perfect HVAC solution for your operations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/quote">
                <Button
                  size="lg"
                  variant="secondary"
                  className="shadow-lg hover:shadow-xl transition-shadow"
                >
                  Request Industrial Quote
                </Button>
              </Link>
              <Link href="/schedule">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white hover:text-[#0066CC] shadow-lg hover:shadow-xl transition-shadow"
                >
                  Schedule Site Assessment
                </Button>
              </Link>
            </div>
            <p className="text-blue-100 mt-6">
              Call us 24/7 for emergency service:{" "}
              <span className="font-semibold text-white">(647) 704-1780</span>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
