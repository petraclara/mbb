import Link from "next/link";
import SiteForm from "@/components/SiteForm";
import { pageMeta, SITE_EMAIL, SITE_PHONE, SITE_PHONE_DISPLAY } from "@/lib/site";

export const metadata = pageMeta(
  "Partner With MBB | Schools, NGOs, Companies & Sponsors | Mentorship Beyond Boundaries",
  "Partner with Mentorship Beyond Boundaries, invite MBB to your institution or sponsor a mentorship initiative that reaches young people in Kenya and Africa.",
  "/partner/"
);

export default function PartnerPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Partner With Us</p>
          <h1>Let’s unlock potential together</h1>
          <p>
            Schools, universities, NGOs, companies, government institutions, community organisations and sponsors:
            choose how you would like to work with MBB.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cards">
            <article className="card reveal">
              <div className="icon" aria-hidden="true">
                🤝
              </div>
              <h3>Partner With MBB</h3>
              <p>Collaborate on mentorship programs, training and community initiatives that reach more young people.</p>
              <div className="card-actions">
                <a className="link-arrow" href="#partner-form" data-how="partner">
                  Start a partnership →
                </a>
              </div>
            </article>
            <article className="card reveal">
              <div className="icon" aria-hidden="true">
                🏫
              </div>
              <h3>Invite MBB to Your Institution</h3>
              <p>Bring mentorship sessions, workshops and talks to your school, university or organisation.</p>
              <div className="card-actions">
                <Link className="link-arrow" href="/book/?type=institution">
                  Book MBB →
                </Link>
              </div>
            </article>
            <article className="card reveal">
              <div className="icon" aria-hidden="true">
                💛
              </div>
              <h3>Sponsor a Mentorship Initiative</h3>
              <p>
                Support mentorship in community schools and grassroots organisations, including girl-child empowerment
                and bright but needy students.
              </p>
              <div className="card-actions">
                <a className="link-arrow" href="#partner-form" data-how="sponsor">
                  Become a sponsor →
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section alt" id="partner-form">
        <div className="container form-wrap">
          <SiteForm subject="MBB partnership enquiry">
            <div className="row two">
              <label>
                Organisation name <input type="text" name="organisation" required />
              </label>
              <label>
                Contact person <input type="text" name="name" autoComplete="name" required />
              </label>
            </div>
            <div className="row two">
              <label>
                Email <input type="email" name="email" autoComplete="email" required />
              </label>
              <label>
                Phone / WhatsApp <input type="tel" name="phone" autoComplete="tel" required />
              </label>
            </div>
            <div className="row two">
              <label>
                Organisation type
                <select name="organisation_type" required>
                  <option value="">Select…</option>
                  <option>School</option>
                  <option>University / college</option>
                  <option>NGO / non-profit</option>
                  <option>Company</option>
                  <option>Government institution</option>
                  <option>Community organisation</option>
                  <option>Individual sponsor</option>
                  <option>Other</option>
                </select>
              </label>
              <label>
                How would you like to partner?
                <select name="how" required>
                  <option value="Partner with MBB" data-key="partner">
                    Partner with MBB
                  </option>
                  <option value="Invite MBB to our institution" data-key="invite">
                    Invite MBB to our institution
                  </option>
                  <option value="Sponsor a mentorship initiative" data-key="sponsor">
                    Sponsor a mentorship initiative
                  </option>
                  <option value="Another way" data-key="other">
                    Another way
                  </option>
                </select>
              </label>
            </div>
            <label>
              Tell us about your idea
              <textarea name="message" rows={5} required />
            </label>
            <div className="hp" aria-hidden="true">
              <label>
                Leave this empty <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
              </label>
            </div>
            <button type="submit" className="btn">
              Send partnership enquiry
            </button>
            <p className="form-status" role="status" aria-live="polite" />
          </SiteForm>

          <aside className="form-help reveal">
            <h3>Our partners</h3>
            <ul>
              <li>County Government of Kisumu</li>
              <li>CAP Youth Empowerment Institute</li>
              <li>Milimani United Community Empowerment</li>
              <li>Riena International</li>
            </ul>
            <h3>Talk to us</h3>
            <p>
              Call or WhatsApp <a href={`tel:${SITE_PHONE}`}>{SITE_PHONE_DISPLAY}</a>
              <br />
              or email <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
