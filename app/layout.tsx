import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const SITE_URL = "https://thechai.fyi";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Chaitanya Chaurasia (Chai) — Software Engineer",
    template: "%s — Chaitanya Chaurasia",
  },
  description:
    "Chaitanya Chaurasia (Chai) is a software engineer. Founding team at Mosaic, previously B:Side Capital. Writing on distributed systems, infra, and building products.",
  keywords: [
    "Chaitanya Chaurasia",
    "Chai",
    "ChaiT",
    "software engineer",
    "Mosaic",
    "portfolio",
    "distributed systems",
  ],
  authors: [{ name: "Chaitanya Chaurasia", url: SITE_URL }],
  creator: "Chaitanya Chaurasia",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    siteName: "Chaitanya Chaurasia",
    title: "Chaitanya Chaurasia (Chai) — Software Engineer",
    description:
      "Software engineer. Founding team at Mosaic, previously B:Side Capital. Writing on distributed systems, infra, and building products.",
    firstName: "Chaitanya",
    lastName: "Chaurasia",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 1200,
        alt: "Chaitanya Chaurasia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chaitanya Chaurasia (Chai) — Software Engineer",
    description:
      "Software engineer. Founding team at Mosaic, previously B:Side Capital.",
    images: ["/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Chaitanya Chaurasia",
  alternateName: ["Chai", "ChaiT"],
  url: SITE_URL,
  image: `${SITE_URL}/profile.jpg`,
  jobTitle: "Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Mosaic",
    url: "https://mosaic.so/",
  },
  email: "mailto:chaitanyalvis@gmail.com",
  sameAs: [
    "https://github.com/Chaitanya-Chaurasia",
    "https://linkedin.com/in/chai-t",
    "https://www.instagram.com/chaitanya_chaurasia/",
    "https://iamchai.substack.com",
  ],
  mainEntityOfPage: {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Chaitanya Chaurasia",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
