import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"plus.unsplash.com"
      },
       {
        protocol:"https",
        hostname:"static.tildacdn.net"
      }
    ]
  }
};

export default nextConfig;
