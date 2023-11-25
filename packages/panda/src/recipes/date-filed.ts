import { defineSlotRecipe } from '@pandacss/dev';

export const dateFieldRecipe = defineSlotRecipe({
  className: 'date',
  description: 'The styles for the DateField and TimeField components',
  slots: ['root', 'label', 'container'],
  base: {
    root: {
      display: 'flex',
      flexDir: 'column',
      alignItems: 'start',
    },
    label: {
      mb: '0.5',
    },
    container: {
      display: 'flex',
      border: '1px solid',
      borderColor: 'border',
      borderRadius: 'md',
      p: '1',
      pr: '8',
      transition: 'colors',
      _hover: {
        colorPalette: 'accent',
        borderColor: 'colorPalette.700',
      },
      _focusWithin: {
        colorPalette: 'accent',
        borderColor: 'colorPalette.700',
      },
    },
  },
});
