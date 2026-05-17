import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#16a34a",
          50: "#f0fdf4",
          100: "#dcfce7",
          600: "#16a34a",
          700: "#15803d",
        },
        "light-bg": "#f8fafc",
      },
    },
  },
  plugins: [],
};

export default config;
