import Link from "next/link";
import SiteForm from "@/components/SiteForm";
import { pageMeta, SITE_PHONE, SITE_PHONE_DISPLAY } from "@/lib/site";

export const metadata = pageMeta(
  "Apply to MBB Academy | Mentorship & Leadership Training",
  "Apply to the MBB Academy: choose a 1, 3 or 4-month program and Foundation or Intermediate modules, including speaking, branding, leadership, authorship and entrepreneurship.",
  "/apply/"
);

export default function ApplyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">MBB Academy</p>
          <h1>Apply to MBB Academy</h1>
          <p>
            Choose your program length and modules, tell us about yourself and the MBB team will confirm your place and
            next steps.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container form-wrap">
          <SiteForm subject="MBB Academy application">
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
                Program length
                <select name="duration" required>
                  <option value="1 month" data-key="1">
                    1 month: KSh 6,000 (groups of 10+: KSh 5,000)
                  </option>
                  <option value="3 months" data-key="3">
                    3 months: KSh 18,000 (groups of 10+: KSh 16,000)
                  </option>
                  <option value="4 months" data-key="4">
                    4 months: KSh 24,000 (groups of 10+: KSh 23,000)
                  </option>
                </select>
              </label>
              <label>
                Preferred mode
                <select name="mode" required>
                  <option>Virtual</option>
                  <option>In-person</option>
                  <option>Either</option>
                </select>
              </label>
            </div>
            <div className="row two">
              <label>
                Applying as
                <select name="applying_as" required>
                  <option value="Individual" data-key="individual">
                    Individual (standard rate)
                  </option>
                  <option value="Group of 10 or more" data-key="group">
                    Group of 10 or more (group rate)
                  </option>
                </select>
              </label>
              <label data-show-when="applying_as=group" hidden>
                Number of participants <span className="opt">(10 or more)</span>
                <input type="number" name="group_size" min={10} required />
              </label>
            </div>
            <div className="row two">
              <label>
                I am a
                <select name="who_you_are" required>
                  <option value="">Select…</option>
                  <option>Student</option>
                  <option>Young professional</option>
                  <option>Aspiring mentor</option>
                  <option>Emerging leader</option>
                  <option>Educator / school leader</option>
                  <option>Community organisation representative</option>
                  <option>Other</option>
                </select>
              </label>
              <label>
                Organisation / school <span className="opt">(optional)</span> <input type="text" name="organisation" />
              </label>
            </div>
            <fieldset className="checks">
              <legend>Level 1 · Foundation</legend>
              <label>
                <input type="checkbox" name="modules" value="Module I: Professional Speaking" /> Module I: Professional
                Speaking
              </label>
              <label>
                <input
                  type="checkbox"
                  name="modules"
                  value="Module II: Hybrid Branding (Professional and Personal Branding)"
                />{" "}
                Module II: Hybrid Branding (Professional &amp; Personal Branding)
              </label>
              <label>
                <input type="checkbox" name="modules" value="Module III: Personal Development" /> Module III: Personal
                Development
              </label>
            </fieldset>
            <fieldset className="checks">
              <legend>Level 2 · Intermediate</legend>
              <label>
                <input type="checkbox" name="modules" value="Module IV: Leadership" /> Module IV: Leadership
              </label>
              <label>
                <input type="checkbox" name="modules" value="Module V: Authorship" /> Module V: Authorship
              </label>
              <label>
                <input type="checkbox" name="modules" value="Module VI: Entrepreneurship" /> Module VI: Entrepreneurship
              </label>
            </fieldset>
            <label>
              Why do you want to join the Academy?
              <textarea name="motivation" rows={5} required />
            </label>
            <div className="hp" aria-hidden="true">
              <label>
                Leave this empty <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
              </label>
            </div>
            <button type="submit" className="btn">
              Submit application
            </button>
            <p className="form-status" role="status" aria-live="polite" />
            <p className="alt-link">
              Prefer Google Forms?{" "}
              <a href="https://forms.gle/yXqr4ujsiqMniNa29" target="_blank" rel="noopener">
                Use the original Academy application form
              </a>
              .
            </p>
          </SiteForm>

          <aside className="form-help reveal">
            <h3>Academy rates</h3>
            <ul>
              <li>
                <strong>1 month</strong>: KSh 6,000
              </li>
              <li>
                <strong>3 months</strong>: KSh 18,000
              </li>
              <li>
                <strong>4 months</strong>: KSh 24,000
              </li>
            </ul>
            <h3>Group rates (10 or more)</h3>
            <ul>
              <li>
                <strong>1 month</strong>: KSh 5,000 each
              </li>
              <li>
                <strong>3 months</strong>: KSh 16,000 each
              </li>
              <li>
                <strong>4 months</strong>: KSh 23,000 each
              </li>
            </ul>
            <h3>Level 1 · Foundation</h3>
            <ul>
              <li>Module I: Professional Speaking</li>
              <li>Module II: Hybrid Branding</li>
              <li>Module III: Personal Development</li>
            </ul>
            <h3>Level 2 · Intermediate</h3>
            <ul>
              <li>Module IV: Leadership</li>
              <li>Module V: Authorship</li>
              <li>Module VI: Entrepreneurship</li>
            </ul>
            <h3>Payment</h3>
            <p style={{ fontSize: "0.9rem" }}>
              As published by MBB: M-Pesa Paybill <strong>522 522</strong>, Account No. <strong>1902 888</strong>.
            </p>
            <h3>Questions?</h3>
            <p>
              Call or WhatsApp <a href={`tel:${SITE_PHONE}`}>{SITE_PHONE_DISPLAY}</a>, or read more about the{" "}
              <Link href="/academy/">MBB Academy</Link>.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
