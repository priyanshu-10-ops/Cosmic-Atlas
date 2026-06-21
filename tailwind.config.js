/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        space: {
          black: '#03030a',
          deep: '#070716',
          900: '#0a0a18',
          800: '#0f1023',
          700: '#161830',
          600: '#1f2142',
          500: '#2a2c5a',
        },
        nebula: {
          purple: '#7c3aed',
          violet: '#8b5cf6',
          magenta: '#c026d3',
          pink: '#ec4899',
        },
        cosmic: {
          blue: '#3b82f6',
          cyan: '#06b6d4',
          teal: '#14b8a6',
        },
        star: {
          yellow: '#fbbf24',
          gold: '#f59e0b',
          orange: '#fb923c',
          red: '#ef4444',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'cosmic-gradient':
          'linear-gradient(135deg, #030314 0%, #0a0a24 35%, #13062b 70%, #050516 100%)',
        'nebula-gradient':
          'linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(192,38,211,0.12) 50%, rgba(59,130,246,0.10) 100%)',
        'aurora':
          'linear-gradient(120deg, #3b82f6 0%, #7c3aed 40%, #c026d3 75%, #fb923c 100%)',
      },
      boxShadow: {
        glow: '0 0 30px -5px rgba(124, 58, 237, 0.45)',
        'glow-blue': '0 0 30px -5px rgba(59, 130, 246, 0.45)',
        'glow-cyan': '0 0 25px -3px rgba(6, 182, 212, 0.5)',
        'glow-soft': '0 0 20px -8px rgba(192, 38, 211, 0.35)',
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '1' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-20px) translateX(10px)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        drift: {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '33%': { transform: 'translateX(30px) translateY(-20px)' },
          '66%': { transform: 'translateX(-20px) translateY(15px)' },
          '100%': { transform: 'translateX(0) translateY(0)' },
        },
      },
      animation: {
        twinkle: 'twinkle 4s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'spin-slow': 'spin-slow 40s linear infinite',
        'spin-slower': 'spin-slow 80s linear infinite',
        'spin-reverse': 'spin-reverse 60s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.5s ease-out both',
        'scale-in': 'scale-in 0.4s cubic-bezier(0.22, 1, 0.36, 1) both',
        drift: 'drift 20s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
