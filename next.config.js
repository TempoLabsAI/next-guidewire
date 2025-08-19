/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
      domains: ["images.unsplash.com"],
    },
    sassOptions: {
      includePaths: ["./node_modules"],
    },
  };
  
  module.exports = nextConfig;
  