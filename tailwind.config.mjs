/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        cblue: {
          50: "#e9f2ff",
          100: "#d8e5ff",
          200: "#b8cfff",
          300: "#8dafff",
          400: "#617fff",
          500: "#3c51ff",
          600: "#1b20ff",
          700: "#1719f2",
          800: "#1115c2",
          900: "#171d98",
          950: "#0e0f58",
        },
      },
      keyframes: {
        "kf-opacity": {
          "0%": { opacity: 0.1 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "load-image": "kf-opacity 200ms ease-in",
      },
    },
  },
  plugins: [],
};
