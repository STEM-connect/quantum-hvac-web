# Component Architecture

## Visual Component Hierarchy

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           QUANTUM HVAC WEBSITE                              │
└─────────────────────────────────────────────────────────────────────────────┘
                                     │
                  ┌──────────────────┴──────────────────┐
                  │                                     │
        ┌─────────▼────────┐                 ┌─────────▼────────┐
        │  Page Components │                 │  Base UI (Shadcn)│
        └─────────┬────────┘                 └─────────┬────────┘
                  │                                     │
    ┌─────────────┴─────────────┐                      │
    │                           │                      │
    │      Our Components       │                      │
    │   (This Library)          │◄─────────────────────┘
    │                           │
    └─────────┬─────────────────┘
              │
              │
    ┌─────────┴──────────────────────────────────────────────┐
    │                                                         │
┌───▼──────┐  ┌──────────┐  ┌───────────┐  ┌──────────┐  ┌──▼────┐
│ Service  │  │ Feature  │  │   Stats   │  │ Project  │  │  CTA  │
│  Card    │  │   Card   │  │  Counter  │  │   Card   │  │Section│
└───┬──────┘  └────┬─────┘  └─────┬─────┘  └────┬─────┘  └───┬───┘
    │              │              │              │            │
    └──────────────┴──────────────┴──────────────┴────────────┘
                                  │
                    ┌─────────────┴─────────────┐
                    │                           │
              ┌─────▼─────┐              ┌─────▼─────┐
              │ Framer    │              │  Lucide   │
              │  Motion   │              │   Icons   │
              └───────────┘              └───────────┘
```

## Component Dependencies

### ServiceCard
```
ServiceCard
├── React (forwardRef)
├── Next.js (Link, Image)
├── Framer Motion (motion, animations)
├── Lucide React (icons, ArrowRight)
└── Utilities (cn from lib/utils)
```

### FeatureCard
```
FeatureCard
├── React (forwardRef)
├── Framer Motion (motion, whileInView)
├── Lucide React (icons)
└── Utilities (cn from lib/utils)
```

### StatsCounter
```
StatsCounter
├── React (forwardRef, useState, useRef, useEffect)
├── Framer Motion
│   ├── motion
│   ├── useInView
│   ├── useSpring
│   └── useTransform
└── Utilities (cn from lib/utils)
```

### ProjectCard
```
ProjectCard
├── React (forwardRef)
├── Next.js (Link, Image)
├── Framer Motion (motion, animations)
├── Lucide React (ArrowRight)
└── Utilities (cn from lib/utils)
```

### CTASection
```
CTASection
├── React (forwardRef)
├── Next.js (Image)
├── Framer Motion (motion, animations)
├── Shadcn UI (Button component)
└── Utilities (cn from lib/utils)
```

## Data Flow

```
┌──────────────────┐
│   Parent Page    │
│  (Props Source)  │
└────────┬─────────┘
         │
         │ Props ↓
         │
┌────────▼──────────┐
│    Component      │
│  (ServiceCard,    │
│   FeatureCard,    │
│   etc.)           │
└────────┬──────────┘
         │
    ┌────┴────┐
    │         │
    │  State  │ (StatsCounter only)
    │         │
    └─────────┘
         │
    ┌────▼────┐
    │         │
    │  Render │
    │         │
    └─────────┘
```

## Styling Architecture

```
┌────────────────────────────────────────┐
│        Tailwind Config                 │
│  (Brand colors, shadows, animations)   │
└──────────────┬─────────────────────────┘
               │
               │ Design tokens ↓
               │
┌──────────────▼─────────────────────────┐
│          Component Styles              │
│  (Variant-based, responsive classes)   │
└──────────────┬─────────────────────────┘
               │
               │ Applied via cn() ↓
               │
┌──────────────▼─────────────────────────┐
│          DOM Elements                  │
│  (Rendered with merged classes)        │
└────────────────────────────────────────┘
```

## Color Variant Mapping

```
Service Division         Component Variant    Tailwind Colors
─────────────────────────────────────────────────────────────
Industrial & Commercial      blue           brand-blue-*
Refrigeration               cyan           brand-cyan-*
Sheet Metal                 slate          brand-slate-*
Residential HVAC            orange         brand-orange-*
```

## Animation Timeline

### ServiceCard Hover
```
Hover Trigger
    ↓
┌───┴───┐
│  0ms  │ → translateY: 0 → -8px (300ms ease-out)
├───────┤
│       │ → Gradient opacity: 0 → 100 (300ms)
├───────┤
│       │ → Icon scale: 1 → 1.05 (200ms)
└───────┘
```

### StatsCounter Animation
```
Scroll into view
    ↓
