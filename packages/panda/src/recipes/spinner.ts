import { defineRecipe } from '@pandacss/dev';

const spinnerRecipe = defineRecipe({
  className: 'spinner',
  description: 'The styles for the Spinner component',
  base: {
    aspectRatio: 'square',
    color: 'primary',
  },
  variants: {
    size: {
      xxs: {
        width: '4',
      },
      xs: {
        width: '5',
      },
      sm: {
        width: '8',
      },
      md: {
        width: '12',
      },
      lg: {
        width: '14',
      },
      xl: {
        width: '20',
      },
      '2xl': {
        width: '24',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

export default spinnerRecipe;
