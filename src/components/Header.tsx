import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="https://api.dicebear.com/7.x/initials/svg?seed=QH&backgroundColor=0284c7&fontSize=36&fontFamily=Arial&chars=2"
              alt="Quantum HVAC System Inc."
              width={150}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/testimonials"
            className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors"
          >
            Testimonials
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="outline" className="hidden sm:flex">
            Request a Quote
          </Button>
          <Button className="hidden sm:flex">Schedule Service</Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
}
