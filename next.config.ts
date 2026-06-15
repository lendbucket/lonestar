import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/www",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
