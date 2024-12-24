/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Remove appDir as it's no longer needed in Next.js 14
  },
  images: {
    domains: ["alexandre-calonne.vercel.app"], // Add any image domains you need
  },
};

export default nextConfig;
