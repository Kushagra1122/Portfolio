import { SiteShell } from "@/components/layout/SiteShell";
import { content } from "@/content/site";
import { siteConfig } from "@/content/site";
import {
  absoluteUrl,
  organizationJsonLd,
  websiteJsonLd,
} from "@/utils/seo";
import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${content.name} — ${content.title}`,
    template: `%s — ${content.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Kushagra Tiwari",
    "Software Engineer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend",
    "DevOps",
    "QA Engineer",
    "AI Agents",
    "Platform Engineering",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: content.name }],
  creator: content.name,
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: absoluteUrl("/"),
    title: `${content.name} — ${content.title}`,
    description: siteConfig.description,
    siteName: `${content.name} Portfolio`,
    images: [
      {
        url: absoluteUrl("/media/hero/poster.jpg"),
        width: 1280,
        height: 720,
        alt: `${content.name} portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${content.name} — ${content.title}`,
    description: siteConfig.description,
    images: [absoluteUrl("/media/hero/poster.jpg")],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [organizationJsonLd(), websiteJsonLd()];

  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${jetbrains.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-[var(--accent)] focus:px-3 focus:py-2 focus:text-[var(--bg)]"
        >
          Skip to content
        </a>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
