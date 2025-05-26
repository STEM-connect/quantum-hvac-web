import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import {
  Send,
  User,
  Mail,
  Phone,
  Building2,
  MessageSquare,
  CalendarClock,
  Clock,
} from "lucide-react";

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <HeroSection
          title="Schedule Service"
          subtitle="Book your HVAC service appointment with our expert technicians."
          backgroundImage="https://images.unsplash.com/photo-1621905251189-08b45249be80?w=1400&q=90"
          ctaText="Contact Us"
        />

        {/* Schedule Form */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Schedule Your Service Appointment
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Please fill out the form below to schedule your HVAC service
                appointment. Our team will confirm your appointment time as soon
                as possible.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
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
                        required
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
                        required
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
                        required
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
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="heating">
                          Heating Repair/Maintenance
                        </option>
                        <option value="cooling">AC Repair/Maintenance</option>
                        <option value="ventilation">Ventilation Service</option>
                        <option value="installation">New Installation</option>
                        <option value="maintenance">Routine Maintenance</option>
                        <option value="emergency">Emergency Service</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="preferred-date"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Preferred Service Date
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <CalendarClock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="date"
                        id="preferred-date"
                        className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 py-3 px-4"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="preferred-time"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Preferred Time
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Clock className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        id="preferred-time"
                        className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 py-3 px-4"
                        required
                      >
                        <option value="">Select a time</option>
                        <option value="morning">
                          Morning (8:00 AM - 12:00 PM)
                        </option>
                        <option value="afternoon">
                          Afternoon (12:00 PM - 4:00 PM)
                        </option>
                        <option value="evening">
                          Evening (4:00 PM - 6:00 PM)
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Service Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Building2 className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="address"
                      className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 py-3 px-4"
                      placeholder="123 Main St, Toronto, ON"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Additional Information
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      id="message"
                      rows={4}
                      className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 py-3 px-4"
                      placeholder="Please provide any additional details about your service needs or specific issues you're experiencing..."
                    ></textarea>
                  </div>
                </div>

                <div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2"
                  >
                    <Send className="h-5 w-5" />
                    Schedule Service
                  </Button>
                </div>
              </form>
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Need Emergency Service?
              </h3>
              <p className="text-gray-600 mb-4">
                Call our 24/7 emergency line at{" "}
                <span className="text-blue-600 font-medium">647-704-1780</span>{" "}
                for immediate assistance.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
