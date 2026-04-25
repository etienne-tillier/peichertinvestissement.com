import type { Config } from "tailwindcss";
const config: Config = {
    content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                navy: {
                    DEFAULT: "#1a365d",
                    light: "#2c5282",
                    dark: "#1a202c",
                },
                gold: {
                    DEFAULT: "#d4a843",
                    light: "#e4b856",
                    dark: "#b8922f",
                },
                emerald: {
                    DEFAULT: "#047857",
                    light: "#059669",
                    dark: "#065f46",
                },
                charcoal: {
                    DEFAULT: "#2d3748",
                    light: "#4a5568",
                },
                cream: {
                    DEFAULT: "#f8f9fa",
                    dark: "#e9ecef",
                },
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
                display: ["Playfair Display", "Georgia", "serif"],
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
export default config;
