import { defineConfig } from '@pandacss/dev';

import reactUIPreset from './src/panda';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // The namespace prefix for the generated css classes and css variables.
  prefix: 'rxui',

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './stories/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  presets: ['@pandacss/dev/presets', reactUIPreset],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // Whether to emit the artifacts to node_modules as a package.
  emitPackage: false,

  // The output directory for your css system
  outdir: 'styled-system',

  // JS Framework for generated JSX elements.
  jsxFramework: 'react',

  // File extension for generated javascript files.
  outExtension: 'js',
});
