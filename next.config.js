/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: { locales: ["ja"], defaultLocale: "ja" },
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    domains: ["images.microcms-assets.io", "localhost"],
  },
};

module.exports = nextConfig;
