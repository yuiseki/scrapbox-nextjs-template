/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath:
    process.env.NODE_ENV === "development" ? "" : "/scrapbox-nextjs-template",
  images: {
    loader: "custom",
  },
  env: {
    scrapboxProject: "scrapbox-nextjs-template",
    siteName: "scrapbox-nextjs-template",
  },
};

module.exports = nextConfig;
