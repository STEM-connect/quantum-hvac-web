'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import HeroSection from "@/components/HeroSection";
import {
  CheckCircle,
  ArrowLeft,
  Settings,
  Layers,
  Factory,
  Building2,
  Wrench,
  Clock,
  Shield,
  DollarSign,
  Lightbulb,
  Users,
  FileCheck,
  Hammer,
  X
} from "lucide-react";

// Project data for the gallery
const projects = [
  {
    id: 1,
    title: "Commercial Office Building Ductwork",
    category: "ductwork",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    description: "Custom spiral duct system for 15,000 sq ft office complex"
  },
  {
    id: 2,
    title: "Industrial Ventilation System",
    category: "industrial",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    description: "Heavy-duty exhaust system for manufacturing facility"
  },
  {
    id: 3,
    title: "Architectural Metalwork - Reception Area",
    category: "architectural",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    description: "Custom stainless steel architectural features"
  },
  {
    id: 4,
    title: "Restaurant Kitchen Hood System",
    category: "ductwork",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
    description: "Custom exhaust hood and ductwork for commercial kitchen"
  },
  {
    id: 5,
    title: "Hospital Clean Room Ductwork",
    category: "ductwork",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    description: "Precision fabricated stainless steel ductwork for medical facility"
  },
  {
    id: 6,
    title: "Industrial Process Equipment",
    category: "industrial",
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800&q=80",
    description: "Custom metal fabrication for industrial processing"
  },
  {
    id: 7,
    title: "Architectural Wall Panels",
    category: "architectural",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    description: "Decorative metal panels for building facade"
  },
  {
    id: 8,
    title: "Data Center Cooling Ductwork",
    category: "ductwork",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    description: "Precision cooling distribution system"
  },
  {
    id: 9,
    title: "Manufacturing Plant Retrofit",
    category: "industrial",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    description: "Complete ventilation system modification"
  },
  {
    id: 10,
    title: "Retail Store Metal Features",
    category: "architectural",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    description: "Custom decorative metalwork for retail environment"
  },
  {
    id: 11,
    title: "Warehouse Distribution System",
    category: "industrial",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
    description: "Large-scale duct distribution network"
  },
  {
    id: 12,
    title: "Hotel Lobby Design Elements",
    category: "architectural",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
    description: "Architectural metal features for luxury hotel"
  }
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "ductwork", label: "Ductwork" },
  { id: "industrial", label: "Industrial" },
  { id: "architectural", label: "Architectural" }
];

