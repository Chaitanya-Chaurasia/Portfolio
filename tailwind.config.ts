import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "new-font": "Anonymous Pro, sans-serif",
      },
      colors: {
        "purple-new": "#5B0EFF",
        "yellow-new": "#DBFF00",
        neon: "#CAE815",
        "green-new": "#2BEE6D",
        "maroon-new": "#23022C",
        "red-new": "#920808",
        "gray-new": "#D9D9D9",
        "blue-new": "#4406F5",
        "pink-new": "#DF84FF",
      },
    },
  },
  plugins: [],
};
export default config;
