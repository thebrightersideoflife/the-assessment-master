/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        brand: {
          yellow: '#FFC300',
          orange: '#E67E22',
          green: '#28B463',
          blue: '#3498DB',
          darkBlue: '#4169E1',
          red: '#C0392B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out',       // 👈 Added this
        'fade-in-fast': 'fade-in 0.4s ease-out',  // 👈 Optional variant
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        'fade-in': {                              // 👈 Matching the class name
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeIn: {                                 // ✅ Kept original for backward compatibility
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
