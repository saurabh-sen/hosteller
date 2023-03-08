/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images : {
    domains: ["dummyimage.com", "thumbs.dreamstime.com", "th.bing.com"],
  },
}

module.exports = nextConfig
