const theme = require("./tailwind-theme.js");

// tailwind.config.js
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,ts,tsx,vue}"],
  theme: { ...theme },
};
