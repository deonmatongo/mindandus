"use client";

import { useState, type FormEvent } from "react";

const whatsappNumber = "48514110168";

type Status = "idle" | "sent";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");

    const text = `New message from Mind&Us website\n\nName: ${name}\nEmail: ${email}\n\n${message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank", "noopener,noreferrer");
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <p className="form-note">
        We&apos;ve opened WhatsApp with your message ready — just hit
        send there to reach the Mind&amp;Us team.
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
      <button type="submit" className="btn btn-primary">
        Send via WhatsApp
      </button>
      <p className="form-note">
        Sending this opens WhatsApp with your message pre-filled to the
        Mind&amp;Us team.
      </p>
    </form>
  );
}
