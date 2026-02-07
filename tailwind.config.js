/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Modern 2025 childcare color palette - Sage + Soft Blue + Warm Coral
        // Research-based colors that communicate trust, warmth, and sophistication
        primary: {
          50: '#f6f8f3',   // Very light sage
          100: '#e8f0e1',   // Light sage background
          200: '#d2e0c4',   // Soft sage
          300: '#b4cca0',   // Medium sage
          400: '#9fb68a',   // Warm sage
          500: '#9CAF88',   // Main sage green - calm, trustworthy, natural
          600: '#849275',   // Darker sage
          700: '#6d7661',   // Deep sage
          800: '#5a614f',   // Very deep sage
          900: '#4a5041',   // Darkest sage
        },
        secondary: {
          50: '#f4f7fb',   // Very light blue
          100: '#e6eef7',   // Light blue background
          200: '#d0dded',   // Soft blue
          300: '#b0c4de',   // Medium blue
          400: '#95afcd',   // Warm blue
          500: '#8299B2',   // Main soft blue - trust, stability, professionalism
          600: '#7085a0',   // Darker blue
          700: '#5d6f87',   // Deep blue
          800: '#4d5b70',   // Very deep blue
          900: '#404a5c',   // Darkest blue
        },
        accent: {
          50: '#fdf7f6',   // Very light coral
          100: '#fbeae8',   // Light coral background
          200: '#f6d2cf',   // Soft coral
          300: '#efb3ad',   // Medium coral
          400: '#e8a09a',   // Warm coral
          500: '#E69B97',   // Main warm coral - warmth, care, approachability
          600: '#d17f7a',   // Darker coral
          700: '#b56862',   // Deep coral
          800: '#95544f',   // Very deep coral
          900: '#7a4541',   // Darkest coral
        },
        // Supporting neutral colors for sophisticated warmth
        cream: {
          50: '#fdfcfb',   // Pure cream
          100: '#fcf9f7',   // Very light cream
          200: '#f9f3ef',   // Light cream
          300: '#F6E5E7',   // Main cream - light backgrounds, cards
          400: '#f0d5d8',   // Medium cream
          500: '#e8c1c5',   // Warm cream
          600: '#d9a7ac',   // Darker cream
          700: '#c48d93',   // Deep cream
          800: '#a5747a',   // Very deep cream
          900: '#896065',   // Darkest cream
        },
        sand: {
          50: '#fbf9f7',   // Very light sand
          100: '#f7f1ed',   // Light sand background
          200: '#f0e4db',   // Soft sand
          300: '#e6d2c3',   // Medium sand
          400: '#dec5b2',   // Warm sand
          500: '#DDBEA9',   // Main desert sand - warm neutral, section backgrounds
          600: '#c9a694',   // Darker sand
          700: '#b08d7b',   // Deep sand
          800: '#927366',   // Very deep sand
          900: '#785f54',   // Darkest sand
        }
      },
      fontFamily: {
        'sans': ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        'display': ['var(--font-poppins)', 'Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
        'blob': 'blob 7s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}