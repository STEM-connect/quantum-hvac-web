import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
  Building2,
  CalendarClock,
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header is in layout.tsx */}

      <main>
        {/* Hero Section */}
        <HeroSection
          title="Contact Us"
          subtitle="We're here to answer your questions and provide the HVAC solutions you need."
          backgroundImage="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=1400&q=90"
        />

        {/* Contact Information & Form */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Get In Touch
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Have questions about our services or need to schedule an
                  appointment? Contact us using any of the methods below, or
                  fill out the form and we'll get back to you as soon as
                  possible.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Phone
                      </h3>
                      <p className="text-gray-700">647-704-1780</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Monday-Friday, 8:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Email
                      </h3>
                      <a
                        href="mailto:info@callquantumhvac.com"
                        className="text-blue-600 hover:underline"
                      >
                        info@callquantumhvac.com
                      </a>
                      <p className="text-sm text-gray-500 mt-1">
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Office Location
                      </h3>
                      <p className="text-gray-700">
                        123 HVAC Boulevard, Suite 200
                      </p>
                      <p className="text-gray-700">Toronto, ON M5V 2K7</p>
                      <p className="text-sm text-gray-500 mt-1">
                        By appointment only
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Business Hours
                      </h3>
                      <div className="grid grid-cols-2 gap-x-4 text-gray-700">
                        <p>Monday - Friday:</p>
                        <p>8:00 AM - 6:00 PM</p>
                        <p>Saturday:</p>
                        <p>9:00 AM - 4:00 PM</p>
                        <p>Sunday:</p>
                        <p>Closed</p>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">
                        24/7 Emergency Service Available
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Full Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 py-3 px-4"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 py-3 px-4"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone Number
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 py-3 px-4"
                          placeholder="(647) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Service Needed
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Building2 className="h-5 w-5 text-gray-400" />
                        </div>
                        <select
                          id="service"
                          className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 py-3 px-4"
                        >
                          <option value="">Select a service</option>
                          <option value="heating">Heating</option>
                          <option value="cooling">Air Conditioning</option>
                          <option value="ventilation">Ventilation</option>
                          <option value="maintenance">Maintenance</option>
                          <option value="repair">Repair</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="preferred-date"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Preferred Service Date (Optional)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <CalendarClock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="date"
                        id="preferred-date"
                        className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 py-3 px-4"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                        <MessageSquare className="h-5 w-5 text-gray-400" />
                      </div>
                      <textarea
                        id="message"
                        rows={4}
                        className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 py-3 px-4"
                        placeholder="Please provide details about your HVAC needs..."
                      ></textarea>
                    </div>
                  </div>

                  <div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2">
                      <Send className="h-5 w-5" />
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Our Fleet */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Service Fleet
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our fully equipped service vehicles are ready to respond to your
                HVAC needs quickly and efficiently
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1589753345288-b2c0353d7b20?w=800&q=80"
                  alt="HVAC Service Van"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-xl font-semibold text-white">
                    Rapid Response Service Vehicles
                  </h3>
                </div>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80"
                  alt="HVAC Technician with Tools"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-xl font-semibold text-white">
                    Fully Equipped with Advanced Tools
                  </h3>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Location
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Visit our office or schedule an in-home consultation for your
                HVAC needs.
              </p>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              {/* This would be a real map in production */}
              <div className="relative h-[400px] w-full bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-500 text-lg">
                    Map placeholder - In a real implementation, this would be a
                    Google Maps or similar map component showing the business
                    location
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Areas We Serve
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide HVAC services throughout the Greater Toronto Area and
                surrounding regions.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
              {[
                "Toronto",
                "Mississauga",
                "Brampton",
                "Markham",
                "Vaughan",
                "Richmond Hill",
                "Oakville",
                "Burlington",
                "Hamilton",
                "Pickering",
                "Ajax",
                "Whitby",
              ].map((area, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <p className="font-medium text-gray-800">{area}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Service */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white"></div>
              <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-white"></div>
            </div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              24/7 Emergency HVAC Service
            </h2>
            <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
              HVAC emergencies don't wait for business hours. Neither do we.
              Call our emergency line for immediate assistance.
            </p>
            <div className="mt-8">
              <Button
                size="lg"
                variant="secondary"
                className="shadow-lg hover:shadow-xl transition-shadow"
              >
                <Phone className="mr-2 h-5 w-5" /> Call Emergency Line
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer is in layout.tsx */}
    </div>
  );
}
