"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const t = useTranslations("footer");
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
            aria-label={t("closeModal")}
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

const termsSections = [
  "acceptance",
  "services",
  "accounts",
  "intellectualProperty",
  "payment",
  "liability",
  "changes",
  "contact",
] as const;

function TermsOfServiceContent() {
  const t = useTranslations("footer.terms");

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-400">{t("lastUpdated")}</p>

      {termsSections.map((section) => (
        <section key={section}>
          <h3 className="text-lg font-semibold text-white mb-2">
            {t(`sections.${section}.title`)}
          </h3>
          <p>{t(`sections.${section}.body`)}</p>
        </section>
      ))}
    </div>
  );
}

const privacySections = [
  "collection",
  "usage",
  "sharing",
  "security",
  "cookies",
  "rights",
  "children",
  "changes",
  "contact",
] as const;

const privacyUsageItems = [
  "provide",
  "transactions",
  "promotions",
  "respond",
  "analyze",
] as const;

const privacyRightsItems = [
  "access",
  "correct",
  "delete",
  "object",
  "portability",
] as const;

function PrivacyPolicyContent() {
  const t = useTranslations("footer.privacy");

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-400">{t("lastUpdated")}</p>

      {privacySections.map((section) => (
        <section key={section}>
          <h3 className="text-lg font-semibold text-white mb-2">
            {t(`sections.${section}.title`)}
          </h3>
          {section === "usage" ? (
            <>
              <p>{t("sections.usage.intro")}</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                {privacyUsageItems.map((item) => (
                  <li key={item}>{t(`sections.usage.items.${item}`)}</li>
                ))}
              </ul>
            </>
          ) : section === "rights" ? (
            <>
              <p>{t("sections.rights.intro")}</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                {privacyRightsItems.map((item) => (
                  <li key={item}>{t(`sections.rights.items.${item}`)}</li>
                ))}
              </ul>
            </>
          ) : (
            <p>{t(`sections.${section}.body`)}</p>
          )}
        </section>
      ))}
    </div>
  );
}

export default function Footer() {
  const t = useTranslations("footer");
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
              aria-label={t("logoAriaLabel")}
            >
              <Image
                src="/teacher-gamer-revolution-logo-transparent.png"
                alt={t("logoAlt")}
                width={1024}
                height={265}
                unoptimized
                className="h-16 w-auto max-w-[min(95vw,40rem)] object-contain sm:h-[4.25rem] md:h-24 lg:h-28"
              />
            </Link>

            <div className="flex w-full flex-col items-center gap-1 text-center md:ml-auto md:w-auto md:items-end md:text-right">
              <p className="text-xs md:text-sm leading-snug">
                {t("copyright", { year: new Date().getFullYear() })}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-0.5 text-xs md:justify-end md:text-sm">
                <button
                  onClick={() => setTermsOpen(true)}
                  className="text-gray-400 hover:text-white transition-colors underline-offset-2 hover:underline"
                >
                  {t("links.terms")}
                </button>
                <span className="text-gray-600">|</span>
                <button
                  onClick={() => setPrivacyOpen(true)}
                  className="text-gray-400 hover:text-white transition-colors underline-offset-2 hover:underline"
                >
                  {t("links.privacy")}
                </button>
              </div>
              {visitorCount !== null && (
                <p className="text-xs text-gray-500">
                  {t("visitors", { count: visitorCount })}
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
        title={t("terms.title")}
      >
        <TermsOfServiceContent />
      </Modal>

      {/* Privacy Policy Modal */}
      <Modal
        isOpen={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
        title={t("privacy.title")}
      >
        <PrivacyPolicyContent />
      </Modal>
    </>
  );
}
