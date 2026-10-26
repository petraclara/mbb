import Link from "next/link";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta(
  "Mentorship Stories | Real Stories of Growth & Purpose | MBB",
  "Read mentorship stories from the MBB community: reflections on identity, purpose, environment, investing in your twenties and life after graduation.",
  "/stories/"
);

const STORIES_URL = "https://mentorshipbeyondboundaries.wordpress.com/category/mentorship-stories/";

export default function StoriesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Mentorship Stories</p>
          <h1>Real stories that inspire young people to unlock their potential</h1>
          <p>
            Reflective personal stories of people who have overcome challenges on their journey toward achieving their
            dreams.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cards">
            <article className="story reveal">
              <time dateTime="2025-12-03">3 December 2025</time>
              <h2 style={{ fontSize: "1.2rem" }}>Change Your Environment</h2>
              <p>
                Your environment shapes who you become. A shark grows only 8 inches in a fish tank, but in the ocean it
                can grow 8 feet or more. A reflection on personal growth and success.
              </p>
              <a className="link-arrow" href={STORIES_URL} target="_blank" rel="noopener">
                Read the full story →
              </a>
            </article>
            <article className="story reveal">
              <time dateTime="2025-11-27">27 November 2025</time>
              <h2 style={{ fontSize: "1.2rem" }}>Investing in Your Twenties</h2>
              <p>
                The five greatest investments every young person should make, and why money is not the only resource
                worth investing.
              </p>
              <a className="link-arrow" href={STORIES_URL} target="_blank" rel="noopener">
                Read the full story →
              </a>
            </article>
            <article className="story reveal">
              <time dateTime="2025-11-25">25 November 2025</time>
              <h2 style={{ fontSize: "1.2rem" }}>Lack of Mentorship</h2>
              <p>
                A roadblock many never see coming. Why mentorship is one of the greatest needs in the life of a young
                person.
              </p>
              <a className="link-arrow" href={STORIES_URL} target="_blank" rel="noopener">
                Read the full story →
              </a>
            </article>
            <article className="story reveal">
              <time dateTime="2025-11-21">21 November 2025</time>
              <h2 style={{ fontSize: "1.2rem" }}>Excuse of Money</h2>
              <p>
                The lie that has killed more dreams than failure itself, and the most common excuse young dreamers give.
              </p>
              <a className="link-arrow" href={STORIES_URL} target="_blank" rel="noopener">
                Read the full story →
              </a>
            </article>
            <article className="story reveal">
              <time dateTime="2025-11-20">20 November 2025</time>
              <h2 style={{ fontSize: "1.2rem" }}>What Next After Graduation?</h2>
              <p>
                A mentorship story of purpose, growth and transformation, and the silent question many students carry:
                “after graduation… what next?”
              </p>
              <a className="link-arrow" href={STORIES_URL} target="_blank" rel="noopener">
                Read the full story →
              </a>
            </article>
            <article className="story reveal">
              <time dateTime="2025-11-20">20 November 2025</time>
              <h2 style={{ fontSize: "1.2rem" }}>Struggle With Identity</h2>
              <p>
                My journey to finding myself: a personal story of struggling from a young age to understand who I truly
                was.
              </p>
              <a className="link-arrow" href={STORIES_URL} target="_blank" rel="noopener">
                Read the full story →
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container split">
          <div className="reveal">
            <p className="eyebrow">Share your story</p>
            <h2>Mentors and mentees: your story could inspire someone</h2>
            <p>
              If you have been mentored by MBB, or have mentored a young person through MBB, we would love to feature
              your testimony: your journey, the outcome and what it meant to you.
            </p>
            <Link href="/contact/?topic=story" className="btn">
              Share your story
            </Link>
          </div>
          <div className="reveal note-box">
            <strong>What a story includes</strong>
            <ul className="checklist">
              <li>Who you are, or the program you were part of</li>
              <li>A photo (optional)</li>
              <li>Your story and the outcome</li>
              <li>A short testimonial</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>Start your own mentorship story</h2>
          <div className="btn-row center">
            <Link href="/join/" className="btn">
              Join MBB
            </Link>
            <Link href="/apply/" className="btn btn-outline">
              Apply to MBB Academy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
