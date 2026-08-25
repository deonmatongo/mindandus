import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn",
  description: "Mental-health information built for Zimbabwean life.",
};

const topics = [
  {
    title: "Understanding anxiety & depression",
    body: "What these experiences can look and feel like, in plain, non-clinical language.",
  },
  {
    title: "Talking to your family about it",
    body: "Opening a conversation at home when the subject still feels difficult to raise.",
  },
  {
    title: "Supporting a friend who's struggling",
    body: "What to say, what to avoid, and when to encourage professional help.",
  },
  {
    title: "Grief & loss in Zimbabwean culture",
    body: "Holding mourning traditions and mental wellbeing together, not apart.",
  },
  {
    title: "Work stress & burnout",
    body: "Recognising the signs before they become a crisis, at home or abroad.",
  },
  {
    title: "Mental health across generations",
    body: "Bridging how different generations were taught to see the mind.",
  },
];

export default function LearnPage() {
  return (
    <section className="page-hero">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Learn</p>
          <h1>Mental-health information built for Zimbabwean life.</h1>
          <p>
            Mobile-first, easy to update, and designed from day one for
            English, Shona and Ndebele content — not a translated
            afterthought. The Version 1 resource library is in
            development. Planned starting topics:
          </p>
        </div>
        <div className="tags-grid">
          {topics.map((topic) => (
            <div className="plant-tag" key={topic.title}>
              <div className="tag-hole"></div>
              <h3>{topic.title}</h3>
              <p>{topic.body}</p>
              <span className="badge">In development</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
