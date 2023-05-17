/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink': '#ff8087',
        'blue': '#81d1e5',
        'navy': '#183a5c',
        'gray-text': '#777777',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '2rem',
          lg: '4rem',
          xl: '6rem',
        },
        maxWidth: '1172px',
      },
    },
  },
  plugins: [],
}

