import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import HeroSection from "@/components/HeroSection";
import {
  CheckCircle,
  ArrowLeft,
  Snowflake,
  Building2,
  Warehouse,
  ShoppingCart,
  IceCream,
  AlertCircle,
  Clock,
  Phone,
  Shield,
  Award,
  Zap,
  Users,
  ThermometerSnowflake,
  Store,
  Utensils,
  Hospital,
  Hotel,
  Factory
} from "lucide-react";

export default function RefrigerationPage() {
  const services = [
    {
      icon: Building2,
      title: "Commercial Refrigeration",
      description: "Complete refrigeration solutions for restaurants, cafeterias, and food service operations.",
      features: [
        "Reach-in coolers and freezers",
        "Prep tables and sandwich units",
        "Undercounter refrigeration",
        "Bar and beverage coolers"
      ],
      image: "/images/company/photo-1.jpg"
    },
    {
      icon: Warehouse,
      title: "Industrial Cold Storage",
      description: "Large-scale refrigeration systems for warehouses and distribution centers.",
      features: [
        "Cold storage warehouses",
        "Blast freezers",
        "Controlled atmosphere storage",
        "Temperature monitoring systems"
      ],
      image: "/images/company/photo-2.jpg"
    },
    {
      icon: Snowflake,
      title: "Walk-in Coolers & Freezers",
      description: "Custom walk-in refrigeration solutions designed for your space and needs.",
      features: [
        "Custom design and installation",
        "Insulated panels and doors",
        "Digital temperature controls",
        "Energy-efficient refrigeration units"
      ],
      image: "/images/company/photo-3.jpg"
    },
    {
      icon: ShoppingCart,
      title: "Display Cases & Merchandisers",
      description: "Attractive refrigerated display solutions that showcase products while maintaining freshness.",
      features: [
        "Deli and bakery cases",
        "Open-air merchandisers",
        "Glass door reach-ins",
        "Custom display solutions"
      ],
      image: "/images/company/photo-4.jpg"
    },
    {
      icon: IceCream,
      title: "Ice Machines & Equipment",
      description: "Commercial ice makers and equipment for all business sizes.",
      features: [
        "Cube, flake, and nugget ice machines",
        "Ice storage bins",
        "Water filtration systems",
        "Preventive maintenance programs"
      ],
      image: "/images/company/photo-1.jpg"
    },
    {
      icon: AlertCircle,
      title: "24/7 Emergency Repair",
      description: "Round-the-clock emergency service to minimize downtime and protect your inventory.",
      features: [
        "Immediate response available",
        "Fully stocked service vehicles",
        "Experienced technicians",
        "Parts inventory on hand"
      ],
      image: "/images/company/photo-2.jpg"
    }
  ];

  const industries = [
    {
      icon: Utensils,
      name: "Restaurants & Food Service",
      description: "Reliable refrigeration solutions for kitchens and dining operations."
    },
    {
      icon: Store,
      name: "Grocery Stores & Supermarkets",
      description: "Complete refrigeration systems for retail food environments."
    },
    {
      icon: Factory,
      name: "Food Processing & Manufacturing",
      description: "Industrial-grade cold storage for production facilities."
    },
    {
      icon: Hospital,
      name: "Healthcare & Pharmaceuticals",
      description: "Precise temperature control for medical storage requirements."
    },
    {
      icon: Hotel,
      name: "Hospitality & Hotels",
      description: "Refrigeration solutions for hotels, resorts, and catering operations."
    },
    {
      icon: Warehouse,
      name: "Warehousing & Distribution",
      description: "Large-scale cold storage for logistics and distribution centers."
    }
  ];

  const maintenancePlans = [
    {
      name: "Basic",
      price: "$199",
      period: "per visit",
      description: "Essential maintenance for keeping your equipment running",
      features: [
        "Quarterly inspections",
        "Basic cleaning and filter changes",
        "Temperature calibration",
        "Visual inspection of components",
        "Priority scheduling",
        "10% discount on repairs"
      ],
      recommended: false
    },
    {
      name: "Standard",
      price: "$399",
      period: "per month",
      description: "Comprehensive coverage for peace of mind",
      features: [
        "Monthly inspections",
        "Deep cleaning and sanitization",
        "Refrigerant level checks",
        "Condenser and evaporator coil cleaning",
        "Door seal and gasket inspection",
        "Electrical system testing",
        "24/7 emergency service",
        "15% discount on repairs",
        "Priority response time"
      ],
      recommended: true
    },
    {
      name: "Premium",
      price: "$699",
      period: "per month",
      description: "Complete protection with maximum uptime guarantee",
      features: [
        "Bi-weekly inspections",
        "All Standard plan features",
        "Preventive parts replacement",
        "Advanced diagnostics",
        "Remote temperature monitoring",
        "Dedicated account manager",
        "Annual equipment assessment",
        "20% discount on repairs",
        "1-hour emergency response guarantee",
        "Free after-hours service"
      ],
      recommended: false
    }
  ];

  const brands = [
    "True", "Turbo Air", "Hoshizaki", "Manitowoc", "Scotsman",
    "Delfield", "Traulsen", "Beverage-Air", "Master-Bilt", "Nor-Lake"
  ];

  const projects = [
    {
      title: "Restaurant Walk-in Cooler Installation",
      client: "Downtown Bistro",
      description: "Complete 12x16 walk-in cooler installation with energy-efficient refrigeration system.",
      results: "40% reduction in energy costs, improved food storage capacity",
      image: "/images/company/photo-3.jpg",
      testimonial: "The team at Quantum HVAC delivered exactly what we needed. Our new walk-in has been flawless, and we're saving significantly on energy bills."
    },
    {
      title: "Supermarket Display Case Retrofit",
      client: "Fresh Market Foods",
      description: "Upgraded 20 display cases with modern energy-efficient units and LED lighting.",
      results: "35% energy savings, enhanced product visibility, reduced maintenance",
      image: "/images/company/photo-4.jpg",
      testimonial: "Professional installation with minimal disruption to our business. The new cases look amazing and our customers have noticed the difference."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <HeroSection
          title="Expert Refrigeration Solutions for Your Business"
          subtitle="Professional commercial and industrial refrigeration services you can count on"
          backgroundImage="/images/company/photo-4.jpg"
        />

        {/* Racing Stripe Divider */}
        <div className="h-2 bg-gradient-to-r from-[#0066CC] via-[#00BCD4] to-[#E63946]"></div>

        {/* Breadcrumb Navigation */}
        <section className="bg-gray-50 py-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-[#00BCD4]">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/services" className="hover:text-[#00BCD4]">Services</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">Refrigeration</span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Link
                href="/services"
                className="flex items-center text-[#00BCD4] hover:text-[#00BCD4] mb-6 font-medium"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to All Services
              </Link>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Commercial Refrigeration Services
              </h2>
              <p className="text-lg text-gray-700 mb-8 max-w-3xl">
                Quantum HVAC System Inc. specializes in commercial and industrial refrigeration solutions
                that keep your business running smoothly. From walk-in coolers to display cases, ice machines
                to emergency repairs, we provide comprehensive refrigeration services tailored to your industry's
                unique needs. Our certified technicians ensure your equipment operates efficiently, protecting
                your inventory and your bottom line.
              </p>
            </div>

            {/* Emergency Service Banner */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl p-8 shadow-lg mb-16">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 rounded-full p-3">
                    <AlertCircle className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      Refrigeration Down? Call Now!
                    </h3>
                    <p className="text-red-100 text-lg">
                      24/7 Emergency Refrigeration Repair - Immediate Response Available
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <Phone className="h-10 w-10" />
                  <a
                    href="tel:6477041780"
                    className="text-3xl font-bold hover:text-red-100 transition-colors"
                  >
                    (647) 704-1780
                  </a>
                  <span className="text-sm text-red-100">Available 24/7/365</span>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Our Refrigeration Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-gray-200">
                      <CardHeader>
                        <div className="bg-[#00BCD4]/10 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-[#00BCD4] transition-colors">
                          <IconComponent className="h-8 w-8 text-[#00BCD4] group-hover:text-white" />
                        </div>
                        <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                        <CardDescription className="text-gray-600">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="relative h-48 rounded-lg overflow-hidden mb-6">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-[#00BCD4] mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Equipment Brands Section */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-12 mb-20">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                We Service All Major Brands
              </h3>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Our technicians are trained and certified to work on equipment from all major manufacturers
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {brands.map((brand, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center"
                  >
                    <span className="text-gray-800 font-semibold text-lg">{brand}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Industries Served */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                Industries We Serve
              </h3>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Specialized refrigeration solutions for diverse business sectors
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {industries.map((industry, index) => {
                  const IconComponent = industry.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#00BCD4] hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-[#00BCD4]/10 rounded-lg p-3">
                          <IconComponent className="h-6 w-6 text-[#00BCD4]" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">
                            {industry.name}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {industry.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Maintenance Plans */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                Preventive Maintenance Plans
              </h3>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Protect your investment and ensure maximum uptime with our comprehensive maintenance programs
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {maintenancePlans.map((plan, index) => (
                  <Card
                    key={index}
                    className={`relative ${
                      plan.recommended
                        ? 'border-[#00BCD4] border-2 shadow-xl scale-105'
                        : 'border-gray-200'
                    }`}
                  >
                    {plan.recommended && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-[#00BCD4] text-white px-4 py-1 text-sm">
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    <CardHeader className="text-center pb-8">
                      <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                      <div className="mb-4">
                        <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                        <span className="text-gray-600 ml-2">{plan.period}</span>
                      </div>
                      <CardDescription>{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-[#00BCD4] mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button
                        className={`w-full ${
                          plan.recommended
                            ? 'bg-[#00BCD4] hover:bg-[#00AAC0]'
                            : 'bg-gray-900 hover:bg-gray-800'
                        }`}
                        size="lg"
                      >
                        Choose {plan.name}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>

            {/* Featured Projects */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                Featured Projects
              </h3>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Real results from real customers - see how we've helped businesses like yours
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="relative h-64">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="border-brand-cyan-600 text-[#00BCD4]">
                          {project.client}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-gray-600">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-[#00BCD4]/10 rounded-lg p-4 mb-4">
                        <h5 className="font-semibold text-[#006D7A] mb-2 flex items-center gap-2">
                          <Award className="h-5 w-5" />
                          Results
                        </h5>
                        <p className="text-[#008FA1] text-sm">{project.results}</p>
                      </div>
                      <div className="border-l-4 border-brand-cyan-600 pl-4 italic text-gray-700">
                        "{project.testimonial}"
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-[#00BCD4]/10 to-[#00BCD4]/5 rounded-xl p-12 mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Why Choose Quantum HVAC for Refrigeration
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Clock className="h-10 w-10 text-[#00BCD4]" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    24/7 Availability
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Round-the-clock emergency service to protect your inventory and minimize downtime
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Users className="h-10 w-10 text-[#00BCD4]" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Certified Experts
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Factory-trained technicians with extensive commercial refrigeration experience
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Zap className="h-10 w-10 text-[#00BCD4]" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Fast Response
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Fully stocked service vehicles ready to respond immediately to your needs
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Shield className="h-10 w-10 text-[#00BCD4]" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Quality Guaranteed
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Comprehensive warranties and satisfaction guarantee on all our work
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-[#00BCD4] to-[#00AAC0] text-white rounded-xl p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <ThermometerSnowflake className="h-10 w-10" />
                  <h3 className="text-2xl font-bold">
                    Get Refrigeration Quote
                  </h3>
                </div>
                <p className="text-[#00BCD4]/90 mb-6 text-lg">
                  Need new equipment or a system upgrade? Get a free, no-obligation quote
                  tailored to your business needs.
                </p>
                <Link href="/quote">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="w-full shadow-md hover:shadow-lg bg-white text-[#00BCD4] hover:bg-gray-100"
                  >
                    Request Free Quote
                  </Button>
                </Link>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Snowflake className="h-10 w-10" />
                  <h3 className="text-2xl font-bold">
                    Schedule Maintenance
                  </h3>
                </div>
                <p className="text-gray-300 mb-6 text-lg">
                  Keep your refrigeration running smoothly with regular preventive maintenance.
                  Schedule your service today.
                </p>
                <Link href="/schedule">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full bg-transparent border-white text-white hover:bg-white hover:text-gray-900"
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
