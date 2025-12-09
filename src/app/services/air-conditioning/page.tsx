import type { Metadata } from "next";
import AirConditioningPageClient from "./AirConditioningPageClient";

export const metadata: Metadata = {
  title: "AC Repair Toronto | 24/7 Emergency Air Conditioning Service GTA",
  description: "Toronto's #1 AC repair & air conditioning services. AC not cooling? Same-day repair! Central air, ductless mini-split experts. 15+ years experience. Emergency: (647) 704-1780",
  keywords: [
    // High-Volume Primary Keywords
    "AC repair Toronto",
    "AC repair near me",
    "air conditioning Toronto",
    "air conditioning repair Toronto",
    "AC installation Toronto",
    "air conditioner repair near me",

    // Emergency & High-Intent Keywords
    "emergency AC repair Toronto",
    "AC not cooling Toronto",
    "AC not working Toronto",
    "24 hour AC repair Toronto",
    "same day AC repair Toronto",
    "AC stopped working",
    "air conditioner not cooling",

    // Service-Specific Keywords
    "central air conditioning Toronto",
    "central air installation Toronto",
    "ductless AC Toronto",
    "ductless mini split Toronto",
    "mini split installation Toronto",
    "AC unit installation Toronto",
    "AC tune up Toronto",
    "AC maintenance Toronto",
    "AC replacement Toronto",
    "air conditioning service Toronto",

    // Question-Based Keywords
    "how much does AC repair cost Toronto",
    "AC repair cost Toronto",
    "best AC repair Toronto",
    "air conditioning companies near me",

    // GTA Location Keywords
    "AC repair Mississauga",
    "AC repair Brampton",
    "AC repair Vaughan",
    "AC repair Markham",
    "AC repair North York",
    "AC repair Scarborough",
    "air conditioning Etobicoke",
    "AC repair Oakville",
    "AC installation Richmond Hill"
  ],
  openGraph: {
    title: "AC Repair & Air Conditioning Toronto | Expert Cooling Services",
    description: "Expert AC repair, air conditioning installation & maintenance in Toronto & GTA. 24/7 emergency service. Call (647) 704-1780",
    url: "https://callquantumhvac.com/services/air-conditioning",
    images: ["/images/company/photo-3.jpg"],
  },
  alternates: {
    canonical: "https://callquantumhvac.com/services/air-conditioning",
  },
};

export default function AirConditioningPage() {
  return <AirConditioningPageClient />;
}
