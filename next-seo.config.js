/** @type {import('next-seo').DefaultSeoProps} */
const SEO = {
  title: "Alexandre Calonne",
  titleTemplate: "%s | Full Stack Developer",
  defaultTitle: "Alexandre Calonne - Full Stack Developer",
  description:
    "Full Stack Developer specialized in React, Next.js, and Node.js. Building modern web applications with a focus on performance and user experience.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexandre-calonne.fr",
    siteName: "Alexandre Calonne",
    images: [
      {
        url: "/meta/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Alexandre Calonne - Full Stack Developer",
      },
    ],
  },
  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
  robotsProps: {
    maxSnippet: -1,
    maxImagePreview: "large",
    maxVideoPreview: -1,
  },
};

export default SEO;
