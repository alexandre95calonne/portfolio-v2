// metadata.ts est le fichier de configuration pour le SEO de votre application

import type { Metadata } from "next";

const title = "Alexandre Calonne - Développeur Full Stack";
const description =
  "Alexandre Calonne est un développeur full stack passionné par la création d'applications web innovantes et performantes.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  keywords: [
    "Développeur",
    "Full Stack",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "Kubernetes",
    "Cloud",
    "DevOps",
    "Alexandre Calonne",
  ],
  authors: [
    {
      name: "Alexandre Calonne",
      url: "https://alexandre-calonne.fr/",
    },
  ],
  creator: "Alexandre Calonne - Développeur Full Stack",
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
        url: "https://alexandre-calonne.fr/api/og",
        width: 1200,
        height: 630,
        alt: "Alexandre Calonne - Développeur Full Stack",
        type: "image/png",
        secureUrl: "https://alexandre-calonne.fr/api/og",
      },
    ],
    locale: "fr_FR",
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
      "fr-FR": "https://alexandre-calonne.fr",
    },
  },
  manifest: "/site.webmanifest",
};
