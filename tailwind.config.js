/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // we'll default to a clean dark theme
  theme: {
    extend: {
      colors: {
        background: '#0F172A', // slate-900
        surface: '#1E293B',    // slate-800
        primary: '#3B82F6',    // blue-500
        secondary: '#64748B',  // slate-500
        text: '#F8FAFC',       // slate-50
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
