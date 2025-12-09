"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import QuantumLogo from "@/components/QuantumLogo";
import {
  Building2,
  Snowflake,
  Settings,
  Home,
  Phone,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  AlertCircle,
  Thermometer,
  Wind,
  Factory,
  Layers,
  Wrench,
  Package,
  Zap,
  Shield,
  Facebook,
  Linkedin,
} from "lucide-react";

// Service divisions configuration
const serviceDivisions = [
  {
    id: "commercial",
    title: "Industrial & Commercial",
    icon: Building2,
    color: "blue",
    href: "/services/commercial",
    services: [
      { name: "Commercial Heating", href: "/services/commercial#heating" },
      { name: "Commercial Cooling", href: "/services/commercial#cooling" },
      { name: "Ventilation & IAQ", href: "/services/commercial#ventilation" },
      { name: "Energy Management", href: "/services/commercial#energy" },
      { name: "Maintenance Plans", href: "/services/commercial#maintenance" },
      { name: "Emergency Service", href: "/services/commercial#emergency" },
    ],
  },
  {
    id: "refrigeration",
    title: "Refrigeration",
    icon: Snowflake,
    color: "cyan",
    href: "/services/refrigeration",
    services: [
      { name: "Commercial Refrigeration", href: "/services/refrigeration#commercial" },
      { name: "Cold Storage", href: "/services/refrigeration#cold-storage" },
      { name: "Walk-in Coolers", href: "/services/refrigeration#walk-in" },
      { name: "Display Cases", href: "/services/refrigeration#display" },
      { name: "Emergency Repair", href: "/services/refrigeration#emergency" },
      { name: "24/7 Service", href: "/services/refrigeration#247" },
    ],
  },
  {
    id: "sheet-metal",
    title: "Sheet Metal",
    icon: Settings,
    color: "slate",
    href: "/services/sheet-metal",
    services: [
      { name: "Custom Ductwork", href: "/services/sheet-metal#ductwork" },
      { name: "Spiral Duct", href: "/services/sheet-metal#spiral" },
      { name: "Industrial Fabrication", href: "/services/sheet-metal#industrial" },
      { name: "Architectural Metal", href: "/services/sheet-metal#architectural" },
      { name: "Retrofits", href: "/services/sheet-metal#retrofits" },
      { name: "View Portfolio", href: "/services/sheet-metal#portfolio" },
    ],
  },
  {
    id: "residential",
    title: "Residential",
    icon: Home,
    color: "green",
    href: "/services",
    services: [
      { name: "Heating Systems", href: "/services/heating" },
      { name: "Air Conditioning", href: "/services/air-conditioning" },
      { name: "Installation", href: "/services/installation" },
      { name: "Maintenance", href: "/services/maintenance" },
      { name: "Smart Home", href: "/services#smart-home" },
      { name: "Indoor Air Quality", href: "/services/ventilation" },
    ],
  },
];

