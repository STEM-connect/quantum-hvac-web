import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import { Star, Quote } from "lucide-react";

export default function TestimonialsPage() {
  // Sample testimonial data
  const testimonials = [
    {
      name: "Jennifer Wilson",
      location: "Toronto",
      image:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=Jennifer&backgroundColor=ffdfbf",
      rating: 5,
      text: "Quantum HVAC installed our new heating system last winter, and we couldn't be happier with the results. The team was professional, knowledgeable, and completed the work ahead of schedule. Our home has never been more comfortable!",
      service: "Heating Installation",
    },
    {
      name: "Robert Thompson",
      location: "Mississauga",
      image:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert&backgroundColor=c0aede",
      rating: 5,
      text: "I've been using Quantum HVAC for regular maintenance on my air conditioning system for the past three years. They're always punctual, thorough, and take the time to explain what they're doing. My AC runs perfectly thanks to their excellent service.",
      service: "AC Maintenance",
    },
    {
      name: "Priya Patel",
      location: "Brampton",
      image:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya&backgroundColor=d1d4f9",
      rating: 5,
      text: "When our office ventilation system needed an upgrade, we called Quantum HVAC. They provided a detailed assessment, recommended energy-efficient solutions, and completed the installation with minimal disruption to our business. Highly recommended!",
      service: "Commercial Ventilation",
    },
    {
      name: "Marcus Johnson",
      location: "Vaughan",
      image:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus&backgroundColor=b6e3f4",
      rating: 4,
      text: "I had an emergency heating issue on a Sunday evening, and Quantum HVAC responded within an hour. The technician quickly diagnosed and fixed the problem. While the emergency service fee was a bit high, the quality of work was excellent and worth it.",
      service: "Emergency Repair",
    },
    {
      name: "Sarah Chen",
      location: "Richmond Hill",
      image:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=ffd5dc",
      rating: 5,
      text: "We recently had Quantum HVAC install a new air conditioning system in our home. From the initial consultation to the final installation, everything was handled professionally. The team was courteous, clean, and the new system works perfectly.",
      service: "AC Installation",
    },
    {
      name: "David Miller",
      location: "Markham",
      image:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=David&backgroundColor=ffdfbf",
      rating: 5,
      text: "I've been a customer of Quantum HVAC for over five years now. They maintain both my home and business HVAC systems. Their technicians are always professional, knowledgeable, and provide excellent service. I wouldn't trust anyone else with my HVAC needs.",
      service: "Residential & Commercial Maintenance",
    },
  ];

  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
        />
      ));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header is in layout.tsx */}

      <main>
        {/* Hero Section */}
        <HeroSection
          title="Customer Testimonials"
          subtitle="Don't just take our word for it. See what our satisfied customers have to say about our services."
          backgroundImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=90"
        />

        {/* Featured Testimonial */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-blue-600 rounded-xl p-8 md:p-12 shadow-xl overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 -mt-20 -mr-20 w-40 h-40 bg-blue-500 rounded-full opacity-50"></div>
              <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-blue-500 rounded-full opacity-30"></div>

              <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-white flex-shrink-0 border-4 border-white shadow-lg">
                  <Image
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=John&backgroundColor=ffdfbf"
                    alt="John Doe"
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <Quote className="h-12 w-12 text-blue-300 mb-4 mx-auto md:mx-0" />
                  <p className="text-xl md:text-2xl text-white mb-6 italic">
                    "Quantum HVAC transformed our outdated heating and cooling
                    system into a state-of-the-art, energy-efficient solution.
                    Their team was professional, knowledgeable, and completed
                    the work on time and within budget. We've seen a significant
                    reduction in our energy bills, and our home has never been
                    more comfortable. I can't recommend them highly enough!"
                  </p>
                  <div className="flex items-center justify-center md:justify-start mb-2">
                    {renderStars(5)}
                  </div>
                  <h3 className="text-xl font-semibold text-white">John Doe</h3>
                  <p className="text-blue-200">Homeowner in Toronto</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Our Customers Say
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We take pride in our work and the relationships we build with
                our customers. Here's what they have to say about their
                experiences with Quantum HVAC.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm text-blue-600 font-medium">
                      {testimonial.service}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Projects Showcase */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Work in Action
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See the results of our HVAC installations and services in real
                customer homes and businesses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-60">
                  <Image
                    src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80"
                    alt="Commercial HVAC Installation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">
                    Office Building HVAC Upgrade
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Complete system replacement with energy-efficient units
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-60">
                  <Image
                    src="https://images.unsplash.com/photo-1631545306743-39e16e132fa7?w=800&q=80"
                    alt="Residential AC Installation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">
                    Home Cooling System
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Multi-zone air conditioning for maximum comfort
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-60">
                  <Image
                    src="https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80"
                    alt="Smart Thermostat Installation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">
                    Smart Climate Control
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Advanced thermostat and zoning system installation
                  </p>
                </div>
              </div>
            </div>

            {/* Review Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-blue-600 mb-2">4.9</div>
                <div className="flex justify-center mb-2">{renderStars(5)}</div>
                <p className="text-gray-600">Average Rating</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  500+
                </div>
                <p className="text-gray-600">Happy Customers</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                <p className="text-gray-600">Customer Satisfaction</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                <p className="text-gray-600">Years of Service</p>
              </div>
            </div>
          </div>
        </section>

        {/* Leave a Review CTA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 text-center shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Had a Great Experience with Us?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We'd love to hear about your experience with Quantum HVAC. Your
                feedback helps us improve our services and assists other
                customers in making informed decisions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Leave a Google Review
                </Button>
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  Send Us Feedback
                </Button>
              </div>
            </div>
          </div>
        </section>

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
              Ready to Experience Our Award-Winning Service?
            </h2>
            <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
              Join our growing list of satisfied customers. Contact us today to
              schedule your service.
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
