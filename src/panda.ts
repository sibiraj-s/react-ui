import { definePreset } from '@pandacss/dev';
import { PropertyValue } from 'styled-system/types/csstype';

import normalize from './normalize';

import semanticTokens from './theme/semantic-tokens';
import tokens from './theme/tokens';

export const preset = definePreset({
  globalCss: normalize,
  theme: {
    extend: {
      tokens,
      semanticTokens,
      keyframes: {
        stripedBg: {
          '0%': { backgroundPosition: '1rem 0' },
          '100%': { backgroundPosition: '0 0' },
        },
      },
    },
  },
  utilities: {
    extend: {
      hw: {
        className: 'hw',
        values: 'sizes',
        transform(value: PropertyValue<'size'>) {
          return { height: value, width: value };
        },
      },
    },
  },
});

export default preset;
