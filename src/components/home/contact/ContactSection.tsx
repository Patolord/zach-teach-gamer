
import { MEDIA } from "@/lib/media";
import ShinyText from "@/components/ui/shinytext";
import { Facebook, Twitter, Linkedin, Youtube, Music, Instagram } from "lucide-react";

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

function SubstackIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.539 8.242H1.461V5.406h21.079v2.836zM1.461 10.812V24L12 18.109 22.539 24V10.812H1.461zM22.539 0H1.461v2.836h21.079V0z" />
    </svg>
  );
}

interface ContactSectionProps {
  sectionIndex?: number;
}

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/TeacherGamerHandbook",
    icon: Facebook,
    hoverBg: "#1877F2",
    hoverShadow: "rgba(24,119,242,0.5)",
  },
  {
    name: "Twitter / X",
    href: "https://x.com/TeacherGamerZ",
    icon: Twitter,
    hoverBg: "#1DA1F2",
    hoverShadow: "rgba(29,161,242,0.5)",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@zachrez6562",
    icon: Youtube,
    hoverBg: "#FF0000",
    hoverShadow: "rgba(255,0,0,0.5)",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/teachergamerhandbook/",
    icon: Instagram,
    hoverBg: "#E4405F",
    hoverShadow: "rgba(228,64,95,0.5)",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/2591103",
    icon: Linkedin,
    hoverBg: "#0A66C2",
    hoverShadow: "rgba(10,102,194,0.5)",
  },
  {
    name: "Discord",
    href: "https://discord.gg/d22JUxa7Be",
    icon: DiscordIcon,
    hoverBg: "#5865F2",
    hoverShadow: "rgba(88,101,242,0.5)",
  },
  {
    name: "Substack",
    href: "https://zacharyreznichek.substack.com/subscribe",
    icon: SubstackIcon,
    hoverBg: "#FF6719",
    hoverShadow: "rgba(255,103,25,0.5)",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@teachergamerz",
    icon: Music,
    hoverBg: "#FE2C55",
    hoverShadow: "rgba(254,44,85,0.5)",
  },
];

export default function ContactSection({ sectionIndex }: ContactSectionProps) {
  return (
    <section
      id="contact-section"
      data-scroll-section={sectionIndex}
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center py-40"
      style={{ backgroundImage: `url('${MEDIA.backgrounds.contact}')` }}
    >
      {/* 40% black overlay */}
      <div className="absolute inset-0 bg-background/40" />

      {/* Top horizontal transition element */}
      <div className="absolute top-0 left-0 right-0 h-px opacity-60 bg-gradient-to-r from-transparent via-accent to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-24 pointer-events-none bg-gradient-to-b from-secondary-soft to-transparent" />

      <div
        data-section-content
        data-animate
        className="container mx-auto px-8 py-16 max-w-4xl relative z-10"
      >
        <h2 className="text-6xl font-bold mb-8 text-center max-[1000px]:text-4xl font-aladin">
          <ShinyText
            speed={3}
            delay={1}
            color="var(--color-accent)"
            shineColor="var(--color-white)"
            spread={30}
            yoyo
          >
            Get In Touch
          </ShinyText>
        </h2>
        <p className="text-xl mb-4 text-center max-w-2xl mx-auto text-lighter">
          Have questions or want to connect? Reach out through your preferred social media platform.
        </p>
        <p className="text-lg mb-12 text-center max-w-2xl mx-auto text-lighter/80">
          We're active on all these channels and would love to hear from you!
        </p>

        {/* Social Media Links with Names */}
        <div>
       
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 px-5 py-4 rounded-xl backdrop-blur-sm border-2 transition-all duration-300 bg-white/10 border-primary-light hover:border-transparent"
                  style={{
                    ["--hover-bg" as string]: social.hoverBg,
                    ["--hover-shadow" as string]: social.hoverShadow,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = social.hoverBg;
                    e.currentTarget.style.borderColor = social.hoverBg;
                    e.currentTarget.style.boxShadow = `0 0 20px ${social.hoverShadow}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "";
                    e.currentTarget.style.borderColor = "";
                    e.currentTarget.style.boxShadow = "";
                  }}
                  aria-label={social.name}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                    <Icon className="w-6 h-6 transition-colors text-lighter group-hover:text-white" />
                  </div>
                  <span className="font-semibold text-lg transition-colors text-lighter group-hover:text-white">
                    {social.name}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        {/* CTA to Donate via PayPal */}
        <div className="text-center mt-12">
          <a
            href="https://www.paypal.com/paypalme/teachergamer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 font-bold rounded-full transition-all hover:gap-3 bg-accent text-background hover:bg-accent-light shadow-[0_4px_24px_rgba(218,255,13,0.25)] hover:shadow-[0_4px_24px_rgba(218,255,13,0.45)]"
          >
            Support the Project
          </a>
        </div>
      </div>

      {/* Bottom horizontal transition element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none bg-gradient-to-t from-secondary-soft to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px opacity-60 bg-gradient-to-r from-transparent via-accent to-transparent" />
    </section>
  );
}
