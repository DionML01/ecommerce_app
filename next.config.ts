import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    turbo: false, // Explicitly disable Turbopack to use webpack
  },
};

export default nextConfig;