┌───┴───┐
│  0ms  │ → Container: opacity 0 → 1, scale 0.8 → 1 (500ms + delay)
├───────┤
│       │ → Number: 0 → target value (spring animation, 2000ms)
└───────┘
```

### FeatureCard Scroll Animation
```
Scroll into view
    ↓
┌───┴───┐
│  0ms  │ → Fade in: opacity 0 → 1 (500ms + delay)
├───────┤
│       │ → Slide up: translateY 20px → 0 (500ms + delay)
└───────┘

Hover Trigger
    ↓
┌───┴───┐
│  0ms  │ → Icon: scale 1 → 1.1, rotate 0 → 5deg (300ms)
└───────┘
```

## Type System

```typescript
// Shared Types
type ServiceVariant = "blue" | "cyan" | "slate" | "orange"
type ProjectCategory = "Industrial" | "Commercial" | "Residential" | "Refrigeration" | "Sheet Metal"

// Component Props (all extend React.HTMLAttributes)
interface ServiceCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  icon: LucideIcon
  href?: string
  variant?: ServiceVariant
  // ... etc
}

// Export Strategy
export { ComponentName }
export type { ComponentNameProps, RelatedTypes }
```

## Import/Export Flow

```
Individual Component Files
        ↓
    index.ts (barrel export)
        ↓
Consumer Files (@/components)
        ↓
    Page Components
```

## Responsive Breakpoints

```
Mobile First Approach:

base (default)  → 1 column   (< 768px)
    ↓
md: (768px)     → 2 columns  (tablet)
    ↓
lg: (1024px)    → 3-4 columns (desktop)
    ↓
xl: (1280px)    → Full width layouts
    ↓
2xl: (1536px)   → Max container width
```

## File Organization

```
quantum-hvac-web/
│
├── src/
│   ├── components/
│   │   ├── ServiceCard.tsx      ← Main component
│   │   ├── FeatureCard.tsx      ← Main component
│   │   ├── StatsCounter.tsx     ← Main component
│   │   ├── ProjectCard.tsx      ← Main component
│   │   ├── CTASection.tsx       ← Main component
│   │   ├── index.ts             ← Barrel exports
│   │   ├── README.md            ← Component docs
│   │   └── ui/                  ← Shadcn base components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── ... (existing)
│   │
│   ├── app/
│   │   └── component-demo/
│   │       └── page.tsx         ← Live demo page
│   │
│   └── lib/
│       └── utils.ts             ← Helper functions (cn)
│
├── COMPONENT_USAGE.md           ← Comprehensive guide
├── COMPONENT_QUICK_REFERENCE.md ← Quick reference
└── COMPONENT_ARCHITECTURE.md    ← This file
```

## Performance Optimization Strategy

```
┌─────────────────────────────────────────┐
│  Component Render Optimization          │
└───┬─────────────────────────────────────┘
    │
    ├─→ React.forwardRef (proper ref handling)
    │
    ├─→ Framer Motion whileInView (lazy animation)
    │
    ├─→ viewport: { once: true } (animate once)
    │
    ├─→ Next.js Image optimization (automatic)
    │
    ├─→ CSS transforms (GPU accelerated)
    │
    └─→ Tree shaking (import only needed components)
```

## Accessibility Tree

```
section (CTASection)
├── div (container)
│   └── div (content wrapper)
│       ├── h2 (headline)
│       ├── p (description)
│       └── div (button group)
│           ├── a[role="button"] (primary CTA)
│           └── button (secondary CTA)

div (ServiceCard wrapper)
└── div[role="article"] (card)
    ├── div (icon - aria-hidden)
    ├── h3 (title)
    ├── p (description)
    └── a[aria-label] (learn more link)
```

## Testing Strategy

```
Component Tests
    │
    ├─→ Render Tests (all props render correctly)
    ├─→ Interaction Tests (hover, click, keyboard)
    ├─→ Animation Tests (motion components work)
    ├─→ Accessibility Tests (a11y, aria, keyboard nav)
    └─→ Responsive Tests (mobile, tablet, desktop)
```

## Build Process

```
Source Files (.tsx)
    ↓
TypeScript Compiler
    ↓
Next.js Compiler
    ↓
Tailwind CSS JIT
    ↓
Framer Motion Runtime
    ↓
Production Build
    ↓
Optimized Bundle
```

## Component Complexity

| Component | Lines | Complexity | Dependencies |
|-----------|-------|------------|--------------|
| ServiceCard | 180 | Medium | 5 |
| FeatureCard | 90 | Low | 4 |
| StatsCounter | 120 | High | 5 |
| ProjectCard | 170 | Medium | 6 |
| CTASection | 200 | High | 6 |

**Complexity Factors:**
- Low: Simple props, minimal logic
- Medium: Variant management, conditional rendering
- High: Complex animations, state management

---

**Last Updated**: 2025-10-30
**Maintainer**: Development Team
