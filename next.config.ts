import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: {
    qualities: [50, 75, 90, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/publications",
        destination: "/press",
        permanent: true,
      },
      {
        source: "/aventura-townhome",
        destination: "/projects/aventura-townhome",
        permanent: true,
      },
      {
        source: "/south-beach",
        destination: "/projects/south-beach",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
