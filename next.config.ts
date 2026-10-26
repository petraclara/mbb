import type { NextConfig } from "next";

const pages = [
  "about",
  "programs",
  "academy",
  "impact",
  "stories",
  "mentors-connect",
  "partner",
  "book",
  "join",
  "apply",
  "contact",
];

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      ...pages.map((page) => ({
        source: `/${page}.html`,
        destination: `/${page}/`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
