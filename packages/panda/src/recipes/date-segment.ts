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
      _focus: { bg: 'primary', color: 'white' },
      color: 'neutral.line',
    },
    input: {
      display: 'block',
      textAlign: 'center',
      color: 'neutral.line',
      _groupFocus: {
        color: 'white',
      },
    },
  },
  variants: {
    isEditable: {
      true: {
        segment: {
          color: 'neutral.text',
        },
      },
    },
  },
});
