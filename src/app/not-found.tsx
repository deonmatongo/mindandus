import Link from "next/link";

export default function NotFound() {
  return (
    <section className="final-cta">
      <div className="wrap">
        <p className="eyebrow">404</p>
        <h1>This page hasn&apos;t taken root yet.</h1>
        <p>
          The page you&apos;re looking for doesn&apos;t exist, or may have
          moved.
        </p>
        <Link href="/" className="btn btn-primary">Back to home</Link>
      </div>
    </section>
  );
}
