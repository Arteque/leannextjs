import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns: [
      new URL("https://asek.academy/wp-content/uploads/**"),
    ]
  }
};

export default nextConfig;
