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
        // Dynamic theme-driven monochrome palette supporting opacity modifiers (e.g. bg-mono-900/60)
        mono: {
          950: 'rgb(var(--mono-950) / <alpha-value>)',
          900: 'rgb(var(--mono-900) / <alpha-value>)',
          850: 'rgb(var(--mono-850) / <alpha-value>)',
          800: 'rgb(var(--mono-800) / <alpha-value>)',
          750: 'rgb(var(--mono-750) / <alpha-value>)',
          700: 'rgb(var(--mono-700) / <alpha-value>)',
          600: 'rgb(var(--mono-600) / <alpha-value>)',
          500: 'rgb(var(--mono-500) / <alpha-value>)',
          400: 'rgb(var(--mono-400) / <alpha-value>)',
          300: 'rgb(var(--mono-300) / <alpha-value>)',
          200: 'rgb(var(--mono-200) / <alpha-value>)',
          100: 'rgb(var(--mono-100) / <alpha-value>)',
          50: 'rgb(var(--mono-50) / <alpha-value>)',
        },
        // Dynamic telemetry colors
        telemetry: {
          amber: 'rgb(var(--telemetry-amber) / <alpha-value>)',
          emerald: 'rgb(var(--telemetry-emerald) / <alpha-value>)',
          cyan: 'rgb(var(--telemetry-cyan) / <alpha-value>)',
          rose: 'rgb(var(--telemetry-rose) / <alpha-value>)',
          violet: 'rgb(var(--telemetry-violet) / <alpha-value>)',
          indigo: 'rgb(var(--telemetry-indigo) / <alpha-value>)',
          sky: 'rgb(var(--telemetry-sky) / <alpha-value>)',
        },
        // Dynamic Aurora accents
        aurora: {
          indigo: 'rgb(var(--aurora-indigo) / <alpha-value>)',
          violet: 'rgb(var(--aurora-violet) / <alpha-value>)',
          fuchsia: 'rgb(var(--aurora-fuchsia) / <alpha-value>)',
          cyan: 'rgb(var(--aurora-cyan) / <alpha-value>)',
          emerald: 'rgb(var(--aurora-emerald) / <alpha-value>)',
          amber: 'rgb(var(--aurora-amber) / <alpha-value>)',
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
