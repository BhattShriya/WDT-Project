/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/WDT-Project',
  assetPrefix: '/WDT-Project/',
  images: {
    unoptimized: true,
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
