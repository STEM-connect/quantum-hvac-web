import type { Metadata } from "next";
import ResidentialPageClient from "./ResidentialPageClient";

export const metadata: Metadata = {
  title: "Residential HVAC Toronto | Home Heating & AC Services GTA",
  description: "Toronto's trusted home HVAC experts. Furnace repair, AC installation, heat pumps, ductless mini-splits. Family-owned, 15+ years. Same-day service. Call (647) 704-1780",
  keywords: [
    // High-Volume Primary Keywords
    "residential HVAC Toronto",
    "HVAC near me",
    "home heating Toronto",
    "home air conditioning Toronto",
    "home HVAC services GTA",

    // Service Keywords
    "furnace repair Toronto",
    "AC repair Toronto",
    "AC installation Toronto",
    "furnace installation Toronto",
    "heating and cooling Toronto",
    "home heating repair",
    "home AC repair",
    "residential heating repair",
    "home cooling services",

    // Equipment Keywords
    "heat pump Toronto",
    "heat pump installation Toronto",
    "ductless mini split Toronto",
    "ductless AC installation",
    "central air conditioning Toronto",
    "high efficiency furnace Toronto",
    "smart thermostat installation",
    "air purifier installation",
    "humidifier installation Toronto",

    // Seasonal Keywords
    "furnace tune up Toronto",
    "AC tune up Toronto",
    "HVAC maintenance Toronto",
    "seasonal HVAC service",
    "fall furnace checkup",
    "spring AC checkup",

    // Trust Keywords
    "HVAC contractor Toronto",
    "licensed HVAC Toronto",
    "home comfort systems",
    "energy efficient HVAC",
    "HVAC rebates Toronto",

    // GTA Location Keywords
    "residential HVAC Mississauga",
    "home heating Brampton",
    "home AC Vaughan",
    "residential HVAC Markham",
    "home HVAC North York",
    "residential heating Scarborough",
    "home cooling Etobicoke"
  ],
  openGraph: {
    title: "Residential HVAC Toronto | Expert Home Comfort Solutions",
    description: "Expert residential HVAC services for Toronto homes. Furnace, AC, heat pumps, ductless systems. Family-owned. Call (647) 704-1780",
    url: "https://callquantumhvac.com/services/residential",
    images: ["/images/company/photo-3.jpg"],
  },
  alternates: {
    canonical: "https://callquantumhvac.com/services/residential",
  },
};

export default function ResidentialPage() {
  return <ResidentialPageClient />;
}
