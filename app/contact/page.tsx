import Link from "next/link";
import SiteForm from "@/components/SiteForm";
import SocialLinks from "@/components/SocialLinks";
import { pageMeta, SITE_EMAIL, SITE_PHONE, SITE_PHONE_DISPLAY } from "@/lib/site";

export const metadata = pageMeta(
  "Contact MBB | Based in Kisumu, Kenya, Impacting Communities Globally",
  "Contact Mentorship Beyond Boundaries, based in Kisumu, Kenya and impacting communities globally. Call, WhatsApp, email or use the form to book MBB or ask about the Academy.",
  "/contact/"
);

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>Get in touch</h1>
          <p>We’d love to hear from you: questions, bookings, partnerships or your own mentorship story.</p>
        </div>
      </section>

      <section className="section">
        <div className="container form-wrap">
          <SiteForm subject="MBB website contact">
            <div className="row two">
              <label>
                Full name <input type="text" name="name" autoComplete="name" required />
              </label>
              <label>
                Email <input type="email" name="email" autoComplete="email" required />
              </label>
            </div>
            <label>
              Topic
              <select name="topic" required>
                <option value="General enquiry" data-key="general">
                  General enquiry
                </option>
                <option value="MBB Academy" data-key="academy">
                  MBB Academy
                </option>
                <option value="Mentorship programs" data-key="programs">
                  Mentorship programs
                </option>
                <option value="Coaching" data-key="coaching">
                  Coaching
                </option>
                <option value="Consultancy" data-key="consultancy">
                  Consultancy
                </option>
                <option value="Booking" data-key="booking">
                  Booking MBB
                </option>
                <option value="Partnership or sponsorship" data-key="partnership">
                  Partnership or sponsorship
                </option>
                <option value="Share my mentorship story" data-key="story">
                  Share my mentorship story
                </option>
                <option value="Other" data-key="other">
                  Other
                </option>
              </select>
            </label>
            <label>
              Message
              <textarea name="message" rows={6} required />
            </label>
            <div className="hp" aria-hidden="true">
              <label>
                Leave this empty <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
              </label>
            </div>
            <button type="submit" className="btn">
              Send message
            </button>
            <p className="form-status" role="status" aria-live="polite" />
          </SiteForm>

          <aside className="form-help reveal">
            <h3>Reach MBB</h3>
            <ul className="contact-lines" style={{ listStyle: "none", padding: 0, color: "var(--text)" }}>
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
                💬{" "}
                <a href="https://wa.me/254746275156" target="_blank" rel="noopener">
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
            <h3>Looking for something specific?</h3>
            <ul>
              <li>
                <Link href="/book/">Book MBB (individual or institution)</Link>
              </li>
              <li>
                <Link href="/partner/">Partner With Us</Link>
              </li>
              <li>
                <Link href="/apply/">Apply to MBB Academy</Link>
              </li>
            </ul>
            <SocialLinks className="socials" />
          </aside>
        </div>
      </section>
    </>
  );
}
