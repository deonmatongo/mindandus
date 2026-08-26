import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import TypingHeadline from "@/components/TypingHeadline";

const stripItems = ["EDUCATE", "CONNECT", "EMPOWER", "RESEARCH"];

const flowSteps = ["Awareness", "Understanding", "Conversation", "Support", "Change"];

const whoFor = [
  "Young people",
  "Families",
  "Men",
  "Women & mothers",
  "Workplaces",
  "Schools",
  "Universities",
  "Communities",
  "Zimbabweans abroad",
];

const exploreLinks = [
  { href: "/learn", title: "Learn", body: "Mental-health information built for Zimbabwean life." },
  { href: "/support", title: "Find Support", body: "If you're struggling, or worried about someone — start here." },
  { href: "/schools", title: "Schools", body: "Our first flagship programme for Zimbabwean secondary schools." },
  { href: "/about", title: "About", body: "What makes Mind&Us distinctive, and where we stand today." },
  { href: "/growth", title: "Growth", body: "How Mind&Us could grow, deliberately, around demonstrated impact." },
  { href: "/get-involved", title: "Get Involved", body: "Mind&Us grows through people, not just plans." },
];

const pillars = [
  {
    label: "01",
    title: "Educate",
    body: "Accessible, evidence-informed and culturally relevant mental-health information.",
  },
  {
    label: "02",
    title: "Connect",
    body: "Helping people understand and navigate appropriate pathways to support.",
  },
  {
    label: "03",
    title: "Empower",
    body: "Giving individuals, families and communities practical knowledge and skills that support mental wellbeing.",
  },
  {
    label: "04",
    title: "Research",
    body: "Building responsible Zimbabwean mental-health insight through evaluation, community participation and future research.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="hero-leaves hero-leaves-left" aria-hidden="true">
          <Image
            src="/hero-leaves.png"
            alt=""
            fill
            loading="eager"
            sizes="420px"
            style={{ objectFit: "contain", objectPosition: "top left" }}
          />
        </div>
        <div className="hero-leaves hero-leaves-right" aria-hidden="true">
          <Image
            src="/hero-leaves.png"
            alt=""
            fill
            loading="eager"
            sizes="420px"
            style={{ objectFit: "contain", objectPosition: "top right" }}
          />
        </div>
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">Zimbabwe · Diaspora · Mental wellness</p>
            <h1>
              <TypingHeadline />
            </h1>
            <p className="lede">
              Mind&amp;Us is a mental-wellness initiative for Zimbabweans
              at home and across the diaspora — built to move the
              conversation from awareness, to understanding, to
              conversation, to support, to change.
            </p>
            <p className="motto">Gentle toward the person. Bold toward the problem.</p>
            <div className="hero-actions">
              <a href="#pillars" className="btn btn-primary">Explore the four pillars</a>
              <Link href="/support" className="btn btn-ghost">Find support</Link>
            </div>
            <p className="hero-note">
              ◦ Mind&amp;Us is currently in the concept &amp; development
              stage — <Link href="/about#status">see where we are</Link>
            </p>
          </div>

          <div className="hero-photo">
            <Image
              src="/hero-illustration.png"
              alt="Illustration of a head in profile, filled with a meditating figure, hills, sunrise, a butterfly and flowering leaves"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
              className="hero-illustration-img"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </section>

      <div className="strip" aria-hidden="true">
        <div className="strip-track">
          {[...stripItems, ...stripItems].map((item, i) => (
            <span key={i}>
              {item}
              <span> ◦</span>
            </span>
          ))}
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">01 · The idea</p>
            <h2>Awareness isn&apos;t the same as understanding.</h2>
            <p>
              Awareness of mental health is growing across Zimbabwean
              communities — but knowledge gaps, misunderstanding and
              stigma still make it hard to recognise distress, talk about
              it openly, and know where to turn. Mind&amp;Us exists to
              close that gap, as a digital resource and community
              initiative first, with the long-term ambition of growing
              into a formal nonprofit.
            </p>
          </div>
          <div className="flow">
            {flowSteps.map((step, i) => (
              <Fragment key={step}>
                <span className="flow-step">{step}</span>
                {i < flowSteps.length - 1 && <span className="flow-arrow">→</span>}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tint">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">02 · Who Mind&amp;Us is for</p>
            <h2>For every Zimbabwean, wherever they are.</h2>
            <p>
              Across age groups, backgrounds and communities — within
              Zimbabwe and across the diaspora. Over time, specific
              resources and programmes will be shaped for:
            </p>
          </div>
          <div className="chip-list">
            {whoFor.map((item) => (
              <span className="chip" key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <h2>Vision &amp; mission</h2>
          </div>
          <div className="vision-band">
            <div className="vision-col">
              <span className="vision-label">Vision</span>
              <p>
                A future where every Zimbabwean, wherever they are, can
                understand their mental health, speak about it without
                shame, and access the support they need to thrive.
              </p>
            </div>
            <div className="vision-col">
              <span className="vision-label">Mission</span>
              <p>
                Mind&amp;Us works to improve mental-health literacy,
                challenge stigma and strengthen pathways to appropriate
                support for Zimbabweans at home and across the diaspora —
                through culturally relevant education, community
                programmes, partnerships and research.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="pillars">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">03 · Four pillars</p>
            <h2>What Mind&amp;Us stands on.</h2>
          </div>
          <div className="tags-grid">
            {pillars.map((pillar) => (
              <div className="plant-tag" key={pillar.title}>
                <div className="tag-hole"></div>
                <div className="species">{pillar.label}</div>
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tint">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Explore Mind&amp;Us</p>
            <h2>Everywhere this work shows up.</h2>
          </div>
          <div className="tags-grid">
            {exploreLinks.map((item) => (
              <Link href={item.href} className="plant-tag link-card" key={item.title}>
                <div className="tag-hole"></div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <span className="card-link">Visit page →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="status-band">
            <p>Mind&amp;Us is currently in the concept &amp; development stage.</p>
            <Link href="/about#status">See where we are →</Link>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="cta-band">
            <p className="eyebrow">Get involved</p>
            <h2>Help build Mind&amp;Us from day one.</h2>
            <p>
              Whether you&apos;re a partner, a school, a professional, or
              simply a Zimbabwean who wants to follow along — we&apos;d
              like to hear from you.
            </p>
            <Link href="/get-involved#contact" className="btn btn-on-dark">Get in touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
