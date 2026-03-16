"use client";

import { ExternalLink, Newspaper } from "lucide-react";
import Image from "next/image";

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

const morePress = [
  {
    id: 4,
    outlet: "ISEP – Polytechnic of Porto",
    title: "Frontloading Life Skills During the 11–14 Window",
    description:
      "Z Reznichek presents eruptive methodologies for embodied, off-screen, collective learning through RPGs at the School of Engineering webinar series.",
    date: "March 2026",
    type: "Webinar",
    link: "https://www.youtube.com/watch?v=3MFP4a4H37U",
  },
  {
    id: 5,
    outlet: "INDIRE",
    title: "What is 'Authentic Education'? – Insights into the Age of AI",
    description:
      "Published research exploring the nature of authentic education in a world shaped by AI, proposing a curriculum rooted in self-development, civic consciousness, and ecological stewardship.",
    date: "2025",
    type: "Publication",
    link: "https://indire.net/Publications/162",
  },
  {
    id: 6,
    outlet: "[Re]Learn Conference",
    title: "As if Authenticity Matters",
    description:
      "Presentation at the [Re]Learn 2020 conference on authentic approaches to education through game-based and experiential learning.",
    date: "2020",
    type: "Conference",
    link: "https://www.youtube.com/watch?v=TLzdJeYFwUI",
  },
];

export default function PressPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Hero Section */}
      <section className="relative pt-12 pb-8 lg:pt-30 lg:pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        </div>

        <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px] animate-pulse" />
        <div
          className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-accent/15 border border-accent/30">
              <Newspaper className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-accent">
                Press & Publications
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-linear-to-r from-lighter via-accent to-lighter bg-clip-text text-transparent">
              Press
            </h1>

            <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              News, interviews, and more — media appearances featuring
              the Teacher-Gamer methodology.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Press - 3 card row */}
      <section className="container mx-auto px-4 pt-8 pb-16 max-w-6xl">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white/40 mb-8">
          News, Interviews and More
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
                <p className="text-white/40 text-sm italic">{featuredPress[0].outlet}</p>
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
                <p className="text-white/40 text-sm italic">{featuredPress[1].outlet}</p>
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
                <p className="text-white/40 text-sm italic">{featuredPress[2].outlet}</p>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* More Press */}
      <section className="container mx-auto px-4 pb-16 max-w-4xl">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white/40 mb-8">
          Conferences & Publications
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
                        {item.type}
                      </span>
                      <span className="text-white/40 text-sm">{item.date}</span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors leading-tight">
                      {item.title}
                    </h3>

                    <p className="text-white/50 text-sm font-semibold">
                      {item.outlet}
                    </p>

                    <p className="text-white/60 leading-relaxed">
                      {item.description}
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
  );
}
