/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7C3AED', // Violet-600 based on images
        secondary: '#4C1D95', // Darker violet
        accent: '#8B5CF6', // Lighter violet
        dark: '#0F172A', // Slate-900
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
