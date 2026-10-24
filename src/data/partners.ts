/**
 * Logos live in /public/partners/*. Add rows as you onboard organizations.
 * Descriptions live in `messages/<locale>/partners.json` under `organizations.<id>`.
 */

export type PartnerId =
  | "daVinciLifeSkills"
  | "teacherGamerBrasil"
  | "gambitoDoRei"
  | "vitaEquilibrium"
  | "upcraftCrew"
  | "rpgDojo"
  | "gaiaKids"
  | "heroWorkshop"
  | "undiscoveredCountry";

export type PartnerEntry = {
  /** Stable key for `partners.organizations.<id>` in the message files */
  id: PartnerId;
  name: string;
  /** Path under `public/` e.g. `/partners/acme.png` — omit until logo is available */
  logoSrc?: string;
  logoClassName?: string;
  website?: string;
};

export const partnerOrganizations: PartnerEntry[] = [
  {
    id: "daVinciLifeSkills",
    name: "Da Vinci Life Skills",
    logoSrc: "/partners/dvls-small-logo.png",
    logoClassName: "scale-140",
    website: "https://davincilifeskills.com/",
  },
  {
    id: "teacherGamerBrasil",
    name: "Teacher-Gamer Brasil",
    logoSrc: "/partners/teacher-gamer-brasil-logo-transparent.png",
    logoClassName: "scale-95",
    website: "https://www.instagram.com/teachergamerbr/",
  },
  {
    id: "gambitoDoRei",
    name: "Gambito do Rei",
    logoSrc: "/partners/gambito-do-rei-logo.png",
    logoClassName: "scale-[0.58]",
    website: "https://gambitodorei.com.br/",
  },
  {
    id: "vitaEquilibrium",
    name: "VitaEquilibrium",
    logoSrc: "/partners/vitaequilibrium-logo.png",
    logoClassName: "scale-95",
    website: "https://www.vitaequilibrium.com/",
  },
  {
    id: "upcraftCrew",
    name: "Upcraft Crew",
    logoSrc: "/partners/upcraftcrew-logo.png",
    website: "https://upcraftcrew.com/",
  },
  {
    id: "rpgDojo",
    name: "RPG Dojo",
    logoSrc: "/partners/rpg-dojo-logo.png",
    logoClassName: "scale-95",
    website: "https://rpgdojo.super.site/",
  },
  {
    id: "gaiaKids",
    name: "GAIA Kids",
    logoSrc: "/partners/gaia-kids-logo-removebg-preview.png",
    website: "https://gaiakids.net",
  },
  {
    id: "heroWorkshop",
    name: "The Hero Workshop",
    logoSrc: "/partners/hero-workshop-logo.png",
    logoClassName: "scale-95",
    website: "https://www.heroworkshop.org/",
  },
  {
    id: "undiscoveredCountry",
    name: "Undiscovered Country",
    logoSrc: "/partners/undiscovered-country-logo-2.png",
    logoClassName: "scale-80",
    website: "https://www.undiscoveredcountry.org.uk/",
  },
];
