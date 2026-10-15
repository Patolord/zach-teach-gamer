"use client";

import { ExternalLink, Newspaper } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { MEDIA } from "@/lib/media";

const featuredPress = [
  {
    id: 1,
    outlet: "i-News",
    title:
      "Role-play games like Dungeons & Dragons in the classroom help children learn — and explore their identity",
    subtitle:
      "Teacher Zach Reznichek believes role-play board games are a vital education tool — and can help improve life skills",
    image: "https://ik.imagekit.io/TeacherGamer/Gallery/IMG_2936bb.jpg",
    link: "https://inews.co.uk/news/education/role-play-games-dungeons-and-dragons-explained-children-learning-769134",
  },
  {
    id: 2,
    outlet: "IndieGoGo Campaign",
    title: "Teacher-Gamer Handbook",
    logo: "/indiegogo-squarelogo-1560459490944.png",
    link: "https://www.indiegogo.com/en/projects/zacharyreznichek/teacher-gamer-handbook#/",
  },
  {
    id: 3,
    outlet: "HundrED Innovations",
    title: "Teacher-Gamer Revolution",
    logo: "/hundred.jpg",
    link: "https://hundred.org/en/innovations/teacher-gamer-revolution",
  },
];

// Outlet names and titles are proper names; descriptions and dates live in messages/*/press.json
const morePress = [
  {
    id: "isepWebinar",
    outlet: "ISEP – Polytechnic of Porto",
    title: "Frontloading Life Skills During the 11–14 Window",
    type: "webinar",
    link: "https://www.youtube.com/watch?v=3MFP4a4H37U",
  },
  {
    id: "indireAuthenticEducation",
    outlet: "INDIRE",
    title: "What is 'Authentic Education'? – Insights into the Age of AI",
    type: "publication",
    link: "https://indire.net/Publications/162",
  },
  {
    id: "relearnConference",
    outlet: "[Re]Learn Conference",
    title: "As if Authenticity Matters",
    type: "conference",
    link: "https://www.youtube.com/watch?v=TLzdJeYFwUI",
  },
] as const;

export default function PressPage() {
  const t = useTranslations("press");

  return (
    <div className="relative min-h-screen">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${MEDIA.backgrounds.research}')` }}
      />
      <div
        className="fixed inset-0"
        style={{ backgroundColor: "rgba(26, 26, 31, 0.6)" }}
      />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative pt-12 pb-8 lg:pt-30 lg:pb-12 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-accent/15 border border-accent/30">
                <Newspaper className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-accent">
                  {t("hero.badge")}
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-linear-to-r from-lighter via-accent to-lighter bg-clip-text text-transparent">
                {t("hero.title")}
              </h1>

              <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
                {t("hero.description")}
              </p>
            </div>
          </div>
        </section>

        {/* Featured Press - 3 card row */}
        <section className="container mx-auto px-4 pt-8 pb-16 max-w-6xl">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white/40 mb-8">
            {t("featured.heading")}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* i-News Card */}
            <a
              href={featuredPress[0].link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-accent/30 transition-all duration-300 hover:bg-white/8 overflow-hidden h-full flex flex-col">
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors leading-snug mb-3">
                    {featuredPress[0].title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">
                    {featuredPress[0].subtitle}
                  </p>
                  <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden mt-auto">
                    <Image
                      src={featuredPress[0].image!}
                      alt={featuredPress[0].title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="px-5 pb-5 pt-3">
                  <p className="text-white/40 text-sm italic">
                    {featuredPress[0].outlet}
                  </p>
                </div>
              </div>
            </a>

            {/* IndieGoGo Card */}
            <a
              href={featuredPress[1].link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-accent/30 transition-all duration-300 hover:bg-white/8 overflow-hidden h-full flex flex-col">
                <div className="flex-1 flex items-center justify-center p-8">
                  <div className="relative w-full max-w-[220px] aspect-2/1">
                    <Image
                      src={featuredPress[1].logo!}
                      alt="IndieGoGo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="px-5 pb-5">
                  <p className="text-white/40 text-sm italic">
                    {featuredPress[1].outlet}
                  </p>
                </div>
              </div>
            </a>

            {/* HundrED Card */}
            <a
              href={featuredPress[2].link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-accent/30 transition-all duration-300 hover:bg-white/8 overflow-hidden h-full flex flex-col">
                <div className="flex-1 flex items-center justify-center p-8">
                  <div className="relative w-full max-w-[220px] aspect-square">
                    <Image
                      src={featuredPress[2].logo!}
                      alt="HundrED"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="px-5 pb-5">
                  <p className="text-white/40 text-sm italic">
                    {featuredPress[2].outlet}
                  </p>
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* More Press */}
        <section className="container mx-auto px-4 pb-16 max-w-4xl">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white/40 mb-8">
            {t("more.heading")}
          </h2>

          <div className="space-y-6">
            {morePress.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:border-accent/30 transition-all duration-300 hover:bg-white/8">
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider">
                          {t(`types.${item.type}`)}
                        </span>
                        <span className="text-white/40 text-sm">
                          {t(`items.${item.id}.date`)}
                        </span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors leading-tight">
                        {item.title}
                      </h3>

                      <p className="text-white/50 text-sm font-semibold">
                        {item.outlet}
                      </p>

                      <p className="text-white/60 leading-relaxed">
                        {t(`items.${item.id}.description`)}
                      </p>
                    </div>

                    <div className="shrink-0 self-center">
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent/15 group-hover:border-accent/30 transition-all">
                        <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-accent transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Footer Spacing */}
        <div className="h-20" />
      </div>
    </div>
  );
}
