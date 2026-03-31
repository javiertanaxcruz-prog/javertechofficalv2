import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/go/gen-z",
        destination: "https://gen-z-showcase--javiertanaxcruz.replit.app/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
