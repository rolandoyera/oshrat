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
        destination: "/projects/aventura-modern-living-aventura-fl",
        permanent: true,
      },
      {
        source: "/south-beach",
        destination: "/projects/south-beach",
        permanent: true,
      },
      {
        source: "/projects/modern-marble-haven",
        destination: "/projects/modern-marble-haven-fort-lauderdale-fl",
        permanent: true,
      },
      {
        source: "/projects/elevated-primary-suite",
        destination: "/projects/elevated-primary-suite-fort-lauderdale-fl",
        permanent: true,
      },
      {
        source: "/projects/aventura-modern-living",
        destination: "/projects/aventura-modern-living-aventura-fl",
        permanent: true,
      },
      {
        source: "/projects/aventura-townhome",
        destination: "/projects/aventura-modern-living-aventura-fl",
        permanent: true,
      },
      {
        source: "/projects/the-shul-bal-harbour",
        destination: "/projects/the-shul-bal-harbour-bal-harbour-fl",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
