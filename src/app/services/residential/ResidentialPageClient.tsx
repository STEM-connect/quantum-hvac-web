"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import {
  ArrowLeft,
  Flame,
  Snowflake,
  Wind,
  Wrench,
  Calendar,
  Smartphone,
  Droplet,
  Sparkles,
  ChevronRight,
  Star,
  Shield,
  DollarSign,
  Award,
  CheckCircle,
  MapPin,
  Phone,
  Clock
} from "lucide-react";
import { motion } from "framer-motion";

export default function ResidentialPageClient() {
  const services = [
    {
      icon: Flame,
      title: "Residential Heating",
      description: "Keep your family warm with our furnace and heat pump solutions",
      features: ["Furnaces", "Heat Pumps", "Boilers"],
      href: "/services/heating",
      color: "orange"
    },
    {
      icon: Snowflake,
      title: "Air Conditioning",
      description: "Stay cool all summer with efficient central AC and ductless systems",
      features: ["Central AC", "Ductless Mini-Splits", "Heat Pumps"],
      href: "/services/air-conditioning",
      color: "cyan"
    },
    {
      icon: Wrench,
      title: "Installation & Replacement",
      description: "Professional installation of new HVAC systems for your home",
      features: ["New Systems", "Replacements", "Upgrades"],
      href: "/services/installation",
      color: "blue"
    },
    {
      icon: Calendar,
      title: "Repair Services",
      description: "Fast, reliable repairs when you need them most",
      features: ["24/7 Emergency", "Same-Day Service", "All Brands"],
      href: "/schedule",
      color: "red"
    },
    {
      icon: Shield,
      title: "Maintenance Plans",
      description: "Protect your investment with regular maintenance",
      features: ["Seasonal Tune-Ups", "Priority Service", "Discounts"],
      href: "/services/maintenance",
      color: "green"
    },
    {
      icon: Smartphone,
      title: "Smart Thermostats",
      description: "Control your comfort from anywhere with smart home automation",
      features: ["Nest", "Ecobee", "Honeywell"],
      href: "/services/installation#smart-thermostats",
      color: "purple"
    },
    {
      icon: Wind,
      title: "Indoor Air Quality",
      description: "Breathe easier with our air quality solutions",
      features: ["Humidifiers", "Air Purifiers", "UV Lights"],
      href: "/services/ventilation",
      color: "teal"
    },
    {
      icon: Sparkles,
      title: "Duct Cleaning & Sealing",
      description: "Improve efficiency and air quality with duct services",
      features: ["Cleaning", "Sealing", "Repair"],
      href: "/services/ventilation#duct-services",
      color: "indigo"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Toronto, ON",
      rating: 5,
      text: "Quantum HVAC installed our new furnace last winter. Professional, efficient, and the price was fair. Our home has never been more comfortable!",
      service: "Furnace Installation"
    },
    {
      name: "Michael Chen",
      location: "Mississauga, ON",
      rating: 5,
      text: "We've been on their maintenance plan for 3 years. The peace of mind knowing our system is well-maintained is worth every penny.",
      service: "Maintenance Plan"
    },
    {
      name: "Emily Rodriguez",
      location: "Brampton, ON",
      rating: 5,
      text: "Emergency AC repair on the hottest day of summer. They came within 2 hours and had us cool again in no time. Highly recommend!",
      service: "AC Repair"
    }
  ];

  const seasonalOffers = [
    {
      title: "Spring AC Tune-Up Special",
      description: "Get your AC ready for summer",
      price: "$99",
      regular: "$149",
      savings: "Save $50",
      badge: "Limited Time"
    },
    {
      title: "New System Installation",
      description: "Finance from $79/month",
      price: "$0 Down",
      regular: "OAC",
      savings: "0% Financing",
      badge: "Hot Deal"
    },
    {
      title: "Annual Maintenance Plan",
      description: "Two visits per year + discounts",
      price: "$249",
      regular: "$349",
      savings: "Save $100",
      badge: "Best Value"
    }
  ];

  const serviceAreas = [
    "Toronto", "Mississauga", "Brampton", "Vaughan", "Markham",
    "Richmond Hill", "Oakville", "Burlington", "Milton", "Georgetown"
  ];

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <HeroSection
          title="Home Comfort Solutions You Can Trust"
          subtitle="Affordable, reliable HVAC services for homeowners across the GTA. From heating and cooling to air quality and smart home integration."
          backgroundImage="/images/company/photo-3.jpg"
          ctaText="Get Free Quote"
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
              <span className="text-[#0066CC] font-medium">Residential HVAC</span>
            </div>
          </div>
        </section>

        {/* Trust Indicators Bar */}
        <section className="bg-gradient-to-r from-[#0066CC] via-[#00BCD4] to-[#E63946] text-white py-6">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <Award className="h-8 w-8" />
                <div>
                  <div className="font-bold text-2xl">15+ Years</div>
                  <div className="text-sm text-orange-100">Experience</div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Star className="h-8 w-8" />
                <div>
                  <div className="font-bold text-2xl">4.9/5.0</div>
                  <div className="text-sm text-orange-100">Google Rating</div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Shield className="h-8 w-8" />
                <div>
                  <div className="font-bold text-2xl">Licensed</div>
                  <div className="text-sm text-orange-100">& Insured</div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <DollarSign className="h-8 w-8" />
                <div>
                  <div className="font-bold text-2xl">$0 Down</div>
                  <div className="text-sm text-orange-100">Financing Available</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Introduction */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Complete Home Comfort Solutions
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Your home should be your sanctuary. We provide friendly, professional HVAC services
                that keep your family comfortable year-round while saving you money on energy bills.
              </p>
            </div>

            {/* Services Grid */}
            <div className="mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link href={service.href}>
                      <div className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-[#0066CC] hover:shadow-xl transition-all duration-300 h-full group cursor-pointer">
                        <div className={`w-14 h-14 rounded-full bg-[#0066CC]/10 flex items-center justify-center mb-4 group-hover:bg-[#0066CC] transition-colors`}>
                          <service.icon className="h-7 w-7 text-[#0066CC] group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0066CC] transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                          {service.description}
                        </p>
                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center text-sm text-gray-700">
                              <CheckCircle className="h-4 w-4 text-[#0066CC] mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 flex items-center text-[#0066CC] font-semibold text-sm group-hover:translate-x-2 transition-transform">
                          Learn More <ChevronRight className="h-4 w-4 ml-1" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Seasonal Promotions */}
            <div className="mb-20">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Current Special Offers
                </h2>
                <p className="text-lg text-gray-600">
                  Save on the comfort your family deserves
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {seasonalOffers.map((offer, index) => (
                  <motion.div
                    key={offer.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-[#0066CC]/5 to-white border-2 border-[#0066CC]/20 rounded-xl p-8 relative overflow-hidden group hover:shadow-2xl transition-all"
                  >
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-[#0066CC] via-[#00BCD4] to-[#E63946] text-white text-xs font-bold px-3 py-1 rounded-full">
                      {offer.badge}
                    </div>
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {offer.title}
                      </h3>
                      <p className="text-gray-600">
                        {offer.description}
                      </p>
                    </div>
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-4xl font-bold text-[#0066CC]">
                          {offer.price}
                        </span>
                        <span className="text-lg text-gray-400 line-through">
                          {offer.regular}
                        </span>
                      </div>
                      <div className="text-green-600 font-semibold">
                        {offer.savings}
                      </div>
                    </div>
                    <Link href="/quote">
                      <Button className="w-full bg-brand-orange-500 hover:bg-[#E63946] text-white font-semibold">
                        Claim Offer
                      </Button>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Financing Section */}
            <div className="mb-20 bg-gradient-to-r from-[#0066CC] via-[#00BCD4] to-[#E63946] rounded-2xl p-10 text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    Affordable Payment Options
                  </h2>
                  <p className="text-orange-100 mb-6 text-lg leading-relaxed">
                    Don't let cost stand in the way of your family's comfort. We offer flexible
                    financing options with approved credit, including 0% financing on select systems.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0" />
                      <span className="text-lg">As low as $79/month</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0" />
                      <span className="text-lg">$0 down payment options</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0" />
                      <span className="text-lg">Quick approval process</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0" />
                      <span className="text-lg">0% financing available (OAC)</span>
                    </li>
                  </ul>
                  <Link href="/quote">
                    <Button size="lg" className="bg-white text-[#0066CC] hover:bg-orange-50 font-semibold">
                      Calculate My Payment
                    </Button>
                  </Link>
                </div>
                <div className="relative h-80 rounded-xl overflow-hidden shadow-2xl hidden md:block">
                  <Image
                    src="/images/company/photo-2.jpg"
                    alt="Happy family at home"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Customer Reviews */}
            <div className="mb-20">
              <div className="text-center mb-10">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Star className="h-8 w-8 text-yellow-400 fill-yellow-400" />
                  <Star className="h-8 w-8 text-yellow-400 fill-yellow-400" />
                  <Star className="h-8 w-8 text-yellow-400 fill-yellow-400" />
                  <Star className="h-8 w-8 text-yellow-400 fill-yellow-400" />
                  <Star className="h-8 w-8 text-yellow-400 fill-yellow-400" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  What Our Customers Say
                </h2>
                <p className="text-lg text-gray-600">
                  Join thousands of happy homeowners across the GTA
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div className="border-t border-gray-100 pt-4">
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500 flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {testimonial.location}
                      </div>
                      <div className="text-xs text-[#0066CC] font-medium mt-1">
                        {testimonial.service}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Service Areas */}
            <div className="mb-20 bg-gray-50 rounded-2xl p-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Proudly Serving the GTA
                </h2>
                <p className="text-lg text-gray-600">
                  Fast, friendly service throughout the Greater Toronto Area
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="bg-white border border-gray-200 px-4 py-2 rounded-full text-gray-700 font-medium hover:border-[#0066CC] hover:text-[#0066CC] transition-colors"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  Don't see your area? Give us a call - we may still be able to help!
                </p>
                <Link href="/contact">
                  <Button variant="outline" className="border-brand-orange-500 text-[#0066CC] hover:bg-brand-orange-50">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-20">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Why Families Choose Quantum HVAC
                </h2>
                <p className="text-lg text-gray-600">
                  More than just HVAC - we're your comfort partners
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0066CC]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-[#0066CC]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    24/7 Emergency Service
                  </h3>
                  <p className="text-gray-600">
                    HVAC emergencies don't wait for business hours. Neither do we.
                    Call anytime, day or night.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0066CC]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="h-8 w-8 text-[#0066CC]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Upfront Pricing
                  </h3>
                  <p className="text-gray-600">
                    No surprises, no hidden fees. You'll know the cost before we start
                    any work.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0066CC]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-[#0066CC]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    100% Satisfaction Guarantee
                  </h3>
                  <p className="text-gray-600">
                    If you're not happy, we're not done. Your complete satisfaction
                    is our promise.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0066CC]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-[#0066CC]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Certified Technicians
                  </h3>
                  <p className="text-gray-600">
                    Our team is fully licensed, insured, and background-checked for
                    your peace of mind.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0066CC]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="h-8 w-8 text-[#0066CC]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Energy Savings Focus
                  </h3>
                  <p className="text-gray-600">
                    We help you save money with high-efficiency systems and smart
                    recommendations.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0066CC]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-[#0066CC]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Local Family Business
                  </h3>
                  <p className="text-gray-600">
                    We're your neighbors, serving the GTA for over 15 years with
                    integrity and care.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-[#0066CC] via-[#00BCD4] to-[#E63946] text-white rounded-2xl p-10 shadow-2xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Improve Your Home Comfort?
              </h2>
              <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
                Get a free, no-obligation quote today. Our friendly team is standing by to help.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/quote">
                  <Button
                    size="lg"
                    className="bg-white text-[#0066CC] hover:bg-orange-50 font-semibold px-10 py-7 text-lg shadow-xl"
                  >
                    Get Free Quote
                  </Button>
                </Link>
                <Link href="/schedule">
                  <Button
                    size="lg"
                    className="bg-[#C52A36] hover:bg-[#A52028] text-white font-semibold px-10 py-7 text-lg border-2 border-white"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Schedule Service
                  </Button>
                </Link>
              </div>
              <p className="mt-6 text-orange-100">
                Or call us now: <a href="tel:416-555-0123" className="font-bold text-white hover:underline">416-555-0123</a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
