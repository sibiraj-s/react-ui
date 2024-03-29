import { defineConfig } from '@pandacss/dev';
import reactUIPreset from '@rxui/panda';

const isProd = process.env.CI === 'true';

export default defineConfig({
  // Clean the output directory before generating the css.
  clean: isProd,

  // Use css reset
  preflight: true,

  // The namespace prefix for the generated css classes and css variables.
  prefix: 'rxui',

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './stories/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Set of reusable and shareable configuration presets
  presets: [reactUIPreset],

  // Theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: 'styled-system',

  // JS Framework for generated JSX elements.
  jsxFramework: 'react',

  // File extension for generated javascript files.
  outExtension: 'js',

  // Hash the generated class names and variables
  hash: isProd,

  // Generate static css
  staticCss: {
    // Generate static css for all recipes, since panda can't parse storybook args
    recipes: '*',
  },
});
