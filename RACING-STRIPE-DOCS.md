# RacingStripe Component Documentation

## Overview

The `RacingStripe` component is a reusable, decorative stripe divider featuring three quantum-themed colors. It's perfect for creating visual separation between page sections while maintaining the Quantum HVAC brand identity.

## Files Created

- `/src/components/RacingStripe.tsx` - Main component file
- `RacingStripe-USAGE-EXAMPLES.tsx` - Comprehensive usage examples

## Component Location

```
/Users/padamsandhu/Github/quantum-hvac-web/src/components/RacingStripe.tsx
```

## Color Palette

The RacingStripe uses three signature Quantum colors:

- **Quantum Blue**: `#0066CC` (Primary brand color)
- **Quantum Red**: `#E63946` (Accent color)
- **Quantum Cyan**: `#00BCD4` (Modern accent)

Each section includes:
- Subtle gradient for depth (darker shade on right/bottom)
- Inset shadow for 3D appearance
- Hover shadow effect for interactivity

## TypeScript Props Interface

```typescript
interface RacingStripeProps {
  /** Height of the stripe (default: 4px) */
  height?: string;

  /** Variant: horizontal (default) or vertical */
  variant?: 'horizontal' | 'vertical';

  /** Custom className for additional styling */
  className?: string;
}
```

## Props Details

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `height` | `string` | `"4px"` | Sets the height for horizontal variant or width for vertical variant |
| `variant` | `'horizontal' \| 'vertical'` | `'horizontal'` | Determines stripe orientation |
| `className` | `string` | `undefined` | Additional Tailwind/CSS classes for custom styling |

## Quick Start

### Basic Usage

```tsx
import { RacingStripe } from '@/components';

export default function Page() {
  return (
    <div>
      <section>Content Section 1</section>
      <RacingStripe />
      <section>Content Section 2</section>
    </div>
  );
}
```

### Horizontal Stripe (Default)

```tsx
// Uses default 4px height
<RacingStripe />

// Custom height
<RacingStripe height="8px" />

// With custom styling
<RacingStripe height="6px" className="rounded-full shadow-lg" />
```

### Vertical Stripe

```tsx
// Creates a vertical accent stripe
<RacingStripe variant="vertical" height="300px" />

// In a flex layout
<div className="flex gap-8">
  <RacingStripe variant="vertical" height="300px" className="flex-shrink-0" />
  <div>Main content here</div>
</div>
```

## Features

✓ **Responsive Design**
- Works seamlessly on all screen sizes
- Uses flexbox for flexible sizing

✓ **Accessibility**
- Marked as decorative with `role="presentation"` and `aria-hidden="true"`
- Doesn't interfere with screen readers

✓ **Performance**
- Lightweight component with no external dependencies (beyond React)
- Uses CSS gradients instead of images

✓ **Customizable**
- Full height/width control via props
- Additional styling via className
- Ref forwarding for imperative access

✓ **Animations**
- Smooth hover effects with shadow transitions
- Duration: 300ms with easeOut timing
- Non-intrusive animations

## Common Use Cases

### 1. Section Divider
```tsx
<section>Featured Services</section>
<RacingStripe />
<section>Why Choose Us</section>
```

### 2. Hero Section Separator
```tsx
<HeroSection />
<RacingStripe height="6px" />
<ServicesSection />
```

### 3. Sidebar Accent
```tsx
<div className="flex gap-8">
  <RacingStripe variant="vertical" height="500px" />
  <div>Main content</div>
</div>
```

### 4. Card Accent
```tsx
<div className="border rounded-lg overflow-hidden">
  <RacingStripe variant="vertical" height="8px" className="flex-shrink-0" />
  <div>Card content</div>
</div>
```

### 5. Footer Top Border
```tsx
<main>Page content</main>
<RacingStripe height="4px" />
<footer>Footer content</footer>
```

## Component Structure

