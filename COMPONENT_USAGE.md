# Component Library Usage Guide

This document provides comprehensive usage examples for all components in the Quantum HVAC UI component library.

## Table of Contents

1. [ServiceCard](#servicecard)
2. [FeatureCard](#featurecard)
3. [StatsCounter](#statscounter)
4. [ProjectCard](#projectcard)
5. [CTASection](#ctasection)

---

## ServiceCard

A versatile card component for displaying service offerings with hover effects and color variants for different service divisions.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | Required | Service title |
| `description` | `string` | Required | Service description |
| `icon` | `LucideIcon` | Required | Icon component from lucide-react |
| `href` | `string` | Optional | Link URL (wraps card in Link component) |
| `variant` | `'blue' \| 'cyan' \| 'slate' \| 'orange'` | `'blue'` | Color variant for service division |
| `iconSize` | `number` | `28` | Icon size in pixels |
| `className` | `string` | Optional | Additional CSS classes |

### Usage Example

```tsx
import { ServiceCard } from "@/components";
import { Snowflake, Flame, Wind, Wrench } from "lucide-react";

export default function ServicesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Industrial & Commercial HVAC - Blue */}
      <ServiceCard
        title="Industrial HVAC"
        description="Comprehensive HVAC solutions for industrial facilities with 24/7 support and maintenance."
        icon={Wind}
        href="/services/industrial"
        variant="blue"
      />

      {/* Refrigeration - Cyan */}
      <ServiceCard
        title="Refrigeration"
        description="Expert refrigeration services for commercial and industrial applications."
        icon={Snowflake}
        href="/services/refrigeration"
        variant="cyan"
      />

      {/* Sheet Metal - Slate */}
      <ServiceCard
        title="Sheet Metal"
        description="Custom sheet metal fabrication and ductwork installation services."
        icon={Wrench}
        href="/services/sheet-metal"
        variant="slate"
      />

      {/* Residential HVAC - Orange */}
      <ServiceCard
        title="Residential HVAC"
        description="Home comfort solutions including heating, cooling, and air quality services."
        icon={Flame}
        href="/services/residential"
        variant="orange"
      />
    </div>
  );
}
```

### Color Variants

- **blue**: Industrial & Commercial HVAC (primary brand color)
- **cyan**: Refrigeration and cooling services
- **orange**: Residential HVAC and heating services
- **slate**: Sheet metal and fabrication

---

## FeatureCard

A clean, minimalist card component for displaying "Why Choose Us" features with animated entrance effects.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | Required | Feature title |
| `description` | `string` | Required | Feature description |
| `icon` | `LucideIcon` | Required | Icon component from lucide-react |
| `iconSize` | `number` | `24` | Icon size in pixels |
| `iconColor` | `'blue' \| 'cyan' \| 'orange' \| 'slate'` | `'blue'` | Icon color variant |
| `animationDelay` | `number` | `0` | Delay before animation starts (in seconds) |
| `className` | `string` | Optional | Additional CSS classes |

### Usage Example

```tsx
import { FeatureCard } from "@/components";
import { Shield, Clock, Award, Users } from "lucide-react";

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Quantum HVAC
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            title="Licensed & Insured"
            description="Fully licensed, bonded, and insured for your peace of mind."
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
            description="Highly trained and certified HVAC professionals."
            icon={Award}
            iconColor="orange"
            animationDelay={0.2}
          />

          <FeatureCard
            title="Customer Satisfaction"
            description="Over 95% customer satisfaction rate and 5-star reviews."
            icon={Users}
            iconColor="slate"
            animationDelay={0.3}
          />
        </div>
      </div>
    </section>
  );
}
```

### Stagger Animation

Use the `animationDelay` prop to create a staggered entrance effect. Increment by 0.1s for each card:

```tsx
{features.map((feature, index) => (
  <FeatureCard
    key={index}
    {...feature}
    animationDelay={index * 0.1}
  />
))}
```

---

## StatsCounter

An animated counter component with smooth counting animation using Framer Motion springs.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | Required | Target number to count to |
| `label` | `string` | Required | Label text below the number |
| `suffix` | `string` | `""` | Optional suffix (e.g., "+", "%", "K") |
| `prefix` | `string` | `""` | Optional prefix (e.g., "$") |
| `duration` | `number` | `2` | Animation duration in seconds |
| `variant` | `'blue' \| 'cyan' \| 'orange' \| 'slate'` | `'blue'` | Color variant for the counter |
| `animationDelay` | `number` | `0` | Delay before animation starts (in seconds) |
| `className` | `string` | Optional | Additional CSS classes |

### Usage Example

```tsx
import { StatsCounter } from "@/components";

export default function StatsSection() {
  return (
    <section className="py-16 px-4 bg-brand-slate-50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatsCounter
            value={30}
            label="Years Experience"
            suffix="+"
            variant="blue"
            duration={2.5}
            animationDelay={0}
          />

          <StatsCounter
            value={5000}
            label="Projects Completed"
            suffix="+"
            variant="cyan"
            duration={2.5}
            animationDelay={0.1}
          />

          <StatsCounter
            value={95}
            label="Customer Satisfaction"
            suffix="%"
            variant="orange"
            duration={2}
            animationDelay={0.2}
          />

          <StatsCounter
            value={24}
            label="Emergency Support"
            suffix="/7"
            variant="slate"
            duration={1.5}
            animationDelay={0.3}
          />
        </div>
      </div>
    </section>
  );
}
```

### Notes

- The counter animates only once when it enters the viewport
- Uses smooth spring animation for natural counting effect
- Automatically formats numbers with commas (e.g., 1,000)
- Responsive font sizes that scale with screen size

---

## ProjectCard

A portfolio/project showcase card with image, category tag, and hover effects.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | Required | Project title |
| `description` | `string` | Required | Brief project description |
| `image` | `string` | Required | Image URL or path |
| `category` | `ProjectCategory` | Required | Project category/tag |
| `href` | `string` | Optional | Link to project details |
| `imageAlt` | `string` | Optional | Image alt text (defaults to title) |
| `className` | `string` | Optional | Additional CSS classes |

### ProjectCategory Types

```typescript
type ProjectCategory =
  | "Industrial"
  | "Commercial"
  | "Residential"
  | "Refrigeration"
  | "Sheet Metal";
```

### Usage Example

```tsx
import { ProjectCard } from "@/components";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Downtown Office Complex",
      description: "Complete HVAC system installation for a 50,000 sq ft commercial building.",
      image: "/projects/office-complex.jpg",
      category: "Commercial" as const,
      href: "/projects/downtown-office",
    },
    {
      title: "Manufacturing Plant Cooling",
      description: "Industrial refrigeration system for a large-scale food processing facility.",
      image: "/projects/manufacturing.jpg",
      category: "Industrial" as const,
      href: "/projects/manufacturing-plant",
    },
    {
      title: "Luxury Home HVAC",
      description: "Smart climate control system for a 6,000 sq ft luxury residence.",
      image: "/projects/luxury-home.jpg",
      category: "Residential" as const,
      href: "/projects/luxury-home",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

### Category Colors

Each category has its own color scheme:

- **Industrial**: Blue
- **Commercial**: Cyan
- **Residential**: Orange
- **Refrigeration**: Cyan
- **Sheet Metal**: Slate

---

## CTASection

A flexible call-to-action section with multiple background options and button configurations.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `headline` | `string` | Required | Main headline text |
| `description` | `string` | Optional | Supporting description |
| `primaryButton` | `CTAButton` | Optional | Primary CTA button |
| `secondaryButton` | `CTAButton` | Optional | Secondary CTA button |
| `backgroundVariant` | `'gradient' \| 'image' \| 'solid' \| 'none'` | `'gradient'` | Background style |
| `backgroundImage` | `string` | Optional | Background image URL |
| `gradientFrom` | `string` | `'from-brand-blue-600'` | Gradient start color |
| `gradientTo` | `string` | `'to-brand-cyan-600'` | Gradient end color |
| `backgroundColor` | `string` | `'bg-brand-slate-900'` | Solid background color |
| `textColor` | `'light' \| 'dark'` | `'light'` | Text color variant |
| `maxWidth` | `'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| 'full'` | `'lg'` | Container max width |
| `className` | `string` | Optional | Additional CSS classes |

### CTAButton Interface

```typescript
interface CTAButton {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "default" | "outline" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg";
}
```

### Usage Examples

#### Basic Gradient CTA

```tsx
import { CTASection } from "@/components";

export default function HomePage() {
  return (
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
    />
  );
}
```

#### With Background Image

```tsx
<CTASection
  headline="Emergency HVAC Service Available 24/7"
  description="Don't let HVAC problems disrupt your comfort. Our team is ready to help."
  backgroundVariant="image"
  backgroundImage="/images/emergency-cta-bg.jpg"
  textColor="light"
  primaryButton={{
    label: "Call Now: (555) 123-4567",
    href: "tel:5551234567",
  }}
  secondaryButton={{
    label: "Schedule Service",
    href: "/schedule",
  }}
/>
```

#### Custom Gradient Colors

```tsx
<CTASection
  headline="Join Our Maintenance Program"
  description="Save up to 20% on repairs and enjoy priority service."
  backgroundVariant="gradient"
  gradientFrom="from-brand-orange-500"
  gradientTo="to-brand-orange-700"
  primaryButton={{
    label: "Learn More",
    href: "/maintenance-program",
  }}
/>
```

#### Solid Background

```tsx
<CTASection
  headline="Subscribe to Our Newsletter"
  description="Get HVAC tips, seasonal maintenance reminders, and exclusive offers."
  backgroundVariant="solid"
  backgroundColor="bg-brand-slate-900"
  textColor="light"
  maxWidth="md"
  primaryButton={{
    label: "Subscribe",
    onClick: () => console.log("Subscribe clicked"),
  }}
/>
```

#### No Background (Transparent)

```tsx
<CTASection
  headline="Questions About Your HVAC System?"
  description="Our experts are here to help you find the perfect solution."
  backgroundVariant="none"
  textColor="dark"
  primaryButton={{
    label: "Ask an Expert",
    href: "/contact",
    variant: "default",
  }}
  secondaryButton={{
    label: "Browse FAQ",
    href: "/faq",
    variant: "outline",
  }}
/>
```

---

## Best Practices

### Accessibility

All components include:
- Proper ARIA labels
- Keyboard navigation support
- Focus states with visible rings
- Semantic HTML structure

### Performance

- Use `Next.js Image` component for optimized images
- Components use `whileInView` for animations (only animate when visible)
- Animations trigger once by default (`viewport: { once: true }`)

### Responsive Design

All components are mobile-first and fully responsive:
- Grid layouts adapt from 1 column (mobile) to 2-4 columns (desktop)
- Text sizes scale with screen size
- Touch-friendly tap targets on mobile

### Color Consistency

Use the defined color variants to maintain brand consistency:
- **Blue**: Industrial/Commercial (primary brand)
- **Cyan**: Refrigeration/Cooling
- **Orange**: Residential/Heating
- **Slate**: Sheet Metal/Neutral

### Import Methods

```tsx
// Named imports
import { ServiceCard, FeatureCard, StatsCounter } from "@/components";

// Or individual imports
import { ServiceCard } from "@/components/ServiceCard";
```

---

## Component Combinations

### Complete Service Page Layout

```tsx
import { ServiceCard, FeatureCard, StatsCounter, CTASection } from "@/components";
import { Wind, Shield, Clock, Award } from "lucide-react";

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-16">
        <h1 className="text-5xl font-bold text-center mb-16">Our Services</h1>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            title="Industrial HVAC"
            description="Comprehensive solutions for industrial facilities."
            icon={Wind}
            href="/services/industrial"
            variant="blue"
          />
          {/* More service cards... */}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-brand-slate-50">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <StatsCounter value={30} label="Years Experience" suffix="+" variant="blue" />
          <StatsCounter value={5000} label="Projects" suffix="+" variant="cyan" />
          <StatsCounter value={95} label="Satisfaction" suffix="%" variant="orange" />
          <StatsCounter value={24} label="Support" suffix="/7" variant="slate" />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            title="Licensed & Insured"
            description="Fully licensed and insured."
            icon={Shield}
            iconColor="blue"
          />
          <FeatureCard
            title="24/7 Emergency"
            description="Round-the-clock support."
            icon={Clock}
            iconColor="cyan"
          />
          {/* More features... */}
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Ready to Get Started?"
        description="Contact us today for a free consultation."
        primaryButton={{ label: "Get Free Quote", href: "/quote" }}
        secondaryButton={{ label: "Contact Us", href: "/contact" }}
      />
    </main>
  );
}
```

---

## TypeScript Support

All components are fully typed with TypeScript. Import types as needed:

```typescript
import type {
  ServiceCardProps,
  ServiceVariant,
  FeatureCardProps,
  StatsCounterProps,
  ProjectCardProps,
  ProjectCategory,
  CTASectionProps,
  CTAButton
} from "@/components";
```

---

## Customization

### Extending Components

You can extend components with additional props or styling:

```tsx
// Custom wrapper component
export function CustomServiceCard(props: ServiceCardProps & { badge?: string }) {
  return (
    <div className="relative">
      {props.badge && (
        <span className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
          {props.badge}
        </span>
      )}
      <ServiceCard {...props} />
    </div>
  );
}
```

### Theme Customization

All colors are defined in `tailwind.config.ts` under the `brand` namespace. Modify these to change the entire theme:

```typescript
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      brand: {
        blue: { /* custom blue shades */ },
        orange: { /* custom orange shades */ },
        // etc.
      }
    }
  }
}
```
