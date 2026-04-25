import type { Config } from "tailwindcss";
const config: Config = {
    content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                orange: {
                    DEFAULT: "#FF6600",
                    light: "#FF8533",
                    dark: "#E65A00",
                },
                dark: {
                    DEFAULT: "#1A1A1A",
                    light: "#2D2D2D",
                },
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
export default config;
