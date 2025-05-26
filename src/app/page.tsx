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
    </div>
  );
}
