"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-2xl max-h-[80vh] mx-4 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto max-h-[calc(80vh-80px)] text-gray-300 prose prose-invert prose-sm">
          {children}
        </div>
      </div>
    </div>
  );
}

function TermsOfServiceContent() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-400">Last updated: January 2026</p>

      <section>
        <h3 className="text-lg font-semibold text-white mb-2">
          1. Acceptance of Terms
        </h3>
        <p>
          By accessing and using Teacher Gamer's website and services, you agree
          to be bound by these Terms of Service. If you do not agree to these
          terms, please do not use our services.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-2">
          2. Description of Services
        </h3>
        <p>
          Teacher Gamer provides educational courses, workshops, and resources
          focused on game-based learning methodologies for educators. Our
          services include online courses, digital products, and consultation
          services.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-2">
          3. User Accounts
        </h3>
        <p>
          When you create an account with us, you must provide accurate and
          complete information. You are responsible for maintaining the
          confidentiality of your account credentials and for all activities
          that occur under your account.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-2">
          4. Intellectual Property
        </h3>
        <p>
          All content, including but not limited to courses, materials, graphics,
          and trademarks, are the property of Teacher Gamer and are protected by
          intellectual property laws. You may not reproduce, distribute, or
          create derivative works without our express written permission.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-2">
          5. Payment and Refunds
        </h3>
        <p>
          Payment for courses and products is due at the time of purchase. We
          offer refunds within 14 days of purchase if you are not satisfied with
          our services, provided you have not completed more than 25% of the
          course content.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-2">
          6. Limitation of Liability
        </h3>
        <p>
          Teacher Gamer shall not be liable for any indirect, incidental,
          special, consequential, or punitive damages resulting from your use of
          our services. Our total liability shall not exceed the amount paid by
          you for the services in question.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-2">
          7. Changes to Terms
        </h3>
        <p>
          We reserve the right to modify these terms at any time. We will notify
          users of significant changes via email or through our website.
          Continued use of our services after changes constitutes acceptance of
          the modified terms.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-2">
          8. Contact Information
        </h3>
        <p>
          If you have any questions about these Terms of Service, please contact
          us through our website's contact form.
        </p>
      </section>
    </div>
  );
}

function PrivacyPolicyContent() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-400">Last updated: January 2026</p>

      <section>
        <h3 className="text-lg font-semibold text-white mb-2">
          1. Information We Collect
        </h3>
        <p>
          We collect information you provide directly to us, including name,
          email address, and payment information when you register for courses
          or make purchases. We also collect usage data automatically through
          cookies and similar technologies.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-2">
          2. How We Use Your Information
        </h3>
        <p>We use the information we collect to:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Provide, maintain, and improve our services</li>
          <li>Process transactions and send related information</li>
          <li>Send promotional communications (with your consent)</li>
          <li>Respond to your comments and questions</li>
          <li>Analyze usage patterns to improve user experience</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-2">
          3. Information Sharing
        </h3>
        <p>
          We do not sell, trade, or rent your personal information to third
          parties. We may share your information with service providers who
          assist us in operating our website and conducting our business,
          provided they agree to keep this information confidential.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-2">
          4. Data Security
        </h3>
        <p>
          We implement appropriate security measures to protect your personal
          information against unauthorized access, alteration, disclosure, or
          destruction. However, no method of transmission over the Internet is
          100% secure.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-2">
          5. Cookies and Tracking
        </h3>
        <p>
          We use cookies and similar tracking technologies to track activity on
          our website and hold certain information. You can instruct your
          browser to refuse all cookies or to indicate when a cookie is being
          sent.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-2">
          6. Your Rights
        </h3>
        <p>You have the right to:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Access your personal data</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to processing of your data</li>
          <li>Request data portability</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-2">
          7. Children's Privacy
        </h3>
        <p>
          Our services are not directed to children under 13. We do not knowingly
          collect personal information from children under 13. If we learn that
          we have collected such information, we will take steps to delete it.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-2">
          8. Changes to This Policy
        </h3>
        <p>
          We may update this Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page and
          updating the "Last updated" date.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-2">
          9. Contact Us
        </h3>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          through our website's contact form.
        </p>
      </section>
    </div>
  );
}

export default function Footer() {
  const [termsOpen, setTermsOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  useEffect(() => {
    // Increment and fetch visitor count
    fetch("/api/visitor-count", { method: "POST" })
      .then((res) => res.json())
      .then((data) => setVisitorCount(data.count))
      .catch(() => setVisitorCount(null));
  }, []);

  return (
    <>
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="relative flex flex-col items-center gap-2 md:flex-row md:items-center md:gap-3">
            {/* Clears fixed tour poster (bottom-left); does not shift centered logo */}
            <div className="hidden md:block w-20 shrink-0" aria-hidden />

            <Link
              href="/"
              className="shrink-0 md:absolute md:left-1/2 md:top-1/2 md:z-10 md:-translate-x-1/2 md:-translate-y-1/2"
              aria-label="Teacher Gamer Revolution — home"
            >
              <Image
                src="/teacher-gamer-revolution-logo-transparent.png"
                alt="Teacher Gamer Revolution"
                width={1024}
                height={265}
                unoptimized
                className="h-16 w-auto max-w-[min(95vw,40rem)] object-contain sm:h-[4.25rem] md:h-24 lg:h-28"
              />
            </Link>

            <div className="flex w-full flex-col items-center gap-1 text-center md:ml-auto md:w-auto md:items-end md:text-right">
              <p className="text-xs md:text-sm leading-snug">
                &copy; {new Date().getFullYear()} Teacher Gamer. All rights
                reserved.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-0.5 text-xs md:justify-end md:text-sm">
                <button
                  onClick={() => setTermsOpen(true)}
                  className="text-gray-400 hover:text-white transition-colors underline-offset-2 hover:underline"
                >
                  Terms of Service
                </button>
                <span className="text-gray-600">|</span>
                <button
                  onClick={() => setPrivacyOpen(true)}
                  className="text-gray-400 hover:text-white transition-colors underline-offset-2 hover:underline"
                >
                  Privacy Policy
                </button>
              </div>
              {visitorCount !== null && (
                <p className="text-xs text-gray-500">
                  {visitorCount.toLocaleString()} visitors
                </p>
              )}
            </div>
          </div>
        </div>
      </footer>

      {/* Terms of Service Modal */}
      <Modal
        isOpen={termsOpen}
        onClose={() => setTermsOpen(false)}
        title="Terms of Service"
      >
        <TermsOfServiceContent />
      </Modal>

      {/* Privacy Policy Modal */}
      <Modal
        isOpen={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
        title="Privacy Policy"
      >
        <PrivacyPolicyContent />
      </Modal>
    </>
  );
}
