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
          bg: "#F8FAF7",
          text: "#17211B",
          muted: "#5F6B63",
          green: "#256D3D",
          dark: "#17452A",
          soft: "#EAF4EC",
          border: "#D9E5DC",
          blue: "#2F6FAD",
          card: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      lineHeight: {
        relaxed: "1.75",
      },
    },
  },
  plugins: [],
};

export default config;
