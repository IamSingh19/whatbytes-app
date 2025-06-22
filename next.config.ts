import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['assets.ajio.com', 'm.media-amazon.com','imgs.search.brave.com'], // add your image domain here
  },
};

export default nextConfig;
