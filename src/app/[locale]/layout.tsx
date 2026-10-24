import { ImageKitProvider } from "@imagekit/next";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { resolveLocale } from "@/i18n/params";
import ScopedMessages from "@/i18n/ScopedMessages";
import "./globals.css";

import ConditionalSplashCursor from "@/components/shared/ConditionalSplashCursor";
import FloatingBookingButton from "@/components/shared/FloatingBookingButton";
import { routing } from "@/i18n/routing";
import { siteUrl } from "@/lib/site-url";

// Local fonts - no external requests, fastest option
const amarante = localFont({
  src: "../../fonts/Amarante-Regular.woff2",
  variable: "--font-amarante",
  display: "swap",
});

const aladin = localFont({
  src: "../../fonts/Aladin-Regular.woff2",
  variable: "--font-aladin",
  display: "swap",
});

const pirataOne = localFont({
  src: "../../fonts/PirataOne-Regular.woff2",
  variable: "--font-pirata-one",
  display: "swap",
});

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

/** Prerender every page once per language. */
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: Pick<LayoutProps, "params">): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const t = await getTranslations({ locale, namespace: "common.metadata" });

  return {
    metadataBase: new URL(siteUrl),
    title: t("title"),
    description: t("description"),
    keywords: [
      "game-based learning",
      "education",
      "teacher gamer",
      "Zach Reznichek",
      "RPG education",
      "educational games",
    ],
    icons: {
      icon: "/D20redTransparent.png",
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      type: "website",
      siteName: t("ogTitle"),
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("ogDescription"),
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps) {
  // The locale is the first URL segment (see src/proxy.ts); unknown values 404.
  // data-locale drives the Canada (purple) / Brazil (green) theme in globals.css.
  const locale = await resolveLocale(params);
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      data-locale={locale}
      className={`${amarante.variable} ${aladin.variable} ${pirataOne.variable}`}
    >
      <head>
        {/* Preconnect to external resources for faster loading */}
        <link
          rel="preconnect"
          href="https://ik.imagekit.io"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://api.dicebear.com" />
        {/* Prefetch ImageKit resources */}
        <link rel="dns-prefetch" href="https://ik.imagekit.io" />
      </head>
      <body className="antialiased">
        <Script id="linkedin-insight-tag" strategy="lazyOnload">
          {`
            _linkedin_partner_id = "9671124";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            (function(l) {
              if (!l) {
                window.lintrk = function(a, b) {
                  window.lintrk.q.push([a, b]);
                };
                window.lintrk.q = [];
              }
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";
              b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);
            })(window.lintrk);
          `}
        </Script>
        <noscript>
          {/* biome-ignore lint/performance/noImgElement: tracking pixel inside <noscript>; next/image cannot be used here */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=9671124&fmt=gif"
          />
        </noscript>
        {/* Global client UI (booking button) only; pages scope their own. */}
        <ScopedMessages namespaces={["shared"]}>
          <ImageKitProvider urlEndpoint="https://ik.imagekit.io/TeacherGamer/Site/">
            {children}

            <FloatingBookingButton />
            <ConditionalSplashCursor />
          </ImageKitProvider>
        </ScopedMessages>
      </body>
    </html>
  );
}
