/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/scrapbox-nextjs-template",
  images: {
    loader: "custom",
  },
  env: {
    scrapboxProject: "yuiseki-portfolio",
  },
};

module.exports = nextConfig;
