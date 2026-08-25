"use client";

import { useState, type FormEvent } from "react";

const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!formspreeId) {
      setStatus("sent");
      return;
    }

    setStatus("sending");
    const form = e.currentTarget;

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      setStatus(response.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p className="form-note">
        Thank you — your message is on its way to the Mind&amp;Us team.
      </p>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} required />
      </div>
      <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      {status === "error" && (
        <p className="form-note">
          Something went wrong sending that — please try again in a
          moment.
        </p>
      )}
      {!formspreeId && (
        <p className="form-note">
          This preview isn&apos;t wired up to a real inbox yet.
        </p>
      )}
    </form>
  );
}
