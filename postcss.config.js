module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-nesting": {},
    "@tailwindcss/postcss": {
      config: "./tailwind.config.js",
    },
    autoprefixer: {},
  },
};
