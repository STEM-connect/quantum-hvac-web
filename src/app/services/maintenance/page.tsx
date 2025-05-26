import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import { CheckCircle, ArrowLeft, Calendar, Shield, Clock } from "lucide-react";

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <HeroSection
          title="HVAC Maintenance Services"
          subtitle="Protect your investment and ensure optimal performance with our professional maintenance programs."
          backgroundImage="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1400&q=90"
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
                Professional HVAC Maintenance
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Regular maintenance is essential for keeping your HVAC system
                running efficiently, preventing costly breakdowns, and extending
                the life of your equipment. At Quantum HVAC System Inc., we
                offer comprehensive maintenance services for all types of
                heating, cooling, and ventilation systems.
              </p>
            </div>

            {/* Benefits of Maintenance */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Benefits of Regular HVAC Maintenance
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Extended Equipment Life
                  </h4>
                  <p className="text-gray-700">
                    Regular maintenance can extend the life of your HVAC system
                    by up to 5-10 years, protecting your investment.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Improved Efficiency
                  </h4>
                  <p className="text-gray-700">
                    Well-maintained systems operate more efficiently, reducing
                    energy consumption and lowering utility bills.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Fewer Breakdowns
                  </h4>
                  <p className="text-gray-700">
                    Preventative maintenance identifies and addresses small
                    issues before they become major, costly problems.
                  </p>
                </div>
              </div>
            </div>

            {/* Maintenance Plans */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Maintenance Plans
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Basic Plan */}
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="bg-gray-50 p-6 border-b border-gray-200">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Basic Plan
                    </h4>
                    <p className="text-gray-600">
                      Essential maintenance for residential systems
                    </p>
                    <div className="mt-4 text-3xl font-bold text-blue-600">
                      $149
                      <span className="text-lg font-normal text-gray-500">
                        /year
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                        <span>Annual system inspection and tune-up</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                        <span>Filter replacement (standard filters)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                        <span>System cleaning and lubrication</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                        <span>10% discount on repairs</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Select Plan
                    </Button>
                  </div>
                </div>

                {/* Premium Plan */}
                <div className="bg-white border-2 border-blue-600 rounded-lg shadow-md overflow-hidden relative">
                  <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                  <div className="bg-blue-50 p-6 border-b border-blue-200">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Premium Plan
                    </h4>
                    <p className="text-gray-600">
                      Comprehensive coverage for year-round comfort
                    </p>
                    <div className="mt-4 text-3xl font-bold text-blue-600">
                      $249
                      <span className="text-lg font-normal text-gray-500">
                        /year
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                        <span>
                          Bi-annual system inspections (spring & fall)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                        <span>Premium filter replacements</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                        <span>Complete system cleaning and optimization</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                        <span>15% discount on repairs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                        <span>Priority scheduling</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Select Plan
                    </Button>
                  </div>
                </div>

                {/* Commercial Plan */}
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="bg-gray-50 p-6 border-b border-gray-200">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Commercial Plan
                    </h4>
                    <p className="text-gray-600">
                      Tailored maintenance for business properties
                    </p>
                    <div className="mt-4 text-3xl font-bold text-blue-600">
                      Custom
                      <span className="text-lg font-normal text-gray-500">
                        {" "}
                        pricing
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                        <span>Customized maintenance schedule</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                        <span>Commercial-grade filter service</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                        <span>Comprehensive system optimization</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                        <span>20% discount on repairs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                        <span>Emergency service priority</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                What's Included in Our Maintenance Service
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    Heating System Maintenance
                  </h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Inspect and clean burners and heat exchanger</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Check and test safety controls</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Inspect flue and combustion air</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Check and adjust gas pressure</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Lubricate moving parts</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    Cooling System Maintenance
                  </h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Clean condenser and evaporator coils</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Check refrigerant levels and pressure</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Inspect and clean condensate drain</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Test capacitors and contactors</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Check electrical connections and components</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-blue-600 text-white rounded-lg p-8 shadow-lg text-center">
              <h3 className="text-2xl font-bold mb-4">
                Protect Your HVAC Investment
              </h3>
              <p className="text-lg mb-6">
                Contact us today to schedule a maintenance service or enroll in
                one of our maintenance plans.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="shadow-md hover:shadow-lg"
                >
                  Schedule Maintenance
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
                >
                  View Maintenance Plans
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
