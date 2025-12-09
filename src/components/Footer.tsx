import React from "react";
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
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="text-white">
      {/* Racing Stripe */}
      <div className="flex h-1">
        <div className="flex-1 bg-blue-600"></div>
        <div className="flex-1 bg-red-600"></div>
        <div className="flex-1 bg-cyan-400"></div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-blue-700" style={{ backgroundColor: "#0066CC" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Company Header */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-2">Quantum HVAC</h2>
            <p className="text-xl italic text-blue-100">
              Where Passion Meets Dedication
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Services Section */}
            <div>
              <h3 className="text-lg font-semibold mb-6 pb-2 border-b-2 border-blue-300">
                Our Services
              </h3>
              <ul className="space-y-3">
                <li className="text-lg font-medium">HEATING</li>
                <li className="text-lg font-medium">AIR CONDITIONING</li>
                <li className="text-lg font-medium">REFRIGERATION</li>
              </ul>
              <p className="text-sm text-blue-100 mt-6">
                Industrial • Commercial • Institutional • Environmental
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold mb-6 pb-2 border-b-2 border-blue-300">
                Contact Info
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">(647) 704-1780</span>
                </li>
                <li className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                  <a
                    href="mailto:info@callquantumhvac.com"
                    className="hover:text-blue-100 transition-colors"
                  >
                    info@callquantumhvac.com
                  </a>
                </li>
                <li className="flex items-start">
                  <Clock className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                    <p>Sat: 9:00 AM - 4:00 PM</p>
                    <p>Sun: Closed</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quick Links & Website */}
            <div>
              <h3 className="text-lg font-semibold mb-6 pb-2 border-b-2 border-blue-300">
                Quick Links
              </h3>
              <ul className="space-y-2 mb-8">
                <li>
                  <Link
                    href="/"
                    className="hover:text-blue-100 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-blue-100 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-blue-100 transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-blue-100 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="text-sm">
                <p className="font-semibold mb-2">Website</p>
                <a
                  href="https://www.callquantumhvac.com"
                  className="hover:text-blue-100 transition-colors"
                >
                  www.callquantumhvac.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-12 pt-8 border-t border-blue-500">
            <div className="flex justify-between items-center">
              <p className="text-sm text-blue-100">
                &copy; {new Date().getFullYear()} Quantum HVAC System Inc. All
                rights reserved.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/quantumhvac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-white transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="https://www.instagram.com/quantumhvac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-white transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://twitter.com/quantumhvac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-white transition-colors"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/company/quantum-hvac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-white transition-colors"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
