/**
 * Course accent colors aligned with dice assets in /public/dices/.
 *
 * Course titles and descriptions live in `messages/<locale>/courses.json`
 * under `courses.<id>.title` / `courses.<id>.description`.
 */

export type CourseThemeId = "intro" | "level1" | "level2" | "level3";

/** Translation key under `courses.badges.*` */
export type CourseBadgeId = "bestValue";

export type CourseTheme = {
  id: CourseThemeId;
  /** Hex for electric border, buttons, and in-page accents */
  color: string;
  diceImage: string;
  href: string;
  badge?: CourseBadgeId;
  /** Tailwind token prefix, e.g. `course-intro` → `text-course-intro` */
  token: string;
};

export const courseThemes = {
  intro: {
    id: "intro",
    color: "#38bdf8",
    token: "course-intro",
    diceImage: "/dices/dice-blue.webp",
    href: "/courses/intro-to-multiverse",
  },
  level1: {
    id: "level1",
    color: "#a855f7",
    token: "course-level-1",
    diceImage: "/dices/dice-purple.webp",
    href: "/courses/level-1-space-holder",
    badge: "bestValue",
  },
  level2: {
    id: "level2",
    color: "#4ade80",
    token: "course-level-2",
    diceImage: "/dices/dice-green.webp",
    href: "/courses/level-2-world-builder",
  },
  level3: {
    id: "level3",
    color: "#facc15",
    token: "course-level-3",
    diceImage: "/dices/dice-yellow.webp",
    href: "/courses/level-3-planes-walker",
  },
} as const satisfies Record<CourseThemeId, CourseTheme>;

export const homeCourseCards: CourseTheme[] = [
  courseThemes.intro,
  courseThemes.level1,
  courseThemes.level2,
  courseThemes.level3,
];

export function getCourseTheme(id: CourseThemeId): CourseTheme {
  return courseThemes[id];
}
