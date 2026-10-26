"use client";

import { siteConfig } from "@/lib/config";

const LABELS: Record<string, string> = {
  facebook: "Facebook",
  instagram: "Instagram",
  linkedin: "LinkedIn",
  youtube: "YouTube",
};

export default function SocialLinks({ className }: { className?: string }) {
  const entries = Object.entries(siteConfig.socials).filter(([, url]) => url);
  if (!entries.length) return <div className={className || "socials"} />;
  return (
    <div className={className || "socials"}>
      {entries.map(([key, url]) => (
        <a key={key} href={url} target="_blank" rel="noopener" aria-label={`MBB on ${LABELS[key]}`}>
          {LABELS[key]}
        </a>
      ))}
    </div>
  );
}
