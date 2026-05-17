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
          bg: "#F8FAFC",
          text: "#111827",
          muted: "#64748B",
          blue: "#2563EB",
          dark: "#1E3A5F",
          soft: "#EFF6FF",
          border: "#E2E8F0",
          card: "#FFFFFF",
          green: "#2F7D5C",
          "green-soft": "#DFF3E8",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
