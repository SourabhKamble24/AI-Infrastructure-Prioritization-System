/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./login.html",
    "./register.html",
    "./map.html",
    "./analytics.html",
    "./citizen/**/*.html",
    "./gov/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  darkMode: 'class', // enable dark mode by class
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          900: '#0c4a6e',
        },
        dark: {
          bg: '#0f172a',
          card: '#1e293b',
          border: '#334155'
        },
        severity: {
          critical: '#ef4444',
          high: '#f97316',
          medium: '#eab308',
          low: '#22c55e'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
