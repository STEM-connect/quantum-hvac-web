/**
 * RacingStripe Component - Demo & Test Page
 *
 * This is a complete demo page showing the RacingStripe component
 * in action with all its variants and use cases.
 *
 * To use this:
 * 1. Create a new page at app/demo/racing-stripe/page.tsx
 * 2. Copy this content into that file
 * 3. Navigate to /demo/racing-stripe in your browser
 */

'use client';

import { RacingStripe } from '@/components';

export default function RacingStripeDemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">RacingStripe Component Demo</h1>
          <p className="text-slate-300">
            A reusable, decorative stripe component with Quantum brand colors
          </p>
        </div>
      </div>

      <RacingStripe height="6px" />

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Colors Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">
            Quantum Colors
          </h2>

          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-white border rounded-lg">
              <div className="h-20 rounded-lg mb-4" style={{ backgroundColor: '#0066CC' }} />
              <h3 className="font-bold text-lg mb-2">Quantum Blue</h3>
              <p className="text-slate-600">#0066CC</p>
              <p className="text-sm text-slate-500">Primary brand color</p>
            </div>

            <div className="p-6 bg-white border rounded-lg">
              <div className="h-20 rounded-lg mb-4" style={{ backgroundColor: '#E63946' }} />
              <h3 className="font-bold text-lg mb-2">Quantum Red</h3>
              <p className="text-slate-600">#E63946</p>
              <p className="text-sm text-slate-500">Accent and alerts</p>
            </div>

            <div className="p-6 bg-white border rounded-lg">
              <div className="h-20 rounded-lg mb-4" style={{ backgroundColor: '#00BCD4' }} />
              <h3 className="font-bold text-lg mb-2">Quantum Cyan</h3>
              <p className="text-slate-600">#00BCD4</p>
              <p className="text-sm text-slate-500">Modern accent</p>
            </div>
          </div>
        </section>

        <RacingStripe />

        {/* Default Usage Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">
            Default Usage
          </h2>

          <div className="bg-white border rounded-lg p-6 mb-4">
            <p className="text-slate-600 mb-4">
              Default horizontal stripe with 4px height
            </p>
            <RacingStripe />
          </div>

          <div className="bg-slate-100 p-4 rounded-lg font-mono text-sm">
            <code>{'<RacingStripe />'}</code>
          </div>
        </section>

        <RacingStripe />

        {/* Height Variants Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">
            Height Variants
          </h2>

          <div className="space-y-8">
            <div>
              <p className="text-slate-600 mb-3">2px (Subtle)</p>
              <RacingStripe height="2px" />
              <code className="text-sm text-slate-500 mt-2 block">
                {'<RacingStripe height="2px" />'}
              </code>
            </div>

            <div>
              <p className="text-slate-600 mb-3">4px (Standard/Default)</p>
              <RacingStripe height="4px" />
              <code className="text-sm text-slate-500 mt-2 block">
                {'<RacingStripe height="4px" />'}
              </code>
            </div>

            <div>
              <p className="text-slate-600 mb-3">8px (Prominent)</p>
              <RacingStripe height="8px" />
              <code className="text-sm text-slate-500 mt-2 block">
                {'<RacingStripe height="8px" />'}
              </code>
            </div>

            <div>
              <p className="text-slate-600 mb-3">16px (Bold)</p>
              <RacingStripe height="16px" />
              <code className="text-sm text-slate-500 mt-2 block">
                {'<RacingStripe height="16px" />'}
              </code>
            </div>
          </div>
        </section>

        <RacingStripe />

        {/* Vertical Variant Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">
            Vertical Variant
          </h2>

          <div className="bg-white border rounded-lg p-6 mb-4">
            <div className="flex gap-6">
              <div>
                <p className="text-slate-600 mb-4">Thin vertical stripe</p>
                <div className="flex gap-6 items-start" style={{ minHeight: '200px' }}>
                  <RacingStripe variant="vertical" height="4px" />
                  <p className="text-slate-700">
                    Content flows next to the vertical stripe accent
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-100 p-4 rounded-lg font-mono text-sm">
            <code>
              {
                '<RacingStripe variant="vertical" height="4px" />'
              }
            </code>
          </div>
        </section>

        <RacingStripe />

        {/* Styled Variants Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">
            Styled Variants
          </h2>

          <div className="space-y-8">
            <div>
              <p className="text-slate-600 mb-3">With rounded corners</p>
              <RacingStripe height="5px" className="rounded-full" />
              <code className="text-sm text-slate-500 mt-2 block">
                {'<RacingStripe height="5px" className="rounded-full" />'}
              </code>
            </div>

            <div>
              <p className="text-slate-600 mb-3">With shadow effect</p>
              <RacingStripe height="6px" className="shadow-lg" />
              <code className="text-sm text-slate-500 mt-2 block">
                {'<RacingStripe height="6px" className="shadow-lg" />'}
              </code>
            </div>

            <div>
              <p className="text-slate-600 mb-3">With combined styling</p>
              <RacingStripe height="6px" className="rounded-lg shadow-md" />
              <code className="text-sm text-slate-500 mt-2 block">
                {'<RacingStripe height="6px" className="rounded-lg shadow-md" />'}
              </code>
            </div>
          </div>
        </section>

        <RacingStripe />

        {/* Section Divider Usage */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">
            As Section Divider
          </h2>

          <div className="space-y-0">
            <section className="bg-gradient-to-b from-blue-50 to-transparent py-12 px-6 rounded-t-lg">
              <h3 className="text-2xl font-bold mb-2 text-slate-900">
                Services
              </h3>
              <p className="text-slate-600">
                Professional HVAC solutions for your home
              </p>
            </section>

            <RacingStripe height="5px" />

            <section className="bg-gradient-to-b from-transparent to-slate-50 py-12 px-6">
              <h3 className="text-2xl font-bold mb-2 text-slate-900">
                Why Choose Us
              </h3>
              <p className="text-slate-600">
                Years of experience and expert technicians
              </p>
            </section>

            <RacingStripe height="5px" />

            <section className="bg-white py-12 px-6 rounded-b-lg">
              <h3 className="text-2xl font-bold mb-2 text-slate-900">
                Contact Us
              </h3>
              <p className="text-slate-600">
                Get a free quote today
              </p>
            </section>
          </div>
        </section>

        <RacingStripe />

        {/* Card with Accent Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">
            Card with Vertical Accent
          </h2>

          <div className="grid grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <RacingStripe
                  variant="vertical"
                  height="6px"
                  className="flex-shrink-0"
                />
                <div className="flex-1 p-6">
                  <h3 className="font-bold text-lg mb-2 text-slate-900">
                    Service {i}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Professional service description with left accent stripe
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <RacingStripe />

        {/* Code Examples Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">
            Code Examples
          </h2>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-900 text-white p-6 rounded-lg font-mono text-sm">
              <p className="text-cyan-300 mb-3">Basic Import</p>
              <pre className="overflow-x-auto">{`import { RacingStripe } from '@/components';`}</pre>
            </div>

            <div className="bg-slate-900 text-white p-6 rounded-lg font-mono text-sm">
              <p className="text-cyan-300 mb-3">Simple Usage</p>
              <pre className="overflow-x-auto">{`<RacingStripe />`}</pre>
            </div>

            <div className="bg-slate-900 text-white p-6 rounded-lg font-mono text-sm">
              <p className="text-cyan-300 mb-3">Custom Height</p>
              <pre className="overflow-x-auto">{`<RacingStripe height="8px" />`}</pre>
            </div>

            <div className="bg-slate-900 text-white p-6 rounded-lg font-mono text-sm">
              <p className="text-cyan-300 mb-3">Vertical Variant</p>
              <pre className="overflow-x-auto">{`<RacingStripe variant="vertical" height="300px" />`}</pre>
            </div>

            <div className="bg-slate-900 text-white p-6 rounded-lg font-mono text-sm col-span-2">
              <p className="text-cyan-300 mb-3">With Styling</p>
              <pre className="overflow-x-auto">{`<RacingStripe height="6px" className="rounded-full shadow-lg" />`}</pre>
            </div>

            <div className="bg-slate-900 text-white p-6 rounded-lg font-mono text-sm col-span-2">
              <p className="text-cyan-300 mb-3">In Layout</p>
              <pre className="overflow-x-auto">{`<div>
  <Section1 />
  <RacingStripe />
  <Section2 />
</div>`}</pre>
            </div>
          </div>
        </section>

        <RacingStripe />

        {/* Props Reference Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">
            Props Reference
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-200">
                  <th className="border p-3 text-left font-bold">Prop</th>
                  <th className="border p-3 text-left font-bold">Type</th>
                  <th className="border p-3 text-left font-bold">Default</th>
                  <th className="border p-3 text-left font-bold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white hover:bg-slate-50">
                  <td className="border p-3 font-mono">height</td>
                  <td className="border p-3 font-mono">string</td>
                  <td className="border p-3 font-mono">"4px"</td>
                  <td className="border p-3">
                    Height for horizontal, width for vertical
                  </td>
                </tr>
                <tr className="bg-slate-50 hover:bg-slate-100">
                  <td className="border p-3 font-mono">variant</td>
                  <td className="border p-3 font-mono">
                    'horizontal' | 'vertical'
                  </td>
                  <td className="border p-3 font-mono">'horizontal'</td>
                  <td className="border p-3">Stripe orientation</td>
                </tr>
                <tr className="bg-white hover:bg-slate-50">
                  <td className="border p-3 font-mono">className</td>
                  <td className="border p-3 font-mono">string</td>
                  <td className="border p-3">undefined</td>
                  <td className="border p-3">
                    Additional Tailwind/CSS classes
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <RacingStripe height="8px" />

        {/* Footer */}
        <section className="mb-8 text-center">
          <p className="text-slate-600 mb-4">
            RacingStripe Component - Quantum HVAC Design System
          </p>
          <p className="text-sm text-slate-500">
            Location: /src/components/RacingStripe.tsx
          </p>
          <p className="text-sm text-slate-500">
            Documentation: /RACING-STRIPE-DOCS.md
          </p>
        </section>
      </main>
    </div>
  );
}
