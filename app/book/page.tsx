import SiteForm from "@/components/SiteForm";
import { pageMeta, SITE_PHONE, SITE_PHONE_DISPLAY } from "@/lib/site";

export const metadata = pageMeta(
  "Book MBB | Mentorship Sessions, Talks & Workshops for Individuals and Institutions",
  "Book Mentorship Beyond Boundaries for one-on-one mentorship, school workshops, public speaking training or institutional mentorship programs.",
  "/book/"
);

export default function BookPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Book MBB</p>
          <h1>Bring MBB to you</h1>
          <p>Book mentorship, coaching or consultancy, or invite MBB to your school, university, organisation or event.</p>
        </div>
      </section>

      <section className="section">
        <div className="container form-wrap">
          <SiteForm subject="MBB booking request">
            <label>
              I am booking as
              <select name="type" required>
                <option value="Individual" data-key="individual">
                  An individual
                </option>
                <option value="Institution / organisation" data-key="institution">
                  An institution or organisation
                </option>
              </select>
            </label>
            <div className="row two">
              <label>
                Full name <input type="text" name="name" autoComplete="name" required />
              </label>
              <label>
                Email <input type="email" name="email" autoComplete="email" required />
              </label>
            </div>
            <div className="row two">
              <label>
                Phone / WhatsApp <input type="tel" name="phone" autoComplete="tel" required />
              </label>
              <label>
                Town / country <input type="text" name="location" required />
              </label>
            </div>
            <div className="row two" data-show-when="type=institution" hidden>
              <label>
                Institution / organisation name <input type="text" name="organisation" required />
              </label>
              <label>
                Expected number of participants <input type="number" name="participants" min={1} />
              </label>
            </div>
            <div className="row two">
              <label>
                What would you like to book?
                <select name="service" required>
                  <option value="">Select…</option>
                  <option data-key="mentorship">One-on-one mentorship</option>
                  <option data-key="coaching">Coaching</option>
                  <option data-key="consultancy">Consultancy</option>
                  <option>School / university mentorship session</option>
                  <option>Workshop or training</option>
                  <option>Public speaking training</option>
                  <option>Mentors training</option>
                  <option>Leadership or empowerment forum</option>
                  <option>Guest speaker / keynote</option>
                  <option>Other</option>
                </select>
              </label>
              <label>
                Preferred date <span className="opt">(optional)</span> <input type="date" name="preferred_date" />
              </label>
            </div>
            <label>
              Preferred mode
              <select name="mode">
                <option>Either</option>
                <option>Virtual</option>
                <option>In-person</option>
              </select>
            </label>
            <label>
              Tell us more about what you need
              <textarea name="message" rows={5} required />
            </label>
            <div className="hp" aria-hidden="true">
              <label>
                Leave this empty <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
              </label>
            </div>
            <button type="submit" className="btn">
              Send booking request
            </button>
            <p className="form-status" role="status" aria-live="polite" />
            <p className="alt-link">
              Prefer Google Forms?{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdi2tfCahcTyKRmyNKVTOhgyzXDcf5d2n8FNPAINMtYEOrKLA/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener"
              >
                Individual booking
              </a>{" "}
              ·{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdgAZ7Kha8jn1U207aivAC-grEJsC8Ldxs8_uCBd7935H1HEA/viewform?usp=dialog"
                target="_blank"
                rel="noopener"
              >
                Institution booking
              </a>
            </p>
          </SiteForm>

          <aside className="form-help reveal">
            <h3>What we offer</h3>
            <ul>
              <li>Student and youth mentorship sessions</li>
              <li>School and institutional workshops and talks</li>
              <li>Public speaking and personal branding training</li>
              <li>Leadership and empowerment forums</li>
              <li>Virtual and in-person delivery</li>
            </ul>
            <h3>Prefer to talk?</h3>
            <p>
              Call or WhatsApp <a href={`tel:${SITE_PHONE}`}>{SITE_PHONE_DISPLAY}</a>.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
