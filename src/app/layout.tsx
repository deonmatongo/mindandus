import type { Metadata } from "next";
import { Cormorant_Garamond, Karla, IBM_Plex_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const description =
  "Mind&Us is a mental-wellness initiative for Zimbabweans at home and across the diaspora — mental-health information, support pathways and culturally relevant resources.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mind&Us — Your mind matters, always has.",
    template: "%s — Mind&Us",
  },
  description,
  openGraph: {
    type: "website",
    siteName: "Mind&Us",
    title: "Mind&Us — Your mind matters, always has.",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Mind&Us — Your mind matters, always has.",
    description,
  },
  icons: {
    icon: "/mind-and-us-mark.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${karla.variable} ${plexMono.variable}`}
    >
      <body suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
