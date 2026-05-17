import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#F9F9F7",
          text: "#111827",
          muted: "#6B7280",
          blue: "#2563EB",
          dark: "#111827",
          soft: "#F3F3EF",
          border: "#E5E7EB",
          card: "#FFFFFF",
          green: "#2F7D5C",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        display: ["var(--font-lora)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
