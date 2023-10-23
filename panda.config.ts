import { defineConfig } from '@pandacss/dev';
import reactUIPreset from '@rxui/panda';
import { configureStaticCss } from '@rxui/panda/utils';

const isProd = process.env.CI === 'true';

export default defineConfig({
  // Clean the output directory before generating the css.
  clean: true,

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

  // Emit the artifacts to node_modules as a package.
  emitPackage: false,

  // The output directory for your css system
  outdir: 'styled-system',

  // JS Framework for generated JSX elements.
  jsxFramework: 'react',

  // File extension for generated javascript files.
  outExtension: 'js',

  // Hash the generated class names and variables
  hash: isProd,

  staticCss: configureStaticCss(),
});
