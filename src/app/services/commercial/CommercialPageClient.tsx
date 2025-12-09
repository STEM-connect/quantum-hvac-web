"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import {
  Building2,
  Thermometer,
  Wind,
  Gauge,
  Calendar,
  Wrench,
  ArrowLeft,
  CheckCircle,
  Award,
  Clock,
  Shield,
  TrendingDown,
  Factory,
  Building,
  ShoppingBag,
  Briefcase,
  Warehouse,
  UtensilsCrossed,
  ChevronRight,
} from "lucide-react";

export default function CommercialPageClient() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <HeroSection
          title="Commercial HVAC Systems Built for Performance"
          subtitle="Reliable, energy-efficient climate control solutions for businesses across all industries. Over 15 years of commercial HVAC expertise."
          backgroundImage="/images/company/photo-1.jpg"
          ctaText="Request Commercial Quote"
        />

        {/* Breadcrumb Navigation */}
        <section className="bg-gray-50 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <Link
                href="/"
                className="hover:text-[#0066CC] transition-colors"
              >
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link
                href="/services"
                className="hover:text-[#0066CC] transition-colors"
              >
                Services
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gray-900 font-medium">
                Commercial HVAC
              </span>
            </nav>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Enterprise-Grade HVAC Solutions
              </h2>
              <p className="text-lg text-gray-700">
                At Quantum HVAC System Inc., we understand that commercial
                facilities demand more than standard heating and cooling. Our
                commercial HVAC services deliver reliability, efficiency, and
                cost savings for businesses of all sizes.
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
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="text-center p-6 bg-[#0066CC]/10 rounded-lg border-2 border-[#0066CC]/20 hover:border-[#0066CC] transition-colors">
                <div className="flex justify-center mb-3">
                  <Building2 className="h-10 w-10 text-[#0066CC]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">500+</h3>
                <p className="text-sm text-gray-600">Commercial Projects</p>
              </div>
              <div className="text-center p-6 bg-[#0066CC]/10 rounded-lg border-2 border-[#0066CC]/20 hover:border-[#0066CC] transition-colors">
                <div className="flex justify-center mb-3">
                  <Clock className="h-10 w-10 text-[#0066CC]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">24/7</h3>
                <p className="text-sm text-gray-600">Emergency Service</p>
              </div>
              <div className="text-center p-6 bg-[#0066CC]/10 rounded-lg border-2 border-[#0066CC]/20 hover:border-[#0066CC] transition-colors">
                <div className="flex justify-center mb-3">
                  <Shield className="h-10 w-10 text-[#0066CC]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">100%</h3>
                <p className="text-sm text-gray-600">Satisfaction Guaranteed</p>
              </div>
            </div>
          </div>
        </section>

        {/* Racing Stripe Divider */}
        <div className="h-2 bg-gradient-to-r from-[#0066CC] via-[#00BCD4] to-[#E63946]"></div>

        {/* Commercial Services Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Comprehensive Commercial HVAC Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From installation to maintenance, we provide complete HVAC
                solutions tailored to your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-8 border-2 border-gray-100 hover:border-[#0066CC]">
                <div className="flex items-center justify-center w-16 h-16 bg-[#0066CC]/10 rounded-lg mb-6">
                  <Thermometer className="h-8 w-8 text-[#0066CC]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Commercial Heating Systems
                </h3>
                <p className="text-gray-600 mb-4">
                  High-capacity heating solutions including rooftop units,
                  boilers, and radiant systems designed for large-scale
                  commercial applications.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-[#0066CC] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Industrial furnace systems</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-[#0066CC] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Commercial boiler installation</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-[#0066CC] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Zone heating solutions</span>
                  </li>
                </ul>
                <Link
                  href="/quote"
                  className="text-[#0066CC] hover:text-[#0055AA] font-medium inline-flex items-center"
                >
                  Get a Quote
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>

              {/* Service 2 */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-8 border-2 border-gray-100 hover:border-[#0066CC] transition-colors">
                <div className="flex items-center justify-center w-16 h-16 bg-[#0066CC]/10 rounded-lg mb-6">
                  <Wind className="h-8 w-8 text-[#0066CC]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Commercial Cooling & Chillers
                </h3>
                <p className="text-gray-600 mb-4">
                  Advanced cooling systems including chillers, rooftop units,
                  and split systems to maintain optimal temperatures in any
                  commercial space.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-[#0066CC] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Water-cooled chiller systems</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-[#0066CC] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Rooftop AC units (RTU)</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-[#0066CC] mr-2 mt-0.5 flex-shrink-0" />
                    <span>VRF/VRV systems</span>
                  </li>
                </ul>
                <Link
                  href="/quote"
                  className="text-[#0066CC] hover:text-[#0055AA] font-medium inline-flex items-center"
                >
                  Get a Quote
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>

              {/* Service 3 */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-8 border-2 border-gray-100 hover:border-[#0066CC] transition-colors">
                <div className="flex items-center justify-center w-16 h-16 bg-[#0066CC]/10 rounded-lg mb-6">
                  <Wind className="h-8 w-8 text-[#0066CC]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Ventilation & Air Quality
                </h3>
                <p className="text-gray-600 mb-4">
                  Professional indoor air quality solutions with advanced
                  filtration, ventilation, and air purification systems for
                  healthier workspaces.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-[#0066CC] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Commercial duct cleaning</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-[#0066CC] mr-2 mt-0.5 flex-shrink-0" />
                    <span>HEPA filtration systems</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-[#0066CC] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Energy recovery ventilators</span>
                  </li>
                </ul>
                <Link
                  href="/quote"
                  className="text-[#0066CC] hover:text-[#0055AA] font-medium inline-flex items-center"
                >
                  Get a Quote
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>

              {/* Service 4 */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-8 border-2 border-gray-100 hover:border-[#0066CC] transition-colors">
                <div className="flex items-center justify-center w-16 h-16 bg-[#0066CC]/10 rounded-lg mb-6">
                  <Gauge className="h-8 w-8 text-[#0066CC]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Energy Management Systems
                </h3>
                <p className="text-gray-600 mb-4">
                  Smart building automation and energy management systems that
                  reduce operating costs while maintaining optimal comfort
                  levels.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-[#0066CC] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Building automation systems</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-[#0066CC] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Smart thermostats & controls</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-[#0066CC] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Real-time monitoring & analytics</span>
                  </li>
                </ul>
                <Link
                  href="/quote"
                  className="text-[#0066CC] hover:text-[#0055AA] font-medium inline-flex items-center"
                >
                  Get a Quote
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>

              {/* Service 5 */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-8 border-2 border-gray-100 hover:border-[#0066CC] transition-colors">
                <div className="flex items-center justify-center w-16 h-16 bg-[#0066CC]/10 rounded-lg mb-6">
                  <Calendar className="h-8 w-8 text-[#0066CC]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Preventative Maintenance Plans
                </h3>
                <p className="text-gray-600 mb-4">
                  Customized maintenance programs to keep your systems running
                  efficiently, prevent breakdowns, and extend equipment
                  lifespan.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-[#0066CC] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Quarterly system inspections</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-[#0066CC] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Priority service scheduling</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-[#0066CC] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Detailed maintenance reports</span>
                  </li>
                </ul>
                <Link
                  href="/quote"
                  className="text-[#0066CC] hover:text-[#0055AA] font-medium inline-flex items-center"
                >
                  Get a Quote
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>

              {/* Service 6 */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-8 border-2 border-gray-100 hover:border-[#0066CC] transition-colors">
                <div className="flex items-center justify-center w-16 h-16 bg-[#0066CC]/10 rounded-lg mb-6">
                  <Wrench className="h-8 w-8 text-[#0066CC]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Emergency Repair Service
                </h3>
                <p className="text-gray-600 mb-4">
                  24/7 emergency HVAC repair services to minimize downtime and
                  get your business back to normal operation quickly.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-[#0066CC] mr-2 mt-0.5 flex-shrink-0" />
                    <span>24/7 emergency hotline</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-[#0066CC] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Rapid response times</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-[#0066CC] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Fully stocked service vehicles</span>
                  </li>
                </ul>
                <Link
                  href="/schedule"
                  className="text-[#0066CC] hover:text-[#0055AA] font-medium inline-flex items-center"
                >
                  Schedule Emergency Service
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
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
                Our commercial HVAC solutions are tailored to meet the unique
                requirements of diverse industries
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-[#0066CC]/5 transition-colors group">
                <div className="flex justify-center mb-4">
                  <Building className="h-12 w-12 text-gray-600 group-hover:text-[#0066CC] transition-colors" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Healthcare</h3>
                <p className="text-sm text-gray-600">
                  Hospitals & Clinics
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group">
                <div className="flex justify-center mb-4">
                  <Factory className="h-12 w-12 text-gray-600 group-hover:text-[#0066CC] transition-colors" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Manufacturing
                </h3>
                <p className="text-sm text-gray-600">Industrial Facilities</p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group">
                <div className="flex justify-center mb-4">
                  <ShoppingBag className="h-12 w-12 text-gray-600 group-hover:text-[#0066CC] transition-colors" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Retail</h3>
                <p className="text-sm text-gray-600">Stores & Malls</p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group">
                <div className="flex justify-center mb-4">
                  <Briefcase className="h-12 w-12 text-gray-600 group-hover:text-[#0066CC] transition-colors" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Offices</h3>
                <p className="text-sm text-gray-600">Corporate Buildings</p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group">
                <div className="flex justify-center mb-4">
                  <Warehouse className="h-12 w-12 text-gray-600 group-hover:text-[#0066CC] transition-colors" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Warehouses
                </h3>
                <p className="text-sm text-gray-600">
                  Distribution Centers
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group">
                <div className="flex justify-center mb-4">
                  <UtensilsCrossed className="h-12 w-12 text-gray-600 group-hover:text-[#0066CC] transition-colors" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Restaurants
                </h3>
                <p className="text-sm text-gray-600">Food Service</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Commercial Projects / Case Studies */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Featured Commercial Projects
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Real results from our commercial HVAC installations across
                various industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Case Study 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src="/images/company/photo-2.jpg"
                    alt="Office Building HVAC System"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#0066CC] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Office Space
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Downtown Toronto Office Tower
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Complete HVAC system retrofit for a 12-story office
                    building, including VRF installation and building automation
                    system integration.
                  </p>
                  <div className="border-t pt-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500 mb-1">Energy Savings</p>
                        <p className="font-semibold text-[#0066CC]">35%</p>
                      </div>
                      <div>
                        <p className="text-gray-500 mb-1">ROI Period</p>
                        <p className="font-semibold text-[#0066CC]">4 years</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Study 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src="/images/company/photo-3.jpg"
                    alt="Manufacturing Facility HVAC"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#0066CC] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Manufacturing
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Industrial Manufacturing Plant
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Custom HVAC solution for a 50,000 sq ft manufacturing
                    facility with specialized temperature and humidity control
                    requirements.
                  </p>
                  <div className="border-t pt-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500 mb-1">Energy Savings</p>
                        <p className="font-semibold text-[#0066CC]">42%</p>
                      </div>
                      <div>
                        <p className="text-gray-500 mb-1">Uptime</p>
                        <p className="font-semibold text-[#0066CC]">99.8%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Study 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src="/images/company/photo-4.jpg"
                    alt="Retail Space HVAC"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#0066CC] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Retail
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Multi-Location Retail Chain
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive HVAC maintenance program for 15 retail
                    locations, ensuring consistent comfort and reducing energy
                    costs chain-wide.
                  </p>
                  <div className="border-t pt-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500 mb-1">Cost Reduction</p>
                        <p className="font-semibold text-[#0066CC]">28%</p>
                      </div>
                      <div>
                        <p className="text-gray-500 mb-1">Locations</p>
                        <p className="font-semibold text-[#0066CC]">15</p>
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
                Why Choose Quantum HVAC for Your Business
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Partner with us for commercial HVAC solutions that deliver
                measurable results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              {/* Image */}
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
                <Image
                  src="/images/company/photo-1.jpg"
                  alt="Commercial HVAC Technician"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Benefits List */}
              <div className="order-1 md:order-2">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#0066CC]/10 rounded-lg flex items-center justify-center mr-4">
                      <TrendingDown className="h-6 w-6 text-[#0066CC]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Maximize Energy Efficiency
                      </h3>
                      <p className="text-gray-600">
                        Our modern HVAC systems and optimization strategies can
                        reduce your energy costs by up to 40%, delivering
                        significant savings on operational expenses.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Shield className="h-6 w-6 text-[#0066CC]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Unmatched Reliability
                      </h3>
                      <p className="text-gray-600">
                        Our preventative maintenance programs and 24/7 emergency
                        support ensure your systems run smoothly, minimizing
                        costly downtime and disruptions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Award className="h-6 w-6 text-[#0066CC]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Long-Term Cost Savings
                      </h3>
                      <p className="text-gray-600">
                        Invest in quality systems and maintenance that pay for
                        themselves through reduced energy bills, fewer repairs,
                        and extended equipment lifespan.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <CheckCircle className="h-6 w-6 text-[#0066CC]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Expert Technical Support
                      </h3>
                      <p className="text-gray-600">
                        Our certified technicians have decades of combined
                        experience with all major commercial HVAC brands and
                        systems, ensuring expert service every time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Benefits Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-[#0066CC]/10 to-[#0066CC]/20 rounded-lg p-8">
                <div className="flex items-center justify-center w-14 h-14 bg-white rounded-full mb-4">
                  <Building2 className="h-7 w-7 text-[#0066CC]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Scalable Solutions
                </h3>
                <p className="text-gray-700">
                  From single-location businesses to multi-site enterprises, our
                  HVAC solutions grow with your business needs.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#0066CC]/10 to-[#0066CC]/20 rounded-lg p-8">
                <div className="flex items-center justify-center w-14 h-14 bg-white rounded-full mb-4">
                  <Gauge className="h-7 w-7 text-[#0066CC]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Smart Technology
                </h3>
                <p className="text-gray-700">
                  Advanced building automation and monitoring systems provide
                  real-time insights and remote control capabilities.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#0066CC]/10 to-[#0066CC]/20 rounded-lg p-8">
                <div className="flex items-center justify-center w-14 h-14 bg-white rounded-full mb-4">
                  <Calendar className="h-7 w-7 text-[#0066CC]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Flexible Financing
                </h3>
                <p className="text-gray-700">
                  We offer flexible payment options and financing plans to make
                  commercial HVAC upgrades more accessible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-[#0066CC] to-[#0055AA] relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white"></div>
              <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-white"></div>
            </div>

            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              Ready to Upgrade Your Commercial HVAC System?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Get a free consultation and custom quote for your business. Our
              experts are ready to design the perfect HVAC solution for your
              facility.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/quote">
                <Button
                  size="lg"
                  variant="secondary"
                  className="shadow-lg hover:shadow-xl transition-shadow"
                >
                  Request Commercial Quote
                </Button>
              </Link>
              <Link href="/schedule">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white hover:text-[#0066CC] shadow-lg hover:shadow-xl transition-shadow"
                >
                  Schedule Consultation
                </Button>
              </Link>
            </div>
            <p className="text-blue-100 mt-6">
              Call us 24/7 for emergency service: <span className="font-semibold text-white">(647) 704-1780</span>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
