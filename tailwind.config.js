/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: {
          DEFAULT: '#070B14',
          2: '#0D1220',
          3: '#111827',
        },
        indigo: {
          DEFAULT: '#4F46E5',
          light: '#6366F1',
          dim: '#3730A3',
        },
        cyan: {
          DEFAULT: '#06B6D4',
          dim: '#0891B2',
        },
        slate: {
          body: '#94A3B8',
          dim: '#475569',
          white: '#CBD5E1',
        },
        surface: 'rgba(255,255,255,0.03)',
        border: 'rgba(255,255,255,0.07)',
      },
      animation: {
        'orb-1': 'orbFloat1 8s ease-in-out infinite',
        'orb-2': 'orbFloat2 10s ease-in-out infinite',
        'orb-3': 'orbFloat3 12s ease-in-out infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'scroll-bob': 'scrollBob 2s ease-in-out infinite',
        'gradient-x': 'gradientX 4s ease infinite',
      },
      keyframes: {
        orbFloat1: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(20px,-30px) scale(1.05)' },
          '66%': { transform: 'translate(-15px,20px) scale(0.97)' },
        },
        orbFloat2: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(-25px,-20px) scale(1.08)' },
        },
        orbFloat3: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '40%': { transform: 'translate(15px,25px) scale(0.95)' },
        },
        pulseDot: {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.8)' },
        },
        scrollBob: {
          '0%,100%': { transform: 'translateX(-50%) translateY(0)', opacity: '0.6' },
          '50%': { transform: 'translateX(-50%) translateY(6px)', opacity: '1' },
        },
        gradientX: {
          '0%,100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
