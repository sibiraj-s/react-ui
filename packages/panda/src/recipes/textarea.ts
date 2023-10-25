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
    borderColor: 'neutral.bgHover',
    colorPalette: 'primary',

    '&:focus-within': {
      outlineWidth: '1px',
      outlineStyle: 'solid',
      outlineColor: 'colorPalette.solid',
      borderColor: 'colorPalette.solid',
    },
  },

  variants: {
    isInvalid: {
      true: {
        colorPalette: 'danger',
        borderColor: 'danger.border',
      },
    },
  },
});

export default textareaRecipe;
