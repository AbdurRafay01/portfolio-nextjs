module.exports = {
  overrides: [
    {
      files: ["*.mdx"],
      options: {
        proseWrap: "always",
      },
    },
  ],
  plugins: ["prettier-plugin-tailwindcss"],
};
