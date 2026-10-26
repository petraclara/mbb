"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/site";

function isCurrent(pathname: string, href: string) {
  const path = pathname === "/" || pathname.endsWith("/") ? pathname : `${pathname}/`;
  if (href === "/") return path === "/";
  return path === href || path.startsWith(href);
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <header className="site-header">
        <div className="header-inner">
          <Link className="brand" href="/" aria-label="Mentorship Beyond Boundaries – Home">
            <span className="logo-mark" aria-hidden="true" />
            <span className="brand-text">
              <strong>Mentorship Beyond Boundaries</strong>
              <small>Educate · Empower · Explore</small>
            </span>
          </Link>
          <button
            className="menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="nav"
            type="button"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
          <nav id="nav" className={open ? "nav open" : "nav"} aria-label="Main navigation">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/join/"
              className="btn btn-sm nav-cta"
              aria-current={isCurrent(pathname, "/join/") ? "page" : undefined}
            >
              Join MBB
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
