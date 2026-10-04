import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { ink: "#111111", paper: "#FFFFFF", mist: "#F7F5F2", gold: { DEFAULT: "#B8975A", soft: "#E9DFC9" } },
    fontFamily: { sans: ["var(--font-vazir)", "system-ui", "sans-serif"] },
    keyframes: { fade: { from: { opacity: "0", transform: "translateY(8px)" }, to: { opacity: "1", transform: "none" } } },
    animation: { fade: "fade .5s ease-out both" },
  } },
  plugins: [],
};
export default config;
