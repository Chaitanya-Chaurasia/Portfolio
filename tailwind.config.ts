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
      },
    },
  },
  plugins: [],
};
export default config;
