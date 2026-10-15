import { ImageKitProvider } from "@imagekit/next";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
import "./globals.css";

import ConditionalSplashCursor from "@/components/shared/ConditionalSplashCursor";
import FloatingBookingButton from "@/components/shared/FloatingBookingButton";

// Local fonts - no external requests, fastest option
const amarante = localFont({
  src: "../fonts/Amarante-Regular.woff2",
  variable: "--font-amarante",
  display: "swap",
});

const aladin = localFont({
  src: "../fonts/Aladin-Regular.woff2",
  variable: "--font-aladin",
  display: "swap",
});

const pirataOne = localFont({
  src: "../fonts/PirataOne-Regular.woff2",
  variable: "--font-pirata-one",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("common.metadata");

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Locale comes from the NEXT_LOCALE cookie (see src/i18n/request.ts).
  // data-locale drives the Canada (purple) / Brazil (green) theme in globals.css.
  const locale = await getLocale();

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
        <NextIntlClientProvider>
          <ImageKitProvider urlEndpoint="https://ik.imagekit.io/TeacherGamer/Site/">
            {children}

            <FloatingBookingButton />
            <ConditionalSplashCursor />
          </ImageKitProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
