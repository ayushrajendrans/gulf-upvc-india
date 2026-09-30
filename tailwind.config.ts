import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Manrope", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#080808",
        charcoal: "#121212",
        graphite: "#1d1b18",
        gold: "#d9a441",
        "gold-light": "#e7be63",
        "gold-dark": "#a97822",
        bone: "#f5f0e8",
        mist: "#bdb7ad",
      },
      boxShadow: {
        premium: "0 28px 80px rgba(0,0,0,0.35)",
        gold: "0 0 36px rgba(217,164,65,0.14)",
      },
    },
  },
  plugins: [],
} satisfies Config;
