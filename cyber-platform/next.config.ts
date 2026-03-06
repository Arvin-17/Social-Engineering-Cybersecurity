import type { NextConfig } from "next";

const repoName = 'Social-Engineering-Cybersecurity'; // <-- Change this to your actual GitHub repo name if different

const nextConfig: NextConfig = {
  output: "export", // <-- This is the most important line!
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? `/${repoName}` : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? `/${repoName}/` : '',
};

export default nextConfig;