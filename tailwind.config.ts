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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          dark: "var(--primary-dark)",
          light: "var(--primary-light)",
          50: "var(--primary-50)",
          100: "var(--primary-100)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          dark: "var(--accent-dark)",
          light: "var(--accent-light)",
        },
        surface: {
          DEFAULT: "var(--surface)",
          alt: "var(--surface-alt)",
        },
        muted: "var(--text-muted)",
        secondary: "var(--text-secondary)",
      },
      fontFamily: {
        sans: ["'Inter'", "system-ui", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
      },
      boxShadow: {
        card: "var(--shadow-md)",
        "card-hover": "var(--shadow-lg)",
        hero: "var(--shadow-xl)",
      },
    },
  },
  plugins: [],
};
export default config;
