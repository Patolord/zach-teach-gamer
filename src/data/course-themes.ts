/**
 * Course accent colors aligned with dice assets in /public/dices/.
 */

export type CourseTheme = {
  id: string;
  title: string;
  description: string;
  /** Hex for electric border, buttons, and in-page accents */
  color: string;
  diceImage: string;
  href: string;
  badge?: string;
  /** Tailwind token prefix, e.g. `course-intro` → `text-course-intro` */
  token: string;
};

export const courseThemes = {
  intro: {
    id: "intro",
    title: "Level 1 TG: Intro to the Multiverse Certificate Course",
    description:
      "How TTRPGs and the multiverse can drive adult readiness through PBL and SEL using the 13 Phases of Character Building and learning to move from out-game character development to in-game role-playing. Get certified as a Level 1 TG Space-Holder.",

    color: "#38bdf8",
    token: "course-intro",
    diceImage: "/dices/dice-blue.webp",
    href: "/courses/intro-to-multiverse",
  },
  level1: {
    id: "level1",
    title: "TTRPG Labs - Exploratory Fellowships & Workshops",
    description:
      "Earn hours for TG Level 2 and 3 certificates, including in-gaming, out-gaming, meta-gaming, terrain building, villain creation and campaign design, co-teaching and mentor fellowships. Get certified as a Level 1 TG Space-Holder.",
    color: "#a855f7",
    token: "course-level-1",
    diceImage: "/dices/dice-purple.webp",
    href: "/courses/level-1-space-holder",
    badge: "BEST VALUE",
  },
  level2: {
    id: "level2",
    title: "Level 2 TG World Builder Certificate Course",
    description:
      "Build & implement your own campaign world. Uncharted territory: New stories, creatures, magic & tech",
    color: "#4ade80",
    token: "course-level-2",
    diceImage: "/dices/dice-green.webp",
    href: "/courses/level-2-world-builder",
  },
  level3: {
    id: "level3",
    title: "Level 3 TG Planes Walker Certificate Course",
    description:
      "Integrate your own RPG campaigns into your local school system's learning objectives with guidance",
    color: "#facc15",
    token: "course-level-3",
    diceImage: "/dices/dice-yellow.webp",
    href: "/courses/level-3-planes-walker",
  },
} as const satisfies Record<string, CourseTheme>;

export const homeCourseCards: CourseTheme[] = [
  courseThemes.intro,
  courseThemes.level1,
  courseThemes.level2,
  courseThemes.level3,
];

export type CourseThemeId = keyof typeof courseThemes;

export function getCourseTheme(id: CourseThemeId): CourseTheme {
  return courseThemes[id];
}
