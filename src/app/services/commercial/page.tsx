import type { Metadata } from "next";
import CommercialPageClient from "./CommercialPageClient";

export const metadata: Metadata = {
  title: "Commercial HVAC Toronto | 24/7 Business Heating & Cooling GTA",
  description: "Toronto's trusted commercial HVAC contractor. Office buildings, retail, restaurants, warehouses. VRF systems, rooftop units, building automation. 15+ years. Call (647) 704-1780",
  keywords: [
    // High-Volume Primary Keywords
    "commercial HVAC Toronto",
    "commercial HVAC near me",
    "commercial heating Toronto",
    "commercial air conditioning Toronto",
    "commercial HVAC contractor Toronto",

    // Business Type Keywords
    "office HVAC Toronto",
    "office building HVAC services",
    "retail HVAC services Toronto",
    "restaurant HVAC Toronto",
    "warehouse HVAC Toronto",
    "industrial HVAC Toronto",
    "store HVAC services GTA",
    "plaza HVAC maintenance",

    // Equipment Keywords
    "VRF system Toronto",
    "VRF installation Toronto",
    "rooftop HVAC units Toronto",
    "RTU installation Toronto",
    "rooftop unit repair Toronto",
    "building automation Toronto",
    "BAS installation Toronto",
    "commercial heat pump Toronto",
    "packaged HVAC units",

    // Service Keywords
    "commercial HVAC maintenance Toronto",
    "commercial HVAC repair Toronto",
    "commercial AC repair Toronto",
    "commercial furnace repair",
    "commercial HVAC installation",
    "preventive maintenance HVAC",
    "HVAC service contract Toronto",

    // GTA Location Keywords
    "commercial HVAC Mississauga",
    "commercial HVAC Brampton",
    "commercial HVAC Vaughan",
    "commercial HVAC North York",
    "commercial HVAC Scarborough",
    "business HVAC Etobicoke",
    "commercial HVAC Markham"
  ],
  openGraph: {
    title: "Commercial HVAC Toronto | Expert Business Climate Solutions",
    description: "Expert commercial HVAC services for Toronto businesses. Office buildings, retail, restaurants. 24/7 service. Call (647) 704-1780",
    url: "https://callquantumhvac.com/services/commercial",
    images: ["/images/company/photo-1.jpg"],
  },
  alternates: {
    canonical: "https://callquantumhvac.com/services/commercial",
  },
};

export default function CommercialHVACPage() {
  return <CommercialPageClient />;
}
