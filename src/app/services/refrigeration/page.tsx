import type { Metadata } from "next";
import RefrigerationPageClient from "./RefrigerationPageClient";

export const metadata: Metadata = {
  title: "Commercial Refrigeration Toronto | 24/7 Walk-in Cooler Repair GTA",
  description: "Toronto's #1 commercial refrigeration experts. Walk-in coolers, freezers, display cases, ice machines. 24/7 emergency repair. Restaurants, supermarkets, stores. Call (647) 704-1780",
  keywords: [
    // High-Volume Primary Keywords
    "commercial refrigeration Toronto",
    "commercial refrigeration near me",
    "refrigeration repair Toronto",
    "walk-in cooler repair Toronto",
    "walk-in freezer repair Toronto",

    // Emergency & High-Intent Keywords
    "emergency refrigeration repair Toronto",
    "24 hour refrigeration repair",
    "walk-in cooler not cooling",
    "freezer not working Toronto",
    "refrigeration emergency GTA",

    // Equipment Keywords
    "walk-in cooler Toronto",
    "walk-in freezer Toronto",
    "display case repair Toronto",
    "reach-in cooler repair",
    "ice machine repair Toronto",
    "ice maker repair Toronto",
    "cold storage Toronto",
    "blast chiller repair",
    "commercial fridge repair Toronto",

    // Business Type Keywords
    "restaurant refrigeration Toronto",
    "restaurant cooler repair",
    "supermarket refrigeration Toronto",
    "grocery store refrigeration",
    "convenience store cooler repair",
    "bar refrigeration Toronto",
    "bakery refrigeration GTA",
    "food service refrigeration",

    // Service Keywords
    "refrigeration maintenance Toronto",
    "refrigeration installation Toronto",
    "cooler installation Toronto",
    "freezer installation GTA",
    "refrigeration service contract",

    // GTA Location Keywords
    "refrigeration repair Mississauga",
    "walk-in cooler repair Brampton",
    "refrigeration Vaughan",
    "commercial refrigeration North York",
    "refrigeration repair Scarborough"
  ],
  openGraph: {
    title: "Commercial Refrigeration Toronto | Expert Cold Storage Solutions",
    description: "Expert commercial refrigeration services in Toronto. Walk-in coolers, freezers, display cases. 24/7 emergency. Call (647) 704-1780",
    url: "https://callquantumhvac.com/services/refrigeration",
    images: ["/images/company/photo-4.jpg"],
  },
  alternates: {
    canonical: "https://callquantumhvac.com/services/refrigeration",
  },
};

export default function RefrigerationPage() {
  return <RefrigerationPageClient />;
}
