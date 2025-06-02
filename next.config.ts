import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ✅ clave para generar /out
  images:{
    unoptimized: true,
  },
  poweredByHeader: false,
  reactStrictMode: true,
  basePath: "",
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: ["antd", "@ant-design/icons"],
};

export default nextConfig;

