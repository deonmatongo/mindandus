import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/nav";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header>
      <div className="wrap">
        <nav>
          <Link href="/" className="logo">
            <Image src="/mind-and-us-mark.png" alt="Mind&Us" width={60} height={60} priority />
          </Link>
          <div className="nav-links-wrap">
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
            <div className="nav-cta">
              <Link href="/get-involved#contact" className="btn btn-primary btn-sm">Contact</Link>
            </div>
          </div>
          <MobileMenu />
        </nav>
      </div>
    </header>
  );
}
