import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import {
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header is in layout.tsx */}

      <main>
        {/* Hero Section */}
        <HeroSection
          title="About Quantum HVAC Systems"
          subtitle="Delivering exceptional heating, ventilation, and air conditioning solutions since 2008."
          backgroundImage="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1400&q=90"
        />

        {/* Company Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Founded in 2008, Quantum HVAC System Inc. began with a simple
                  mission: to provide reliable, efficient, and affordable HVAC
                  solutions to homeowners and businesses throughout the Greater
                  Toronto Area.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  What started as a small team of dedicated technicians has
                  grown into a full-service HVAC company with a reputation for
                  excellence and customer satisfaction. Our growth has been
                  built on a foundation of technical expertise, honest service,
                  and a commitment to staying at the forefront of HVAC
                  technology.
                </p>
                <p className="text-lg text-gray-700">
                  Today, we're proud to be one of the most trusted names in HVAC
                  services, with thousands of satisfied customers who rely on us
                  for all their heating, cooling, and ventilation needs.
                </p>
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1581094795830-a8cd28c8893f?w=800&q=80"
                  alt="Quantum HVAC team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Mission & Values
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We're guided by a set of core principles that inform everything
                we do.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">
                  Excellence
                </h3>
                <p className="text-gray-600 text-center">
                  We strive for excellence in every installation, repair, and
                  maintenance job, ensuring that our work exceeds industry
                  standards and customer expectations.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">
                  Integrity
                </h3>
                <p className="text-gray-600 text-center">
                  We conduct our business with honesty and transparency,
                  providing fair pricing, clear communication, and ethical
                  service to all our customers.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">
                  Innovation
                </h3>
                <p className="text-gray-600 text-center">
                  We continuously educate ourselves on the latest HVAC
                  technologies and techniques to provide our customers with the
                  most efficient and effective solutions available.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Facility */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Facility
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Take a look at our state-of-the-art facility where we test,
                repair, and prepare HVAC equipment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&q=80"
                  alt="HVAC Workshop"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-xl font-semibold text-white">
                    Equipment Testing Lab
                  </h3>
                </div>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80"
                  alt="HVAC Parts Inventory"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-xl font-semibold text-white">
                    Parts and Equipment Inventory
                  </h3>
                </div>
              </div>
            </div>

            {/* Team Section */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our experienced professionals are dedicated to providing you
                with the best HVAC service possible.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Michael Chen",
                  position: "Founder & CEO",
                  image:
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael&backgroundColor=b6e3f4",
                  bio: "With over 20 years of experience in HVAC systems, Michael founded Quantum HVAC with a vision of excellence.",
                },
                {
                  name: "Sarah Johnson",
                  position: "Operations Manager",
                  image:
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=c0aede",
                  bio: "Sarah ensures that all our operations run smoothly and that every customer receives timely, quality service.",
                },
                {
                  name: "David Rodriguez",
                  position: "Lead Technician",
                  image:
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=David&backgroundColor=d1d4f9",
                  bio: "David's technical expertise and problem-solving skills make him an invaluable asset to our service team.",
                },
                {
                  name: "Aisha Patel",
                  position: "Customer Relations",
                  image:
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha&backgroundColor=ffd5dc",
                  bio: "Aisha is dedicated to ensuring that every customer has a positive experience with Quantum HVAC.",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="h-64 bg-gray-200 relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 mb-4">{member.position}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
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
