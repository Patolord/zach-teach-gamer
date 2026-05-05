import Link from "next/link";
import { Dice6, Home, MapPinned, ScrollText, Swords } from "lucide-react";
import { MEDIA } from "@/lib/media";

const quickLinks = [
  { href: "/home", label: "Back to Home Base", icon: Home },
  { href: "/map", label: "Find Teacher Gamers", icon: MapPinned },
  { href: "/workshops", label: "Join a Workshop Quest", icon: Swords },
  { href: "/faq", label: "Read the Rulebook (FAQ)", icon: ScrollText },
] as const;

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden text-lighter">
      <div
        className="fixed inset-0 bg-cover bg-center -z-20"
        style={{ backgroundImage: `url('${MEDIA.backgrounds.courses}')` }}
      />
      <div className="fixed inset-0 bg-black/85 -z-10" />

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-center px-6 py-20 text-center">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-accent">
          <Dice6 className="h-4 w-4" />
          Critical Miss
        </p>

        <h1 className="text-6xl font-bold leading-none text-accent sm:text-7xl md:text-8xl">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          Your party rolled into an unmapped zone.
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-lighter/80 sm:text-lg">
          This page does not exist in the Teacher-Gamer multiverse yet. No worries
          — grab a d20, regroup, and jump back into the adventure.
        </p>

        <div className="mt-10 grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
          {quickLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center gap-3 rounded-xl border border-primary-light/50 bg-white/10 px-4 py-3 text-left backdrop-blur-sm transition-all hover:border-accent hover:bg-accent hover:text-background"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 group-hover:bg-black/10">
                  <Icon className="h-5 w-5 text-accent group-hover:text-background" />
                </span>
                <span className="font-semibold text-lighter group-hover:text-background">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
