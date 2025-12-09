"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import {
  Building2,
  Factory,
  Home,
  Snowflake,
  Wind,
  Award,
  ArrowRight,
  ChevronRight,
  MapPin,
  Calendar,
  CheckCircle,
} from "lucide-react";

export default function ProjectsPage() {
  const featuredProjects = [
    {
      title: "Downtown Office Complex",
      slug: "office-complex",
      category: "Commercial",
      categoryIcon: Building2,
      location: "Toronto, ON",
      year: "2023",
      image: "/images/company/photo-1.jpg",
      description: "Complete HVAC system installation for a 50,000 sq ft commercial building with smart climate controls and energy management.",
      highlights: ["35% Energy Reduction", "Smart Building Integration", "Multi-Zone Climate Control"],
      accentColor: "blue",
    },
    {
      title: "Manufacturing Plant Cooling",
      slug: "manufacturing",
      category: "Industrial",
      categoryIcon: Factory,
      location: "Mississauga, ON",
      year: "2023",
      image: "/images/company/photo-2.jpg",
      description: "Industrial refrigeration and ventilation system for a large-scale food processing facility with redundant cooling systems.",
      highlights: ["99.9% Uptime", "Process Temperature Control", "HACCP Compliant"],
      accentColor: "cyan",
    },
    {
      title: "Luxury Home Climate Control",
      slug: "luxury-home",
      category: "Residential",
      categoryIcon: Home,
      location: "Oakville, ON",
      year: "2024",
      image: "/images/company/photo-3.jpg",
      description: "Smart HVAC system for a 6,000 sq ft luxury residence with multi-zone temperature control and air purification.",
      highlights: ["6-Zone Control", "Smart Home Integration", "HEPA Air Filtration"],
      accentColor: "orange",
    },
  ];

  const additionalProjects = [
    {
      title: "Healthcare Facility HVAC",
      category: "Healthcare",
      location: "North York, ON",
      image: "/images/company/photo-2.jpg",
      description: "Specialized HVAC with advanced air filtration for a multi-story medical center.",
    },
    {
      title: "Restaurant Walk-in Cooler",
      category: "Refrigeration",
      location: "Downtown Toronto",
      image: "/images/company/photo-3.jpg",
      description: "Custom walk-in cooler and freezer installation for a high-volume restaurant.",
    },
    {
      title: "Retail Chain Maintenance",
      category: "Commercial",
      location: "GTA - Multiple Locations",
      image: "/images/company/photo-1.jpg",
      description: "Ongoing HVAC maintenance program for 15 retail locations across the GTA.",
    },
    {
      title: "Data Center Cooling",
      category: "Industrial",
      location: "Markham, ON",
      image: "/images/company/photo-4.jpg",
      description: "Precision cooling system for a Tier 3 enterprise data center.",
    },
    {
      title: "Condo Building HVAC",
      category: "Residential",
      location: "Scarborough, ON",
      image: "/images/company/photo-2.jpg",
      description: "Full HVAC system replacement for a 20-story condominium building.",
    },
    {
      title: "Supermarket Refrigeration",
      category: "Refrigeration",
      location: "Brampton, ON",
      image: "/images/company/photo-3.jpg",
      description: "Complete refrigeration display case retrofit with energy-efficient units.",
    },
  ];

  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "15+", label: "Years Experience" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <HeroSection
          title="Our Project Portfolio"
          subtitle="Explore our completed HVAC installations across commercial, industrial, and residential sectors throughout the Greater Toronto Area."
          backgroundImage="/images/company/photo-4.jpg"
          ctaText="Start Your Project"
        />

        {/* Racing Stripe Divider */}
        <div className="h-2 bg-gradient-to-r from-[#0066CC] via-[#00BCD4] to-[#E63946]"></div>

        {/* Breadcrumb Navigation */}
        <section className="bg-gray-50 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-[#0066CC] transition-colors">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gray-900 font-medium">Projects</span>
            </nav>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-[#0066CC] mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Detailed case studies showcasing our comprehensive HVAC solutions
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => {
                const IconComponent = project.categoryIcon;
                const colorMap = {
                  blue: { bg: "bg-[#0066CC]", text: "text-[#0066CC]", light: "bg-[#0066CC]/10" },
                  cyan: { bg: "bg-[#00BCD4]", text: "text-[#00BCD4]", light: "bg-[#00BCD4]/10" },
                  orange: { bg: "bg-[#E63946]", text: "text-[#E63946]", light: "bg-[#E63946]/10" },
                };
                const colorClasses = colorMap[project.accentColor as keyof typeof colorMap];

                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
                  >
                    <div className="relative h-64">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className={`absolute top-4 left-4 ${colorClasses.bg} text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2`}>
                        <IconComponent className="h-4 w-4" />
                        {project.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {project.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {project.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {project.description}
                      </p>
                      <div className="space-y-2 mb-6">
                        {project.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className={`h-4 w-4 ${colorClasses.text}`} />
                            <span className="text-sm text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                      <Link
                        href={`/projects/${project.slug}`}
                        className={`inline-flex items-center font-medium ${colorClasses.text} hover:underline`}
                      >
                        View Case Study
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Additional Projects Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                More Projects
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A selection of additional HVAC projects we have completed
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-100 rounded-lg overflow-hidden hover:border-[#0066CC] hover:shadow-lg transition-all group"
                >
                  <div className="relative h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-gray-900/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-1 text-sm text-gray-500 mb-2">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Industries We Serve
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From small businesses to large industrial facilities, we have the expertise for any project
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 text-center border-2 border-gray-100 hover:border-[#0066CC] transition-colors">
                <Building2 className="h-12 w-12 text-[#0066CC] mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-1">Commercial</h3>
                <p className="text-sm text-gray-600">Offices, retail, hospitality</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center border-2 border-gray-100 hover:border-[#00BCD4] transition-colors">
                <Factory className="h-12 w-12 text-[#00BCD4] mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-1">Industrial</h3>
                <p className="text-sm text-gray-600">Manufacturing, warehouses</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center border-2 border-gray-100 hover:border-[#E63946] transition-colors">
                <Home className="h-12 w-12 text-[#E63946] mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-1">Residential</h3>
                <p className="text-sm text-gray-600">Homes, condos, apartments</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center border-2 border-gray-100 hover:border-[#0066CC] transition-colors">
                <Snowflake className="h-12 w-12 text-[#0066CC] mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-1">Refrigeration</h3>
                <p className="text-sm text-gray-600">Food service, cold storage</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-[#0066CC] to-[#00BCD4] relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white"></div>
            </div>

            <Award className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Join hundreds of satisfied clients who trust Quantum HVAC for their
              heating, cooling, and refrigeration needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/quote">
                <Button
                  size="lg"
                  variant="secondary"
                  className="shadow-lg hover:shadow-xl transition-shadow"
                >
                  Get a Free Quote
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white hover:text-[#0066CC] shadow-lg hover:shadow-xl transition-shadow"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
