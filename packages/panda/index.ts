import { definePreset } from '@pandacss/dev';

import normalize from './src/normalize';
import semanticTokens from './src/semantic-tokens';
import tokens from './src/tokens';
import { keyframes } from './src/keyframes';
import { recipes, slotRecipes } from './src/recipes';

export const preset = definePreset({
  globalCss: normalize,
  presets: ['@pandacss/dev/presets'],
  theme: {
    extend: {
      tokens,
      semanticTokens,
      keyframes,
      recipes,
      slotRecipes,
    },
  },
  utilities: {
    extend: {},
  },
});

export default preset;
