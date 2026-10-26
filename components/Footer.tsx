import Link from "next/link";
import { SITE_EMAIL, SITE_PHONE, SITE_PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/site";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <Link className="brand brand-light" href="/" aria-label="Mentorship Beyond Boundaries – Home">
              <span className="logo-mark" aria-hidden="true" />
              <span className="brand-text">
                <strong>Mentorship Beyond Boundaries</strong>
                <small>Educate · Empower · Explore</small>
              </span>
            </Link>
            <p className="footer-blurb">
              A youth-led global community offering <strong>mentorship, coaching and consultancy</strong>.{" "}
              <em>Unlock Potential. Create Opportunities.</em>
            </p>
            <SocialLinks />
          </div>
          <div>
            <h2 className="footer-title">Explore</h2>
            <ul>
              <li>
                <Link href="/about/">About Us</Link>
              </li>
              <li>
                <Link href="/programs/">Programs</Link>
              </li>
              <li>
                <Link href="/academy/">MBB Academy</Link>
              </li>
              <li>
                <Link href="/impact/">Our Impact</Link>
              </li>
              <li>
                <Link href="/stories/">Mentorship Stories</Link>
              </li>
              <li>
                <Link href="/mentors-connect/">MBB Mentors Connect</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="footer-title">Get involved</h2>
            <ul>
              <li>
                <Link href="/join/">Join MBB</Link>
              </li>
              <li>
                <Link href="/apply/">Apply to MBB Academy</Link>
              </li>
              <li>
                <Link href="/join/?role=mentor">Become a Mentor</Link>
              </li>
              <li>
                <Link href="/join/?role=mentee">Find a Mentor</Link>
              </li>
              <li>
                <Link href="/book/">Book MBB</Link>
              </li>
              <li>
                <Link href="/partner/">Partner With Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="footer-title">Contact</h2>
            <ul className="contact-lines">
              <li>
                📍 <strong>Based in Kisumu, Kenya.</strong>
                <br />
                Impacting Communities Globally.
              </li>
              <li>
                ☎️ <a href={`tel:${SITE_PHONE}`}>{SITE_PHONE_DISPLAY}</a>
              </li>
              <li>
                ✉️ <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
              </li>
              <li>
                <Link href="/contact/">Contact form →</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>&copy; {year} Mentorship Beyond Boundaries. All rights reserved.</p>
        </div>
      </footer>
      <a className="whatsapp-float" href={WHATSAPP_URL} target="_blank" rel="noopener" aria-label="Chat with MBB on WhatsApp">
        <span aria-hidden="true">💬</span>
        <span>WhatsApp</span>
      </a>
    </>
  );
}
