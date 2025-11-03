import type { Config } from "tailwindcss";

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "mii-sky": {
          50: "#f1f8ff",
          100: "#dbefff",
          200: "#b8e1fa",
          300: "#8ccff3",
          400: "#5ab6e9",
          500: "#34a0de",
          600: "#1f87c0",
          700: "#186c98",
          800: "#145675",
          900: "#103d52",
          950: "#0b2735",
        },
        "mii-foam": "#f7fbff",
        "mii-silver": "#e2e9f3",
        "mii-ink": "#12263a",
        "mii-lime": "#34d399",
        "mii-slate": "#5f6c7b",
      },
      boxShadow: {
        mii: "0 20px 40px -28px rgba(30, 64, 175, 0.55)",
      },
      keyframes: {
        "achievement-pop": {
          "0%": { transform: "scale(0.96)" },
          "60%": { transform: "scale(1.02)" },
          "100%": { transform: "scale(1)" },
        },
        "ripple-check": {
          "0%": { transform: "scale(0.6)", opacity: "0.3" },
          "70%": { transform: "scale(1.15)", opacity: "0.05" },
          "100%": { transform: "scale(1.25)", opacity: "0" },
        },
      },
      animation: {
        "achievement-pop": "achievement-pop 190ms ease-out",
        "ripple-check": "ripple-check 360ms ease-out",
      },
      fontFamily: {
        sans: ["var(--font-nunito)", "system-ui", "sans-serif"],
      },
      backdropBlur: {
        gloss: "14px",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
