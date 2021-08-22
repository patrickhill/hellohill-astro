const theme = require("./tailwind-theme.js");

// tailwind.config.js
module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,ts,tsx,vue}"],
  theme: { ...theme },
  plugins: [require("@tailwindcss/typography")],
};
