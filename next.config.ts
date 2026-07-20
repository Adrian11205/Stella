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
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://back-pet-project.onrender.com/:path*',
      },
    ]
  },
  
}


export default nextConfig;
