import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML so the site can still deploy to GitHub Pages.
  // trailingSlash makes URLs /about/ instead of /about.html.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
