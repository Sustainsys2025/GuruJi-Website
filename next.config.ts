import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/GuruJi-Website",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
