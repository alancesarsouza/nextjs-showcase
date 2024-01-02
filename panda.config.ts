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

  // Useful for theme customization
  theme: {
    tokens: {
      colors: {
        primary: { value: '#010137' },
        secondary: { value: '#b010d2' },
      },
      radii: {
        sm: { value: '0.25rem' },
        md: { value: '0.5rem' },
        lg: { value: '1.5rem' },
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
});
