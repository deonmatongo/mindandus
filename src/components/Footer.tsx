import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    heading: "Explore",
    links: [
      { href: "/learn", label: "Learn" },
      { href: "/support", label: "Find Support" },
      { href: "/schools", label: "Schools" },
    ],
  },
  {
    heading: "Organisation",
    links: [
      { href: "/about", label: "About" },
      { href: "/growth", label: "Growth" },
      { href: "/get-involved", label: "Get Involved" },
      { href: "/get-involved#contact", label: "Contact" },
    ],
  },
];

export default function Footer() {
  return (
    <>
      <section className="in-short">
        <div className="wrap">
          <p className="eyebrow">In short</p>
          <blockquote>
            To build a trusted Zimbabwean mental-wellness organisation that
            helps people understand their minds, speak without shame, find
            appropriate support, and strengthen wellbeing within families
            and communities — wherever Zimbabweans are.
          </blockquote>
          <p className="motto">Gentle toward the person. Bold toward the problem.</p>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-brand-mark">
                <Image src="/mind-and-us-mark.png" alt="Mind&Us" width={40} height={40} />
                <span>Mind&amp;Us</span>
              </div>
              <p className="eyebrow">Zimbabwe · Diaspora · Mental wellness</p>
              <p>
                A mental-wellness initiative for Zimbabweans at home and
                across the diaspora — currently in the concept &amp;
                development stage.
              </p>
            </div>

            {columns.map((col) => (
              <div className="footer-col" key={col.heading}>
                <span className="footer-col-heading">{col.heading}</span>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.label}><Link href={link.href}>{link.label}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="footer-bottom">
            <p className="footer-disclaimer">
              Mind&amp;Us is a mental-wellness concept currently in
              development. It is not a registered NGO, a diagnostic
              service, or a substitute for professional care.
            </p>
            <span className="footer-copyright">© 2026 Mind&amp;Us</span>
          </div>
        </div>
      </footer>
    </>
  );
}