```
RacingStripe
├── Container (flex wrapper)
│   ├── Blue Section (#0066CC)
│   │   └── Gradient to-[#0052A3]
│   ├── Red Section (#E63946)
│   │   └── Gradient to-[#C92A36]
│   └── Cyan Section (#00BCD4)
│       └── Gradient to-[#0099B3]
```

## Styling Details

### Horizontal Variant
- Full width (`w-full`)
- Flexible height via `height` prop
- Sections flex equally with `flex-1`
- Gradients flow left to right (`bg-gradient-to-r`)

### Vertical Variant
- Full height (`h-full`)
- Flexible width via `height` prop
- Sections flex equally with `flex-1`
- Gradients flow top to bottom (`bg-gradient-to-b`)

### Visual Effects
- **Inset Shadow**: `inset 0 2px 4px rgba(0, 0, 0, 0.1)` for depth
- **Hover Shadow**: `group-hover:shadow-lg` for interactivity
- **Transitions**: 300ms `ease-out` for smooth effects

## Export Management

The component is properly exported in `/src/components/index.ts`:

```typescript
export { RacingStripe } from "./RacingStripe";
export type { RacingStripeProps } from "./RacingStripe";
```

This allows importing from the components barrel:
```tsx
import { RacingStripe } from '@/components';
```

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support

Uses only standard CSS Grid/Flexbox features with no vendor prefixes needed.

## Performance Considerations

- **No images**: Uses CSS gradients (optimal for performance)
- **No JavaScript animations**: CSS transitions only
- **Minimal DOM**: 4 elements total (1 container + 3 sections)
- **Bundle size**: ~2KB minified (extremely lightweight)

## Accessibility Notes

- Correctly marked as decorative presentation
- Hidden from assistive technologies (`aria-hidden="true"`)
- No interactive elements or keyboard navigation needed
- Proper semantic HTML structure

## Integration with Existing Components

The RacingStripe integrates seamlessly with other Quantum HVAC components:

```tsx
import { HeroSection, RacingStripe, ServicesGrid } from '@/components';

export default function Home() {
  return (
    <>
      <HeroSection />
      <RacingStripe height="6px" />
      <ServicesGrid />
    </>
  );
}
```

## Customization Examples

### Rounded Stripe
```tsx
<RacingStripe height="5px" className="rounded-full" />
```

### Shadowed Stripe
```tsx
<RacingStripe height="6px" className="shadow-lg" />
```

### With Margin
```tsx
<RacingStripe height="4px" className="my-8" />
```

### Full Width Variant
```tsx
<RacingStripe height="8px" className="w-full" />
```

## Migration Guide

If you want to replace existing stripe dividers with this component:

### Before
```tsx
<div className="h-1 bg-gradient-to-r from-blue-600 to-red-600"></div>
```

### After
```tsx
<RacingStripe height="4px" />
```

## Testing the Component

The component can be tested with a simple test page:

```tsx
'use client';

import { RacingStripe } from '@/components';

export default function TestPage() {
  return (
    <div className="space-y-8 p-8">
      <h1 className="text-3xl font-bold">RacingStripe Test</h1>

      <section>
        <h2>Default Horizontal</h2>
        <RacingStripe />
      </section>

      <section>
        <h2>Thick Horizontal</h2>
        <RacingStripe height="8px" />
      </section>

      <section className="flex gap-8">
        <div>
          <h2>Vertical</h2>
          <RacingStripe variant="vertical" height="200px" />
        </div>
      </section>

      <section>
        <h2>With Styling</h2>
        <RacingStripe height="5px" className="rounded-full shadow-lg" />
      </section>
    </div>
  );
}
```

## Future Enhancements

Possible improvements for future versions:
- Animation variants (sliding, pulsing)
- Color customization props
- Custom number of sections
- Responsive height breakpoints
- Lottie animation integration

## Support

For questions or issues with the RacingStripe component, refer to:
- Component source: `/src/components/RacingStripe.tsx`
- Usage examples: `/RacingStripe-USAGE-EXAMPLES.tsx`
- Component exports: `/src/components/index.ts`