const colorClasses = {
  blue: "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100",
  cyan: "bg-cyan-50 text-cyan-700 border-cyan-200 hover:bg-cyan-100",
  slate: "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100",
  green: "bg-green-50 text-green-700 border-green-200 hover:bg-green-100",
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const [mobileDivisionExpanded, setMobileDivisionExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileServicesExpanded(false);
    setMobileDivisionExpanded(null);
  }, [pathname]);

  // Close mega menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
          scrolled
            ? "border-gray-200 bg-white/95 backdrop-blur-md shadow-md supports-[backdrop-filter]:bg-white/90"
            : "border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top bar with tagline, phone number, and emergency banner (desktop only) */}
          <div className="hidden lg:flex items-center justify-between py-2 text-sm border-b border-gray-100" style={{ borderBottomWidth: '3px', borderBottomColor: '#0066CC' }}>
            <div className="flex items-center gap-2 text-gray-600 italic text-xs">
              Where Passion Meets Dedication
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-900">
                <Phone className="h-4 w-4" style={{ color: '#0066CC' }} />
                <a href="tel:6477041780" className="font-bold text-lg" style={{ color: '#0066CC' }}>
                  647.704.1780
                </a>
              </div>
              <div className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: '#E63946', color: 'white' }}>
                <AlertCircle className="h-3 w-3" />
                24/7 EMERGENCY SERVICE
              </div>
            </div>
          </div>

          {/* Main header */}
          <div className="flex h-16 items-center justify-between">
            {/* Logo with tagline */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <QuantumLogo size={48} showText={true} />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className={`text-sm font-medium transition-colors ${
                  isActive("/")
                    ? ""
                    : "text-gray-700"
                }`}
                style={isActive("/") ? { color: '#0066CC' } : {}}
                onMouseEnter={(e) => e.currentTarget.style.color = '#0066CC'}
                onMouseLeave={(e) => !isActive("/") && (e.currentTarget.style.color = '')}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`text-sm font-medium transition-colors ${
                  isActive("/about")
                    ? ""
                    : "text-gray-700"
                }`}
                style={isActive("/about") ? { color: '#0066CC' } : {}}
                onMouseEnter={(e) => e.currentTarget.style.color = '#0066CC'}
                onMouseLeave={(e) => !isActive("/about") && (e.currentTarget.style.color = '')}
              >
                About Us
              </Link>

              {/* Services Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                    pathname.startsWith("/services")
                      ? ""
                      : "text-gray-700"
                  }`}
                  style={pathname.startsWith("/services") ? { color: '#0066CC' } : {}}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#0066CC'}
                  onMouseLeave={(e) => !pathname.startsWith("/services") && (e.currentTarget.style.color = '')}
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Mega Menu Dropdown */}
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-screen max-w-5xl"
                    >
                      <div className="bg-white rounded-lg shadow-2xl border border-gray-200 backdrop-blur-xl p-8">
                        <div className="grid grid-cols-4 gap-6">
                          {serviceDivisions.map((division) => {
                            const Icon = division.icon;
                            return (
                              <div key={division.id} className="space-y-4">
                                {/* Division Header */}
                                <Link
                                  href={division.href}
                                  className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${
                                    colorClasses[division.color as keyof typeof colorClasses]
                                  }`}
                                >
                                  <Icon className="h-5 w-5 flex-shrink-0" />
                                  <span className="font-semibold text-sm">
                                    {division.title}
                                  </span>
                                </Link>

                                {/* Services List */}
                                <ul className="space-y-2">
                                  {division.services.map((service) => (
                                    <li key={service.name}>
                                      <Link
                                        href={service.href}
                                        className="flex items-start gap-2 text-sm text-gray-600 transition-colors group"
                                        onMouseEnter={(e) => e.currentTarget.style.color = '#0066CC'}
                                        onMouseLeave={(e) => e.currentTarget.style.color = ''}
                                      >
                                        <ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <span>{service.name}</span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            );
                          })}
                        </div>

                        {/* View All Services Link */}
                        <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                          <Link
                            href="/services"
                            className="inline-flex items-center gap-2 font-semibold"
                            style={{ color: '#0066CC' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = '#0052a3'}
                            onMouseLeave={(e) => e.currentTarget.style.color = '#0066CC'}
                          >
                            View All Services
                            <ChevronRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/testimonials"
                className={`text-sm font-medium transition-colors ${
                  isActive("/testimonials")
                    ? ""
                    : "text-gray-700"
                }`}
                style={isActive("/testimonials") ? { color: '#0066CC' } : {}}
                onMouseEnter={(e) => e.currentTarget.style.color = '#0066CC'}
                onMouseLeave={(e) => !isActive("/testimonials") && (e.currentTarget.style.color = '')}
              >
                Testimonials
              </Link>
              <Link
                href="/contact"
                className={`text-sm font-medium transition-colors ${
                  isActive("/contact")
                    ? ""
                    : "text-gray-700"
                }`}
                style={isActive("/contact") ? { color: '#0066CC' } : {}}
                onMouseEnter={(e) => e.currentTarget.style.color = '#0066CC'}
                onMouseLeave={(e) => !isActive("/contact") && (e.currentTarget.style.color = '')}
              >
                Contact
              </Link>
            </nav>

            {/* CTA Buttons (Desktop) */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/quote">
                <Button variant="outline" size="sm" style={{ borderColor: '#0066CC', color: '#0066CC' }} className="hover:bg-blue-50">
                  Get Quote
                </Button>
              </Link>
              <Link href="/schedule">
                <Button size="sm" className="relative" style={{ backgroundColor: '#E63946' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d32f3d'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#E63946'}>
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: '#E63946' }}></span>
                    <span className="relative inline-flex rounded-full h-3 w-3" style={{ backgroundColor: '#E63946' }}></span>
                  </span>
                  24/7 Emergency
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 transition-colors"
              style={{ color: mobileMenuOpen ? '#0066CC' : '' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#0066CC'}
              onMouseLeave={(e) => !mobileMenuOpen && (e.currentTarget.style.color = '')}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 overflow-y-auto lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b" style={{ borderBottomWidth: '3px', borderBottomColor: '#0066CC' }}>
                  <QuantumLogo size={40} showText={true} />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-gray-500"
                    style={{ color: '#0066CC' }}
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* CTA Buttons */}
                <div className="p-6 space-y-3 border-b border-gray-200 bg-gray-50">
                  <Link href="/quote" className="block">
                    <Button className="w-full" size="lg" style={{ backgroundColor: '#0066CC' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0052a3'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0066CC'}>
                      Get Free Quote
                    </Button>
                  </Link>
                  <Link href="/schedule" className="block">
                    <Button variant="outline" size="lg" className="w-full hover:bg-red-50" style={{ borderColor: '#E63946', color: '#E63946' }}>
                      24/7 Emergency Service
                    </Button>
                  </Link>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 p-6 space-y-2">
                  <Link
                    href="/"
                    className={`flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-colors ${
                      isActive("/")
                        ? "bg-blue-50"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                    style={isActive("/") ? { color: '#0066CC' } : {}}
                  >
                    Home
                  </Link>

                  <Link
                    href="/about"
                    className={`flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-colors ${
                      isActive("/about")
                        ? "bg-blue-50"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                    style={isActive("/about") ? { color: '#0066CC' } : {}}
                  >
                    About Us
                  </Link>

                  {/* Services Accordion */}
                  <div>
                    <button
                      onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                      className={`flex items-center justify-between w-full px-4 py-3 rounded-lg font-medium transition-colors ${
                        pathname.startsWith("/services")
                          ? "bg-blue-50"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                      style={pathname.startsWith("/services") ? { color: '#0066CC' } : {}}
                    >
                      Services
                      <ChevronDown
                        className={`h-5 w-5 transition-transform ${
                          mobileServicesExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {mobileServicesExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pr-2 pt-2 space-y-2">
                            {serviceDivisions.map((division) => {
                              const Icon = division.icon;
                              const isExpanded = mobileDivisionExpanded === division.id;

                              return (
                                <div key={division.id} className="space-y-1">
                                  <button
                                    onClick={() =>
                                      setMobileDivisionExpanded(
                                        isExpanded ? null : division.id
                                      )
                                    }
                                    className="flex items-center gap-3 w-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
                                  >
                                    <Icon className="h-4 w-4 flex-shrink-0" />
                                    <span className="flex-1 text-left">
                                      {division.title}
                                    </span>
                                    <ChevronDown
                                      className={`h-4 w-4 transition-transform ${
                                        isExpanded ? "rotate-180" : ""
                                      }`}
                                    />
                                  </button>

                                  <AnimatePresence>
                                    {isExpanded && (
                                      <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.15 }}
                                        className="overflow-hidden"
                                      >
                                        <div className="pl-8 pr-2 py-1 space-y-1">
                                          {division.services.map((service) => (
                                            <Link
                                              key={service.name}
                                              href={service.href}
                                              className="block px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 rounded-lg transition-colors"
                                              onMouseEnter={(e) => e.currentTarget.style.color = '#0066CC'}
                                              onMouseLeave={(e) => e.currentTarget.style.color = ''}
                                            >
                                              {service.name}
                                            </Link>
                                          ))}
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              );
                            })}

                            <Link
                              href="/services"
                              className="block px-3 py-2 text-sm font-semibold hover:bg-blue-50 rounded-lg"
                              style={{ color: '#0066CC' }}
                            >
                              View All Services →
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link
                    href="/testimonials"
                    className={`flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-colors ${
                      isActive("/testimonials")
                        ? "bg-blue-50"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                    style={isActive("/testimonials") ? { color: '#0066CC' } : {}}
                  >
                    Testimonials
                  </Link>

                  <Link
                    href="/contact"
                    className={`flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-colors ${
                      isActive("/contact")
                        ? "bg-blue-50"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                    style={isActive("/contact") ? { color: '#0066CC' } : {}}
                  >
                    Contact
                  </Link>
                </nav>

                {/* Footer */}
                <div className="p-6 border-t border-gray-200 bg-gray-50 space-y-4">
                  <div className="text-center">
                    <a
                      href="tel:6477041780"
                      className="text-lg font-bold"
                      style={{ color: '#0066CC' }}
                    >
                      647.704.1780
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <a
                      href="https://www.facebook.com/quantumhvac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-600 transition-colors"
                      style={{ color: '#0066CC' }}
                      aria-label="Follow us on Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/quantum-hvac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-600 transition-colors"
                      style={{ color: '#0066CC' }}
                      aria-label="Follow us on LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