export default function SheetMetalPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <HeroSection
          title="Custom Sheet Metal Fabrication In-House"
          subtitle="From Design to Installation - Precision Metalwork for Every Application"
          backgroundImage="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1400&q=90"
        />

        {/* Racing Stripe Divider */}
        <div className="h-2 bg-gradient-to-r from-[#0066CC] via-[#00BCD4] to-[#E63946]"></div>

        {/* Breadcrumb */}
        <section className="bg-gray-50 py-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-brand-blue-600">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/services" className="hover:text-brand-blue-600">Services</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">Sheet Metal Fabrication</span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <Link
                href="/services"
                className="flex items-center text-brand-blue-600 hover:text-brand-blue-700 mb-6"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to All Services
              </Link>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Professional In-House Sheet Metal Fabrication
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                At Quantum HVAC System Inc., we take pride in our state-of-the-art in-house sheet metal fabrication facility.
                Our experienced craftsmen combine traditional metalworking expertise with modern precision equipment to deliver
                custom solutions for ductwork, industrial applications, and architectural projects.
              </p>
              <p className="text-lg text-gray-700">
                From initial design consultation to final installation, our integrated approach ensures superior quality,
                faster turnaround times, and cost-effective solutions tailored to your specific requirements.
              </p>
            </div>

            {/* Capabilities Section */}
            <div className="mb-20">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Our Fabrication Capabilities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-brand-slate-50 rounded-lg p-8 shadow-sm hover:shadow-lg transition-all border border-brand-slate-200">
                  <div className="w-14 h-14 bg-brand-slate-700 text-white rounded-lg flex items-center justify-center mb-4">
                    <Layers className="h-7 w-7" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Custom Ductwork Design & Fabrication
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Precision-engineered ductwork fabricated to exact specifications for optimal airflow and efficiency.
                    All gauges, shapes, and configurations available.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-brand-slate-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Round, rectangular, and oval ductwork</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-brand-slate-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Fittings, transitions, and reducers</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-brand-slate-50 rounded-lg p-8 shadow-sm hover:shadow-lg transition-all border border-brand-slate-200">
                  <div className="w-14 h-14 bg-brand-slate-700 text-white rounded-lg flex items-center justify-center mb-4">
                    <Settings className="h-7 w-7" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Spiral Duct Manufacturing
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Advanced spiral duct production with superior strength and airtight seams. Ideal for commercial
                    and industrial applications requiring high performance.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-brand-slate-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Diameters from 3" to 60"</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-brand-slate-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Galvanized and stainless steel options</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-brand-slate-50 rounded-lg p-8 shadow-sm hover:shadow-lg transition-all border border-brand-slate-200">
                  <div className="w-14 h-14 bg-brand-slate-700 text-white rounded-lg flex items-center justify-center mb-4">
                    <Factory className="h-7 w-7" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Industrial Fabrication
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Heavy-duty metal fabrication for industrial equipment, process ventilation, and specialized applications.
                    Built to withstand demanding environments.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-brand-slate-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Process exhaust systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-brand-slate-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Industrial ventilation components</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-brand-slate-50 rounded-lg p-8 shadow-sm hover:shadow-lg transition-all border border-brand-slate-200">
                  <div className="w-14 h-14 bg-brand-slate-700 text-white rounded-lg flex items-center justify-center mb-4">
                    <Building2 className="h-7 w-7" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Architectural Metalwork
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Custom decorative and functional metalwork that combines aesthetic appeal with structural integrity.
                    Perfect for modern commercial spaces.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-brand-slate-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Wall panels and cladding</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-brand-slate-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Custom metal features</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-brand-slate-50 rounded-lg p-8 shadow-sm hover:shadow-lg transition-all border border-brand-slate-200">
                  <div className="w-14 h-14 bg-brand-slate-700 text-white rounded-lg flex items-center justify-center mb-4">
                    <Wrench className="h-7 w-7" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Retrofit & Modifications
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Expert modification and retrofit services for existing systems. We seamlessly integrate new components
                    with your current infrastructure.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-brand-slate-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>System upgrades and expansions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-brand-slate-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Custom adapters and transitions</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-brand-slate-50 rounded-lg p-8 shadow-sm hover:shadow-lg transition-all border border-brand-slate-200">
                  <div className="w-14 h-14 bg-brand-slate-700 text-white rounded-lg flex items-center justify-center mb-4">
                    <FileCheck className="h-7 w-7" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Custom Projects
                  </h4>
                  <p className="text-gray-700 mb-4">
                    No project is too unique. Our engineering team works with you to design and fabricate solutions
                    for specialized requirements and one-of-a-kind applications.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-brand-slate-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Engineering consultation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-brand-slate-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Prototype development</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Process Overview */}
            <div className="mb-20 bg-gradient-to-br from-brand-slate-900 to-brand-slate-800 text-white rounded-2xl p-12">
              <h3 className="text-3xl font-bold mb-4 text-center">
                Our Fabrication Process
              </h3>
              <p className="text-center text-brand-slate-200 mb-12 max-w-3xl mx-auto">
                From concept to completion, our streamlined process ensures quality, precision, and on-time delivery.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="relative">
                  <div className="bg-white text-brand-slate-900 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg mx-auto">
                    1
                  </div>
                  <div className="text-center">
                    <Users className="h-10 w-10 mx-auto mb-4 text-brand-blue-400" />
                    <h4 className="text-xl font-semibold mb-3">
                      Consultation & Assessment
                    </h4>
                    <p className="text-brand-slate-300">
                      Our team meets with you to understand your requirements, site conditions, and project goals.
                      We assess the scope and provide expert recommendations.
                    </p>
                  </div>
                  {/* Connector line - hidden on mobile */}
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-brand-slate-600" style={{ transform: 'translateY(-50%)' }} />
                </div>

                <div className="relative">
                  <div className="bg-white text-brand-slate-900 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg mx-auto">
                    2
                  </div>
                  <div className="text-center">
                    <Lightbulb className="h-10 w-10 mx-auto mb-4 text-brand-blue-400" />
                    <h4 className="text-xl font-semibold mb-3">
                      Design & Engineering
                    </h4>
                    <p className="text-brand-slate-300">
                      Our engineers create detailed fabrication drawings and specifications. We use CAD software
                      to ensure precise measurements and optimal design.
                    </p>
                  </div>
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-brand-slate-600" style={{ transform: 'translateY(-50%)' }} />
                </div>

                <div className="relative">
                  <div className="bg-white text-brand-slate-900 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg mx-auto">
                    3
                  </div>
                  <div className="text-center">
                    <Hammer className="h-10 w-10 mx-auto mb-4 text-brand-blue-400" />
                    <h4 className="text-xl font-semibold mb-3">
                      Fabrication
                    </h4>
                    <p className="text-brand-slate-300">
                      Skilled craftsmen fabricate your components in our modern shop using precision equipment.
                      Quality control checks ensure every piece meets specifications.
                    </p>
                  </div>
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-brand-slate-600" style={{ transform: 'translateY(-50%)' }} />
                </div>

                <div className="relative">
                  <div className="bg-white text-brand-slate-900 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg mx-auto">
                    4
                  </div>
                  <div className="text-center">
                    <CheckCircle className="h-10 w-10 mx-auto mb-4 text-brand-blue-400" />
                    <h4 className="text-xl font-semibold mb-3">
                      Installation & Testing
                    </h4>
                    <p className="text-brand-slate-300">
                      Professional installation by certified technicians ensures proper fit and function.
                      We test all systems to verify performance before project completion.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Portfolio/Gallery Section */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                Project Portfolio
              </h3>
              <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                Explore our diverse range of completed projects showcasing precision craftsmanship and custom solutions.
              </p>

              {/* Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                      selectedCategory === category.id
                        ? 'bg-brand-slate-700 text-white shadow-md'
                        : 'bg-brand-slate-100 text-brand-slate-700 hover:bg-brand-slate-200'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>

              {/* Project Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="relative h-64 bg-brand-slate-200">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <Badge className="absolute top-3 right-3 bg-white/90 text-brand-slate-800 capitalize">
                        {project.category}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-slate-900 via-brand-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h4 className="text-white font-semibold text-lg mb-2">
                        {project.title}
                      </h4>
                      <p className="text-brand-slate-200 text-sm">
                        {project.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Materials & Equipment */}
            <div className="mb-20">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Materials & Equipment Capabilities
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-brand-slate-50 rounded-lg p-8 border border-brand-slate-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Layers className="h-6 w-6 mr-3 text-brand-slate-600" />
                    Materials We Work With
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-brand-slate-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Galvanized Steel</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-brand-slate-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Stainless Steel</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-brand-slate-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Aluminum</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-brand-slate-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Carbon Steel</span>
                      </li>
                    </ul>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-brand-slate-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Copper</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-brand-slate-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Pre-coated Metals</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-brand-slate-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Various Gauges</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-brand-slate-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Custom Alloys</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-brand-slate-50 rounded-lg p-8 border border-brand-slate-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Settings className="h-6 w-6 mr-3 text-brand-slate-600" />
                    Equipment Capabilities
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-slate-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">CNC Plasma Cutting Tables</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-slate-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Precision Press Brakes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-slate-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Spiral Duct Machines</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-slate-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Roll Forming Equipment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-slate-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Welding & Joining Systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-slate-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Computer-Aided Design (CAD)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-brand-blue-50 rounded-lg p-8 border border-brand-blue-200">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Shield className="h-6 w-6 mr-3 text-brand-blue-600" />
                  Quality Standards & Certifications
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <p className="font-medium text-gray-900 mb-2">Industry Standards</p>
                    <p className="text-gray-700 text-sm">SMACNA guidelines compliance for all ductwork fabrication</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-2">Quality Control</p>
                    <p className="text-gray-700 text-sm">Multi-point inspection process ensures precision and quality</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-2">Certified Technicians</p>
                    <p className="text-gray-700 text-sm">Trained professionals with years of fabrication experience</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Industries & Applications */}
            <div className="mb-20">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Industries & Applications We Serve
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white border-2 border-brand-slate-200 rounded-lg p-6 hover:border-brand-slate-400 transition-colors">
                  <Building2 className="h-10 w-10 text-brand-slate-600 mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Commercial Buildings
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Office complexes, retail spaces, hotels, and multi-tenant facilities requiring custom HVAC ductwork
                    and architectural metalwork.
                  </p>
                </div>

                <div className="bg-white border-2 border-brand-slate-200 rounded-lg p-6 hover:border-brand-slate-400 transition-colors">
                  <Factory className="h-10 w-10 text-brand-slate-600 mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Industrial Facilities
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Manufacturing plants, warehouses, and processing facilities requiring heavy-duty ventilation
                    and specialized fabrication.
                  </p>
                </div>

                <div className="bg-white border-2 border-brand-slate-200 rounded-lg p-6 hover:border-brand-slate-400 transition-colors">
                  <svg className="h-10 w-10 text-brand-slate-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Healthcare Facilities
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Hospitals, clinics, and medical offices requiring precise, clean fabrication for specialized
                    ventilation systems and clean rooms.
                  </p>
                </div>

                <div className="bg-white border-2 border-brand-slate-200 rounded-lg p-6 hover:border-brand-slate-400 transition-colors">
                  <svg className="h-10 w-10 text-brand-slate-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Restaurants & Food Service
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Commercial kitchens, food processing facilities, and dining establishments requiring custom
                    exhaust hoods and ventilation systems.
                  </p>
                </div>

                <div className="bg-white border-2 border-brand-slate-200 rounded-lg p-6 hover:border-brand-slate-400 transition-colors">
                  <svg className="h-10 w-10 text-brand-slate-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Data Centers
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Precision cooling distribution systems and specialized ductwork for maintaining optimal
                    temperature and airflow in critical environments.
                  </p>
                </div>

                <div className="bg-white border-2 border-brand-slate-200 rounded-lg p-6 hover:border-brand-slate-400 transition-colors">
                  <Lightbulb className="h-10 w-10 text-brand-slate-600 mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Custom Projects
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Unique applications requiring specialized design and fabrication. We work with architects and
                    engineers on custom solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Why In-House Fabrication */}
            <div className="mb-20 bg-gradient-to-r from-brand-slate-50 to-brand-blue-50 rounded-2xl p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                Why Choose In-House Fabrication?
              </h3>
              <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                Our integrated fabrication facility provides significant advantages over outsourced metalwork.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-slate-700 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Quality Control
                  </h4>
                  <p className="text-gray-600">
                    Direct oversight of every fabrication step ensures consistently high quality and adherence
                    to specifications.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-slate-700 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Faster Turnaround
                  </h4>
                  <p className="text-gray-600">
                    Eliminate third-party delays. We control the entire process from design to delivery,
                    ensuring on-time completion.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-slate-700 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Cost Savings
                  </h4>
                  <p className="text-gray-600">
                    No middleman markups or outsourcing fees. Our efficient in-house operation delivers
                    better value for your investment.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-slate-700 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Custom Solutions
                  </h4>
                  <p className="text-gray-600">
                    Direct communication with our fabrication team enables truly custom solutions tailored
                    to your exact needs.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-brand-slate-900 to-brand-slate-800 text-white rounded-2xl p-12 shadow-xl text-center">
              <h3 className="text-3xl font-bold mb-4">
                Discuss Your Fabrication Project
              </h3>
              <p className="text-xl mb-8 text-brand-slate-200 max-w-2xl mx-auto">
                From concept to installation, our expert team is ready to deliver precision sheet metal
                fabrication for your unique requirements.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <Link href="/quote">
                  <Button
                    size="lg"
                    className="bg-white text-brand-slate-900 hover:bg-brand-slate-100 shadow-md hover:shadow-lg px-8 py-6 text-lg"
                  >
                    Request a Quote
                  </Button>
                </Link>
                <Link href="/schedule">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-slate-900 px-8 py-6 text-lg"
                  >
                    Schedule Consultation
                  </Button>
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-brand-slate-300">
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call: (604) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@quantumhvac.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-96 md:h-[600px] rounded-lg overflow-hidden mb-6">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center">
              <Badge className="mb-4 bg-brand-slate-700 text-white capitalize">
                {selectedProject.category}
              </Badge>
              <h3 className="text-2xl font-bold text-white mb-3">
                {selectedProject.title}
              </h3>
              <p className="text-gray-300 text-lg">
                {selectedProject.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
