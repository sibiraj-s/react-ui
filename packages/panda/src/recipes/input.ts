import { defineSlotRecipe } from '@pandacss/dev';

const inputRecipe = defineSlotRecipe({
  className: 'input',
  description: 'The styles for the Input component',
  slots: ['root', 'input', 'item'],
  base: {
    root: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      borderRadius: 'md',
      border: '1px solid',
      borderColor: 'border',
      colorPalette: 'accent',

      _focusWithin: {
        outlineWidth: '1px',
        outlineStyle: 'solid',
        outlineColor: 'colorPalette.700',
        borderColor: 'colorPalette.700',
      },
    },
    input: {
      flex: 1,
      display: 'block',
      py: '1.5',
      px: '3',
      borderRadius: 'md',
      border: 'none',
      outline: 'none',
      color: 'inherit',
      backgroundColor: 'transparent',
    },
    item: {
      display: 'flex',
      py: '0',
      px: '2',
    },
  },
  variants: {
    isInvalid: {
      true: {
        root: {
          colorPalette: 'red',
          borderColor: 'colorPalette.500',
        },
      },
    },
    prepend: {
      true: {
        input: {
          paddingLeft: '0.5',
        },
      },
    },
    append: {
      true: {
        input: {
          paddingRight: '0.5',
        },
      },
    },
  },
});

export default inputRecipe;
