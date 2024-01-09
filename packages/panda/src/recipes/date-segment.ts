import { defineSlotRecipe } from '@pandacss/dev';

export const dateSegmentRecipe = defineSlotRecipe({
  className: 'date',
  description: 'The styles for the DateSegment component',
  slots: ['segment', 'input'],
  base: {
    segment: {
      boxSizing: 'content-box',
      px: '0.5',
      textAlign: 'right',
      fontVariantNumeric: 'tabular-nums',
      outline: 'none',
      rounded: 'sm',
      colorPalette: 'accent',
      _focus: { bg: 'colorPalette.700', color: 'colorPalette.50' },

      '&[data-placeholder=true]': {
        color: 'placeholder',
      },
    },
    input: {
      display: 'block',
      textAlign: 'center',
    },
  },
  variants: {
    isLiteral: {
      true: {
        segment: {
          color: 'placeholder',
        },
      },
    },
  },
});
