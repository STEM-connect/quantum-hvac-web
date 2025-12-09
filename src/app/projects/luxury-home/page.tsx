"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Home,
  MapPin,
  Calendar,
  Clock,
  Users,
  CheckCircle,
  ArrowLeft,
  ChevronRight,
  Thermometer,
  Wind,
  Gauge,
  Smartphone,
  Award,
  Shield,
  Zap,
  Quote,
  Wifi,
  Leaf,
  Sun,
} from "lucide-react";

export default function LuxuryHomeProjectPage() {
  const projectDetails = {
    title: "Luxury Home Climate Control",
    category: "Residential HVAC",
    location: "Oakville, ON",
    completionDate: "January 2024",
    duration: "3 weeks",
    squareFootage: "6,000 sq ft",
    building: "Custom luxury residence",
  };

  const challenges = [
    "Large open floor plan requiring even temperature distribution",
    "Wine cellar with precise humidity and temperature requirements",
    "Home theater needing whisper-quiet operation",
    "Integration with existing smart home ecosystem",
    "Aesthetic requirements for visible equipment",
  ];

  const solutions = [
    {
      icon: Thermometer,
      title: "6-Zone Climate Control",
      description: "Independent temperature control for each zone including bedrooms, living areas, wine cellar, and home theater.",
    },
    {
      icon: Smartphone,
      title: "Smart Home Integration",
      description: "Seamless integration with Control4 system for voice control, scheduling, and remote access via mobile app.",
    },
    {
      icon: Wind,
      title: "HEPA Air Filtration",
      description: "Hospital-grade air filtration system with UV-C purification for the healthiest indoor air quality.",
    },
    {
      icon: Leaf,
      title: "Energy-Efficient Design",
      description: "Variable-speed equipment and smart scheduling to minimize energy consumption without sacrificing comfort.",
    },
  ];

  const results = [
    { metric: "6", label: "Climate Zones", description: "Independent temperature control" },
    { metric: "45%", label: "Energy Savings", description: "Vs. traditional HVAC systems" },
    { metric: "20dB", label: "Noise Level", description: "Whisper-quiet operation" },
    { metric: "100%", label: "Smart Integration", description: "Full home automation" },
  ];

  const testimonial = {
    quote: "The team at Quantum HVAC understood exactly what we needed for our home. The zoned system means everyone in the family can set their own temperature, and the integration with our smart home is seamless. The wine cellar maintains perfect conditions, and we can barely hear the system running.",
    author: "David & Jennifer Thompson",
    title: "Homeowners",
    company: "Oakville, ON",
  };

  const features = [
    { icon: Wifi, title: "WiFi Thermostats", description: "Smart thermostats in every zone" },
    { icon: Sun, title: "Radiant Heating", description: "In-floor heating in bathrooms" },
    { icon: Shield, title: "Air Purification", description: "Whole-home UV-C purification" },
    { icon: Gauge, title: "Humidity Control", description: "Precise humidity management" },
  ];

  const gallery = [
    { src: "/images/company/photo-3.jpg", alt: "AC Unit Installation" },
    { src: "/images/company/photo-1.jpg", alt: "Smart Thermostat" },
    { src: "/images/company/photo-2.jpg", alt: "HVAC Equipment" },
    { src: "/images/company/photo-4.jpg", alt: "Heat Pump System" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px]">
          <Image
            src="/images/company/photo-3.jpg"
            alt={projectDetails.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto max-w-7xl">
              <div className="inline-flex items-center gap-2 bg-[#E63946] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Home className="h-4 w-4" />
                {projectDetails.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {projectDetails.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-white/90">
                <span className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  {projectDetails.location}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  {projectDetails.completionDate}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  {projectDetails.duration}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Racing Stripe Divider */}
        <div className="h-2 bg-gradient-to-r from-[#0066CC] via-[#00BCD4] to-[#E63946]"></div>

        {/* Breadcrumb Navigation */}
        <section className="bg-gray-50 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-[#E63946] transition-colors">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/projects" className="hover:text-[#E63946] transition-colors">
                Projects
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gray-900 font-medium">Luxury Home Climate Control</span>
            </nav>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/projects"
              className="inline-flex items-center text-[#E63946] hover:text-[#D62839] mb-8 font-medium"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Projects
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
                <p className="text-lg text-gray-700 mb-6">
                  This premium residential project involved designing and installing a comprehensive
                  smart climate control system for a 6,000 square foot luxury home in Oakville.
                  The homeowners wanted perfect comfort in every room, with special attention to
                  their wine cellar and home theater.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  Our team created a fully integrated 6-zone system with individual temperature
                  and humidity control, seamlessly connected to the home's existing Control4
                  automation platform. The result is a whisper-quiet, energy-efficient system
                  that provides personalized comfort throughout the home.
                </p>

                {/* Features Highlight */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                  {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div key={index} className="bg-[#E63946]/5 rounded-lg p-4 text-center">
                        <IconComponent className="h-8 w-8 text-[#E63946] mx-auto mb-2" />
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">{feature.title}</h4>
                        <p className="text-xs text-gray-600">{feature.description}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Challenges Section */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h3>
                  <ul className="space-y-3">
                    {challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-red-600 text-sm font-bold">{index + 1}</span>
                        </div>
                        <span className="text-gray-700">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions Section */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Solution</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {solutions.map((solution, index) => {
                      const IconComponent = solution.icon;
                      return (
                        <div key={index} className="bg-gray-50 rounded-lg p-6 border-2 border-gray-100 hover:border-[#E63946] transition-colors">
                          <div className="flex items-center gap-4 mb-3">
                            <div className="w-12 h-12 bg-[#E63946]/10 rounded-lg flex items-center justify-center">
                              <IconComponent className="h-6 w-6 text-[#E63946]" />
                            </div>
                            <h4 className="font-semibold text-gray-900">{solution.title}</h4>
                          </div>
                          <p className="text-gray-600 text-sm">{solution.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Gallery */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Gallery</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {gallery.map((image, index) => (
                      <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Project Details Card */}
                <div className="bg-gray-50 rounded-xl p-6 mb-8 sticky top-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Project Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600">Location</span>
                      <span className="font-medium text-gray-900">{projectDetails.location}</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600">Completion</span>
                      <span className="font-medium text-gray-900">{projectDetails.completionDate}</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600">Duration</span>
                      <span className="font-medium text-gray-900">{projectDetails.duration}</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600">Size</span>
                      <span className="font-medium text-gray-900">{projectDetails.squareFootage}</span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <span className="text-gray-600">Type</span>
                      <span className="font-medium text-gray-900">{projectDetails.building}</span>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-4">Services Provided</h4>
                    <div className="space-y-2">
                      {["Multi-Zone HVAC", "Smart Thermostats", "Air Purification", "Humidity Control", "Smart Home Integration"].map((service, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-[#E63946]" />
                          <span className="text-sm text-gray-700">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href="/quote" className="block mt-8">
                    <Button className="w-full bg-[#E63946] hover:bg-[#D62839]">
                      Get a Similar Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 bg-[#E63946]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Project Results</h2>
              <p className="text-xl text-red-100">Creating the perfect home environment</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {results.map((result, index) => (
                <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-2">{result.metric}</div>
                  <div className="text-lg font-semibold text-red-100 mb-2">{result.label}</div>
                  <div className="text-sm text-red-200">{result.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
                <Quote className="absolute top-8 left-8 h-12 w-12 text-[#E63946]/20" />
                <div className="relative z-10">
                  <p className="text-xl md:text-2xl text-gray-700 italic mb-8 pl-8">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4 pl-8">
                    <div className="w-14 h-14 bg-[#E63946]/10 rounded-full flex items-center justify-center">
                      <Users className="h-7 w-7 text-[#E63946]" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-gray-600">{testimonial.title}</div>
                      <div className="text-[#E63946]">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-[#E63946] to-[#0066CC]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Award className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Home's Comfort?
            </h2>
            <p className="text-xl text-red-100 max-w-2xl mx-auto mb-8">
              Experience the luxury of perfect climate control in every room of your home.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/quote">
                <Button size="lg" variant="secondary">
                  Request a Quote
                </Button>
              </Link>
              <Link href="/services/residential">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white hover:text-[#E63946]"
                >
                  Explore Residential Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
