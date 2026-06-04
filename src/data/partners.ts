/**
 * Logos live in /public/partners/*. Add rows as you onboard organizations.
 */

export type PartnerEntry = {
  name: string;
  description: string;
  /** Path under `public/` e.g. `/partners/acme.png` — omit until logo is available */
  logoSrc?: string;
  logoClassName?: string;
  website?: string;
};

export const partnerOrganizations: PartnerEntry[] = [
  {
    name: "Da Vinci Life Skills",
    description:
      "Da Vinci Life-Skills is a non\u{2011}profit education organisation that provides a biophilic, project\u{2011}based curriculum, a skills\u{2011}based assessment framework, and certified mentor training to help schools and home\u{2011}education communities deliver holistic, real\u{2011}world learning where students can flourish.",
    logoSrc: "/partners/dvls-small-logo.png",
    logoClassName: "scale-140",
    website: "https://davincilifeskills.com/",
  },
  {
    name: "Undiscovered Country",
    description:
      "Undiscovered Country provides peace‑and‑conflict diagnostics, archetype profiling, and training programmes that help organisations and schools understand tensions, transform conflict, and build healthier, more harmonious cultures.",
    logoSrc: "/partners/undiscovered-country-logo-2.png",
    logoClassName: "scale-80",
    website: "https://www.undiscoveredcountry.org.uk/",
  },
  {
    name: "Upcraft Crew",
    description:
      "Full-stack engineering support for teams fixing delivery bottlenecks, refactors, and MVP builds.",
    logoSrc: "/partners/upcraftcrew-logo.png",
    website: "https://upcraftcrew.com/",
  },
  {
    name: "GAIA Kids",
    description:
      "A global arts\u{2011}for\u{2011}impact initiative that empowers children to use creativity to spark social change, advocate for environmental justice, and build community through collaborative art projects.",
    logoSrc: "/partners/gaia-kids-logo.png",
    website: "https://gaiakids.net",
  },
  {
    name: "Cultivate",
    description:
      "Cultivate is a small, empathic, research\u{2011}informed school for ages 6\u{2013}14 where learning through play, connection, creativity, and project\u{2011}based learning empowers children to belong, collaborate, and flourish as active participants in their own education.",
    logoSrc: "/partners/cultivate-logo-bright.png",
    logoClassName: "scale-90 drop-shadow-[0_0_20px_rgba(120,200,120,0.35)]",
    website: "https://www.cultivatelearning.org.uk/",
  },
  {
    name: "VitaEquilibrium",
    description:
      "VitaEquilibrium offers movement\u{2011}based, contemplative workshops and retreats\u{2014}rooted in somatic movement practices like 5Rhythms\u{2014}that help people cultivate balance, connection, and a more harmonious way of living.",
  },
  {
    name: "RPG Dojo",
    description:
      "A digital community for studying, playing, chatting, and learning more about TTRPGs.",
    logoSrc: "/partners/rpg-dojo-logo.png",
    logoClassName: "scale-95",
    website: "https://rpgdojo.super.site/",
  },
];
