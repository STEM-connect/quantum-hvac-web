# RacingStripe Component - Quick Reference

## Location
```
/Users/padamsandhu/Github/quantum-hvac-web/src/components/RacingStripe.tsx
```

## Import
```typescript
import { RacingStripe } from '@/components';
```

## Basic Usage
```tsx
<RacingStripe />
```

## Props

| Prop | Type | Default | Example |
|------|------|---------|---------|
| `height` | string | "4px" | `height="8px"` |
| `variant` | 'horizontal' \| 'vertical' | 'horizontal' | `variant="vertical"` |
| `className` | string | - | `className="rounded-full"` |

## Common Patterns

### Default (Horizontal, 4px)
```tsx
<RacingStripe />
```

### Thick Divider
```tsx
<RacingStripe height="8px" />
```

### Vertical Accent
```tsx
<RacingStripe variant="vertical" height="300px" />
```

### Rounded Stripe
```tsx
<RacingStripe height="5px" className="rounded-full" />
```

### With Shadow
```tsx
<RacingStripe height="6px" className="shadow-lg" />
```

### Section Separator
```tsx
<section>Content 1</section>
<RacingStripe />
<section>Content 2</section>
```

### Card Accent
```tsx
<div className="border rounded-lg overflow-hidden">
  <RacingStripe variant="vertical" height="8px" className="flex-shrink-0" />
  <div className="flex-1 p-6">Card content</div>
</div>
```

## Colors

- **Blue**: #0066CC (Quantum Blue)
- **Red**: #E63946 (Quantum Red)
- **Cyan**: #00BCD4 (Quantum Cyan)

## Features

✓ Horizontal and vertical variants
✓ Customizable height/width
✓ Smooth hover animations
✓ Accessible (aria-hidden)
✓ TypeScript support
✓ Ref forwarding
✓ No dependencies
✓ ~2KB minified

## Documentation Files

| File | Purpose |
|------|---------|
| `/RACING-STRIPE-DOCS.md` | Complete documentation |
| `/RacingStripe-USAGE-EXAMPLES.tsx` | 10 usage examples |
| `/RACING-STRIPE-DEMO-PAGE.tsx` | Interactive demo |
| `/RACING-STRIPE-SUMMARY.md` | Implementation summary |

## Height Presets

- **2px**: `height="2px"` - Subtle
- **4px**: `height="4px"` - Default
- **6px**: `height="6px"` - Standard
- **8px**: `height="8px"` - Prominent
- **16px**: `height="16px"` - Bold

## Tips

1. Use default 4px for most section dividers
2. Use 6-8px for featured sections
3. Use 2px for subtle accents
4. Combine variants for unique layouts
5. Add className for custom styling

## Example Page

To create a demo page:

```tsx
'use client';

import { RacingStripe } from '@/components';

export default function Page() {
  return (
    <div>
      <section className="py-12">
        <h1>Section 1</h1>
      </section>

      <RacingStripe height="6px" />

      <section className="py-12">
        <h1>Section 2</h1>
      </section>
    </div>
  );
}
```

## Browser Support

✓ Chrome/Edge
✓ Firefox
✓ Safari
✓ Mobile browsers

## Performance

- 4 DOM elements total
- CSS-only animations
- No JavaScript transitions
- GPU accelerated
- ~2KB minified size

## Accessibility

- Marked as presentational
- Hidden from screen readers
- No interactive elements
- Semantic HTML

---

**Need more info?** See `/RACING-STRIPE-DOCS.md`
