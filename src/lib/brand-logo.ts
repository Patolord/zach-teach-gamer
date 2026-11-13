/**
 * Wordmark with the die between "TEACHER-GAMER" and "REVOLUTION".
 * Canada keeps the red d20. Brazil uses the green Teacher Gamer Brasil die.
 */
export function brandLogoSrc(locale: string): string {
  return locale === "pt-BR"
    ? "/teacher-gamer-revolution-logo-pt-transparent.png"
    : "/teacher-gamer-revolution-logo-transparent.png";
}
