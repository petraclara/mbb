import Link from "next/link";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta(
  "Our Impact | Youth Mentorship Across Kenya & Africa | MBB",
  "See MBB's impact: 100,000+ students reached, 10,000+ young professionals mentored, community projects, partnerships and mentorship across Africa.",
  "/impact/"
);

export default function ImpactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Our Impact</p>
          <h1>From a single campus to a mentorship movement</h1>
          <p>Transforming lives across Kenya, Africa and beyond: a culture of growth, transformation and leadership.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="stats stats-flat" aria-label="MBB impact in numbers">
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
              <span>Young professionals trained &amp; mentored from leading universities</span>
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
              <strong data-count="4">4</strong>
              <span>Partner organisations</span>
            </div>
          </div>

          <div className="section-head mt">
            <p className="eyebrow">What our mentorship has done</p>
            <h2>Impact in action</h2>
          </div>
          <div className="cards">
            <article className="card reveal">
              <div className="icon" aria-hidden="true">
                🎓
              </div>
              <h3>Students</h3>
              <p>Reached over 100,000 students in schools across Kenya, inspiring excellence, purpose and leadership.</p>
            </article>
            <article className="card reveal">
              <div className="icon" aria-hidden="true">
                💼
              </div>
              <h3>Young professionals</h3>
              <p>
                Trained and mentored over 10,000 young professionals from leading universities, nurturing confidence,
                communication and entrepreneurship.
              </p>
            </article>
            <article className="card reveal">
              <div className="icon" aria-hidden="true">
                🌍
              </div>
              <h3>Across Africa</h3>
              <p>
                Our community mentorship platform now reaches youth in Nigeria, South Sudan, Uganda, Ghana, Zambia and
                other countries.
              </p>
            </article>
            <article className="card reveal">
              <div className="icon" aria-hidden="true">
                👨‍👩‍👧‍👦
              </div>
              <h3>Parents &amp; teachers</h3>
              <p>
                We inspire parents, teachers and communities to nurture potential beyond performance, fostering holistic
                growth and lifelong purpose.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">In the field</p>
            <h2>Mentorship on the ground</h2>
          </div>
          <div className="gallery">
            <figure className="reveal">
              <img
                src="/assets/img/school-assembly.jpg"
                width={900}
                height={675}
                alt="Hundreds of students seated outdoors for an MBB mentorship session"
              />
              <figcaption>Large-scale school mentorship session, Kenya.</figcaption>
            </figure>
            <figure className="reveal">
              <img
                src="/assets/img/steep-stem-session.jpeg"
                width={900}
                height={673}
                alt="Students seated in a circle at a school during the STEEP STEM mentorship project"
              />
              <figcaption>STEM mentorship for girls under the STEEP Project, Kisumu County.</figcaption>
            </figure>
            <figure className="reveal">
              <img
                src="/assets/img/school-visit.jpeg"
                width={900}
                height={675}
                alt="MBB mentor with a group of secondary school students outside their school"
              />
              <figcaption>Meeting students after a school mentorship session.</figcaption>
            </figure>
            <figure className="reveal">
              <img
                src="/assets/img/vc-mentorship-session.jpeg"
                width={576}
                height={367}
                alt="Prof. Isaac Ipara Odeo and Brian Odhiambo in a one-on-one mentorship session"
              />
              <figcaption>
                One-on-one mentorship with Prof. Isaac Ipara Odeo, Vice Chancellor of Kibabii University.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Community initiatives</p>
            <h2>Beyond the classroom</h2>
          </div>
          <div className="split">
            <ul className="checklist reveal">
              <li>Donating mentorship books to community schools and libraries</li>
              <li>Supporting girl-child empowerment initiatives</li>
              <li>Supporting bright but needy students</li>
              <li>Providing guidance and counselling to young people</li>
            </ul>
            <ul className="checklist reveal">
              <li>STEM mentorship in community schools in Kisumu County under the STEEP Project</li>
              <li>Mentorship programs with schools, local organisations, NGOs and the Government of Kenya</li>
              <li>Reinvesting MBB Academy proceeds into grassroots mentorship</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section cream">
        <div className="container center">
          <p className="eyebrow">Partners</p>
          <h2>Extending mentorship access and certification opportunities</h2>
          <ul className="partners">
            <li>County Government of Kisumu</li>
            <li>CAP Youth Empowerment Institute</li>
            <li>Milimani United Community Empowerment</li>
            <li>Riena International</li>
          </ul>
          <p className="photo-cap">Partner logos will be added here.</p>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>Be part of the impact</h2>
          <p>Join our community, support a mentorship initiative or bring MBB to your school or organisation.</p>
          <div className="btn-row center">
            <Link href="/join/" className="btn">
              Join MBB
            </Link>
            <Link href="/partner/" className="btn btn-outline">
              Partner With Us
            </Link>
            <Link href="/stories/" className="btn btn-outline">
              Read stories
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
