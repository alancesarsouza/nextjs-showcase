/* eslint-disable sort-keys/sort-keys-fix */
import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Files to exclude
  exclude: [],
  conditions: {
    light: '[data-color-mode=light] &',
    dark: '[data-color-mode=dark] &',
  },
  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // The output directory for your css system
  outdir: 'styled-system',

  // Whether to use css reset
  preflight: true,

  // temporary: change to false after define de theme
  watch: true,

  // Useful for theme customization
  theme: {
    tokens: {},
    semanticTokens: {
      spacing: {
        responsive: {
          value: {
            base: '2xs',
            sm: 'xs',
            md: 'sm',
            '2xl': 'xl',
            '3xl': '5%',
          },
        },
      },
      colors: {
        text: {
          value: { base: 'primary', _dark: 'white' },
        },
      },
    },
    extend: {
      breakpoints: {
        '3xl': '1920px',
      },
      tokens: {
        sizes: {
          full: { value: '100%' },
          addon: { value: '1rem' }, // 16px
          icon: { value: '1.5rem' }, // 24px
          '2xs': { value: '4rem' }, // 64px
          xs: { value: '8rem' }, // 128px
          sm: { value: '10rem' }, // 160px
          md: { value: '16rem' }, // 256px
          lg: { value: '32rem' }, // 512px
          xl: { value: '80rem' }, // 1280px
        },
        colors: {
          darkButton: { value: 'rgba(47, 47, 137, 0.2)' },
          lightButton: { value: 'rgba(47, 47, 137, 0.9)' },
          gray: { value: '#40404f' },
          primary: { value: '#010137' },
          hover: { value: '#2f2f89' },
          brand: { value: 'rgba(176, 16, 210, 0.3)' },
          secondary: { value: '#f1f1f1' },
          border: { value: '#b1b1c8' },
          disabled: { value: '#818181' },
          muted: { value: '#d0d1f8' },
          darkBg: {
            value:
              'linear-gradient(45deg, rgba(20,20,42,1) 0%, rgba(20,20,34,1) 45%, rgba(11,11,22,1) 100%)',
          },
          cloud: { value: '#fff2' },
        },
        radii: {
          sm: { value: '0.25rem' },
          md: { value: '0.5rem' },
          lg: { value: '1.5rem' },
        },
        borders: {
          sm: { value: 'solid 1px token(colors.border)' },
          md: { value: 'solid 2px token(colors.border)' },
          lg: { value: 'solid 4px token(colors.border)' },
        },
        spacing: {
          '2xs': { value: '0.25rem' }, // 4px
          xs: { value: '0.5rem' }, // 8px
          sm: { value: '0.75rem' }, // 12px
          md: { value: '1rem' }, // 16px
          lg: { value: '1.5rem' }, // 24px
          xl: { value: '2rem' }, // 32px
        },
      },
    },
  },
});
