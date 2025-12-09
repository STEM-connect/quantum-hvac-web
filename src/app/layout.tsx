import { TempoInit } from "./tempo-init";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quantum HVAC System Inc. - Where Passion Meets Dedication",
  description:
    "Professional Heating, Air Conditioning & Refrigeration services for Industrial, Commercial, Institutional & Environmental applications. 24/7 Emergency Service. Call 647.704.1780",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
