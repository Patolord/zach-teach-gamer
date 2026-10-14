"use client";

import {
  ArrowLeftIcon,
  BookOpenIcon,
  ChevronDownIcon,
  CreditCardIcon,
  GraduationCapIcon,
  HelpCircleIcon,
  ShoppingBagIcon,
  UsersIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MEDIA } from "@/lib/media";

const faqCategories = [
  {
    id: "gettingStarted",
    icon: GraduationCapIcon,
    faqs: ["whatIsGbl", "rpgExperience", "ageGroups", "implementationTime"],
  },
  {
    id: "courses",
    icon: BookOpenIcon,
    faqs: [
      "courseLength",
      "courseIncludes",
      "accessAfterCompletion",
      "prerequisites",
      "groupTraining",
    ],
  },
  {
    id: "pricing",
    icon: CreditCardIcon,
    faqs: [
      "courseCost",
      "refunds",
      "paymentPlans",
      "educatorDiscounts",
      "schoolReimbursement",
    ],
  },
  {
    id: "community",
    icon: UsersIcon,
    faqs: ["communityAccess", "gettingHelp", "collaboration", "networking"],
  },
  {
    id: "shop",
    icon: ShoppingBagIcon,
    faqs: ["products", "digitalPhysical", "shipping", "returns"],
  },
  {
    id: "technical",
    icon: HelpCircleIcon,
    faqs: [
      "devices",
      "software",
      "accessPurchases",
      "sharingAccess",
      "dataSecurity",
    ],
  },
] as const;

const stats = ["educators", "students", "satisfaction", "support"] as const;

export default function FAQPage() {
  const t = useTranslations("faq");
  const [openItems, setOpenItems] = useState<string[]>([]);

  const light = (chunks: React.ReactNode) => (
    <span className="text-lighter">{chunks}</span>
  );
  const accent = (chunks: React.ReactNode) => (
    <span className="text-accent">{chunks}</span>
  );

  const toggleItem = (categoryId: string, faqId: string) => {
    const key = `${categoryId}-${faqId}`;
    setOpenItems((prev) =>
      prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key],
    );
  };

  const isOpen = (categoryId: string, faqId: string) => {
    return openItems.includes(`${categoryId}-${faqId}`);
  };

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
        <div className="container mx-auto px-4 pt-6 pb-2">
          <Link
            href="/home"
            className="inline-flex items-center gap-2 text-lighter/80 hover:text-lighter transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            {t("backToHome")}
          </Link>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-6 md:py-10">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Hero Section */}
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent">
                <HelpCircleIcon className="w-4 h-4" />
                <span className="text-sm font-semibold">{t("hero.badge")}</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                {t.rich("hero.title", { light, accent })}
              </h1>

              <p className="text-xl text-lighter/90 leading-relaxed max-w-3xl mx-auto">
                {t.rich("hero.intro", {
                  link: (chunks) => (
                    <Link
                      href="/contact"
                      className="text-accent hover:text-accent-light underline"
                    >
                      {chunks}
                    </Link>
                  ),
                })}
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-primary-light/20 text-center"
                >
                  <div className="text-3xl font-bold text-lighter mb-2">
                    {t(`stats.${stat}.value`)}
                  </div>
                  <div className="text-lighter/70 text-sm">
                    {t(`stats.${stat}.label`)}
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ Categories */}
            <div className="space-y-8">
              {faqCategories.map((category) => (
                <div key={category.id} className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h2 className="text-3xl font-bold text-accent">
                      {t(`categories.${category.id}`)}
                    </h2>
                  </div>

                  {/* FAQ Items */}
                  <div className="space-y-3">
                    {category.faqs.map((faqId) => (
                      <div
                        key={faqId}
                        className="bg-white/10 backdrop-blur-sm rounded-xl border border-primary-light/20 overflow-hidden transition-all"
                      >
                        <button
                          type="button"
                          onClick={() => toggleItem(category.id, faqId)}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                        >
                          <span className="text-lg font-semibold text-lighter pr-4">
                            {t(`items.${faqId}.question`)}
                          </span>
                          <ChevronDownIcon
                            className={`w-6 h-6 text-accent flex-shrink-0 transition-transform ${
                              isOpen(category.id, faqId) ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            isOpen(category.id, faqId)
                              ? "max-h-96 opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="px-6 pb-6 pt-0 text-lighter/80 leading-relaxed">
                            {t(`items.${faqId}.answer`)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Still Have Questions? */}
            <div className="bg-gradient-to-br from-accent/20 to-transparent rounded-xl p-8 md:p-12 border border-accent/30 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                {t.rich("stillQuestions.title", { light, accent })}
              </h2>
              <p className="text-xl text-lighter/80 max-w-2xl mx-auto">
                {t("stillQuestions.body")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="text-lg font-bold bg-accent hover:bg-accent-light text-background px-8 py-6"
                  asChild
                >
                  <Link href="/contact">
                    {t("stillQuestions.contactSupport")}
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg font-bold bg-accent text-background px-8 py-6"
                  asChild
                >
                  <Link href="/home">{t("stillQuestions.browseCourses")}</Link>
                </Button>
              </div>
            </div>

            {/* Additional Resources */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-primary-light/20">
                <BookOpenIcon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold text-accent mb-3">
                  {t("resources.docs.title")}
                </h3>
                <p className="text-lighter/80 mb-4">
                  {t("resources.docs.body")}
                </p>
                <Link
                  href="/home"
                  className="text-accent hover:text-accent-light font-semibold"
                >
                  {t("resources.docs.link")}
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-primary-light/20">
                <UsersIcon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold text-accent mb-3">
                  {t("resources.community.title")}
                </h3>
                <p className="text-lighter/80 mb-4">
                  {t("resources.community.body")}
                </p>
                <a
                  href="https://discord.gg/d22JUxa7Be"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-light font-semibold"
                >
                  {t("resources.community.link")}
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-primary-light/20">
                <GraduationCapIcon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold text-accent mb-3">
                  {t("resources.trial.title")}
                </h3>
                <p className="text-lighter/80 mb-4">
                  {t("resources.trial.body")}
                </p>
                <Link
                  href="/home"
                  className="text-accent hover:text-accent-light font-semibold"
                >
                  {t("resources.trial.link")}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Spacing */}
        <div className="h-20" />
      </div>
    </main>
  );
}
