import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            // The AI agent will add custom colors, fonts, and spacing here
            // based on the site's thematic brief.
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
    ],
};

export default config;
