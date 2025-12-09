"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
  CheckCircle,
  AlertCircle,
  Facebook,
  Linkedin,
  Instagram,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().max(0, "Bot detected"), // Honeypot field
});

type ContactFormData = z.infer<typeof contactSchema>;

const subjects = [
  "General Inquiry",
  "Service Request",
  "Quote Request",
  "Emergency Service",
  "Billing Question",
  "Feedback",
  "Other",
];

const serviceAreas = [
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
  "Oshawa",
  "Scarborough",
  "North York",
  "Etobicoke",
];

const faqs = [
  {
    question: "What are your service hours?",
    answer:
      "We're open Monday-Friday 7 AM - 6 PM, and Saturday 8 AM - 4 PM. We offer 24/7 emergency service for urgent HVAC issues.",
  },
  {
    question: "Do you provide emergency HVAC services?",
    answer:
      "Yes! We offer 24/7 emergency service for urgent heating, cooling, and refrigeration issues. Call our emergency line anytime.",
  },
  {
    question: "How quickly can you respond to a service call?",
    answer:
      "For standard service calls, we typically respond within 24-48 hours. Emergency calls are prioritized and we aim to respond within 2-4 hours.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes, we provide free, no-obligation quotes for all new installations and major repairs. Contact us to schedule an estimate.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, debit cards, checks, and bank transfers. We also offer financing options for larger projects.",
  },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      honeypot: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
      } else {
        const result = await response.json();
        setError(result.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      setError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <main>
        <HeroSection
          title="Contact Us"
          subtitle="We're here to answer your questions and provide the HVAC solutions you need."
          backgroundImage="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=1400&q=90"
        />

        {/* Main Contact Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="text-green-800 font-medium">Message sent successfully!</p>
                      <p className="text-green-700 text-sm">We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                )}

                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
                    <p className="text-red-600">{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Honeypot field - hidden from users */}
                  <input
                    type="text"
                    {...register("honeypot")}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        {...register("name")}
                        className="w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 py-3 px-4"
                        placeholder="John Doe"
                      />
                    </div>
                    {errors.name && (
                      <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                        <input
                          type="email"
                          {...register("email")}
                          className="w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 py-3 px-4"
                          placeholder="john@example.com"
                        />
                      </div>
                      {errors.email && (
                        <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone (Optional)
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                        <input
                          type="tel"
                          {...register("phone")}
                          className="w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 py-3 px-4"
                          placeholder="(647) 123-4567"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      {...register("subject")}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 py-3 px-4"
                    >
                      <option value="">Select a subject</option>
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                    {errors.subject && (
                      <p className="text-red-600 text-sm mt-1">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <textarea
                        {...register("message")}
                        rows={5}
                        maxLength={1000}
                        className="w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 py-3 px-4"
                        placeholder="Please provide details about your inquiry..."
                      />
                    </div>
                    {errors.message && (
                      <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Right Column - Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-8">
                  Reach out to us through any of these channels, or use the form to send us a message.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Phone Numbers</h3>
                      <p className="text-gray-700">
                        <a href="tel:6477041780" className="text-blue-600 hover:underline">
                          (647) 704-1780
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                      <a
                        href="mailto:info@quantumhvac.com"
                        className="text-blue-600 hover:underline"
                      >
                        info@quantumhvac.com
                      </a>
                      <p className="text-sm text-gray-500 mt-1">
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Office Location</h3>
                      <p className="text-gray-700">123 HVAC Boulevard, Suite 200</p>
                      <p className="text-gray-700">Toronto, ON M5V 2K7</p>
                      <p className="text-sm text-gray-500 mt-1">By appointment only</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
                      <div className="space-y-1 text-gray-700">
                        <div className="flex justify-between gap-8">
                          <span>Monday - Friday:</span>
                          <span>7 AM - 6 PM</span>
                        </div>
                        <div className="flex justify-between gap-8">
                          <span>Saturday:</span>
                          <span>8 AM - 4 PM</span>
                        </div>
                        <div className="flex justify-between gap-8">
                          <span>Sunday:</span>
                          <span>Closed</span>
                        </div>
                      </div>
                      <p className="text-sm text-blue-600 font-medium mt-2">
                        Emergency Service: 24/7
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-colors"
                    >
                      <Facebook className="h-5 w-5 text-blue-600" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-blue-600" />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-colors"
                    >
                      <Instagram className="h-5 w-5 text-blue-600" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Prefer to Talk? Call Us Now!
            </h2>
            <p className="text-xl text-blue-100 mb-6">
              Our friendly team is ready to help you with all your HVAC needs
            </p>
            <a
              href="tel:6477041780"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              <Phone className="h-5 w-5" />
              (647) 704-1780
            </a>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Areas We Serve
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Quantum HVAC provides professional heating, cooling, and refrigeration services throughout the Greater Toronto Area and surrounding regions.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {serviceAreas.map((area) => (
                <div
                  key={area}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center border border-gray-100"
                >
                  <MapPin className="h-5 w-5 text-blue-600 mx-auto mb-2" />
                  <p className="font-medium text-gray-800">{area}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600">
                Don't see your area listed?{" "}
                <a href="tel:6477041780" className="text-blue-600 font-medium hover:underline">
                  Call us
                </a>{" "}
                to check if we can serve your location.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Find quick answers to common questions about our services
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    {openFaqIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFaqIndex === index && (
                    <div className="px-6 pb-6 bg-gray-50">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Still have questions?</p>
              <a
                href="tel:6477041780"
                className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
              >
                <Phone className="h-5 w-5" />
                Contact us directly at (647) 704-1780
              </a>
            </div>
          </div>
        </section>

        {/* Emergency Service Banner */}
        <section className="py-16 bg-red-600 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white"></div>
            </div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              24/7 Emergency HVAC Service
            </h2>
            <p className="text-xl text-red-100 max-w-2xl mx-auto mb-8">
              HVAC emergencies don't wait for business hours. Neither do we. Call us for immediate assistance anytime, day or night.
            </p>
            <a
              href="tel:6477041780"
              className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-colors shadow-lg"
            >
              <Phone className="h-6 w-6" />
              (647) 704-1780
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
