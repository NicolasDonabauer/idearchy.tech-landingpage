/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#ff3300',
        'bg-light': '#fafafa',
        'bg-dark': '#0a0a0a',
        'text-muted': '#666',
      },
      fontFamily: {
        archivo: ['var(--font-archivo)', 'sans-serif'],
        nunito: ['var(--font-nunito)', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'spin-slow': 'spin 2s linear infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(25px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
    },
  },
  plugins: [],
}
