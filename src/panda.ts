import { definePreset } from '@pandacss/dev';

import normalize from './normalize';

import semanticTokens from './theme/semantic-tokens';
import tokens from './theme/tokens';
import { keyframes } from './theme/keyframes';
import { recipes, slotRecipes } from './theme/recipes';

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
