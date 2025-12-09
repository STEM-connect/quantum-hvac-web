# RacingStripe Component - Code Snippets

Copy and paste ready code examples for common use cases.

## Basic Import

```typescript
import { RacingStripe } from '@/components';
```

## Minimal Example

```tsx
export default function Page() {
  return <RacingStripe />;
}
```

## Section Divider

```tsx
export default function Page() {
  return (
    <div>
      <section className="py-12">
        <h1>Section 1</h1>
        <p>Your content here...</p>
      </section>

      <RacingStripe />

      <section className="py-12">
        <h1>Section 2</h1>
        <p>More content here...</p>
      </section>
    </div>
  );
}
```

## Multiple Sections

```tsx
export default function Page() {
  return (
    <div className="space-y-0">
      <section className="py-12 bg-white">
        <h1>Welcome</h1>
      </section>
      <RacingStripe />

      <section className="py-12 bg-slate-50">
        <h1>Services</h1>
      </section>
      <RacingStripe />

      <section className="py-12 bg-white">
        <h1>Contact</h1>
      </section>
    </div>
  );
}
```

## Custom Heights

```tsx
// Subtle divider
<RacingStripe height="2px" />

// Default (standard)
<RacingStripe height="4px" />

// Prominent divider
<RacingStripe height="8px" />

// Bold statement
<RacingStripe height="16px" />
```

## Vertical Variant

```tsx
export default function Page() {
  return (
    <div className="flex gap-8">
      <RacingStripe variant="vertical" height="300px" />
      <main className="flex-1">
        <h1>Main Content</h1>
        <p>Content with vertical accent stripe</p>
      </main>
    </div>
  );
}
```

## With Styling

```tsx
// Rounded corners
<RacingStripe height="5px" className="rounded-full" />

// With shadow
<RacingStripe height="6px" className="shadow-lg" />

// Combined
<RacingStripe
  height="6px"
  className="rounded-lg shadow-md"
/>

// With margins
<RacingStripe className="my-8" />
```

## Card Component

```tsx
export function Card({ title, description }: CardProps) {
  return (
    <div className="flex border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <RacingStripe
        variant="vertical"
        height="8px"
        className="flex-shrink-0"
      />
      <div className="flex-1 p-6">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
```

## Card Grid

```tsx
export default function CardGrid() {
  const items = [
    { id: 1, title: 'Service 1', description: 'Description' },
    { id: 2, title: 'Service 2', description: 'Description' },
    { id: 3, title: 'Service 3', description: 'Description' },
    { id: 4, title: 'Service 4', description: 'Description' },
  ];

  return (
    <div className="grid grid-cols-2 gap-6">
      {items.map((item) => (
        <Card key={item.id} title={item.title} description={item.description} />
      ))}
    </div>
  );
}

function Card({ title, description }: any) {
  return (
    <div className="flex border rounded-lg overflow-hidden">
      <RacingStripe variant="vertical" height="6px" className="flex-shrink-0" />
      <div className="flex-1 p-6">
        <h3 className="font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
```

## Hero Section

```tsx
export default function HeroWithStripe() {
  return (
    <div>
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Welcome</h1>
          <p className="text-xl text-gray-600">
            Professional HVAC solutions
          </p>
        </div>
      </section>

      <RacingStripe height="6px" className="shadow-md" />

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600">Service descriptions...</p>
        </div>
      </section>
    </div>
  );
}
```

## With React Hook (Ref)

```tsx
import { useRef } from 'react';
import { RacingStripe } from '@/components';

export default function Page() {
  const stripeRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (stripeRef.current) {
      console.log('Stripe element:', stripeRef.current);
      // Do something with the ref
    }
  };

  return (
    <div>
      <RacingStripe ref={stripeRef} height="6px" />
      <button onClick={handleClick}>Check Stripe</button>
    </div>
  );
}
```

## Responsive Layout

