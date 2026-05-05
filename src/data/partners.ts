/**
 * Logos live in /public/partners/*. Add rows as you onboard organizations.
 */

export type PartnerEntry = {
  name: string;
  /** Path under `public/` e.g. `/partners/acme.png` */
  logoSrc: string;
  website?: string;
};

export const partnerOrganizations: PartnerEntry[] = [
  // Example:
  // { name: "Acme Edu", logoSrc: "/partners/acme.png", website: "https://example.org" },
];
