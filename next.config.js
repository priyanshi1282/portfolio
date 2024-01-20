const { SERVER_PROPS_GET_INIT_PROPS_CONFLICT } = require('next/dist/lib/constants')

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "skillicons.dev",
        },
        {
          protocol: "https",
          hostname: "ik.imagekit.io",
        },
        {
          protocol: "https",
          hostname: "assets.holopin.io",
        },
      ],
      dangerouslyAllowSVG: true,
    },
  };
  
  module.exports = nextConfig;
