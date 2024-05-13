/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'ltr-linear-infinite': 'moving-background 30s linear infinite',
      },
      keyframes: {
        'moving-background': {
          '0%':   { 'background-position': '0 0' },
          '100%': { 'background-position': '1400px 0'}
        },
      }
    },
  },
  plugins: [],
}

