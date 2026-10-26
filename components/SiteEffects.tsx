"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/config";

export default function SiteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const id = siteConfig.googleAnalyticsId;
    if (!id || document.getElementById("ga4")) return;
    const g = document.createElement("script");
    g.id = "ga4";
    g.async = true;
    g.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
    document.head.appendChild(g);
    window.dataLayer = window.dataLayer || [];
    const gtag = (...args: unknown[]) => {
      window.dataLayer.push(args);
    };
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", id);
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealEls = document.querySelectorAll<HTMLElement>(".reveal");
    if ("IntersectionObserver" in window && !reduce) {
      const ro = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("visible");
              ro.unobserve(e.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      revealEls.forEach((el) => ro.observe(el));
      return () => ro.disconnect();
    }
    revealEls.forEach((el) => el.classList.add("visible"));
  }, [pathname]);

  useEffect(() => {
    const counters = document.querySelectorAll<HTMLElement>("[data-count]");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const setFinal = (el: HTMLElement) => {
      el.textContent = Number(el.dataset.count).toLocaleString("en-US");
    };
    if ("IntersectionObserver" in window && !reduce) {
      const co = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            const el = e.target as HTMLElement;
            const target = Number(el.dataset.count);
            const start = performance.now();
            const dur = 1500;
            const tick = (now: number) => {
              const p = Math.min((now - start) / dur, 1);
              el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))).toLocaleString("en-US");
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            co.unobserve(el);
          });
        },
        { threshold: 0.5 }
      );
      counters.forEach((el) => co.observe(el));
      return () => co.disconnect();
    }
    counters.forEach(setFinal);
  }, [pathname]);

  return null;
}

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}
