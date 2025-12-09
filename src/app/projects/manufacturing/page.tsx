"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Factory,
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
  Snowflake,
  Award,
  Shield,
  Zap,
  Quote,
  AlertCircle,
  TrendingDown,
} from "lucide-react";

export default function ManufacturingProjectPage() {
  const projectDetails = {
    title: "Manufacturing Plant Cooling",
    category: "Industrial Refrigeration",
    location: "Mississauga, ON",
    completionDate: "August 2023",
    duration: "6 months",
    squareFootage: "75,000 sq ft",
    building: "Food processing facility",
  };

  const challenges = [
    "Strict temperature requirements for food safety compliance",
    "24/7 production schedule requiring zero downtime",
    "Existing ammonia-based system nearing end of life",
    "High humidity control requirements for product quality",
    "Need for redundant systems to prevent inventory loss",
  ];

  const solutions = [
    {
      icon: Snowflake,
      title: "Redundant Cooling Systems",
      description: "Installed dual compressor systems with automatic failover to ensure continuous operation even during maintenance.",
    },
    {
      icon: Thermometer,
      title: "Precision Temperature Control",
      description: "Advanced PLC-based controls maintaining ±0.5°F temperature accuracy across all production zones.",
    },
    {
      icon: Wind,
      title: "Process Ventilation",
      description: "High-volume air handling systems with HEPA filtration to maintain clean room standards.",
    },
    {
      icon: Gauge,
      title: "Remote Monitoring System",
      description: "24/7 cloud-based monitoring with instant alerts for temperature deviations or equipment issues.",
    },
  ];

  const results = [
    { metric: "99.9%", label: "System Uptime", description: "Exceeding industry standards" },
    { metric: "42%", label: "Energy Savings", description: "Compared to previous system" },
    { metric: "100%", label: "HACCP Compliant", description: "All regulatory requirements met" },
    { metric: "Zero", label: "Product Loss", description: "Since system installation" },
  ];

  const testimonial = {
    quote: "The new refrigeration system has been transformational for our operations. The redundant design gives us peace of mind, and the energy savings have significantly improved our bottom line. Quantum HVAC understood our industry's unique requirements from day one.",
    author: "Sarah Williams",
    title: "Operations Director",
    company: "Canadian Food Processing Inc.",
  };

  const gallery = [
    { src: "/images/company/photo-2.jpg", alt: "Production Floor" },
    { src: "/images/company/photo-1.jpg", alt: "Refrigeration System" },
    { src: "/images/company/photo-4.jpg", alt: "HVAC Maintenance" },
    { src: "/images/company/photo-3.jpg", alt: "Ventilation Ductwork" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px]">
          <Image
            src="/images/company/photo-2.jpg"
            alt={projectDetails.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto max-w-7xl">
              <div className="inline-flex items-center gap-2 bg-[#00BCD4] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Factory className="h-4 w-4" />
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
              <Link href="/" className="hover:text-[#00BCD4] transition-colors">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/projects" className="hover:text-[#00BCD4] transition-colors">
                Projects
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gray-900 font-medium">Manufacturing Plant Cooling</span>
            </nav>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/projects"
              className="inline-flex items-center text-[#00BCD4] hover:text-[#00AAC0] mb-8 font-medium"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Projects
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
                <p className="text-lg text-gray-700 mb-6">
                  This critical industrial refrigeration project involved designing and installing
                  a comprehensive cooling solution for a large-scale food processing facility. The
                  client required HACCP-compliant temperature control systems with built-in redundancy
                  to protect their valuable inventory.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  Our team engineered a custom solution featuring dual-compressor systems, advanced
                  process controls, and 24/7 remote monitoring capabilities. The project was completed
                  in phases during scheduled production downtimes to avoid any disruption to operations.
                </p>

                {/* Critical Alert Box */}
                <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-6 mb-8">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-amber-800 mb-2">Critical Requirements</h4>
                      <p className="text-amber-700">
                        Food processing facilities require specialized HVAC systems that meet strict
                        HACCP, FDA, and CFIA regulations. Our team has extensive experience in
                        designing systems that meet these demanding standards.
                      </p>
                    </div>
                  </div>
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
                        <div key={index} className="bg-gray-50 rounded-lg p-6 border-2 border-gray-100 hover:border-[#00BCD4] transition-colors">
                          <div className="flex items-center gap-4 mb-3">
                            <div className="w-12 h-12 bg-[#00BCD4]/10 rounded-lg flex items-center justify-center">
                              <IconComponent className="h-6 w-6 text-[#00BCD4]" />
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
                      {["Process Refrigeration", "Walk-in Freezers", "Blast Chillers", "Remote Monitoring", "Preventive Maintenance"].map((service, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-[#00BCD4]" />
                          <span className="text-sm text-gray-700">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href="/quote" className="block mt-8">
                    <Button className="w-full bg-[#00BCD4] hover:bg-[#00AAC0]">
                      Get a Similar Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 bg-[#00BCD4]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Project Results</h2>
              <p className="text-xl text-cyan-100">Measurable impact delivered</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {results.map((result, index) => (
                <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-2">{result.metric}</div>
                  <div className="text-lg font-semibold text-cyan-100 mb-2">{result.label}</div>
                  <div className="text-sm text-cyan-200">{result.description}</div>
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
                <Quote className="absolute top-8 left-8 h-12 w-12 text-[#00BCD4]/20" />
                <div className="relative z-10">
                  <p className="text-xl md:text-2xl text-gray-700 italic mb-8 pl-8">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4 pl-8">
                    <div className="w-14 h-14 bg-[#00BCD4]/10 rounded-full flex items-center justify-center">
                      <Users className="h-7 w-7 text-[#00BCD4]" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-gray-600">{testimonial.title}</div>
                      <div className="text-[#00BCD4]">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-[#00BCD4] to-[#0066CC]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Award className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Industrial Refrigeration Solutions?
            </h2>
            <p className="text-xl text-cyan-100 max-w-2xl mx-auto mb-8">
              Our team specializes in food processing, cold storage, and industrial cooling systems.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/quote">
                <Button size="lg" variant="secondary">
                  Request a Quote
                </Button>
              </Link>
              <Link href="/services/refrigeration">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white hover:text-[#00BCD4]"
                >
                  Explore Refrigeration Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
