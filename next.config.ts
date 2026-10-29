import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    // The old /services page was folded into the homepage. Keep old links working.
    return [{ source: "/services", destination: "/", permanent: false }];
  },
};

export default nextConfig;
