import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        opensans: ['var(--font-opensans)'],
        nunito: ['var(--font-nunito)'],
      },
      boxShadow: {
        sm: '0 4px 8px 0px rgba(200, 200, 200, 0.12)',
        md: '0 8px 16px 0px rgba(200, 200, 200, 0.15)',
        lg: '0 16px 32px 1px rgba(200, 200, 200, 0.18)',
        xl: '0 20px 48px 1px rgba(200, 200, 200, 0.18)',
        'color-sm': '0px 4px 8px 0px rgba(205, 31, 70, 0.12);',
        'color-md': '0px 8px 24px 0px rgba(205, 31, 70, 0.18)',
        'color-lg': '0px 16px 32px 1px rgba(205, 31, 70, 0.18)',
        'color-xl': '0px 20px 48px 1px rgba(205, 31, 70, 0.18)',
      },
      colors: {
        primary: {
          50: '#CD1F46',
          100: '#f0bac6',
          200: '#e898aa',
          300: '#de6983',
          400: '#d74c6b',
          500: '#cd1f46',
          600: '#bb1c40',
          700: '#921632',
          800: '#711127',
          900: '#560d1d',
        },
        secondary: {
          50: '#e7e7eb',
          100: '#b5b5c0',
          200: '#9191a2',
          300: '#5e5f78',
          400: '#3f405d',
          500: '#0f1035',
          600: '#0e0f30',
          700: '#0b0b26',
          800: '#08091d',
          900: '#060716',
        },
        nature: {
          50: '#fefeff',
          100: '#fcfcff',
          200: '#fafbff',
          300: '#f8f9ff',
          400: '#f7f8ff',
          500: '#f5f6ff',
          600: '#F7F7F8',
          700: '#F5F5F5',
          800: '#EFEFEF',
          900: '#DCDCDC',
        },
        warning: {
          50: '#fdf8e7',
          100: '#fae9b6',
          200: '#f7df92',
          300: '#f4d061',
          400: '#f1c742',
          500: '#eeb913',
          600: '#d9a811',
          700: '#a9830d',
          800: '#83660a',
          900: '#644e08',
        },
        success: {
          50: '#e9f9f2',
          100: '#baedd8',
          200: '#99e4c5',
          300: '#6bd8ab',
          400: '#4ed19a',
          500: '#22c581',
          600: '#1fb375',
          700: '#188c5c',
          800: '#136c47',
          900: '#0e5336',
        },
        error: {
          50: '#ffecec',
          100: '#ffc4c4',
          200: '#ffa8a8',
          300: '#ff8080',
          400: '#ff6767',
          500: '#ff4141',
          600: '#e83b3b',
          700: '#b52e2e',
          800: '#8c2424',
          900: '#6b1b1b',
        },
        text: {
          50: '#e6e6ea',
          100: '#b2b2bf',
          200: '#8d8d9f',
          300: '#595a74',
          400: '#393959',
          500: '#07082f',
          600: '#06072b',
          700: '#050621',
          800: '#04041a',
          900: '#030314',
        },
        link: '#004FFE',
      },

      // Belongs to shadcn accordion
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        'about-us-hero-mobile': "url('/static/about-us-mobile.png')",
        'about-us-hero-desktop': "url('/static/about-us-desktop.png')",
        'about-us-paws-orange-mobile':
          "url('/static/about-us-paws-orange-mobile.png')",
        'about-us-paws-purple-mobile':
          "url('/static/about-us-paws-purple-mobile.png')",
        'about-us-paws-orange-desktop':
          "url('/static/about-us-paws-orange-desktop.png')",
        'about-us-paws-purple-desktop':
          "url('/static/about-us-paws-purple-desktop.png')",
        'blog-hero': "url('/static/blog-hero.png')",
        'blog-hero-mobile': "url('/static/blog-hero-mobile.png')",
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
