This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Languages & regional themes

The site is bilingual: **English (Canada)** `en-CA` (default) and **Português (Brasil)** `pt-BR`,
powered by [`next-intl`](https://next-intl.dev).

- The visitor picks a language with the 🇨🇦 / 🇧🇷 toggle in the header (and on the landing
  page). The choice is stored in the `NEXT_LOCALE` cookie, so URLs stay the same for both
  languages. Resolution happens in `src/i18n/request.ts`.
- Each locale switch also swaps the brand theme: Canada uses the deep-purple palette, Brazil uses a
  forest-green one. The root layout sets `<html lang data-locale>`, and `src/app/globals.css`
  overrides the `--primary*` variables under `:root[data-locale="pt-BR"]`. Any component that
  uses `var(--color-primary)` / `text-primary` / `border-primary-light` etc. follows automatically.
- Translations live in `messages/<locale>/<namespace>.json`, one file per page or section, merged by
  `messages/<locale>/index.ts`. Both locales must have identical key structures; TypeScript checks
  the keys you use in `t("...")` against the `en-CA` files (`src/i18n/global.d.ts`).

To add text: put the key in both `messages/en-CA/<ns>.json` and `messages/pt-BR/<ns>.json`, then
read it with `useTranslations("<ns>")` (client or non-async server component) or
`await getTranslations("<ns>")` (async server component / `generateMetadata`). To add a new
namespace, create the two JSON files and register them in both `messages/*/index.ts`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
