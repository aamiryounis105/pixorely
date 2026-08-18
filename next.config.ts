import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "pixorely.com",
          },
        ],
        destination: "https://www.pixorely.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
