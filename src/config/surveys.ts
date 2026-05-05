/**
 * Public survey URLs (Google Forms, Typeform, etc.).
 * Optionally override with env vars in `.env.local` for production without code changes.
 */

export const WORKSHOP_HOST_SURVEY_URL =
  process.env.NEXT_PUBLIC_SURVEY_WORKSHOP_HOST ??
  "/404";

export const PARTNER_INTAKE_SURVEY_URL =
  process.env.NEXT_PUBLIC_SURVEY_PARTNER ??
  "/404";

export const SPONSOR_INTAKE_SURVEY_URL =
  process.env.NEXT_PUBLIC_SURVEY_SPONSOR ??
  "/404";
