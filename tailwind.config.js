/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'ltr-linear-infinite': 'moving-background 30s linear infinite',
        water: "water 10s linear infinite reverse",
        "water-2": "water-2 10s linear infinite reverse",
        "finish-line": "finish-line 5s linear infinite",
      },
      keyframes: {
        'moving-background': {
          '0%':   { 'background-position': '0 0' },
          '100%': { 'background-position': '1400px 0'}
        },
        water: {
          "0%": { right: "0" },
          "100%": { right: "100%" },
        },
        "water-2": {
          "0%": { right: "-100%" },
          "100%": { right: "0" },
        },
      },
    },
  },
  plugins: [],
}

