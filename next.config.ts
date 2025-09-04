import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "/uploads/**",
      },
      // প্রোডাকশন ডোমেইন থাকলে এখানে যোগ করো
      // {
      //   protocol: "https",
      //   hostname: "api.mydomain.com",
      //   pathname: "/uploads/**",
      // },
    ],
  },
};

export default nextConfig;
