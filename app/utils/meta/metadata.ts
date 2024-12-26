// metadata.ts est le fichier de configuration pour le SEO de votre application

import type { Metadata } from "next";

const title = "Alexandre Calonne - Full Stack Developer";
const description =
  "Full Stack Developer specialized in React, Next.js, and Node.js. Building modern web applications with a focus on performance and user experience.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  keywords: [
    "Developer",
    "Shopify",
    "Ecommerce",
    "Liquid",
    "Landing Page",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Nuxt.js",
    "Vue.js",
    "Tailwind",
    "Alexandre Calonne",
    "Web Development",
    "Frontend",
  ],
  authors: [
    {
      name: "Alexandre Calonne",
      url: "https://alexandre-calonne.fr/",
    },
  ],
  creator: "Alexandre Calonne - Full Stack Developer",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title,
    description,
    url: "https://alexandre-calonne.fr",
    siteName: "Alexandre Calonne",
    images: [
      {
        url: "/meta/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Alexandre Calonne - Full Stack Developer",
        type: "image/webp",
        secureUrl: "https://alexandre-calonne.fr/meta/og-image.webp",
      },
    ],
    locale: "en_US",
    type: "profile",
    firstName: "Alexandre",
    lastName: "Calonne",
    username: "alexandrecalonne",
    gender: "male",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://alexandre-calonne.fr",
    languages: {
      "en-US": "https://alexandre-calonne.fr",
    },
  },
  manifest: "/site.webmanifest",
};
