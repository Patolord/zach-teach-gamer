import { ArrowLeft, Handshake, Landmark } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  PARTNER_INTAKE_SURVEY_URL,
  SPONSOR_INTAKE_SURVEY_URL,
} from "@/config/surveys";
import { partnerOrganizations } from "@/data/partners";
import { MEDIA } from "@/lib/media";

export const metadata: Metadata = {
  title: "Partners & Sponsors | Teacher Gamer",
  description:
    "Organizations supporting Teacher-Gamer — and how to collaborate as a partner or sponsor.",
};

export default function PartnersPage() {
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
            Back to Home
          </Link>
        </div>

        <div className="container mx-auto max-w-4xl px-4 pt-10 pb-12 text-center space-y-5">
          <p className="text-sm font-bold uppercase tracking-widest text-accent">
            Collaboration
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            <span className="text-accent">Partners</span> &amp; Sponsors
          </h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
            We are grateful to the companies, schools, and brands that help grow
            game-based learning with Teacher-Gamer. Want to join them? Tell us
            how you would like to work together.
          </p>
        </div>

        <div className="container mx-auto px-4 pb-16 max-w-5xl">
          <h2 className="text-xl font-semibold text-white text-center mb-8">
            Featured organizations
          </h2>
          {partnerOrganizations.length === 0 ? (
            <p className="text-center text-white/55 max-w-md mx-auto leading-relaxed">
              Partner and sponsor logos will appear here as we announce
              collaborations.
            </p>
          ) : (
            <ul className="flex flex-wrap items-center justify-center gap-x-16 gap-y-12">
              {partnerOrganizations.map((org) => {
                const content = (
                  <>
                    {org.logoSrc ? (
                      <div className="relative mx-auto h-32 w-full sm:h-40">
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
                      {org.description}
                    </p>
                  </>
                );

                return (
                  <li key={org.name} className="w-full max-w-md">
                    {org.website ? (
                      <a
                        href={org.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${org.name}`}
                        className="group block"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="group block">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="container mx-auto px-4 pb-24 max-w-4xl">
          <h2 className="text-xl font-semibold text-white text-center mb-3">
            Work with us
          </h2>
          <p className="text-center text-white/60 mb-10 max-w-xl mx-auto">
            Ready to explore a partnership or sponsorship? Choose the path that
            fits you and complete a short survey — we will follow up from there.
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
                    Become a partner
                  </p>
                  <p className="text-sm text-lighter/75 group-hover:text-background/90 mt-0.5">
                    Programs, co-design, training, community — tell us what you
                    have in mind.
                  </p>
                </div>
              </div>
              <span className="text-sm font-semibold text-accent group-hover:text-background">
                Open partner survey →
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
                    Become a sponsor
                  </p>
                  <p className="text-sm text-lighter/75 group-hover:text-background/90 mt-0.5">
                    Support missions, tours, scholarships, or events — share
                    your goals here.
                  </p>
                </div>
              </div>
              <span className="text-sm font-semibold text-accent group-hover:text-background">
                Open sponsor survey →
              </span>
            </a>
          </div>
        </div>

        <div className="h-16" />
      </div>
    </main>
  );
}
