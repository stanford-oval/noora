import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        noora: {
          primary: {
            DEFAULT: "#6940b6",
            light: "#7447c9",
            dark: "#5b379e",
            dark1: "#3f2278",
            dark2: "#2c1458",
          },
          secondary: {
            bright: "#283975",
            light: "#1f306b",
            DEFAULT: "#192245",
            dark: "#0d142b",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
