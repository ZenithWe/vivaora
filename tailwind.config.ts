import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#102A43",
        ocean: "#087E8B",
        coral: "#FF6B5E",
        sand: "#FFF8F1",
        mint: "#DDF4EF"
      },
      boxShadow: { soft: "0 18px 55px rgba(16,42,67,.10)" }
    }
  },
  plugins: []
};
export default config;