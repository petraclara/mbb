import type { Metadata } from "next";

export const SITE_URL = "https://mentorshipbeyondboundaries.com";
export const SITE_NAME = "Mentorship Beyond Boundaries";
export const SITE_EMAIL = "mentorshipbeyondboundaries644@gmail.com";
export const SITE_PHONE = "+254746275156";
export const SITE_PHONE_DISPLAY = "+254 746 275 156";
export const WHATSAPP_URL =
  "https://wa.me/254746275156?text=Hello%20MBB%2C%20I%27d%20like%20to%20know%20more.";
export const MENTORS_CONNECT_URL = "https://quality-education-edu-mentor.vercel.app/";

export const NAV = [
  { href: "/about/", label: "About" },
  { href: "/programs/", label: "Programs" },
  { href: "/academy/", label: "Academy" },
  { href: "/impact/", label: "Impact" },
  { href: "/stories/", label: "Stories" },
  { href: "/mentors-connect/", label: "Mentors Connect" },
  { href: "/partner/", label: "Partner" },
  { href: "/contact/", label: "Contact" },
] as const;

export const ROUTES = [
  "/",
  "/about/",
  "/programs/",
  "/academy/",
  "/impact/",
  "/stories/",
  "/mentors-connect/",
  "/partner/",
  "/book/",
  "/join/",
  "/apply/",
  "/contact/",
] as const;

export function pageMeta(title: string, description: string, path: string): Metadata {
  const url = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
  const image = `${SITE_URL}/assets/img/logo.jpg`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title,
      description,
      url,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [image],
    },
  };
}
