import { text } from "stream/consumers";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Honk: ["Honk", "sans-serif"],
        Bit: ["Bit", "sans-serif"],
      },
      colors: {
        primary: "#1D1128",
        highlight: "#87FF65",
        text: "#EDEDF4"
      },
    },
  },
  plugins: [],
};
export default config;
