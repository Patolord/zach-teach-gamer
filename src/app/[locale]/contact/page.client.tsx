"use client";

import { ArrowLeftIcon } from "lucide-react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "@/components/ui/brand-icons";

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { MEDIA } from "@/lib/media";

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <main className="relative min-h-screen">
      {/* Background */}
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${MEDIA.backgrounds.contact}')` }}
      />
      <div className="fixed inset-0 bg-black/75" />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/home"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/home";
              setTimeout(() => {
                const contactSection =
                  document.getElementById("contact-section");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }, 100);
            }}
            className="inline-flex items-center gap-2 text-lighter/80 hover:text-accent transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            {t("backToHome")}
          </Link>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Hero Section */}
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-accent leading-tight">
                {t("hero.title")}
              </h1>

              <p className="text-xl text-lighter leading-relaxed max-w-3xl mx-auto">
                {t("hero.body")}
              </p>
            </div>

            {/* Discord CTA & Info Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Discord CTA - Takes 2 columns */}
              <div className="lg:col-span-2">
                <div className="backdrop-blur-sm rounded-xl p-8 border-2 bg-white/10 border-primary-light flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-20 h-20 rounded-full bg-[#5865F2]/20 flex items-center justify-center">
                    <DiscordIcon className="w-10 h-10 text-[#5865F2]" />
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-lighter">
                    {t.rich("discord.title", {
                      brand: (chunks) => (
                        <span className="text-[#5865F2]">{chunks}</span>
                      ),
                    })}
                  </h2>

                  <p className="text-lg text-lighter/80 max-w-xl leading-relaxed">
                    {t("discord.body")}
                  </p>

                  <a
                    href="https://discord.gg/d22JUxa7Be"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 bg-[#5865F2] text-white hover:bg-[#4752C4] shadow-[0_4px_24px_rgba(88,101,242,0.35)] hover:shadow-[0_4px_32px_rgba(88,101,242,0.55)] hover:scale-105"
                  >
                    <DiscordIcon className="w-6 h-6" />
                    {t("discord.cta")}
                  </a>

                  <p className="text-sm text-lighter/50">{t("discord.note")}</p>
                </div>
              </div>

              {/* Sidebar - Social Media */}
              <div className="space-y-8">
                {/* Social Media */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-primary-light/20">
                  <h3 className="text-2xl font-bold mb-6 text-lighter text-center">
                    {t("social.title")}
                  </h3>
                  <div className="flex items-center justify-center gap-6 flex-wrap">
                    <a
                      href="https://www.facebook.com/TeacherGamerHandbook"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-14 h-14 rounded-full backdrop-blur-sm border-2 transition-all duration-300 bg-white/10 border-primary-light hover:bg-accent hover:border-accent"
                      aria-label={t("social.labels.facebook")}
                    >
                      <Facebook className="w-6 h-6 transition-colors text-lighter group-hover:text-background" />
                    </a>
                    <a
                      href="https://x.com/TeacherGamerZ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-14 h-14 rounded-full backdrop-blur-sm border-2 transition-all duration-300 bg-white/10 border-primary-light hover:bg-accent hover:border-accent"
                      aria-label={t("social.labels.twitter")}
                    >
                      <Twitter className="w-6 h-6 transition-colors text-lighter group-hover:text-background" />
                    </a>
                    <a
                      href="https://www.youtube.com/@zachrez6562"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-14 h-14 rounded-full backdrop-blur-sm border-2 transition-all duration-300 bg-white/10 border-primary-light hover:bg-accent hover:border-accent"
                      aria-label={t("social.labels.youtube")}
                    >
                      <Youtube className="w-6 h-6 transition-colors text-lighter group-hover:text-background" />
                    </a>
                    <a
                      href="https://www.instagram.com/teachergamerhandbook/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-14 h-14 rounded-full backdrop-blur-sm border-2 transition-all duration-300 bg-white/10 border-primary-light hover:bg-accent hover:border-accent"
                      aria-label={t("social.labels.instagram")}
                    >
                      <Instagram className="w-6 h-6 transition-colors text-lighter group-hover:text-background" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/2591103"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-14 h-14 rounded-full backdrop-blur-sm border-2 transition-all duration-300 bg-white/10 border-primary-light hover:bg-accent hover:border-accent"
                      aria-label={t("social.labels.linkedin")}
                    >
                      <Linkedin className="w-6 h-6 transition-colors text-lighter group-hover:text-background" />
                    </a>
                  </div>

                  {/* CTA to Donate via PayPal */}
                  <div className="text-center mt-8">
                    <a
                      href="https://www.paypal.com/paypalme/teachergamer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 font-bold rounded-full transition-all hover:gap-3 bg-accent text-background hover:bg-accent-light shadow-[0_4px_24px_rgba(218,255,13,0.25)] hover:shadow-[0_4px_24px_rgba(218,255,13,0.45)]"
                    >
                      {t("social.support")}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Button */}
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-primary-light/20 inline-block">
                <h2 className="text-2xl font-bold text-accent mb-4">
                  {t("faq.title")}
                </h2>
                <p className="text-lighter/80 mb-6 max-w-md">{t("faq.body")}</p>
                <Button
                  size="lg"
                  className="text-lg font-bold bg-accent hover:bg-accent-light text-background px-12 py-4 shadow-[0_4px_24px_rgba(218,255,13,0.25)] hover:shadow-[0_4px_24px_rgba(218,255,13,0.45)]"
                  asChild
                >
                  <Link href="/faq">{t("faq.cta")}</Link>
                </Button>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-linear-to-br from-accent/20 to-transparent rounded-xl p-8 border border-accent/30 text-center space-y-6">
              <h2 className="text-3xl font-bold text-accent">
                {t("cta.title")}
              </h2>
              <p className="text-xl text-lighter/80 max-w-2xl mx-auto">
                {t("cta.body")}
              </p>
              <Button
                size="lg"
                className="text-lg font-bold bg-accent hover:bg-accent-light text-background px-12 py-6"
                asChild
              >
                <Link href="/home">{t("cta.button")}</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Spacing */}
        <div className="h-20" />
      </div>
    </main>
  );
}
