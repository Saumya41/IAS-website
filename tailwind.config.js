/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a1a1a',
          light: '#2a2a2a',
          dark: '#0a0a0a',
        },
        secondary: {
          DEFAULT: '#9d8f68',
          light: '#c4b998',
          dark: '#766a4d',
        },
        accent: {
          DEFAULT: '#c4b998',
          light: '#d6ceb3',
          dark: '#9d8f68',
        },
      },
      fontFamily: {
        sans: [
          'SF Pro Text',
          'SF Pro Icons',
          'Helvetica Neue',
          'Helvetica',
          'Open Sans',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
