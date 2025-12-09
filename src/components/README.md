# Quantum HVAC Component Library

A comprehensive, production-ready UI component library built for the Quantum HVAC website redesign.

## Overview

This library contains 5 reusable components specifically designed for professional HVAC company websites, featuring 4 service divisions: Industrial & Commercial HVAC, Refrigeration, Sheet Metal, and Residential HVAC.

## Components

### 1. ServiceCard
Professional service showcase cards with division-specific color variants.

**Key Features:**
- 4 color variants (blue, cyan, slate, orange)
- Animated hover effects (lift + gradient overlay)
- Icon + title + description + CTA
- Optional link support
- Fully accessible

### 2. FeatureCard
Minimalist feature highlight cards perfect for "Why Choose Us" sections.

**Key Features:**
- Clean, centered design
- Icon + title + description
- Scroll-triggered animations
- Stagger animation support
- 4 icon color variants

### 3. StatsCounter
Animated counting statistics with smooth spring animations.

**Key Features:**
- Framer Motion spring animations
- Auto-formats numbers (1,000)
- Prefix/suffix support ($, +, %, etc.)
- Triggers on scroll (once)
- 4 color variants
- Configurable duration

### 4. ProjectCard
Portfolio/project showcase cards with image zoom effects.

**Key Features:**
- Next.js Image optimization
- 5 category types with color coding
- Image zoom on hover
- Gradient overlay effects
- Category tags
- Optional project links

### 5. CTASection
Full-width call-to-action sections with multiple background options.

**Key Features:**
- 4 background variants (gradient, image, solid, none)
- Primary + secondary buttons
- Configurable text colors
- Responsive max-width control
- Decorative blur elements
- Full accessibility

## Installation

Components are already available in this project. Import them like this:

```tsx
import { ServiceCard, FeatureCard, StatsCounter, ProjectCard, CTASection } from "@/components";
```

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Next.js 14** - Framework
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **class-variance-authority** - Variant management
- **clsx + tailwind-merge** - Class composition

## Design System

### Colors

All components use the brand color system defined in `tailwind.config.ts`:

```typescript
brand: {
  blue: { 50-950 }    // Industrial & Commercial HVAC (primary)
  cyan: { 400-600 }   // Refrigeration & Cooling
  orange: { 400-600 } // Residential & Heating
  slate: { 50-950 }   // Sheet Metal & Neutral
}
```

### Typography

- **Font**: Inter (system-ui fallback)
- **Headings**: Bold, tight tracking
- **Body**: Regular, relaxed leading
- **Uppercase labels**: Tracking-wider

### Spacing

- **Cards**: p-6 to p-8
- **Gaps**: gap-6 (cards), gap-8 (features)
- **Sections**: py-16 to py-24

### Shadows

- **Default**: shadow-soft
- **Hover**: shadow-soft-lg
- **Custom**: Defined in Tailwind config

## Animation Philosophy

All animations follow these principles:

1. **Purposeful**: Enhance UX, don't distract
2. **Smooth**: 300ms duration, easeOut timing
3. **Once**: Scroll animations trigger once
4. **Performant**: Use transform and opacity
5. **Accessible**: Respect prefers-reduced-motion

## Accessibility

All components include:

- Semantic HTML (section, nav, h1-h6, etc.)
- ARIA labels and roles
- Keyboard navigation support
- Focus visible states (ring-2)
- Screen reader text where needed
- Proper heading hierarchy
- Alt text for images

## Responsive Design

Mobile-first approach:

- **Mobile**: 1 column, full width
- **Tablet (md:)**: 2 columns
- **Desktop (lg:)**: 3-4 columns
- **Touch**: Larger tap targets
- **Images**: Responsive sizes

## File Structure

```
src/components/
├── ServiceCard.tsx      (5.5KB) - Service division cards
├── FeatureCard.tsx      (2.4KB) - Feature highlights
├── StatsCounter.tsx     (3.1KB) - Animated statistics
├── ProjectCard.tsx      (4.9KB) - Portfolio showcase
├── CTASection.tsx       (6.1KB) - Call-to-action sections
├── index.ts             - Centralized exports
└── README.md            - This file

Documentation:
├── COMPONENT_USAGE.md           - Comprehensive usage guide
└── COMPONENT_QUICK_REFERENCE.md - Quick reference

Demo:
└── src/app/component-demo/page.tsx - Live examples
```

## Usage Examples

### Service Section

```tsx
<section className="py-16 px-4">
  <div className="container mx-auto max-w-7xl">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <ServiceCard
        title="Industrial HVAC"
        description="Comprehensive solutions for industrial facilities."
        icon={Wind}
        href="/services/industrial"
        variant="blue"
      />
      {/* More cards... */}
    </div>
  </div>
</section>
```

### Stats Section

```tsx
<section className="py-16 px-4 bg-brand-slate-900">
  <div className="container mx-auto max-w-7xl">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <StatsCounter value={30} label="Years" suffix="+" variant="blue" />
      <StatsCounter value={5000} label="Projects" suffix="+" variant="cyan" />
      {/* More counters... */}
    </div>
  </div>
</section>
```

### Complete Page Layout

See `/src/app/component-demo/page.tsx` for a full example.

## Best Practices

### DO:
- ✅ Use consistent color variants per service division
- ✅ Add stagger delays for animation polish
- ✅ Provide meaningful alt text for images
- ✅ Test keyboard navigation
- ✅ Use Next.js Image for all images
- ✅ Keep descriptions concise (1-2 sentences)

### DON'T:
- ❌ Mix color variants randomly
- ❌ Use base64 images (use proper image optimization)
- ❌ Nest interactive elements (links in links)
- ❌ Forget to test on mobile
- ❌ Use overly long animation delays (>0.5s)

## Performance

All components are optimized for performance:

- **Code splitting**: Use dynamic imports for heavy components
- **Image optimization**: Next.js Image with proper sizes
- **Animation**: GPU-accelerated transforms
- **Lazy loading**: viewport detection for animations
- **Tree shaking**: Import only what you need

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

When adding new components:

1. Follow existing patterns (forwardRef, TypeScript, etc.)
2. Include full TypeScript types
3. Add accessibility features
4. Document props and usage
5. Add to index.ts exports
6. Update this README

## Support

For issues or questions:

1. Check `/COMPONENT_USAGE.md` for detailed examples
2. View `/component-demo` page for live examples
3. Review `/COMPONENT_QUICK_REFERENCE.md` for quick tips

## License

Proprietary - Quantum HVAC Website

---

**Version**: 1.0.0
**Last Updated**: 2025-10-30
**Built with**: React 18, Next.js 14, TypeScript 5, Tailwind CSS 3, Framer Motion 12
