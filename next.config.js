/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // OpenNext handles image optimization on Cloudflare
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Remove static export - OpenNext handles deployment
  // trailingSlash: true, // Remove for better SSR compatibility
}

module.exports = nextConfig