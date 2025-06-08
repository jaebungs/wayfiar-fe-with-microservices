/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': 'var(--white)',
        'dark-100': 'var(--dark-100)',
        'purple-100': 'var(--color-purple-100)',
      },
      maxWidth: {
        'container': '1600px',
      },
    },
  },
  plugins: [],
} 