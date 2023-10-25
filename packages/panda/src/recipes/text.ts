import { defineRecipe } from '@pandacss/dev';

const textRecipe = defineRecipe({
  className: 'text',
  description: 'The styles for the Text component',
  variants: {
    size: {
      xs: {
        textStyle: 'xs',
      },
      sm: {
        textStyle: 'sm',
      },
      md: {
        textStyle: 'md',
      },
      lg: {
        textStyle: 'lg',
      },
      xl: {
        textStyle: 'xl',
      },
      '2xl': {
        textStyle: '2xl',
      },
      '3xl': {
        textStyle: '3xl',
      },
      '4xl': {
        textStyle: '4xl',
      },
      '5xl': {
        textStyle: '5xl',
      },
      '6xl': {
        textStyle: '6xl',
      },
      '7xl': {
        textStyle: '7xl',
      },
      '8xl': {
        textStyle: '8xl',
      },
      '9xl': {
        textStyle: '9xl',
      },
    },
    weight: {
      regular: {},
      bold: {
        fontWeight: 'bold',
      },
    },
  },
});

export default textRecipe;
