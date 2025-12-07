import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Color - Sage Green
        sage: {
          50: '#f5f7f4',
          100: '#e8ede5',
          200: '#d1dbc9',
          300: '#b4c5a6',
          400: '#9eaf91',
          500: '#8B9B7E', // Main brand color
          600: '#748466',
          700: '#5d6a52',
          800: '#4d5745',
          900: '#40483a',
        },
        // Dark Navy - Text & Headers
        navy: {
          50: '#f4f6f7',
          100: '#e4e8eb',
          200: '#ccd4da',
          300: '#a8b5be',
          400: '#7d8f9c',
          500: '#607181',
          600: '#4f5d6b',
          700: '#444e59',
          800: '#3b434c',
          900: '#2C3E50', // Main dark text
        },
        // Warm Beige - Secondary Backgrounds
        beige: {
          50: '#faf9f7',
          100: '#f5f2ed',
          200: '#ede7dc',
          300: '#E5D5B8', // Main beige
          400: '#d9c49d',
          500: '#cab082',
          600: '#b89968',
          700: '#a38355',
          800: '#876d48',
          900: '#6f5a3c',
        },
        // Terracotta/Rust - Accent Color
        rust: {
          50: '#fdf6f4',
          100: '#fae8e3',
          200: '#f5d0c7',
          300: '#eeb09f',
          400: '#e38a6f',
          500: '#d66b4b',
          600: '#C85A3D', // Main accent
          700: '#ab4830',
          800: '#8e3d2b',
          900: '#763528',
        },
        // Cream - Main Backgrounds
        cream: {
          50: '#FAF8F3', // Main cream
          100: '#f7f4ed',
          200: '#efe9db',
          300: '#e4dac3',
          400: '#d6c6a4',
          500: '#c7b087',
          600: '#b59a6e',
          700: '#9a805a',
          800: '#7f694c',
          900: '#695640',
        },
        // Warm Brown - Borders & Accents
        brown: {
          50: '#f9f6f2',
          100: '#f1eae0',
          200: '#e3d4c0',
          300: '#d0b898',
          400: '#bc9a6f',
          500: '#A67C52', // Main brown
          600: '#926940',
          700: '#7a5637',
          800: '#654730',
          900: '#533c29',
        },
        // Deep Green - Secondary Text
        green: {
          50: '#f4f6f3',
          100: '#e6ebe3',
          200: '#cdd7c8',
          300: '#acbda4',
          400: '#859c7b',
          500: '#6d855f',
          600: '#5A6B4F', // Main deep green
          700: '#485642',
          800: '#3c4737',
          900: '#323b2f',
        },
        // Soft Gold - Premium Touches
        gold: {
          50: '#faf8ef',
          100: '#f4efd4',
          200: '#e8dca5',
          300: '#dbc46d',
          400: '#D4AF37', // Main gold
          500: '#c69930',
          600: '#b07826',
          700: '#8f5b22',
          800: '#764b22',
          900: '#643f20',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'serif'],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'float': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
