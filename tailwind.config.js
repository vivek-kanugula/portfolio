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
        // Obsidian Space Palette: Rich, deep, midnight obsidian undertones (never dull gray)
        mono: {
          950: '#05060a',
          900: '#090b13',
          850: '#0f121e',
          800: '#161a2b',
          700: '#22273f',
          600: '#343c5e',
          500: '#545f8b',
          400: '#8491be',
          300: '#aeb9dc',
          200: '#d7def2',
          100: '#edf1fb',
          50: '#f8f9fe',
        },
        // Quantum Aurora telemetry colors
        telemetry: {
          amber: '#f59e0b',
          emerald: '#10b981',
          cyan: '#06b6d4',
          rose: '#f43f5e',
          violet: '#8b5cf6',
          indigo: '#6366f1',
          sky: '#38bdf8',
        },
        // Aurora Accent Accents
        aurora: {
          indigo: '#6366f1',
          violet: '#8b5cf6',
          fuchsia: '#d946ef',
          cyan: '#06b6d4',
          emerald: '#10b981',
          amber: '#f59e0b',
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
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'border-beam': 'borderBeam 6s linear infinite',
        'aurora-glow': 'auroraGlow 8s ease-in-out infinite alternate',
        'float-slow': 'float 5s ease-in-out infinite',
        'float-delayed': 'float 5s ease-in-out 2.5s infinite',
        'radar-spin': 'radarSpin 7s linear infinite',
        'text-glow-sweep': 'textGlowSweep 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        borderBeam: {
          '100%': { offsetDistance: '100%' },
        },
        auroraGlow: {
          '0%': { transform: 'scale(1) rotate(0deg)', opacity: '0.4' },
          '50%': { transform: 'scale(1.1) rotate(5deg)', opacity: '0.65' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '0.4' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        radarSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        textGlowSweep: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
