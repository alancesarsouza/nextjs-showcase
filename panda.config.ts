/* eslint-disable sort-keys/sort-keys-fix */
import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Files to exclude
  exclude: [],

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
    extend: {
      tokens: {
        sizes: {
          full: { value: '100%' },
          icon: { value: '1.25rem' }, // 20px
          xs: { value: '8rem' }, // 128px
          sm: { value: '10rem' }, // 160px
          md: { value: '16rem' }, // 256px
          lg: { value: '32rem' }, // 512px
          xl: { value: '80rem' }, // 1280px
        },
        colors: {
          primary: { value: '#010137' },
          hover: { value: '#2f2f89' },
          brand: { value: '#b010d2' },
          secondary: { value: '#ffffff' },
          border: { value: '#b1b1c8' },
          disabled: { value: '#d1d1d1' },
          muted: { value: '#f0f1f8' },
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
