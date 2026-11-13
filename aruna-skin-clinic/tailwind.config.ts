import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: {
    colors: {
      cream: "#F7F4EE", paper: "#FFFEFB", sand: "#C9A65B",
      sage: "#557A5B", forest: "#17452D", ink: "#292E29", muted: "#777B73"
    },
    fontFamily: { sans: ["Arial", "Helvetica", "sans-serif"], serif: ["Georgia", "serif"] },
    boxShadow: { soft: "0 18px 55px rgba(48, 58, 48, .09)" }
  }}, plugins: []
};
export default config;
