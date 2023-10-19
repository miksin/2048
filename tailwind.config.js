/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    screens: {
      xs: "512px",
      ...defaultTheme.screens,
    },
    fontFamily: {
      dosis: ["Dosis", "monospace"],
      pixel: ["PixelifySans", "serif"],
      ...defaultTheme.fontFamily,
    },
    extend: {
      spacing: {
        128: "32rem",
      },
      lineHeight: {
        narrow: "0.75",
      },
    },
  },
  plugins: [],
};
