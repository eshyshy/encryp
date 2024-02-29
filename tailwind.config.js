/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

module.exports = {
  content: [
    "./pages/index/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      ...colors,
      primary: colors.purple,
      secondary: colors.pink,
      sky: colors.lightBlue, // Renamed from lightBlue to sky
      stone: colors.warmGray, // Renamed from warmGray to stone
      neutral: colors.trueGray, // Renamed from trueGray to neutral
      gray: colors.coolGray, // Renamed from coolGray to gray
      slate: colors.blueGray, // Renamed from blueGray to slate
    },
  },
  plugins: [],
};