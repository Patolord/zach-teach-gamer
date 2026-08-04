import { ImageKitProvider } from "@imagekit/next";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

import ConditionalSplashCursor from "@/components/shared/ConditionalSplashCursor";
import FloatingBookingButton from "@/components/shared/FloatingBookingButton";

// Local fonts - no external requests, fastest option
const amarante = localFont({
  src: "../fonts/Amarante-Regular.ttf",
  variable: "--font-amarante",
  display: "swap",
});

const aladin = localFont({
  src: "../fonts/Aladin-Regular.ttf",
  variable: "--font-aladin",
  display: "swap",
});

const pirataOne = localFont({
  src: "../fonts/PirataOne-Regular.ttf",
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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Teacher Gamer Revolution - Game-Based Learning for Education",
  description:
    "The future of education is here. Join the Teacher Gamer Revolution and revolutionize the way you learn through safe and fun game-based learning.",
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
    title: "Teacher Gamer Revolution",
    description:
      "The future of education is here. Join the Teacher Gamer Revolution and revolutionize the way you learn.",
    type: "website",
    siteName: "Teacher Gamer Revolution",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teacher Gamer Revolution",
    description:
      "The future of education is here. Join the Teacher Gamer Revolution and revolutionize the way you learn.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
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
        <Script id="linkedin-insight-tag" strategy="afterInteractive">
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
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=9671124&fmt=gif"
          />
        </noscript>
        <ImageKitProvider urlEndpoint="https://ik.imagekit.io/TeacherGamer/Site/">
          {children}

          <FloatingBookingButton />
          <ConditionalSplashCursor />
        </ImageKitProvider>
      </body>
    </html>
  );
}
