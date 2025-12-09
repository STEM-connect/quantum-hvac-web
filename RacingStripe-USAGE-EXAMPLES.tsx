/**
 * RacingStripe Component - Usage Examples
 *
 * This file demonstrates various ways to use the RacingStripe component
 * throughout your application.
 */

import { RacingStripe } from "@/components";

/**
 * Example 1: Default Horizontal Stripe
 * Uses default height (4px) and horizontal orientation
 * Perfect for simple section dividers
 */
export function Example1_DefaultStripe() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Section One</h2>
        <p>Your content here...</p>
      </section>

      <RacingStripe />

      <section>
        <h2 className="text-2xl font-bold mb-4">Section Two</h2>
        <p>More content here...</p>
      </section>
    </div>
  );
}

/**
 * Example 2: Custom Height Horizontal Stripe
 * Thicker stripe for more visual impact
 */
export function Example2_ThickStripe() {
  return (
    <div className="space-y-8">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Featured Section</h2>
        <p>This section has a prominent divider...</p>
      </section>

      <RacingStripe height="8px" />

      <section>
        <h2 className="text-2xl font-bold mb-4">Next Section</h2>
        <p>Separated by a thicker stripe</p>
      </section>
    </div>
  );
}

/**
 * Example 3: Vertical Stripe for Sidebar
 * Creates a vertical accent stripe
 */
export function Example3_VerticalStripe() {
  return (
    <div className="flex gap-8">
      <RacingStripe variant="vertical" height="300px" className="flex-shrink-0" />

      <div>
        <h2 className="text-2xl font-bold mb-4">Main Content</h2>
        <p>Content with vertical accent stripe on the left...</p>
      </div>
    </div>
  );
}

/**
 * Example 4: Hero Section with Racing Stripe
 * Use as a visual separator in hero areas
 */
export function Example4_HeroSectionUsage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-slate-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to Quantum HVAC</h1>
          <p className="text-xl text-slate-600">
            Professional heating and cooling solutions
          </p>
        </div>
      </section>

      <RacingStripe height="6px" />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Our Services</h2>
          <p>Service details go here...</p>
        </div>
      </section>
    </div>
  );
}

/**
 * Example 5: Multiple Stripes with Spacing
 * Create visual hierarchy with multiple dividers
 */
export function Example5_MultipleStripes() {
  return (
    <div className="space-y-0">
      <section className="py-16 bg-white">
        <h2>Section 1</h2>
      </section>
      <RacingStripe height="4px" />

      <section className="py-16 bg-slate-50">
        <h2>Section 2</h2>
      </section>
      <RacingStripe height="4px" />

      <section className="py-16 bg-white">
        <h2>Section 3</h2>
      </section>
      <RacingStripe height="4px" />

      <section className="py-16 bg-slate-50">
        <h2>Section 4</h2>
      </section>
    </div>
  );
}

/**
 * Example 6: Stripe with Custom Styling
 * Add additional CSS classes for custom positioning
 */
export function Example6_CustomStyling() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Primary Content</h2>
        <p>Content with rounded stripe divider...</p>
      </section>

      <RacingStripe height="5px" className="rounded-full shadow-lg" />

      <section>
        <h2 className="text-2xl font-bold mb-4">Secondary Content</h2>
        <p>Separated by a styled racing stripe</p>
      </section>
    </div>
  );
}

/**
 * Example 7: Services Grid with Stripe Separator
 * Common use case for separating service sections
 */
export function Example7_ServicesWithStripe() {
  return (
    <div>
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg">
            <h3 className="font-bold mb-2">Installation</h3>
            <p>Professional HVAC system installation</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="font-bold mb-2">Maintenance</h3>
            <p>Regular maintenance and inspections</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="font-bold mb-2">Repair</h3>
            <p>24/7 emergency repair services</p>
          </div>
        </div>
      </section>

      <RacingStripe height="6px" />

      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>
        <ul className="space-y-4">
          <li>Licensed and insured technicians</li>
          <li>Competitive pricing</li>
          <li>Same-day service available</li>
        </ul>
      </section>
    </div>
  );
}

/**
 * Example 8: Card Layout with Vertical Accent
 * Use vertical stripe as a left accent on cards
 */
export function Example8_CardWithVerticalAccent() {
  return (
    <div className="grid grid-cols-2 gap-6">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex border rounded-lg overflow-hidden">
          <RacingStripe
            variant="vertical"
            height="8px"
            className="flex-shrink-0"
          />
          <div className="flex-1 p-6">
            <h3 className="font-bold mb-2">Card {i}</h3>
            <p>Card content with vertical accent stripe</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * Example 9: Footer with Top Stripe
 * Common pattern for footer separation
 */
export function Example9_FooterWithStripe() {
  return (
    <div>
      <main className="min-h-screen">
        {/* Main content */}
      </main>

      <RacingStripe height="4px" />

      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            </div>
            {/* More footer content */}
          </div>
          <div className="border-t border-slate-700 pt-8 text-sm text-slate-400">
            <p>&copy; 2024 Quantum HVAC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/**
 * Example 10: Animated Section Transitions
 * Use stripe as part of smooth section transitions
 */
export function Example10_AnimatedTransitions() {
  return (
    <div className="space-y-0">
      <section className="py-20 bg-gradient-to-b from-blue-50 to-transparent">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Welcome</h2>
          <p>Opening section with gradient</p>
        </div>
      </section>

      {/* Racing stripe creates visual break */}
      <RacingStripe height="5px" className="shadow-md" />

      <section className="py-20 bg-gradient-to-b from-transparent to-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Next Section</h2>
          <p>Content flows smoothly after the stripe</p>
        </div>
      </section>
    </div>
  );
}

/**
 * Component Props Reference:
 *
 * interface RacingStripeProps {
 *   height?: string;                    // Default: "4px"
 *   variant?: 'horizontal' | 'vertical' // Default: "horizontal"
 *   className?: string;                 // Additional CSS classes
 * }
 *
 * Features:
 * - Quantum Blue (#0066CC)
 * - Quantum Red (#E63946)
 * - Quantum Cyan (#00BCD4)
 *
 * Each section has:
 * - Subtle gradient for depth
 * - Hover shadow effect
 * - Smooth transition animations
 * - Inset shadow for 3D appearance
 */

/**
 * Import and Use in Your Pages:
 *
 * import { RacingStripe } from "@/components";
 *
 * export default function MyPage() {
 *   return (
 *     <div>
 *       <SectionOne />
 *       <RacingStripe />
 *       <SectionTwo />
 *     </div>
 *   );
 * }
 */
