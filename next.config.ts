import withRspack from 'next-rspack';
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  devIndicators: false,
  experimental: {
    reactCompiler: true,
  },
};

export default withRspack(nextConfig);
