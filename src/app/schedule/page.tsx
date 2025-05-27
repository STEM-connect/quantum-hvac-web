"use client";

import React, { useState } from "react";
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
  CheckCircle,
} from "lucide-react";

export default function SchedulePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      service: formData.get("service") as string,
      preferredDate: formData.get("preferred-date") as string,
      preferredTime: formData.get("preferred-time") as string,
      address: formData.get("address") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/schedule", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setError("Failed to schedule service. Please try again.");
      }
    } catch (error) {
      setError("Failed to schedule service. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <main>
          <HeroSection
            title="Service Scheduled!"
            subtitle="Thank you for scheduling with us. We'll confirm your appointment soon."
            backgroundImage="https://images.unsplash.com/photo-1621905251189-08b45249be80?w=1400&q=90"
            ctaText="Back to Home"
          />
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Service Appointment Scheduled!
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We've received your service request and will contact you within
                24 hours to confirm your appointment.
              </p>
              <p className="text-gray-600">
                Need emergency service? Call us at{" "}
                <span className="text-blue-600 font-medium">647-704-1780</span>
              </p>
            </div>
          </section>
        </main>
      </div>
    );
  }

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
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-red-600">{error}</p>
                </div>
              )}
              <form className="space-y-6" onSubmit={handleSubmit}>
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
                        name="name"
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
                        name="email"
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
                        name="phone"
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
                        name="service"
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
                        name="preferred-date"
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
                        name="preferred-time"
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
                      name="address"
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
                      name="message"
                      rows={4}
                      className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 py-3 px-4"
                      placeholder="Please provide any additional details about your service needs or specific issues you're experiencing..."
                    ></textarea>
                  </div>
                </div>

                <div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <Send className="h-5 w-5" />
                    {isSubmitting ? "Scheduling..." : "Schedule Service"}
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
