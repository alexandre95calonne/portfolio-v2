import { withSentryConfig } from "@sentry/nextjs";
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Désactivez Sentry si vous ne l'utilisez pas
  sentry: {
    disableServerWebpackPlugin: true,
    disableClientWebpackPlugin: true,
  },
  // Ajout de la configuration pour le rendu côté client
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

const config = withSentryConfig(
  nextConfig,
  {
    // Configurations Sentry
    silent: true, // Recommandé pour les nouveaux projets
  },
  {
    // Options additionnelles
  }
);

export default config;
