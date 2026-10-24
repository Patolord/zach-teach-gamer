import type { Messages } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

type Namespace = keyof Messages;

/**
 * Sends only the listed translation namespaces to the browser.
 *
 * Without this, NextIntlClientProvider serializes the whole catalog (every
 * page's copy) into each page's HTML. Nested providers REPLACE their parent's
 * messages rather than merging, so list every namespace the client
 * components inside this subtree read with useTranslations.
 */
export default async function ScopedMessages({
  namespaces,
  children,
}: {
  namespaces: readonly Namespace[];
  children: React.ReactNode;
}) {
  const all = await getMessages();
  const messages = Object.fromEntries(
    namespaces.map((ns) => [ns, all[ns]]),
  ) as Partial<Messages>;

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
