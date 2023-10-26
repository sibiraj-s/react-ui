import { defineRecipe } from '@pandacss/dev';

const textareaRecipe = defineRecipe({
  className: 'textarea',
  description: 'The styles for the Textarea component',
  base: {
    display: 'block',
    py: '1.5',
    px: '3',
    width: '100%',
    borderRadius: 'md',
    color: 'inherit',
    backgroundColor: 'transparent',
    resize: 'vertical',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'border',
    colorPalette: 'accent',

    '&:focus-within': {
      outlineWidth: '1px',
      outlineStyle: 'solid',
      outlineColor: 'colorPalette.700',
      borderColor: 'colorPalette.700',
    },
  },

  variants: {
    isInvalid: {
      true: {
        colorPalette: 'red',
        borderColor: 'colorPalette.500',
      },
    },
  },
});

export default textareaRecipe;
