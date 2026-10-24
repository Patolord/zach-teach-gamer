import { ArrowLeft, Handshake, Landmark } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  PARTNER_INTAKE_SURVEY_URL,
  SPONSOR_INTAKE_SURVEY_URL,
} from "@/config/surveys";
import { partnerOrganizations } from "@/data/partners";
import { Link } from "@/i18n/navigation";
import type { LocaleParams } from "@/i18n/params";
import { MEDIA } from "@/lib/media";

type PageProps = { params: LocaleParams };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "partners.metadata" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function PartnersPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("partners");

  return (
    <main className="relative min-h-screen">
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${MEDIA.backgrounds.contact}')` }}
      />
      <div className="fixed inset-0 bg-black/80" />

      <div className="relative z-10">
        <div className="container mx-auto px-4 pt-6 pb-2">
          <Link
            href="/home"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            {t("backToHome")}
          </Link>
        </div>

        <div className="container mx-auto max-w-4xl px-4 pt-10 pb-12 text-center space-y-5">
          <p className="text-sm font-bold uppercase tracking-widest text-accent">
            {t("hero.eyebrow")}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            {t.rich("hero.title", {
              accent: (chunks) => <span className="text-accent">{chunks}</span>,
            })}
          </h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
            {t("hero.body")}
          </p>
        </div>

        <div className="container mx-auto px-4 pb-16 max-w-5xl">
          <h2 className="text-xl font-semibold text-white text-center mb-8">
            {t("featured.title")}
          </h2>
          {partnerOrganizations.length === 0 ? (
            <p className="text-center text-white/55 max-w-md mx-auto leading-relaxed">
              {t("featured.empty")}
            </p>
          ) : (
            <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
              {partnerOrganizations.map((org) => {
                const content = (
                  <>
                    {org.logoSrc ? (
                      <div className="relative mx-auto h-32 w-full overflow-hidden sm:h-40">
                        <div className="absolute inset-x-8 top-1/2 h-12 -translate-y-1/2 rounded-full bg-accent/20 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />
                        <Image
                          src={org.logoSrc}
                          alt={org.name}
                          fill
                          className={`relative object-contain drop-shadow-[0_16px_36px_rgba(0,0,0,0.55)] ${org.logoClassName ?? ""}`}
                          sizes="(max-width: 768px) 100vw, 384px"
                        />
                      </div>
                    ) : (
                      <div className="mx-auto flex h-32 w-full max-w-md items-center justify-center rounded-xl border border-dashed border-white/20 bg-white/5 px-6 sm:h-40">
                        <p className="text-center text-2xl font-bold tracking-tight text-white/90 sm:text-3xl">
                          {org.name}
                        </p>
                      </div>
                    )}
                    {org.logoSrc ? (
                      <p className="mt-4 text-center text-base font-semibold text-white/85 transition-colors group-hover:text-accent">
                        {org.name}
                      </p>
                    ) : null}
                    <p
                      className={`mx-auto max-w-md text-center text-sm leading-relaxed text-white/55 transition-colors group-hover:text-white/75 ${org.logoSrc ? "mt-2" : "mt-4"}`}
                    >
                      {t(`organizations.${org.id}.description`)}
                    </p>
                  </>
                );

                return (
                  <li key={org.name} className="h-full">
                    {org.website ? (
                      <a
                        href={org.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t("featured.visit", { name: org.name })}
                        className="group block h-full"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="group block h-full">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="container mx-auto px-4 pb-24 max-w-4xl">
          <h2 className="text-xl font-semibold text-white text-center mb-3">
            {t("workWithUs.title")}
          </h2>
          <p className="text-center text-white/60 mb-10 max-w-xl mx-auto">
            {t("workWithUs.body")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <a
              href={PARTNER_INTAKE_SURVEY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-4 rounded-xl border-2 border-primary-light/50 bg-white/10 px-5 py-6 backdrop-blur-sm transition-all duration-300 hover:border-accent hover:bg-accent hover:shadow-[0_0_24px_rgba(218,255,13,0.25)]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20">
                  <Handshake className="h-6 w-6 text-lighter group-hover:text-background" />
                </div>
                <div className="text-left min-w-0">
                  <p className="text-lg font-bold text-lighter group-hover:text-background">
                    {t("workWithUs.partner.title")}
                  </p>
                  <p className="text-sm text-lighter/75 group-hover:text-background/90 mt-0.5">
                    {t("workWithUs.partner.body")}
                  </p>
                </div>
              </div>
              <span className="text-sm font-semibold text-accent group-hover:text-background">
                {t("workWithUs.partner.cta")}
              </span>
            </a>

            <a
              href={SPONSOR_INTAKE_SURVEY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-4 rounded-xl border-2 border-primary-light/50 bg-white/10 px-5 py-6 backdrop-blur-sm transition-all duration-300 hover:border-accent hover:bg-accent hover:shadow-[0_0_24px_rgba(218,255,13,0.25)]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20">
                  <Landmark className="h-6 w-6 text-lighter group-hover:text-background" />
                </div>
                <div className="text-left min-w-0">
                  <p className="text-lg font-bold text-lighter group-hover:text-background">
                    {t("workWithUs.sponsor.title")}
                  </p>
                  <p className="text-sm text-lighter/75 group-hover:text-background/90 mt-0.5">
                    {t("workWithUs.sponsor.body")}
                  </p>
                </div>
              </div>
              <span className="text-sm font-semibold text-accent group-hover:text-background">
                {t("workWithUs.sponsor.cta")}
              </span>
            </a>
          </div>
        </div>

        <div className="h-16" />
      </div>
    </main>
  );
}
