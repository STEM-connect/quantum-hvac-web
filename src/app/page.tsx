import React from "react";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import TrustSection from "@/components/TrustSection";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Services Grid */}
        <ServicesGrid />

        {/* Featured Projects */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Our Recent Projects
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Take a look at some of our recent HVAC installations and
                services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
                <div className="relative h-64">
                  <Image
                    src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80"
                    alt="Commercial HVAC Installation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-semibold mb-2">
                    Commercial HVAC System
                  </h3>
                  <p className="text-gray-600">
                    Complete installation of a high-efficiency commercial HVAC
                    system for a downtown office building.
                  </p>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
                <div className="relative h-64">
                  <Image
                    src="https://images.unsplash.com/photo-1519642918688-7e43b19245d8?w=800&q=80"
                    alt="Residential Heating System"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-semibold mb-2">
                    Residential Heating
                  </h3>
                  <p className="text-gray-600">
                    Installation of a new energy-efficient heating system for a
                    family home in Toronto.
                  </p>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
                <div className="relative h-64">
                  <Image
                    src="https://images.unsplash.com/photo-1631545111451-9a6e18dd9bcd?w=800&q=80"
                    alt="Smart HVAC Controls"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-semibold mb-2">
                    Smart HVAC Controls
                  </h3>
                  <p className="text-gray-600">
                    Implementation of smart thermostats and zoning systems for
                    optimal climate control.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <TrustSection />

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
              Ready to Experience Superior HVAC Service?
            </h2>
            <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
              Contact us today to schedule a consultation or service
              appointment.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="shadow-lg hover:shadow-xl transition-shadow"
              >
                Request a Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-blue-600 shadow-lg hover:shadow-xl transition-shadow"
              >
                Schedule Service
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-gray-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Contact Us
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Phone className="h-5 w-5 mr-2 mt-0.5" />
                  <span>647-704-1780</span>
                </li>
                <li className="flex items-start">
                  <Mail className="h-5 w-5 mr-2 mt-0.5" />
                  <a
                    href="mailto:info@callquantumhvac.com"
                    className="hover:text-white transition-colors"
                  >
                    info@callquantumhvac.com
                  </a>
                </li>
                <li className="flex items-start">
                  <Clock className="h-5 w-5 mr-2 mt-0.5" />
                  <div>
                    <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                    <p>Sat: 9:00 AM - 4:00 PM</p>
                    <p>Sun: Closed</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/testimonials"
                    className="hover:text-white transition-colors"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Our Services
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/services/heating"
                    className="hover:text-white transition-colors"
                  >
                    Heating
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/air-conditioning"
                    className="hover:text-white transition-colors"
                  >
                    Air Conditioning
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/ventilation"
                    className="hover:text-white transition-colors"
                  >
                    Ventilation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/installation"
                    className="hover:text-white transition-colors"
                  >
                    Installation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/maintenance"
                    className="hover:text-white transition-colors"
                  >
                    Maintenance
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Connect With Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
              <div className="mt-6">
                <p>
                  Subscribe to our newsletter for tips, news, and special
                  offers.
                </p>
                <div className="mt-2 flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="px-3 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                  />
                  <Button className="rounded-l-none">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>
              &copy; {new Date().getFullYear()} Quantum HVAC System Inc. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
