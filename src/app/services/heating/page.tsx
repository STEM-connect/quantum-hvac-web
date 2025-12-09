import type { Metadata } from "next";
import HeatingPageClient from "./HeatingPageClient";

export const metadata: Metadata = {
  title: "Furnace Repair Toronto | 24/7 Emergency Heating Service GTA",
  description: "Toronto's #1 furnace repair & heating services. No heat? We fix furnaces same-day! Gas furnace, heat pump, boiler experts. 15+ years experience. Emergency: (647) 704-1780",
  keywords: [
    // High-Volume Primary Keywords
    "furnace repair Toronto",
    "furnace repair near me",
    "heating repair Toronto",
    "furnace installation Toronto",
    "heating services GTA",

    // Emergency & High-Intent Keywords
    "emergency furnace repair Toronto",
    "furnace not working Toronto",
    "no heat emergency Toronto",
    "24 hour furnace repair",
    "same day furnace repair Toronto",
    "furnace stopped working",
    "furnace won't turn on",

    // Service-Specific Keywords
    "gas furnace repair Toronto",
    "gas furnace installation Toronto",
    "high efficiency furnace Toronto",
    "heat pump installation Toronto",
    "heat pump repair Toronto",
    "boiler repair Toronto",
    "boiler installation Toronto",
    "furnace tune up Toronto",
    "furnace maintenance Toronto",
    "furnace replacement Toronto",

    // Question-Based Keywords
    "how much does furnace repair cost Toronto",
    "furnace repair cost Toronto",
    "best furnace repair Toronto",

    // GTA Location Keywords
    "furnace repair Mississauga",
    "furnace repair Brampton",
    "furnace repair Vaughan",
    "furnace repair Markham",
    "furnace repair North York",
    "furnace repair Scarborough",
    "heating repair Etobicoke",
    "furnace repair Oakville",
    "heating services Richmond Hill"
  ],
  openGraph: {
    title: "Furnace & Heating Repair Toronto | Expert Heating Services",
    description: "Expert furnace repair, heating installation & maintenance in Toronto & GTA. 24/7 emergency service. Call (647) 704-1780",
    url: "https://callquantumhvac.com/services/heating",
    images: ["/images/company/photo-1.jpg"],
  },
  alternates: {
    canonical: "https://callquantumhvac.com/services/heating",
  },
};

export default function HeatingPage() {
  return <HeatingPageClient />;
}
