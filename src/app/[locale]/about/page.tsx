import { setRequestLocale } from "next-intl/server";
import type { LocaleParams } from "@/i18n/params";
import PageContent from "./page.client";

/** Server wrapper: pins the locale so this client page can be prerendered. */
export default async function Page({ params }: { params: LocaleParams }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PageContent />;
}
