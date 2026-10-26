import Link from "next/link";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta(
  "Mentorship Programs for Students, Youth & Professionals | MBB Kenya",
  "Explore MBB mentorship programs: student mentorship, young professionals, community mentorship, writers and authors, public speaking and mentors training.",
  "/programs/"
);

export default function ProgramsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Programs</p>
          <h1>Mentorship programs that shape character, vision and resilience</h1>
          <p>
            Through mentorship, coaching and consultancy, MBB guides young people from school to career to community
            leadership. Need coaching or consultancy?{" "}
            <Link href="/book/" style={{ color: "#fff", fontWeight: 700 }}>
              Book MBB
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <nav className="prog-nav" aria-label="Jump to a program">
            <a href="#students">Students</a>
            <a href="#professionals">Young Professionals</a>
            <a href="#community">Community</a>
            <a href="#writers">Writers &amp; Authors</a>
            <a href="#speaking">Public Speaking</a>
            <a href="#mentors-training">Mentors Training</a>
            <a href="#eagles">Eagles’ Program</a>
            <a href="#digital">Digital</a>
            <a href="#schools">Schools &amp; Institutions</a>
            <a href="#publications">Publications &amp; Media</a>
            <a href="#forums">Leadership Forums</a>
            <a href="#empowerment">Community Empowerment</a>
          </nav>

          <div className="section-head mt">
            <p className="eyebrow">Core mentorship programs</p>
            <h2>Who we mentor</h2>
          </div>
          <div className="cards">
            <article className="card reveal" id="students">
              <div className="icon" aria-hidden="true">
                🎓
              </div>
              <h3>Students’ Mentorship</h3>
              <p className="tag">Adolescents · Junior &amp; high school</p>
              <p>
                Helping adolescents discover who they are, embrace their uniqueness and understand why education
                matters, with a focus on identity, purpose and personal growth.
              </p>
              <div className="card-actions btn-row">
                <Link href="/join/?role=mentee" className="btn btn-sm">
                  Join this program
                </Link>
                <Link href="/book/?type=institution" className="btn btn-sm btn-outline-dark">
                  Book for a school
                </Link>
              </div>
            </article>
            <article className="card reveal" id="professionals">
              <div className="icon" aria-hidden="true">
                💼
              </div>
              <h3>Young Professionals’ Mentorship</h3>
              <p className="tag">College &amp; university · Early career</p>
              <p>
                Preparing students and young professionals for life after graduation with career readiness, leadership
                and personal growth.
              </p>
              <div className="card-actions btn-row">
                <Link href="/join/?role=mentee" className="btn btn-sm">
                  Join this program
                </Link>
                <Link href="/apply/" className="btn btn-sm btn-outline-dark">
                  Apply to the Academy
                </Link>
              </div>
            </article>
            <article className="card reveal" id="community">
              <div className="icon" aria-hidden="true">
                🌍
              </div>
              <h3>Community Mentorship</h3>
              <p className="tag">Marginalized &amp; vulnerable youth</p>
              <p>
                Supporting young people to rise above challenges such as abuse, poverty and GBV, and to pursue their
                dreams.
              </p>
              <div className="card-actions btn-row">
                <Link href="/join/" className="btn btn-sm">
                  Get involved
                </Link>
                <Link href="/partner/" className="btn btn-sm btn-outline-dark">
                  Support this work
                </Link>
              </div>
            </article>
            <article className="card reveal" id="writers">
              <div className="icon" aria-hidden="true">
                📚
              </div>
              <h3>Writers’ &amp; Authors’ Mentorship</h3>
              <p className="tag">Mentorship Publications</p>
              <p>
                Mentoring aspiring writers to find their voice, polish their writing and guide them toward publishing.
              </p>
              <div className="card-actions btn-row">
                <Link href="/join/?role=mentee" className="btn btn-sm">
                  Join this program
                </Link>
              </div>
            </article>
            <article className="card reveal" id="speaking">
              <div className="icon" aria-hidden="true">
                🎤
              </div>
              <h3>Public Speaking Training</h3>
              <p className="tag">Communication &amp; confidence</p>
              <p>
                Build confidence and master the art of powerful communication, including professional speaking and
                personal branding.
              </p>
              <div className="card-actions btn-row">
                <Link href="/join/?role=mentee" className="btn btn-sm">
                  Join this program
                </Link>
                <Link href="/book/" className="btn btn-sm btn-outline-dark">
                  Book MBB
                </Link>
              </div>
            </article>
            <article className="card reveal" id="mentors-training">
              <div className="icon" aria-hidden="true">
                🧭
              </div>
              <h3>Mentors Training</h3>
              <p className="tag">Aspiring mentors &amp; facilitators</p>
              <p>
                Train to become an effective mentor and facilitator, building the leadership capacity that powers our
                Cascade Mentorship Model.
              </p>
              <div className="card-actions btn-row">
                <Link href="/join/?role=mentor" className="btn btn-sm">
                  Become a Mentor
                </Link>
                <Link href="/academy/#modules" className="btn btn-sm btn-outline-dark">
                  Academy modules
                </Link>
              </div>
            </article>
          </div>

          <div className="section-head mt">
            <p className="eyebrow">How we deliver impact</p>
            <h2>Initiatives &amp; engagements</h2>
          </div>
          <div className="cards">
            <article className="card reveal" id="eagles">
              <div className="icon" aria-hidden="true">
                🦅
              </div>
              <h3>Eagles’ Mentorship Program</h3>
              <p>
                Structured modules on mindset, communication, leadership and personal growth, delivered through the
                Eagle Mentorship Model.
              </p>
            </article>
            <article className="card reveal" id="digital">
              <div className="icon" aria-hidden="true">
                💻
              </div>
              <h3>Digital Mentorship</h3>
              <p>
                Online sessions, webinars and resources accessible anywhere, plus global connections through{" "}
                <Link href="/mentors-connect/">MBB Mentors Connect</Link>.
              </p>
            </article>
            <article className="card reveal" id="schools">
              <div className="icon" aria-hidden="true">
                🏫
              </div>
              <h3>School &amp; Institutional Engagements</h3>
              <p>Workshops, talks and mentorship sessions that build life skills and career readiness for students.</p>
              <div className="card-actions">
                <Link href="/book/?type=institution" className="btn btn-sm">
                  Invite MBB to your institution
                </Link>
              </div>
            </article>
            <article className="card reveal" id="publications">
              <div className="icon" aria-hidden="true">
                📖
              </div>
              <h3>Publications &amp; Media</h3>
              <p>
                Eagles’ Magazine, books and multimedia content for motivation and guidance, including our{" "}
                <Link href="/stories/">mentorship stories</Link>.
              </p>
            </article>
            <article className="card reveal" id="forums">
              <div className="icon" aria-hidden="true">
                🌟
              </div>
              <h3>Leadership &amp; Empowerment Forums</h3>
              <p>
                Connecting young professionals and leaders with experts through networking, innovation and mentorship.
              </p>
            </article>
            <article className="card reveal" id="empowerment">
              <div className="icon" aria-hidden="true">
                🤝
              </div>
              <h3>Community Empowerment</h3>
              <p>
                Mentorship-driven projects and social initiatives for youth and local communities, including girl-child
                empowerment and STEM mentorship.
              </p>
              <div className="card-actions">
                <Link href="/partner/" className="btn btn-sm btn-outline-dark">
                  Partner with us
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>Not sure which program is right for you?</h2>
          <p>Tell us about yourself and the MBB team will point you to the best fit.</p>
          <div className="btn-row center">
            <Link href="/join/" className="btn">
              Join MBB
            </Link>
            <Link href="/contact/" className="btn btn-outline">
              Ask us a question
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
