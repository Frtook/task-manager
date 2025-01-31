import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  productionBrowserSourceMaps: false,
  experimental: {
    serverComponentsExternalPackages: ["react-dev-utils"],
  },
};

export default nextConfig;
