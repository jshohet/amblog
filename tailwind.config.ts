import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        one: "#d1d0cc",
        two: "#a38994",
        three: "#5f2b4f",
        four: "#604a4d",
        five: "#1d0c1c",
        darkerTwo: "#85566A",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
