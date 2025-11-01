import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: false, // ensures PostCSS usage
  },
};

export default nextConfig;
