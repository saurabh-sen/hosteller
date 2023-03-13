/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images : {
    domains: ["dummyimage.com", "thumbs.dreamstime.com", "th.bing.com", "flowbite.com"],
  },
}

module.exports = nextConfig
