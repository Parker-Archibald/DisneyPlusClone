import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "links.papareact.com"
      },
      {
        protocol: 'http',
        hostname: "image.tmdb.org"
      }
    ]
  }
};

export default nextConfig;
