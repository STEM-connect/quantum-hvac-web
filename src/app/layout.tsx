import { TempoInit } from "./tempo-init";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://callquantumhvac.com'),
  title: {
    default: "Quantum HVAC Toronto | #1 Heating & Cooling Services in GTA | 24/7 Emergency",
    template: "%s | Quantum HVAC Toronto"
  },
  description: "Toronto's trusted HVAC contractor for 15+ years. Expert heating, air conditioning, furnace repair, AC installation & refrigeration services. Serving Toronto, Mississauga, Brampton, Vaughan & GTA. 24/7 Emergency: (647) 704-1780",
  keywords: [
    // Primary High-Volume Keywords
    "HVAC Toronto",
    "furnace repair Toronto",
    "AC repair Toronto",
    "furnace repair near me",
    "AC repair near me",
    "HVAC companies near me",
    "heating and cooling near me",
    "HVAC repair near me",

    // Service Keywords
    "HVAC contractor Toronto",
    "heating and cooling Toronto",
    "air conditioning Toronto",
    "HVAC installation Toronto",
    "furnace installation Toronto",
    "AC installation Toronto",
    "furnace replacement Toronto",
    "air conditioning repair Toronto",
    "heating repair Toronto",

    // Emergency Keywords (High Intent)
    "emergency HVAC Toronto",
    "emergency furnace repair Toronto",
    "emergency AC repair Toronto",
    "24 hour furnace repair Toronto",
    "24/7 HVAC service Toronto",
    "same day AC repair Toronto",
    "furnace not working Toronto",
    "no heat emergency Toronto",
    "AC not cooling Toronto",

    // Commercial & Refrigeration
    "commercial HVAC Toronto",
    "commercial refrigeration Toronto",
    "walk-in cooler repair Toronto",
    "walk-in freezer repair Toronto",
    "restaurant refrigeration GTA",
    "ice machine repair Toronto",

    // Residential Keywords
    "residential HVAC Toronto",
    "home heating Toronto",
    "home AC repair Toronto",
    "HVAC maintenance Toronto",
    "furnace tune up Toronto",
    "AC tune up Toronto",

    // Equipment Keywords
    "heat pump Toronto",
    "heat pump installation Toronto",
    "ductless AC Toronto",
    "ductless mini split Toronto",
    "central air installation Toronto",
    "high efficiency furnace Toronto",
    "VRF system Toronto",
    "rooftop HVAC Toronto",

    // GTA Cities
    "HVAC Mississauga",
    "furnace repair Mississauga",
    "AC repair Mississauga",
    "HVAC Brampton",
    "furnace repair Brampton",
    "HVAC Vaughan",
    "heating repair Vaughan",
    "HVAC Markham",
    "air conditioning Markham",
    "HVAC Scarborough",
    "HVAC North York",
    "furnace installation North York",
    "HVAC Etobicoke",
    "HVAC Oakville",
    "heating and cooling Oakville",
    "HVAC Richmond Hill",
    "HVAC services GTA"
  ],
  authors: [{ name: "Quantum HVAC System Inc." }],
  creator: "Quantum HVAC System Inc.",
  publisher: "Quantum HVAC System Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://callquantumhvac.com",
    siteName: "Quantum HVAC System Inc.",
    title: "Quantum HVAC Toronto | #1 Heating & Cooling Services in GTA",
    description: "Toronto's trusted HVAC contractor for 15+ years. Expert heating, air conditioning, furnace repair & refrigeration. 24/7 Emergency Service. Call (647) 704-1780",
    images: [
      {
        url: "/images/company/photo-1.jpg",
        width: 1200,
        height: 630,
        alt: "Quantum HVAC System Inc. - Professional HVAC Services in Toronto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantum HVAC Toronto | #1 Heating & Cooling Services",
    description: "Toronto's trusted HVAC contractor. Expert heating, AC, furnace repair & refrigeration. 24/7 Emergency: (647) 704-1780",
    images: ["/images/company/photo-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://callquantumhvac.com",
  },
  category: "HVAC Services",
};

// JSON-LD Structured Data for Local Business
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://callquantumhvac.com/#organization",
      "name": "Quantum HVAC System Inc.",
      "alternateName": "Quantum HVAC",
      "url": "https://callquantumhvac.com",
      "logo": "https://callquantumhvac.com/quantum-logo.svg",
      "image": "https://callquantumhvac.com/images/company/photo-1.jpg",
      "description": "Professional HVAC contractor serving Toronto and GTA. Expert heating, air conditioning, refrigeration, and ventilation services for residential and commercial properties.",
      "telephone": "+1-647-704-1780",
      "email": "vivek@quantummechanical.co",
      "foundingDate": "2009",
      "priceRange": "$$",
      "currenciesAccepted": "CAD",
      "paymentAccepted": "Cash, Credit Card, Debit Card, Financing",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Toronto",
        "addressLocality": "Toronto",
        "addressRegion": "ON",
        "postalCode": "",
        "addressCountry": "CA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 43.6532,
        "longitude": -79.3832
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Toronto",
          "sameAs": "https://en.wikipedia.org/wiki/Toronto"
        },
        {
          "@type": "City",
          "name": "Mississauga"
        },
        {
          "@type": "City",
          "name": "Brampton"
        },
        {
          "@type": "City",
          "name": "Vaughan"
        },
        {
          "@type": "City",
          "name": "Markham"
        },
        {
          "@type": "City",
          "name": "Richmond Hill"
        },
        {
          "@type": "City",
          "name": "Oakville"
        },
        {
          "@type": "City",
          "name": "Burlington"
        },
        {
          "@type": "City",
          "name": "Scarborough"
        },
        {
          "@type": "City",
          "name": "North York"
        },
        {
          "@type": "City",
          "name": "Etobicoke"
        },
        {
          "@type": "City",
          "name": "Milton"
        }
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday"],
          "opens": "09:00",
          "closes": "14:00"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "HVAC Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Furnace Repair Toronto",
              "description": "Expert furnace repair and maintenance services in Toronto and GTA"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Air Conditioning Installation Toronto",
              "description": "Professional AC installation and replacement services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Commercial HVAC Toronto",
              "description": "Commercial heating and cooling solutions for businesses"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "24/7 Emergency HVAC Repair",
              "description": "Round-the-clock emergency heating and cooling repair services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Commercial Refrigeration Toronto",
              "description": "Walk-in cooler, freezer, and refrigeration services"
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1000",
        "bestRating": "5",
        "worstRating": "1"
      },
      "sameAs": [
        "https://www.facebook.com/quantumhvac",
        "https://www.instagram.com/quantumhvac",
        "https://www.linkedin.com/company/quantum-hvac"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://callquantumhvac.com/#website",
      "url": "https://callquantumhvac.com",
      "name": "Quantum HVAC System Inc.",
      "description": "Professional HVAC Services in Toronto and GTA",
      "publisher": {
        "@id": "https://callquantumhvac.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://callquantumhvac.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "HVACBusiness",
      "@id": "https://callquantumhvac.com/#hvacbusiness",
      "name": "Quantum HVAC System Inc.",
      "url": "https://callquantumhvac.com",
      "telephone": "+1-647-704-1780",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Toronto",
        "addressRegion": "ON",
        "addressCountry": "CA"
      },
      "serviceType": [
        "HVAC Installation",
        "HVAC Repair",
        "Furnace Repair",
        "Air Conditioning Repair",
        "Heating Services",
        "Cooling Services",
        "Commercial Refrigeration",
        "Ventilation Services",
        "Heat Pump Installation",
        "Ductless Mini Split Installation"
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Toronto" />
        <meta name="geo.position" content="43.6532;-79.3832" />
        <meta name="ICBM" content="43.6532, -79.3832" />
      </head>
      <Script src="https://api.tempolabs.ai/proxy-asset?url=https://storage.googleapis.com/tempo-public-assets/error-handling.js" />
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <TempoInit />
      </body>
    </html>
  );
}
