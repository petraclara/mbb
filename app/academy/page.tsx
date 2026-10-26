import Link from "next/link";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta(
  "MBB Academy | Foundation & Intermediate Mentorship Modules",
  "The MBB Academy has two levels: Foundation (professional speaking, hybrid branding, personal development) and Intermediate (leadership, authorship, entrepreneurship).",
  "/academy/"
);

export default function AcademyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">MBB Academy</p>
          <h1>Awakening potential. Building leaders. Transforming communities.</h1>
          <p>
            The training and capacity-building arm of Mentorship Beyond Boundaries, offered both virtually and in
            person.
          </p>
          <div className="btn-row" style={{ marginTop: "1.5rem" }}>
            <Link href="/apply/" className="btn">
              Apply Now
            </Link>
            <a href="#modules" className="btn btn-outline">
              See the modules
            </a>
            <a href="#pricing" className="btn btn-outline">
              See the rates
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="reveal">
            <p className="eyebrow">About the Academy</p>
            <h2>A structured learning platform for young people</h2>
            <p>
              MBB Academy equips young people with essential skills in <strong>communication</strong>,{" "}
              <strong>personal development</strong> and <strong>leadership</strong>. Participants take part in mentorship
              sessions, skills workshops and guided learning experiences that prepare them for education, career
              pathways and responsible leadership in their communities.
            </p>
            <p>
              The Academy is also how we sustain our mission: <strong>funds raised are reinvested</strong> in mentorship
              activities in community schools and grassroots organisations, so vulnerable and underserved young people
              keep access to guidance, opportunity and hope.
            </p>
          </div>
          <div className="reveal">
            <h3>Who should apply?</h3>
            <ul className="checklist">
              <li>Students and young people ready to grow</li>
              <li>Young professionals and emerging leaders</li>
              <li>Aspiring mentors</li>
              <li>Community-based organisations, school leaders and educators</li>
              <li>Institutions interested in mentorship programs</li>
            </ul>
            <h3 style={{ marginTop: "1.5rem" }}>Benefits</h3>
            <ul className="checklist">
              <li>One-on-one mentorship from experienced MBB mentors</li>
              <li>
                Access to professional networks and global mentors through{" "}
                <Link href="/mentors-connect/">MBB Mentors Connect</Link>
              </li>
              <li>Practical skills and real-world knowledge</li>
              <li>Learning resources, tools and expert guidance</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section on-dark" id="modules">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">What you’ll learn</p>
            <h2>Two levels. Six modules.</h2>
            <p>
              Start with Foundation, then move to Intermediate: speaking, branding, personal development, leadership,
              authorship and entrepreneurship.
            </p>
          </div>
          <div className="level-group reveal" id="level-1">
            <h3>Level 1 · Foundation</h3>
            <p>Build your voice, your brand and your character.</p>
            <div className="levels">
              <article className="level" id="module-1">
                <span className="badge">Module I</span>
                <h4>Professional Speaking</h4>
                <p className="focus">Communication &amp; confidence</p>
                <p>Build confidence and master the art of powerful communication.</p>
              </article>
              <article className="level l2" id="module-2">
                <span className="badge">Module II</span>
                <h4>Hybrid Branding</h4>
                <p className="focus">Professional &amp; personal branding</p>
                <p>
                  Build a professional and personal brand that gives you confidence and visibility in your field.
                </p>
              </article>
              <article className="level l3" id="module-3">
                <span className="badge">Module III</span>
                <h4>Personal Development</h4>
                <p className="focus">Mindset, discipline &amp; purpose</p>
                <p>Grow your mindset, discipline and purpose-driven living.</p>
              </article>
            </div>
          </div>
          <div className="level-group reveal" id="level-2">
            <h3>Level 2 · Intermediate</h3>
            <p>Grow into leadership, authorship and entrepreneurship.</p>
            <div className="levels">
              <article className="level" id="module-4">
                <span className="badge">Module IV</span>
                <h4>Leadership</h4>
                <p className="focus">Leadership for real-world impact</p>
                <p>Develop practical leadership skills and the capacity to guide and impact others.</p>
              </article>
              <article className="level l2" id="module-5">
                <span className="badge">Module V</span>
                <h4>Authorship</h4>
                <p className="focus">Writing &amp; publishing</p>
                <p>Sharpen your writing and storytelling, find your voice and move toward publishing.</p>
              </article>
              <article className="level l3" id="module-6">
                <span className="badge">Module VI</span>
                <h4>Entrepreneurship</h4>
                <p className="focus">Starting &amp; growing ventures</p>
                <p>Learn how to turn ideas into enterprises and create opportunities for yourself and others.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt" id="pricing">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Rates</p>
            <h2>Choose how long you’d like to learn</h2>
            <p>
              Pick the duration that suits you. <strong>Groups of 10 or more get a discounted rate</strong> for every
              participant.
            </p>
          </div>
          <div className="levels">
            <article className="level reveal" id="one-month">
              <span className="badge">1 month</span>
              <h3>1-Month Program</h3>
              <p className="fee">
                KSh 6,000 <small>per participant</small>
              </p>
              <p className="group-rate">
                👥 Groups of 10+: <strong>KSh 5,000</strong> each
              </p>
              <div className="card-actions btn-row">
                <Link href="/apply/?duration=1" className="btn">
                  Apply Now
                </Link>
                <Link href="/apply/?duration=1&applying_as=group" className="btn btn-outline-dark">
                  Apply as a group
                </Link>
              </div>
            </article>
            <article className="level l2 reveal" id="three-months">
              <span className="badge">3 months</span>
              <h3>3-Month Program</h3>
              <p className="fee">
                KSh 18,000 <small>per participant</small>
              </p>
              <p className="group-rate">
                👥 Groups of 10+: <strong>KSh 16,000</strong> each
              </p>
              <div className="card-actions btn-row">
                <Link href="/apply/?duration=3" className="btn">
                  Apply Now
                </Link>
                <Link href="/apply/?duration=3&applying_as=group" className="btn btn-outline-dark">
                  Apply as a group
                </Link>
              </div>
            </article>
            <article className="level l3 reveal" id="four-months">
              <span className="badge">4 months</span>
              <h3>4-Month Program</h3>
              <p className="fee">
                KSh 24,000 <small>per participant</small>
              </p>
              <p className="group-rate">
                👥 Groups of 10+: <strong>KSh 23,000</strong> each
              </p>
              <div className="card-actions btn-row">
                <Link href="/apply/?duration=4" className="btn">
                  Apply Now
                </Link>
                <Link href="/apply/?duration=4&applying_as=group" className="btn btn-outline-dark">
                  Apply as a group
                </Link>
              </div>
            </article>
          </div>
          <p className="center" style={{ marginTop: "1.5rem", fontSize: "0.85rem" }}>
            Group rates apply to groups of 10 or more participants, such as schools, institutions, organisations and
            teams. Virtual and in-person options available. When you apply, tell us which modules you are interested in
            and the MBB team will confirm your details.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="reveal">
            <img
              className="photo"
              src="/assets/img/school-visit.jpeg"
              width={900}
              height={675}
              alt="MBB mentor with secondary school students after a mentorship session"
            />
          </div>
          <div className="reveal">
            <p className="eyebrow">Sustainable impact</p>
            <h2>Your growth funds someone else’s</h2>
            <p>
              Every Academy fee supports mentorship in community schools and grassroots organisations. When you invest
              in yourself with MBB, you also help a young person who might otherwise never have access to a mentor.
            </p>
            <p>
              The Academy works closely with partners, mentors and community leaders to expand its reach and deepen its
              impact, building a future where every young person has access to guidance, opportunity and hope.
            </p>
            <h3>💬 Ready to start your journey?</h3>
            <div className="btn-row">
              <Link href="/apply/" className="btn">
                Apply to MBB Academy
              </Link>
              <Link href="/contact/" className="btn btn-outline-dark">
                Ask a question
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
