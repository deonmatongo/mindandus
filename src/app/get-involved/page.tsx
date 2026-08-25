import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Get Involved",
  description: "Mind&Us grows through people, not just plans.",
};

const groups = [
  {
    title: "Partners & funders",
    body: "Organisations who want to back a carefully-paced Zimbabwean mental-wellness initiative.",
  },
  {
    title: "Schools",
    body: "Interested in co-designing or hosting the first Mind&Us Schools pilot.",
  },
  {
    title: "Professionals & researchers",
    body: "Psychology, safeguarding, education, and mental-health research expertise.",
  },
  {
    title: "Diaspora & community",
    body: "Zimbabweans abroad who want to stay close to home through this work.",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <section className="page-hero">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Get involved</p>
            <h1>Mind&amp;Us grows through people, not just plans.</h1>
          </div>
          <div className="tags-grid">
            {groups.map((group) => (
              <div className="plant-tag" key={group.title}>
                <div className="tag-hole"></div>
                <h3>{group.title}</h3>
                <p>{group.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Contact</p>
            <h2>Say hello.</h2>
            <p>
              Whether you&apos;re a partner, a school, a professional, or
              simply a Zimbabwean who wants to follow along — we&apos;d
              like to hear from you.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
