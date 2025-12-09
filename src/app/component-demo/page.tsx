"use client";

import {
  ServiceCard,
  FeatureCard,
  StatsCounter,
  ProjectCard,
  CTASection,
} from "@/components";
import {
  Wind,
  Snowflake,
  Wrench,
  Flame,
  Shield,
  Clock,
  Award,
  Users,
} from "lucide-react";

export default function ComponentDemoPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Service Cards Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-brand-slate-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-brand-slate-900">
            Service Cards Demo
          </h2>
          <p className="text-center text-brand-slate-600 mb-12 max-w-2xl mx-auto">
            Four color variants for different service divisions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              title="Industrial HVAC"
              description="Comprehensive HVAC solutions for industrial facilities with 24/7 support."
              icon={Wind}
              href="/services/industrial"
              variant="blue"
            />

            <ServiceCard
              title="Refrigeration"
              description="Expert refrigeration services for commercial and industrial applications."
              icon={Snowflake}
              href="/services/refrigeration"
              variant="cyan"
            />

            <ServiceCard
              title="Sheet Metal"
              description="Custom sheet metal fabrication and ductwork installation services."
              icon={Wrench}
              href="/services/sheet-metal"
              variant="slate"
            />

            <ServiceCard
              title="Residential HVAC"
              description="Home comfort solutions including heating, cooling, and air quality."
              icon={Flame}
              href="/services/residential"
              variant="orange"
            />
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-16 px-4 bg-brand-slate-900">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Stats Counter Demo
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatsCounter
              value={30}
              label="Years Experience"
              suffix="+"
              variant="blue"
              animationDelay={0}
            />

            <StatsCounter
              value={5000}
              label="Projects Completed"
              suffix="+"
              variant="cyan"
              animationDelay={0.1}
            />

            <StatsCounter
              value={95}
              label="Customer Satisfaction"
              suffix="%"
              variant="orange"
              animationDelay={0.2}
            />

            <StatsCounter
              value={24}
              label="Emergency Support"
              suffix="/7"
              variant="slate"
              animationDelay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-brand-slate-900">
            Feature Cards Demo
          </h2>
          <p className="text-center text-brand-slate-600 mb-12 max-w-2xl mx-auto">
            Perfect for &quot;Why Choose Us&quot; sections
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              title="Licensed & Insured"
              description="Fully licensed, bonded, and insured for your peace of mind and protection."
              icon={Shield}
              iconColor="blue"
              animationDelay={0}
            />

            <FeatureCard
              title="24/7 Emergency Service"
              description="Round-the-clock emergency support when you need it most."
              icon={Clock}
              iconColor="cyan"
              animationDelay={0.1}
            />

            <FeatureCard
              title="Certified Technicians"
              description="Highly trained and certified HVAC professionals on every job."
              icon={Award}
              iconColor="orange"
              animationDelay={0.2}
            />

            <FeatureCard
              title="Customer Satisfaction"
              description="Over 95% customer satisfaction rate and hundreds of 5-star reviews."
              icon={Users}
              iconColor="slate"
              animationDelay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Project Cards Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-brand-slate-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-brand-slate-900">
            Project Cards Demo
          </h2>
          <p className="text-center text-brand-slate-600 mb-12 max-w-2xl mx-auto">
            Showcase your portfolio with style
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Downtown Office Complex"
              description="Complete HVAC system installation for a 50,000 sq ft commercial building with smart climate controls."
              image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
              category="Commercial"
              href="/projects/office-complex"
            />

            <ProjectCard
              title="Manufacturing Plant Cooling"
              description="Industrial refrigeration system for a large-scale food processing facility with redundant systems."
              image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80"
              category="Industrial"
              href="/projects/manufacturing"
            />

            <ProjectCard
              title="Luxury Home Climate Control"
              description="Smart HVAC system for a 6,000 sq ft luxury residence with multi-zone temperature control."
              image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
              category="Residential"
              href="/projects/luxury-home"
            />
          </div>
        </div>
      </section>

      {/* CTA Section - Gradient Variant */}
      <CTASection
        headline="Ready to Upgrade Your HVAC System?"
        description="Get a free consultation from our certified technicians and discover how we can improve your comfort and efficiency."
        primaryButton={{
          label: "Get Free Quote",
          href: "/quote",
        }}
        secondaryButton={{
          label: "Contact Us",
          href: "/contact",
        }}
        backgroundVariant="gradient"
        gradientFrom="from-brand-blue-600"
        gradientTo="to-brand-cyan-600"
      />

      {/* CTA Section - Solid Variant */}
      <CTASection
        headline="Subscribe to Our Newsletter"
        description="Get HVAC tips, seasonal maintenance reminders, and exclusive offers delivered to your inbox."
        primaryButton={{
          label: "Subscribe Now",
          onClick: () => alert("Subscribe clicked!"),
        }}
        backgroundVariant="solid"
        backgroundColor="bg-brand-orange-600"
        textColor="light"
        maxWidth="md"
      />
    </main>
  );
}
