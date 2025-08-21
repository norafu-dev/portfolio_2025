import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/api/media/file/**",
      },
      {
        protocol: "https",
        hostname: process.env.SERVER_URL!,
        pathname: "/api/media/file/**",
      },
    ],
  },
};

export default withPayload(nextConfig);
