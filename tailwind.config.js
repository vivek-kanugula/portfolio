/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        mono: {
          950: '#07080a',
          900: '#0c0d11',
          850: '#111318',
          800: '#181a22',
          700: '#232634',
          600: '#34384b',
          500: '#52586d',
          400: '#7b829a',
          300: '#a3a9be',
          200: '#cdd2e1',
          100: '#e7eaf2',
          50: '#f6f7fa',
        },
        telemetry: {
          amber: '#f59e0b',
          emerald: '#10b981',
          cyan: '#06b6d4',
          rose: '#f43f5e',
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif'
        ],
        mono: [
          '"JetBrains Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace'
        ],
      },
    },
  },
  plugins: [],
}
