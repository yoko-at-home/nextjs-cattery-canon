module.exports = {
  plugins: {
    "tailwindcss/nesting": {},
    "@tailwindcss/postcss": {
      config: "./tailwind.config.js",
    },
    autoprefixer: {},
  },
};
