import { defineSlotRecipe } from '@pandacss/dev';

const spinnerRecipe = defineSlotRecipe({
  className: 'spinner',
  description: 'The styles for the Spinner component',
  slots: ['container', 'circle', 'spinner'],
  base: {
    container: {
      aspectRatio: 'square',
      colorPalette: 'accent',
      color: 'colorPalette.700',
    },
    circle: {
      stroke: 'currentcolor',
      fill: 'transparent',
      strokeOpacity: 0.1,
      _dark: {
        strokeOpacity: 0.2,
      },
    },
    spinner: {
      stroke: 'currentcolor',
      fill: 'transparent',
    },
  },
  variants: {
    size: {
      xxs: {
        container: {
          width: '4',
        },
      },
      xs: {
        container: {
          width: '5',
        },
      },
      sm: {
        container: {
          width: '8',
        },
      },
      md: {
        container: {
          width: '12',
        },
      },
      lg: {
        container: {
          width: '14',
        },
      },
      xl: {
        container: {
          width: '20',
        },
      },
      '2xl': {
        container: {
          width: '24',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

export default spinnerRecipe;
