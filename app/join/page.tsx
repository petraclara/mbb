import Link from "next/link";
import SiteForm from "@/components/SiteForm";
import { pageMeta, SITE_PHONE, SITE_PHONE_DISPLAY } from "@/lib/site";

export const metadata = pageMeta(
  "Join MBB | Become a Mentee, Mentor or Community Member",
  "Join the Mentorship Beyond Boundaries movement. Sign up as a mentee, mentor, volunteer or community member and unlock your potential.",
  "/join/"
);

export default function JoinPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Join MBB</p>
          <h1>Join the movement</h1>
          <p>Whether you want a mentor, want to become one, or want to be part of the community, start here.</p>
        </div>
      </section>

      <section className="section">
        <div className="container form-wrap">
          <SiteForm subject="Join MBB: new member">
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
                Town / country <input type="text" name="location" autoComplete="address-level2" required />
              </label>
            </div>
            <div className="row two">
              <label>
                I want to join as
                <select name="role" required>
                  <option value="Mentee (find a mentor)" data-key="mentee">
                    Mentee: find a mentor
                  </option>
                  <option value="Mentor" data-key="mentor">
                    Mentor: guide young people
                  </option>
                  <option value="Community member" data-key="community">
                    Community member
                  </option>
                  <option value="Volunteer" data-key="volunteer">
                    Volunteer
                  </option>
                </select>
              </label>
              <label>
                I am a
                <select name="who_you_are" required>
                  <option value="">Select…</option>
                  <option>Adolescent / school student</option>
                  <option>University or college student</option>
                  <option>Young professional</option>
                  <option>Professional / experienced mentor</option>
                  <option>Parent or community member</option>
                  <option>Teacher / school leader</option>
                  <option>Other</option>
                </select>
              </label>
            </div>
            <label>
              What are you hoping to gain or contribute? <span className="opt">(optional)</span>
              <textarea name="message" rows={4} />
            </label>
            <div className="hp" aria-hidden="true">
              <label>
                Leave this empty <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
              </label>
            </div>
            <button type="submit" className="btn">
              Join MBB
            </button>
            <p className="form-status" role="status" aria-live="polite" />
            <p className="alt-link">
              Prefer Google Forms?{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd4DC5rPPpnZ7LXERQQFBsxuHw6D54AZ3pZ-Fkbyhuh0gQbug/viewform?usp=dialog"
                target="_blank"
                rel="noopener"
              >
                Use the original sign-up form
              </a>
              .
            </p>
          </SiteForm>

          <aside className="form-help reveal">
            <h3>What happens next?</h3>
            <ul>
              <li>The MBB team reviews your details and gets in touch.</li>
              <li>
                Mentees and mentors can also connect on <Link href="/mentors-connect/">MBB Mentors Connect</Link>.
              </li>
              <li>
                Want structured training? <Link href="/apply/">Apply to the MBB Academy</Link>.
              </li>
            </ul>
            <h3>Questions?</h3>
            <p>
              WhatsApp or call <a href={`tel:${SITE_PHONE}`}>{SITE_PHONE_DISPLAY}</a>.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
