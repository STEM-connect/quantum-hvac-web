import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import { CheckCircle, ArrowLeft } from "lucide-react";

export default function VentilationPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <HeroSection
          title="Ventilation Services"
          subtitle="Improve your indoor air quality with our professional ventilation solutions."
          backgroundImage="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1400&q=90"
        />

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Link
                href="/services"
                className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to All Services
              </Link>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Professional Ventilation Solutions
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Proper ventilation is essential for maintaining healthy indoor
                air quality and ensuring the comfort of your home or business.
                At Quantum HVAC System Inc., we provide comprehensive
                ventilation services to improve airflow, reduce contaminants,
                and create a healthier indoor environment.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              {/* Service 1 */}
              <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Air Duct Cleaning & Sanitization
                </h3>
                <p className="text-gray-700 mb-6">
                  Over time, dust, allergens, and contaminants can build up in
                  your air ducts, affecting indoor air quality and system
                  efficiency. Our thorough cleaning and sanitization services
                  remove these pollutants.
                </p>
                <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80"
                    alt="Air Duct Cleaning"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Complete duct system inspection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Professional cleaning equipment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>EPA-approved sanitization treatments</span>
                  </li>
                </ul>
              </div>

              {/* Service 2 */}
              <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Ventilation System Design & Installation
                </h3>
                <p className="text-gray-700 mb-6">
                  Whether for new construction or upgrading existing systems, we
                  design and install ventilation systems that ensure proper
                  airflow throughout your property.
                </p>
                <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1603201667141-5a2d4c673378?w=800&q=80"
                    alt="Ventilation System Design"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Custom system design for your space</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Energy-efficient solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      Professional installation by certified technicians
                    </span>
                  </li>
                </ul>
              </div>

              {/* Service 3 */}
              <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Air Purification Solutions
                </h3>
                <p className="text-gray-700 mb-6">
                  Enhance your indoor air quality with our advanced air
                  purification systems that remove allergens, pollutants, and
                  pathogens from your home or business.
                </p>
                <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?w=800&q=80"
                    alt="Air Purification"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>HEPA filtration systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>UV air purifiers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Whole-home air quality solutions</span>
                  </li>
                </ul>
              </div>

              {/* Service 4 */}
              <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Exhaust Fan Services
                </h3>
                <p className="text-gray-700 mb-6">
                  Proper exhaust ventilation is crucial for removing moisture,
                  odors, and contaminants from bathrooms, kitchens, and other
                  areas. We install and service a variety of exhaust fan
                  systems.
                </p>
                <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1631545308539-8cf3fad6e5cc?w=800&q=80"
                    alt="Exhaust Fan Services"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Bathroom and kitchen exhaust fans</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Whole-house ventilation fans</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Commercial exhaust systems</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Indoor Air Quality Section */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                The Importance of Indoor Air Quality
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-700 mb-4">
                    Did you know that indoor air can be 2-5 times more polluted
                    than outdoor air? Proper ventilation is essential for:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Reducing allergens, dust, and pollutants</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      <span>
                        Controlling humidity levels to prevent mold growth
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Removing odors and stale air</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Improving overall health and comfort</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Enhancing HVAC system efficiency</span>
                    </li>
                  </ul>
                </div>
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&q=80"
                    alt="Indoor Air Quality"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-blue-600 text-white rounded-lg p-8 shadow-lg text-center">
              <h3 className="text-2xl font-bold mb-4">
                Breathe Easier with Quantum HVAC
              </h3>
              <p className="text-lg mb-6">
                Contact us today for a free consultation and estimate on our
                ventilation services.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/quote">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="shadow-md hover:shadow-lg"
                  >
                    Request a Quote
                  </Button>
                </Link>
                <Link href="/schedule">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
                  >
                    Schedule Service
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
