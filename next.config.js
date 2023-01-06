/** @type {import('next').NextConfig} */
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

module.exports = nextConfig;
