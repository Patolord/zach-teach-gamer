import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "pbcdn1.podbean.com",
      },
      {
        protocol: "https",
        hostname: "g.foolcdn.com",
      },
      {
        protocol: "https",
        hostname: "hundred.org",
      },
    ],
  },
};

export default nextConfig;
