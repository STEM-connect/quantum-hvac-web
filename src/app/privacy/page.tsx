import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Shield, Lock, Eye, FileText, Mail } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Quantum HVAC System Inc.",
  description: "Learn how Quantum HVAC protects your personal information and respects your privacy.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-quantum-blue to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <Shield className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl">
            Your privacy is important to us. Learn how we collect, use, and protect your personal information.
          </p>
          <p className="text-sm text-blue-200 mt-4">
            Last Updated: October 31, 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FileText className="w-8 h-8 text-quantum-blue" />
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Quantum HVAC System Inc. ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Eye className="w-8 h-8 text-quantum-blue" />
              Information We Collect
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Personal Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Request a quote for HVAC services</li>
              <li>Schedule an appointment</li>
              <li>Contact us through our website</li>
              <li>Subscribe to our newsletter</li>
              <li>Participate in surveys or promotions</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              This information may include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Name and contact information (email address, phone number, mailing address)</li>
              <li>Property information (address, type of property, HVAC system details)</li>
              <li>Service preferences and requirements</li>
              <li>Payment information (processed securely through third-party payment processors)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Automatically Collected Information</h3>
            <p className="text-gray-700 leading-relaxed">
              When you visit our website, we may automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on each page</li>
              <li>Referring website</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Provide, maintain, and improve our HVAC services</li>
              <li>Process and fulfill your service requests</li>
              <li>Communicate with you about appointments, quotes, and services</li>
              <li>Send you updates, newsletters, and marketing communications (with your consent)</li>
              <li>Respond to your inquiries and customer service requests</li>
              <li>Analyze website usage and improve user experience</li>
              <li>Detect and prevent fraud and security issues</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell your personal information. We may share your information with:
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Service Providers</h3>
            <p className="text-gray-700 leading-relaxed">
              Third-party vendors who perform services on our behalf, such as:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Email service providers</li>
              <li>Payment processors</li>
              <li>Website hosting and analytics providers</li>
              <li>Customer relationship management (CRM) systems</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Legal Requirements</h3>
            <p className="text-gray-700 leading-relaxed">
              We may disclose your information if required by law or in response to valid requests by public authorities.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Business Transfers</h3>
            <p className="text-gray-700 leading-relaxed">
              If Quantum HVAC is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
            </p>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Lock className="w-8 h-8 text-quantum-blue" />
              Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Privacy Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
              <li><strong>Data Portability:</strong> Request transfer of your data to another service provider</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          {/* Cookies */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 leading-relaxed">
              We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small files stored on your device that help us:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-4">
              <li>Remember your preferences</li>
              <li>Understand how you use our website</li>
              <li>Improve website functionality</li>
              <li>Deliver personalized content</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              You can control cookies through your browser settings. However, disabling cookies may affect your ability to use certain features of our website.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          {/* Third-Party Links */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </section>

          {/* Changes to Policy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of our services after any modifications indicates your acceptance of the updated policy.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Mail className="w-8 h-8 text-quantum-blue" />
              Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-blue-50 border-l-4 border-quantum-blue p-6 rounded-r-lg">
              <p className="font-semibold text-gray-900 mb-3">Quantum HVAC System Inc.</p>
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong> <a href="tel:6477041780" className="text-quantum-blue hover:underline">(647) 704-1780</a>
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> <a href="mailto:info@callquantumhvac.com" className="text-quantum-blue hover:underline">info@callquantumhvac.com</a>
              </p>
              <p className="text-gray-700">
                <strong>Website:</strong> <a href="https://www.callquantumhvac.com" className="text-quantum-blue hover:underline">www.callquantumhvac.com</a>
              </p>
            </div>
          </section>

          {/* Compliance */}
          <section className="border-t pt-8">
            <p className="text-sm text-gray-600 leading-relaxed">
              This Privacy Policy complies with applicable Canadian privacy laws, including the Personal Information Protection and Electronic Documents Act (PIPEDA), and international regulations such as the General Data Protection Regulation (GDPR) where applicable.
            </p>
          </section>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link href="/quote">
              <Button
                size="lg"
                className="bg-quantum-blue hover:bg-blue-700 text-white px-8 py-6 text-lg"
              >
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
