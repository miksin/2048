/** @type {import("tailwindcss").Config} */
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
      height: {
        screen: ["100dvh", "100vh"],
      },
      minHeight: {
        screen: ["100dvh", "100vh"],
      },
      maxHeight: {
        screen: ["100dvh", "100vh"],
      },
      spacing: {
        128: "32rem",
      },
      lineHeight: {
        narrow: "0.75",
      },
      colors: {
        tile: {
          50: "#B3F8D9",
          100: "#91F4EA",
          200: "#6ECFEF",
          300: "#4D8BEA",
          400: "#2B34E5",
          500: "#4A0ADF",
          600: "#5E01D5",
          700: "#7100C9",
          800: "#8300BC",
          900: "#9100AA",
          950: "#800075",
        },
      },
      keyframes: {
        appear: {
          "0%": {
            scale: "0.2",
          },
          "100%": {
            scale: "1",
          },
        },
      },
      animation: {
        appear: "appear 150ms ease-in-out",
      },
    },
  },
  plugins: [],
};
