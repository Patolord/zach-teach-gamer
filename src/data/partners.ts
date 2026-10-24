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
    name: "Teacher-Gamer Brasil",
    description:
      "A Teacher-Gamer Brasil \u{e9} a parceira oficial da Teacher-Gamer Global no Brasil, apoiando escolas, universidades, ONGs e comunidades por meio de forma\u{e7}\u{e3}o de educadores, programas de certifica\u{e7}\u{e3}o, aprendizagem baseada em jogos e abordagens inovadoras para a aprendizagem socioemocional e baseada em projetos.",
    logoSrc: "/partners/teacher-gamer-brasil-logo-transparent.png",
    logoClassName: "scale-95",
    website: "https://www.instagram.com/teachergamerbr/",
  },
  {
    name: "Gambito do Rei",
    description:
      "A Gambito do Rei leva a aprendizagem baseada em jogos a escolas p\u{fa}blicas brasileiras, unindo neuroeduca\u{e7}\u{e3}o, desenvolvimento de habilidades socioemocionais e forma\u{e7}\u{e3}o de educadores, com uma equipe presente ao lado de professores e alunos em sala de aula.",
    logoSrc: "/partners/gambito-do-rei-logo.png",
    logoClassName: "scale-[0.58]",
    website: "https://gambitodorei.com.br/",
  },
  {
    name: "VitaEquilibrium",
    description:
      "VitaEquilibrium offers movement\u{2011}based, contemplative workshops and retreats\u{2014}rooted in somatic movement practices like 5Rhythms\u{2014}that help people cultivate balance, connection, and a more harmonious way of living.",
    logoSrc: "/partners/vitaequilibrium-logo.png",
    logoClassName: "scale-95",
    website: "https://www.vitaequilibrium.com/",
  },
  {
    name: "Upcraft Crew",
    description:
      "Full-stack engineering support for teams fixing delivery bottlenecks, refactors, and MVP builds.",
    logoSrc: "/partners/upcraftcrew-logo.png",
    website: "https://upcraftcrew.com/",
  },
  {
    name: "RPG Dojo",
    description:
      "A digital community for studying, playing, chatting, and learning more about TTRPGs.",
    logoSrc: "/partners/rpg-dojo-logo.png",
    logoClassName: "scale-95",
    website: "https://rpgdojo.super.site/",
  },
  {
    name: "GAIA Kids",
    description:
      "A global arts\u{2011}for\u{2011}impact initiative that empowers children to use creativity to spark social change, advocate for environmental justice, and build community through collaborative art projects.",
    logoSrc: "/partners/gaia-kids-logo-removebg-preview.png",
    website: "https://gaiakids.net",
  },
  {
    name: "The Hero Workshop",
    description:
      "The Hero Workshop supports young people through story-driven, game-based experiences that build confidence, creativity, and social-emotional growth.",
    logoSrc: "/partners/hero-workshop-logo.png",
    logoClassName: "scale-95",
    website: "https://www.heroworkshop.org/",
  },
  {
    name: "Undiscovered Country",
    description:
      "Undiscovered Country provides peace‑and‑conflict diagnostics, archetype profiling, and training programmes that help organisations and schools understand tensions, transform conflict, and build healthier, more harmonious cultures.",
    logoSrc: "/partners/undiscovered-country-logo-2.png",
    logoClassName: "scale-80",
    website: "https://www.undiscoveredcountry.org.uk/",
  },
];
