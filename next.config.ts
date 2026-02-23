import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true, // Compiles your React components to make them faster
  experimental: {
      turbopackFileSystemCacheForDev: true, // Caches your build
  }
};

export default nextConfig;
