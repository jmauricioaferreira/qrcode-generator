/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f9fafb",
        text: "#111827",
        textSecondary: "#6b7280",
        primary: "#1d1c52",
        primaryHover: "#16153a",
        accent: "#28f064",
        accentHover: "#19b846",
      },
    },
  },
  plugins: [],
};
