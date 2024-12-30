/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        twinkle: 'twinkle 2s ease-in-out infinite',
        'spin-slow': 'spin 4s linear infinite',
        wave: 'wave 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};