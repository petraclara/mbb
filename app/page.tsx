import Link from "next/link";
import { pageMeta, SITE_EMAIL, SITE_PHONE } from "@/lib/site";

export const metadata = pageMeta(
  "Mentorship Beyond Boundaries | Mentorship, Coaching & Consultancy in Kenya",
  "MBB offers mentorship, coaching and consultancy for young people, schools and organisations in Kenya and beyond. Join, apply to the MBB Academy or book a session.",
  "/"
);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mentorship Beyond Boundaries",
  alternateName: "MBB",
  slogan: "Unlock Potential. Create Opportunities.",
  description:
    "A youth-led global community offering mentorship, coaching and consultancy. Based in Kisumu, Kenya. Impacting communities globally.",
  knowsAbout: ["Mentorship", "Coaching", "Consultancy", "Youth leadership development"],
  email: SITE_EMAIL,
  telephone: SITE_PHONE,
  founder: { "@type": "Person", name: "Brian Odhiambo" },
  address: { "@type": "PostalAddress", addressLocality: "Kisumu", addressCountry: "KE" },
};

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Youth-led · Global · Purpose-driven</p>
          <h1>
            Unlock Potential. <span>Create Opportunities.</span>
          </h1>
          <ul className="service-tags" aria-label="Our services">
            <li>Mentorship</li>
            <li>Coaching</li>
            <li>Consultancy</li>
          </ul>
          <p className="lead">
            Mentorship Beyond Boundaries (MBB) inspires, motivates and equips adolescents, students, youth and young
            professionals to live purpose-driven lives and transform their communities.
          </p>
          <div className="btn-row">
            <Link href="/join/" className="btn">
              Join MBB
            </Link>
            <Link href="/apply/" className="btn btn-outline">
              Apply to MBB Academy
            </Link>
          </div>
          <p className="hero-links">
            <Link href="/book/">Book MBB →</Link> <Link href="/partner/">Partner With Us →</Link>{" "}
            <Link href="/programs/">Explore Programs →</Link>
          </p>
        </div>
      </section>

      <div className="container">
        <div className="stats" aria-label="MBB impact in numbers">
          <div className="stat reveal">
            <strong className="plus" data-count="100000">
              100,000
            </strong>
            <span>Students reached in schools across Kenya</span>
          </div>
          <div className="stat reveal">
            <strong className="plus" data-count="10000">
              10,000
            </strong>
            <span>Young professionals trained &amp; mentored</span>
          </div>
          <div className="stat reveal">
            <strong className="plus" data-count="5">
              5
            </strong>
            <span>Years of grassroots mentorship</span>
          </div>
          <div className="stat reveal">
            <strong className="plus" data-count="6">
              6
            </strong>
            <span>African countries reached</span>
          </div>
          <div className="stat reveal">
            <strong data-count="6">6</strong>
            <span>Academy modules across Foundation and Intermediate levels</span>
          </div>
        </div>
      </div>

      <section className="section cream" id="services">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">What we offer</p>
            <h2>Mentorship, Coaching and Consultancy</h2>
            <p>MBB offers three core services to young people, schools, institutions, organisations and communities.</p>
          </div>
          <div className="cards">
            <article className="card reveal">
              <div className="icon" aria-hidden="true">
                🧭
              </div>
              <h3>Mentorship</h3>
              <p>
                Guidance from experienced mentors that helps students, young professionals and communities discover
                purpose, build skills and create opportunities.
              </p>
              <div className="card-actions">
                <Link className="link-arrow" href="/programs/">
                  Explore mentorship programs →
                </Link>
              </div>
            </article>
            <article className="card reveal">
              <div className="icon" aria-hidden="true">
                🎯
              </div>
              <h3>Coaching</h3>
              <p>
                Focused, personalised coaching that helps you set goals, grow in confidence and take action on your
                purpose, one-on-one or in groups.
              </p>
              <div className="card-actions">
                <Link className="link-arrow" href="/book/?service=coaching">
                  Book coaching →
                </Link>
              </div>
            </article>
            <article className="card reveal">
              <div className="icon" aria-hidden="true">
                💡
              </div>
              <h3>Consultancy</h3>
              <p>
                Expert advice for schools, institutions and organisations on designing and delivering mentorship,
                leadership and youth empowerment programs.
              </p>
              <div className="card-actions">
                <Link className="link-arrow" href="/book/?type=institution&service=consultancy">
                  Request consultancy →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="reveal">
            <p className="eyebrow">Who we are</p>
            <h2>Mentorship that goes beyond academics</h2>
            <p>
              MBB is a youth-led global mentorship and empowerment community platform. For five years we have worked
              with young people, community schools, local organisations, non-profits, institutions and the Government of
              Kenya to deliver mentorship that creates lasting change.
            </p>
            <p>
              We shape character, vision and resilience, guiding young people to discover who they are, why education
              matters and how to build a purposeful future.
            </p>
            <p>
              <strong>Who we serve</strong>
            </p>
            <ul className="chips">
              <li>Adolescents</li>
              <li>School students</li>
              <li>University students</li>
              <li>Young professionals</li>
              <li>Community youth</li>
              <li>Mentors</li>
              <li>Schools &amp; institutions</li>
              <li>Partners</li>
            </ul>
            <Link className="link-arrow" href="/about/">
              Read our story →
            </Link>
          </div>
          <div className="reveal">
            <img
              className="photo"
              src="/assets/img/school-assembly.jpg"
              width={900}
              height={675}
              alt="Hundreds of school students seated outdoors under trees during an MBB mentorship session in Kenya"
            />
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Programs</p>
            <h2>Mentorship for every stage of life</h2>
            <p>Find the program that fits where you are, from school to career to community leadership.</p>
          </div>
          <div className="cards">
            <article className="card reveal">
              <div className="icon" aria-hidden="true">
                🎓
              </div>
              <h3>Students’ Mentorship</h3>
              <p>
                Helping adolescents in junior and high school discover who they are, embrace their uniqueness and
                understand why education matters.
              </p>
              <div className="card-actions">
                <Link className="link-arrow" href="/programs/#students">
                  Learn more →
                </Link>
              </div>
            </article>
            <article className="card reveal">
              <div className="icon" aria-hidden="true">
                💼
              </div>
              <h3>Young Professionals’ Mentorship</h3>
              <p>
                Career readiness, leadership and personal growth for college and university students and young
                professionals.
              </p>
              <div className="card-actions">
                <Link className="link-arrow" href="/programs/#professionals">
                  Learn more →
                </Link>
              </div>
            </article>
            <article className="card reveal">
              <div className="icon" aria-hidden="true">
                🌍
              </div>
              <h3>Community Mentorship</h3>
              <p>
                Supporting marginalized and vulnerable youth to rise above abuse, poverty and GBV, and pursue their
                dreams.
              </p>
              <div className="card-actions">
                <Link className="link-arrow" href="/programs/#community">
                  Learn more →
                </Link>
              </div>
            </article>
            <article className="card reveal">
              <div className="icon" aria-hidden="true">
                📚
              </div>
              <h3>Writers’ &amp; Authors’ Mentorship</h3>
              <p>Helping aspiring writers find their voice, polish their writing and move toward publishing.</p>
              <div className="card-actions">
                <Link className="link-arrow" href="/programs/#writers">
                  Learn more →
                </Link>
              </div>
            </article>
          </div>
          <p className="center mt">
            <Link href="/programs/" className="btn btn-navy">
              See all programs
            </Link>
          </p>
        </div>
      </section>

      <section className="section on-dark">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">MBB Academy</p>
            <h2>Foundation, then Intermediate: six modules</h2>
            <p>
              The training and capacity-building arm of MBB, offered virtually and in person. Choose a 1, 3 or 4-month
              program.
            </p>
          </div>
          <div className="level-group reveal">
            <h3>Level 1 · Foundation</h3>
            <div className="levels">
              <article className="level">
                <span className="badge">Module I</span>
                <h4>Professional Speaking</h4>
                <p>Build confidence and master powerful communication.</p>
              </article>
              <article className="level l2">
                <span className="badge">Module II</span>
                <h4>Hybrid Branding</h4>
                <p>Professional and personal branding for visibility in your field.</p>
              </article>
              <article className="level l3">
                <span className="badge">Module III</span>
                <h4>Personal Development</h4>
                <p>Grow your mindset, discipline and purpose-driven living.</p>
              </article>
            </div>
          </div>
          <div className="level-group reveal">
            <h3>Level 2 · Intermediate</h3>
            <div className="levels">
              <article className="level">
                <span className="badge">Module IV</span>
                <h4>Leadership</h4>
                <p>Practical leadership skills for real-world impact.</p>
              </article>
              <article className="level l2">
                <span className="badge">Module V</span>
                <h4>Authorship</h4>
                <p>Sharpen your writing and move toward publishing.</p>
              </article>
              <article className="level l3">
                <span className="badge">Module VI</span>
                <h4>Entrepreneurship</h4>
                <p>Turn ideas into enterprises and create opportunities.</p>
              </article>
            </div>
          </div>
          <div className="price-row">
            <span>
              <b>1 month</b> · KSh 6,000<em>Groups of 10+: KSh 5,000 each</em>
            </span>
            <span>
              <b>3 months</b> · KSh 18,000<em>Groups of 10+: KSh 16,000 each</em>
            </span>
            <span>
              <b>4 months</b> · KSh 24,000<em>Groups of 10+: KSh 23,000 each</em>
            </span>
          </div>
          <div className="btn-row center mt">
            <Link href="/apply/" className="btn">
              Apply Now
            </Link>
            <Link href="/academy/" className="btn btn-outline">
              Learn more about the Academy
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split reverse">
          <div className="reveal">
            <p className="eyebrow">MBB Mentors Connect</p>
            <h2>Connect with mentors across the world</h2>
            <p>
              MBB Mentors Connect is our platform that links grassroots mentees with global mentors and like-minded
              people who are passionate about mentorship, across countries and nations.
            </p>
            <div className="btn-row">
              <Link href="/mentors-connect/" className="btn btn-navy">
                How it works
              </Link>
              <a
                href="https://quality-education-edu-mentor.vercel.app/"
                className="btn btn-outline-dark"
                target="_blank"
                rel="noopener"
              >
                Visit Mentors Connect
              </a>
            </div>
          </div>
          <div className="reveal">
            <img
              className="photo"
              src="/assets/img/vc-mentorship-session.jpeg"
              width={576}
              height={367}
              alt="A one-on-one mentorship session between Prof. Isaac Ipara Odeo, Vice Chancellor of Kibabii University, and MBB founder Brian Odhiambo"
            />
            <p className="photo-cap">
              One-on-one mentorship: Prof. Isaac Ipara Odeo, Vice Chancellor of Kibabii University, with MBB founder
              Brian Odhiambo.
            </p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Mentorship Stories</p>
            <h2>Real stories of growth and purpose</h2>
            <p>Reflections that inspire young people to unlock their potential and pursue a purposeful life.</p>
          </div>
          <div className="cards">
            <article className="story reveal">
              <time dateTime="2025-12-03">3 December 2025</time>
              <h3>Change Your Environment</h3>
              <p>
                A shark grows only 8 inches in a fish tank, but in the ocean it can grow 8 feet or more. Your environment
                shapes who you become.
              </p>
              <Link className="link-arrow" href="/stories/">
                Read more →
              </Link>
            </article>
            <article className="story reveal">
              <time dateTime="2025-11-20">20 November 2025</time>
              <h3>What Next After Graduation?</h3>
              <p>
                A mentorship story of purpose, growth and transformation, and the silent question many students carry.
              </p>
              <Link className="link-arrow" href="/stories/">
                Read more →
              </Link>
            </article>
            <article className="story reveal">
              <time dateTime="2025-11-20">20 November 2025</time>
              <h3>Struggle With Identity</h3>
              <p>
                My journey to finding myself: a personal story of struggling from a young age to understand who I truly
                was.
              </p>
              <Link className="link-arrow" href="/stories/">
                Read more →
              </Link>
            </article>
          </div>
          <p className="center mt">
            <Link href="/stories/" className="btn btn-navy">
              All stories
            </Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container center">
          <p className="eyebrow">Partners</p>
          <h2>Working together for lasting impact</h2>
          <ul className="partners">
            <li>County Government of Kisumu</li>
            <li>CAP Youth Empowerment Institute</li>
            <li>Milimani United Community Empowerment</li>
            <li>Riena International</li>
          </ul>
          <p>
            <Link className="link-arrow" href="/partner/">
              Become a partner →
            </Link>
          </p>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>Ready to unlock your potential?</h2>
          <p>
            Join the movement, start the Academy or partner with us to bring mentorship to your school, institution or
            community.
          </p>
          <div className="btn-row center">
            <Link href="/join/" className="btn">
              Join MBB
            </Link>
            <Link href="/apply/" className="btn btn-outline">
              Apply to MBB Academy
            </Link>
            <Link href="/partner/" className="btn btn-outline">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
