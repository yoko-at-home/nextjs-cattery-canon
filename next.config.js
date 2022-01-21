/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  rewrites: async () => {
    return [{ source: "/", destination: "/root" }];
  },
  i18n: { locales: ["ja"], defaultLocale: "ja" },
  future: { strictPostcssConfiguration: true },
  pageExtensions: [".tsx", ".ts", ".jsx", ".js"],
  reactStrictMode: true,
  poweredByHeader: false,
};

module.exports = withPWA({
  nextConfig,
  typescript: { ignoreDevErrors: true },
  images: {
    domains: ["images.microcms-assets.io"],
  },
  pwa: {
    dest: "public",
    register: true,
    disable: isProd ? false : true,
    sw: "service-worker.js",
  },
});
