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
    extend: {},
  },
});
