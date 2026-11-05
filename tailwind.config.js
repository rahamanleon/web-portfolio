/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0a0908',
          900: '#100e0b',
          850: '#15120e',
          800: '#1b1712',
          700: '#241f18',
        },
        bone: {
          50: '#f7f3ea',
          100: '#ece6da',
          200: '#d9d1c1',
          300: '#b8ae9c',
          400: '#8f8778',
        },
        ember: {
          300: '#ff9a73',
          400: '#ff7a4d',
          500: '#ef5b2a',
          600: '#d94a1c',
        },
        line: 'rgba(236, 230, 218, 0.12)',
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'Cambria', 'serif'],
        sans: ['Geist', 'Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      maxWidth: {
        prose: '68ch',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(-50%, 0, 0)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.82)' },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        'pulse-dot': 'pulse-dot 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
