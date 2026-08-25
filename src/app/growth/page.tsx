import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Growth",
  description: "How Mind&Us could grow, deliberately, around demonstrated need and impact.",
};

const stages = [
  { num: "Stage 1", body: "Build the brand, website and initial evidence-informed resource library." },
  { num: "Stage 2", body: "Establish professional advisers, safeguarding systems and verified support pathways." },
  { num: "Stage 3", body: "Co-design and pilot Mind&Us Schools in one Zimbabwean school." },
  { num: "Stage 4", body: "Evaluate the pilot, publish appropriate impact findings, and improve the programme." },
  { num: "Stage 5", body: "Develop partnerships and expand carefully to additional schools and communities." },
  { num: "Stage 6", body: "Develop the appropriate Zimbabwean nonprofit/NGO legal and governance structure." },
  { num: "Stage 7", body: "Seek grants, research collaborations, corporate partnerships and diaspora support based on demonstrated impact." },
  { num: "Long term", body: "Grow into a trusted Zimbabwean mental-wellness organisation serving people at home and abroad." },
];

const futureFamily = [
  "Mind&Us Learn",
  "Mind&Us Connect",
  "Mind&Us Schools",
  "Mind&Us Campus",
  "Mind&Us Work",
  "Mind&Us Diaspora",
  "Mind&Us Research & Insights",
];

const governance = [
  "A governing board with independent expertise",
  "A Clinical & Safeguarding Advisory Group",
  "Expertise in psychology, child protection, education, finance and legal/governance",
  "Clear safeguarding, referral, privacy and data-protection procedures",
  "Clinical review of all mental-health content",
  "Transparent monitoring, evaluation and reporting",
];

export default function GrowthPage() {
  return (
    <>
      <section className="page-hero">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Long-term model</p>
            <h1>How Mind&amp;Us could grow</h1>
            <p>
              Deliberately, around demonstrated need and impact — not by
              launching every possible service at once.
            </p>
          </div>
          <div className="stage-list">
            {stages.map((stage) => (
              <div className="stage-item" key={stage.num}>
                <span className="stage-num">{stage.num}</span>
                <p>{stage.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Possible future programme family</p>
            <h2>Where Mind&amp;Us could expand</h2>
          </div>
          <div className="chip-list">
            {futureFamily.map((item) => (
              <span className="chip" key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Governance &amp; credibility</p>
            <h2>Before Mind&amp;Us presents itself as a clinical service</h2>
            <p>
              Or expands into higher-risk programmes, it will establish
              appropriate oversight:
            </p>
          </div>
          <ul className="bullet-list">
            {governance.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
