import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schools",
  description: "Our proposed first real-world programme for Zimbabwean secondary schools.",
};

const steps = [
  {
    num: "Students",
    title: "Understand yourself",
    body: "Mental-health literacy, coping, stigma reduction, and appropriate help-seeking.",
  },
  {
    num: "Teachers",
    title: "Recognise. Respond. Refer.",
    body: "Helping teachers notice concerns, respond supportively, and use appropriate safeguarding and referral routes — without becoming therapists.",
  },
  {
    num: "Parents & caregivers",
    title: "Understand. Listen. Support.",
    body: "Helping families understand adolescent wellbeing and build more supportive conversations at home.",
  },
];

export default function SchoolsPage() {
  return (
    <section className="page-hero">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">First flagship programme</p>
          <h1>Mind&amp;Us Schools</h1>
          <p>
            Our proposed first real-world programme, initially focused on
            Zimbabwean secondary and high-school communities — pupils
            roughly aged 13–18. The plan is to pilot in one school,
            evaluate safety, acceptability and outcomes, refine it, and
            only then consider expansion.
          </p>
        </div>
        <div className="steps">
          {steps.map((step) => (
            <div className="step" key={step.num}>
              <span className="num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