```tsx
export default function ResponsiveLayout() {
  return (
    <div className="space-y-0">
      {/* Desktop: Side by side with vertical stripe */}
      <div className="hidden md:flex gap-8">
        <RacingStripe variant="vertical" height="400px" className="flex-shrink-0" />
        <main className="flex-1 py-12">Main content</main>
      </div>

      {/* Mobile: Horizontal stripe */}
      <div className="md:hidden space-y-4">
        <section>Section 1</section>
        <RacingStripe />
        <section>Section 2</section>
      </div>
    </div>
  );
}
```

## With Animation Wrapper

```tsx
'use client';

import { motion } from 'framer-motion';
import { RacingStripe } from '@/components';

export default function AnimatedSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="py-12">
        <h1>Section 1</h1>
      </section>

      <RacingStripe />

      <section className="py-12">
        <h1>Section 2</h1>
      </section>
    </motion.div>
  );
}
```

## Services List

```tsx
export function ServicesList() {
  const services = [
    { id: 1, name: 'Installation', icon: '⚙️' },
    { id: 2, name: 'Maintenance', icon: '🔧' },
    { id: 3, name: 'Repair', icon: '🛠️' },
  ];

  return (
    <div className="space-y-0">
      {services.map((service, index) => (
        <div key={service.id}>
          <div className="py-8 px-4">
            <div className="text-3xl mb-2">{service.icon}</div>
            <h3 className="text-xl font-bold">{service.name}</h3>
            <p className="text-gray-600">Service description here...</p>
          </div>
          {index < services.length - 1 && <RacingStripe />}
        </div>
      ))}
    </div>
  );
}
```

## Feature Grid with Stripes

```tsx
export default function FeaturesWithStripes() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-8">
        <feature feature1 />
        <feature feature2 />
      </div>

      <RacingStripe height="6px" className="my-8" />

      <div className="grid grid-cols-2 gap-8">
        <feature feature3 />
        <feature feature4 />
      </div>
    </div>
  );
}

function feature({ title, description }: any) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
```

## Footer with Top Border

```tsx
export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Page content */}
      </main>

      <RacingStripe height="4px" />

      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            </div>
            {/* More footer content */}
          </div>
          <div className="border-t border-gray-700 pt-8 text-sm text-gray-400">
            <p>&copy; 2024 Quantum HVAC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
```

## Blog Post Divider

```tsx
export default function BlogPost() {
  return (
    <article className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Blog Title</h1>
      <p className="text-gray-600 mb-8">Published on October 30, 2024</p>

      <RacingStripe height="2px" className="my-8" />

      <div className="prose prose-lg">
        <p>Blog content paragraph 1...</p>
        <p>Blog content paragraph 2...</p>

        <RacingStripe height="2px" className="my-8" />

        <h2>Section Heading</h2>
        <p>More blog content...</p>
      </div>
    </article>
  );
}
```

## Tab Content Divider

```tsx
'use client';

import { useState } from 'react';
import { RacingStripe } from '@/components';

export default function TabbedContent() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: 'Installation', content: 'Installation details...' },
    { label: 'Maintenance', content: 'Maintenance details...' },
    { label: 'Repair', content: 'Repair details...' },
  ];

  return (
    <div>
      <div className="flex border-b">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`px-4 py-2 font-bold ${
              activeTab === i
                ? 'border-b-2 border-blue-600'
                : ''
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <RacingStripe height="4px" />

      <div className="py-8">
        {tabs[activeTab].content}
      </div>
    </div>
  );
}
```

## Sidebar Layout

```tsx
export default function SidebarLayout() {
  return (
    <div className="flex gap-8">
      <aside className="w-64 flex-shrink-0">
        <nav className="space-y-2">
          <a href="#" className="block py-2 font-bold">Home</a>
          <a href="#" className="block py-2">Services</a>
          <a href="#" className="block py-2">Contact</a>
        </nav>

        <RacingStripe variant="vertical" height="300px" className="mt-8" />
      </aside>

      <main className="flex-1">
        <h1>Page Content</h1>
        <p>Main content goes here...</p>
      </main>
    </div>
  );
}
```

---

These snippets cover the most common use cases. Mix and match to create your unique layouts!
