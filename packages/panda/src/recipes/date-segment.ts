import { defineSlotRecipe } from '@pandacss/dev';

export const dateSegmentRecipe = defineSlotRecipe({
  className: 'date',
  description: 'The styles for the DateSegment component',
  slots: ['segment', 'input'],
  base: {
    segment: {
      px: '0.5',
      boxSizing: 'content-box',
      textAlign: 'right',
      fontVariantNumeric: 'tabular-nums',
      outline: 'none',
      rounded: 'sm',
      _focus: { bg: 'primary', color: 'primary.base' },
      color: 'neutral.line',
    },
    input: {
      display: 'block',
      textAlign: 'center',
      color: 'neutral.text',

      _dark: {
        color: 'neutral.base',
      },

      _groupFocus: {
        color: 'neutral.bg',

        _dark: {
          color: 'neutral.base',
        },
      },
    },
  },
  variants: {
    isEditable: {
      true: {
        segment: {
          color: 'neutral.text',

          _focus: {
            color: 'neutral.bg',
          },

          _dark: {
            color: 'neutral.bg',
          },
        },
      },
    },
  },
});
