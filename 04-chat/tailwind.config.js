/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        background: '#1A1924',
        'background-foreground': '#E1E1E6',
        input: '#282843',
        contact: '#633BBC',
      },
    },
  },
  plugins: [],
}
