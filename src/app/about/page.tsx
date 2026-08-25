import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "What makes Mind&Us distinctive, and where the initiative stands today.",
};

const distinctive = [
  "Zimbabwean at its core, while including Zimbabweans across the diaspora",
  "Culturally relevant, not imported mental-health messaging",
  "Designed to become multilingual — English, Shona and Ndebele",
  "Combines education, connection, community programming and research",
  "Warm and human, while maintaining evidence and professional boundaries",
  "Built to collaborate with existing services, not duplicate them",
];

export default function AboutPage() {
  return (
    <section className="page-hero">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">About Mind&amp;Us</p>
          <h1>What makes Mind&amp;Us distinctive</h1>
        </div>
        <ul className="bullet-list">
          {distinctive.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="section-head spaced" id="status">
          <p className="eyebrow">Current status</p>
          <h2>Concept &amp; development stage</h2>
          <p>
            Mind&amp;Us is currently in the concept and development
            stage. The brand direction, organisational purpose, four
            pillars, website concept and first flagship programme have
            been developed. The next priority is building the Version 1
            website while continuing professional review and
            preparation for the Mind&amp;Us Schools pilot. Mind&amp;Us
            is not currently a registered NGO, a clinical treatment
            provider, or an emergency service.
          </p>
        </div>
      </div>
    </section>
  );
}
