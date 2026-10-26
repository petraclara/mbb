import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteEffects from "@/components/SiteEffects";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0a2a5e",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Mentorship, Coaching & Consultancy in Kenya`,
    template: `%s`,
  },
  description:
    "MBB offers mentorship, coaching and consultancy for young people, schools and organisations in Kenya and beyond.",
  applicationName: SITE_NAME,
  authors: [{ name: "Brian Odhiambo" }],
  keywords: [
    "youth mentorship Kenya",
    "MBB Academy",
    "mentorship coaching consultancy",
    "student mentorship Kisumu",
    "leadership development Kenya",
  ],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_KE",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <SiteEffects />
      </body>
    </html>
  );
}
