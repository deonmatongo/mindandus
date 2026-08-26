"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/lib/nav";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-nav">
      <button
        type="button"
        className={`menu-toggle${open ? " open" : ""}`}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {open && (
        <div className="mobile-menu-panel">
          <ul>
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/get-involved#contact"
            className="btn btn-primary btn-sm"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}
