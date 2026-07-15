import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        sand: "#E8D7B9",
        dune: "#C7893F",
        brown: "#6B3F24",
        charcoal: "#1F1A17",
        cream: "#FAF5EA",
        smoke: "#5B514B",
        date: "#3B2419",
        linen: "#FFF9EE",
        oasis: "#2D6863"
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(31, 26, 23, 0.14)",
        image: "0 18px 60px rgba(31, 26, 23, 0.24)"
      },
      borderRadius: {
        DEFAULT: "8px"
      }
    }
  },
  plugins: []
};

export default config;
