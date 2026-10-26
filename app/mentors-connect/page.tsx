import Link from "next/link";
import { MENTORS_CONNECT_URL, pageMeta } from "@/lib/site";

export const metadata = pageMeta(
  "MBB Mentors Connect | Connect with Mentors & Mentees Worldwide",
  "MBB Mentors Connect links grassroots mentees with global mentors and like-minded mentorship enthusiasts. Become a mentor, find a mentor or visit the platform.",
  "/mentors-connect/"
);

export default function MentorsConnectPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">MBB Mentors Connect</p>
          <h1>Connect. Mentor. Transform lives.</h1>
          <p>
            Where like-minded mentors across the country and the world connect with each other, and with mentees, for
            deeper, more meaningful mentorship.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="reveal">
            <p className="eyebrow">What is Mentors Connect?</p>
            <h2>A global mentorship community</h2>
            <p>
              MBB Mentors Connect is a platform that connects grassroots mentees with global mentors and like-minded
              individuals who are passionate about mentorship across countries and nations.
            </p>
            <p>
              Signing up is free. Create an account on the Mentors Connect portal with Mentorship Beyond Boundaries and
              start connecting.
            </p>
            <div className="btn-row">
              <a href={MENTORS_CONNECT_URL} className="btn" target="_blank" rel="noopener">
                Visit Mentors Connect
              </a>
              <Link href="/join/?role=mentor" className="btn btn-outline-dark">
                Become a Mentor
              </Link>
              <Link href="/join/?role=mentee" className="btn btn-outline-dark">
                Find a Mentor
              </Link>
            </div>
            <p className="alt-link" style={{ marginTop: "1rem" }}>
              Mentors Connect opens in a new tab on its own site. You can also <Link href="/join/">join MBB</Link> here
              to stay part of the wider community.
            </p>
          </div>
          <div className="reveal">
            <img
              className="photo"
              src="/assets/img/vc-mentorship-session.jpeg"
              width={576}
              height={367}
              alt="Two people in a mentorship conversation, one-on-one"
            />
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">How it works</p>
            <h2>Three simple steps</h2>
          </div>
          <div className="cards">
            <article className="card reveal">
              <div className="icon" aria-hidden="true">
                1️⃣
              </div>
              <h3>Visit the platform</h3>
              <p>Open MBB Mentors Connect from this website.</p>
            </article>
            <article className="card reveal">
              <div className="icon" aria-hidden="true">
                2️⃣
              </div>
              <h3>Create a free account</h3>
              <p>Sign up as a mentor or a mentee with Mentorship Beyond Boundaries.</p>
            </article>
            <article className="card reveal">
              <div className="icon" aria-hidden="true">
                3️⃣
              </div>
              <h3>Connect</h3>
              <p>Find the right mentor, or the right mentees, and start your mentorship journey.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="reveal">
              <h3>As a mentor</h3>
              <ul className="checklist">
                <li>Get interested mentees to mentor</li>
                <li>Share your expertise</li>
                <li>Inspire growth and make a lasting impact</li>
              </ul>
              <Link href="/join/?role=mentor" className="btn btn-navy">
                Become a Mentor
              </Link>
            </div>
            <div className="reveal">
              <h3>As a mentee</h3>
              <ul className="checklist">
                <li>Choose the right mentor for your growth and development</li>
                <li>Learn, connect and achieve your goals</li>
                <li>Access knowledge, guidance and support</li>
              </ul>
              <Link href="/join/?role=mentee" className="btn btn-navy">
                Find a Mentor
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section cream">
        <div className="container">
          <div className="values">
            <div className="value reveal">
              <div className="icon" aria-hidden="true">
                🌐
              </div>
              <h3>Global connections</h3>
              <p>Connect with mentors across the country and around the world.</p>
            </div>
            <div className="value reveal">
              <div className="icon" aria-hidden="true">
                🤝
              </div>
              <h3>Meaningful mentorship</h3>
              <p>Build authentic relationships that create opportunities.</p>
            </div>
            <div className="value reveal">
              <div className="icon" aria-hidden="true">
                📈
              </div>
              <h3>Grow. Learn. Lead.</h3>
              <p>Access knowledge, guidance and support for your full potential.</p>
            </div>
            <div className="value reveal">
              <div className="icon" aria-hidden="true">
                🛡️
              </div>
              <h3>Safe &amp; trusted</h3>
              <p>A supportive community for mentors and mentees.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>Join today. Be the change.</h2>
          <div className="btn-row center">
            <a href={MENTORS_CONNECT_URL} className="btn" target="_blank" rel="noopener">
              Visit Mentors Connect
            </a>
            <Link href="/join/" className="btn btn-outline">
              Join MBB
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
