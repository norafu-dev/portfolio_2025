import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "blob.vercel-storage.com",
        pathname: "/**",
      },
    ],
    // 添加本地域名支持
    domains: ["localhost"],
  },
};

export default withPayload(nextConfig);
