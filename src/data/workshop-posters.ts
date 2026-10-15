export const workshopPosters = [
  {
    id: "tour2026",
    src: "/workshops/tour-2026-poster.webp",
    width: 1422,
    height: 2133,
  },
  {
    id: "originsGama",
    src: "/workshops/origins-gama-poster.webp",
    width: 1235,
    height: 1600,
  },
] as const;

export type WorkshopPosterId = (typeof workshopPosters)[number]["id"];
