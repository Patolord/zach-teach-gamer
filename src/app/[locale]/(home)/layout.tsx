import { setRequestLocale } from "next-intl/server";
import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { resolveLocale } from "@/i18n/params";
import ScopedMessages from "@/i18n/ScopedMessages";

export default async function HomeLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  setRequestLocale(locale);

  return (
    <ScopedMessages namespaces={["header", "footer"]}>
      <section>
        <Header />
        {children}
        <Footer />
      </section>
    </ScopedMessages>
  );
}
