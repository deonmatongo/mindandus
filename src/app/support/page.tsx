import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find Support",
  description: "If you're struggling, or worried about someone — start here.",
};

const notList = [
  "An online therapy service",
  "A diagnostic or self-diagnosis tool",
  "An AI therapist or chatbot",
  "A crisis-response service",
  "A large, unverified provider directory",
  "A replacement for qualified professional care",
];

export default function SupportPage() {
  return (
    <>
      <section className="page-hero">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Find support</p>
            <h1>If you&apos;re struggling, or worried about someone — start here.</h1>
            <p>Mind&amp;Us helps you understand the next step. It is not the next step itself.</p>
          </div>

          <div className="tags-grid cols-2">
            <div className="plant-tag">
              <div className="tag-hole"></div>
              <h3>I&apos;m struggling</h3>
              <p>
                <strong>You don&apos;t need a diagnosis to deserve
                support.</strong> Start by naming what you&apos;re feeling
                to one person you trust — a friend, family member,
                teacher, or community or faith leader. From there, we
                help you understand what kinds of support exist and how
                to reach them.
              </p>
            </div>
            <div className="plant-tag">
              <div className="tag-hole"></div>
              <h3>I&apos;m worried about someone</h3>
              <p>
                <strong>Notice with warmth, not alarm.</strong> Ask
                directly, listen without rushing to fix it, and help them
                find a qualified professional or trusted local service.
                You don&apos;t have to carry it, or solve it, alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="danger-note">
            <h3>In immediate danger?</h3>
            <p>
              If you or someone else is in immediate danger, contact your
              local emergency services or go to the nearest hospital
              right away.
            </p>
            <p>
              Verified local crisis lines and services for Zimbabwe and
              the diaspora will be listed here once confirmed.
            </p>
          </div>

          <div className="section-head">
            <h2>What the Mind&amp;Us website will not be</h2>
          </div>
          <ul className="bullet-list not-list">
            {notList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
