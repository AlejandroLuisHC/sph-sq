/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      colors: {
        gold: "#ffd700",
        "dark-bg": "#1a1a1a",
        "dark-secondary": "#2d2d2d",
        "light-gray": "#d3d3d3",
      },
      fontFamily: {
        sans: [
          "Roboto",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
  safelist: [
    "bg-dark-bg",
    "bg-dark-secondary",
    "text-light-gray",
    "text-gold",
    "border-gold",
    "bg-gold",
    "min-h-screen",
    "bg-gradient-to-br",
    "from-dark-bg",
    "to-dark-secondary",
  ],
};
