import { definePreset } from '@pandacss/dev';

import normalize from './src/normalize';
import tokens from './src/tokens';
import semanticTokens from './src/semantic-tokens';
import { keyframes } from './src/keyframes';
import { recipes, slotRecipes } from './src/recipes';

export const preset = definePreset({
  name: 'react-ui',
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
