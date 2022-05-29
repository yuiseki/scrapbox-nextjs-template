/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === "development" ? "" : process.env.BASE_PATH,
  env: {
    scrapboxProject: process.env.SCRAPBOX_PROJECT,
    siteName: process.env.SITE_NAME,
  },
};

module.exports = nextConfig;
