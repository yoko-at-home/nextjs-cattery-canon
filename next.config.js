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

module.exports = {
  nextConfig,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["images.unsplash.com", "source.unsplash.com", "unsplash.com", "images.microcms-assets.io"],
  },
};
