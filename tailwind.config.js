/** @type {import('tailwindcss').Config} */

const { color } = require("framer-motion");
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode : 'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-montserrat) ", ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        secondary: "#3A86FF", // 58,230,217
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px, #f5f5f5 100px);",
        circularDark:"repeating-radial-gradient(rgba(255,255,255,0.7) 2px,#1b1b1b 5px, #1b1b1b 100px);"

      },
    },
  },
  plugins: [],
};
