import { ImageKitProvider } from "@imagekit/next";
import type { Metadata } from "next";
import localFont from "next/font/local";
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

export const metadata: Metadata = {
  title: "Teacher Gamer Revolution - Game-Based Learning for Education",
  description:
    "The future of education is here. Join the Teacher Gamer Revolution and revolutionize the way you learn through safe and fun game-based learning.",
  keywords: [
    "game-based learning",
    "education",
    "teacher gamer",
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
        <ImageKitProvider urlEndpoint="https://ik.imagekit.io/TeacherGamer/Site/">
          {children}

          <FloatingBookingButton />
          <ConditionalSplashCursor />
        </ImageKitProvider>
      </body>
    </html>
  );
}
