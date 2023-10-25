import { defineRecipe } from '@pandacss/dev';

const headingRecipe = defineRecipe({
  className: 'heading',
  description: 'The styles for the Heading component',
  variants: {
    level: {
      '1': {
        textStyle: '4xl',
      },
      '2': {
        textStyle: '3xl',
      },
      '3': {
        textStyle: '2xl',
      },
      '4': {
        textStyle: 'xl',
      },
      '5': {
        textStyle: 'lg',
      },
      '6': {
        textStyle: 'md',
      },
    },
  },
  compoundVariants: [
    {
      level: ['1', '2', '3'],
      css: {
        fontWeight: 'bold',
      },
    },
    {
      level: ['4', '5', '6'],
      css: {
        fontWeight: 'semibold',
      },
    },
  ],
  defaultVariants: {
    level: '1',
  },
});

export default headingRecipe;
