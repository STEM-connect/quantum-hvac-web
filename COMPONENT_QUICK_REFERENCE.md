# Component Library Quick Reference

## Import Statement

```tsx
import {
  ServiceCard,
  FeatureCard,
  StatsCounter,
  ProjectCard,
  CTASection,
} from "@/components";
```

---

## ServiceCard

```tsx
<ServiceCard
  title="Service Name"
  description="Service description text"
  icon={IconComponent}
  href="/link"
  variant="blue" // blue | cyan | slate | orange
/>
```

**Variants**: `blue` (Industrial), `cyan` (Refrigeration), `slate` (Sheet Metal), `orange` (Residential)

---

## FeatureCard

```tsx
<FeatureCard
  title="Feature Name"
  description="Feature description"
  icon={IconComponent}
  iconColor="blue" // blue | cyan | orange | slate
  animationDelay={0.1}
/>
```

**Use for**: "Why Choose Us" sections, feature highlights

---

## StatsCounter

```tsx
<StatsCounter
  value={30}
  label="Years Experience"
  suffix="+" // or prefix="$"
  variant="blue"
  duration={2}
  animationDelay={0}
/>
```

**Features**: Animated counting, auto-formats numbers with commas

---

## ProjectCard

```tsx
<ProjectCard
  title="Project Name"
  description="Project description"
  image="/path/to/image.jpg"
  category="Commercial" // Industrial | Commercial | Residential | Refrigeration | Sheet Metal
  href="/projects/slug"
/>
```

**Image ratio**: 16:10 aspect ratio, uses Next.js Image optimization

---

## CTASection

```tsx
<CTASection
  headline="Main Headline"
  description="Supporting text"
  primaryButton={{ label: "CTA Text", href: "/link" }}
  secondaryButton={{ label: "Secondary", href: "/link2" }}
  backgroundVariant="gradient" // gradient | image | solid | none
  gradientFrom="from-brand-blue-600"
  gradientTo="to-brand-cyan-600"
/>
```

**Backgrounds**: Gradient, image, solid color, or transparent

---

## Color Variants & Service Mapping

| Service Division | Variant | Primary Use |
|-----------------|---------|-------------|
| Industrial & Commercial HVAC | `blue` | Main brand color |
| Refrigeration | `cyan` | Cooling services |
| Residential HVAC | `orange` | Heating services |
| Sheet Metal | `slate` | Fabrication |

---

## Accessibility Features

All components include:
- ARIA labels
- Keyboard navigation
- Focus visible states
- Semantic HTML
- Screen reader support

---

## Animation Details

- **ServiceCard**: Lifts on hover (-8px), gradient overlay
- **FeatureCard**: Fade in on scroll, icon scales on hover
- **StatsCounter**: Smooth spring animation, counts once
- **ProjectCard**: Image zoom on hover, gradient overlay
- **CTASection**: Fade in on scroll, decorative blur elements

---

## Grid Layouts (Recommended)

```tsx
// Service Cards - 4 columns
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {services.map(s => <ServiceCard {...s} />)}
</div>

// Feature Cards - 4 columns
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {features.map(f => <FeatureCard {...f} />)}
</div>

// Stats - 4 columns
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {stats.map(s => <StatsCounter {...s} />)}
</div>

// Projects - 3 columns
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {projects.map(p => <ProjectCard {...p} />)}
</div>
```

---

## Common Icons (from lucide-react)

```tsx
import {
  // HVAC Services
  Wind,        // Ventilation
  Snowflake,   // Cooling/AC
  Flame,       // Heating
  Thermometer, // Temperature
  Fan,         // Air flow

  // Tools & Services
  Wrench,      // Installation
  Settings,    // Maintenance
  RefreshCw,   // Repair

  // Features
  Shield,      // Protection/Insurance
  Clock,       // 24/7 Service
  Award,       // Certification
  Users,       // Customer service
  Star,        // Quality
  CheckCircle, // Verified
} from "lucide-react";
```

---

## TypeScript Types

```tsx
import type {
  ServiceCardProps,
  ServiceVariant,
  FeatureCardProps,
  StatsCounterProps,
  ProjectCardProps,
  ProjectCategory,
  CTASectionProps,
  CTAButton,
} from "@/components";
```

---

## Demo Page

Visit `/component-demo` to see all components in action with live examples.

---

## Files Created

1. `/src/components/ServiceCard.tsx` - Service division cards
2. `/src/components/FeatureCard.tsx` - Feature highlights
3. `/src/components/StatsCounter.tsx` - Animated statistics
4. `/src/components/ProjectCard.tsx` - Portfolio showcase
5. `/src/components/CTASection.tsx` - Call-to-action sections
6. `/src/components/index.ts` - Centralized exports
7. `/src/app/component-demo/page.tsx` - Live demo page

---

## Tips

1. **Stagger animations**: Use `animationDelay` prop with increments (0, 0.1, 0.2, 0.3)
2. **Consistent spacing**: Use `gap-6` for cards, `gap-8` for features
3. **Background contrast**: Use gradient backgrounds with white components
4. **Image optimization**: Always use Next.js Image component
5. **Accessibility**: Add meaningful alt text to all images
