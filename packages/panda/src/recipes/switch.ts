import { defineSlotRecipe } from '@pandacss/dev';

const switchRecipe = defineSlotRecipe({
  className: 'switch',
  description: 'The styles for the Switch component',
  slots: ['root', 'thumb'],
  base: {
    root: {
      display: 'flex',
      boxSizing: 'content-box',
      border: '1px solid',
      borderRadius: 'full',
      padding: '1px',
      colorPalette: 'accent',
      color: 'colorPalette.700',
      backgroundColor: 'neutral.300',
      borderColor: 'neutral.300',

      _checked: {
        backgroundColor: 'currentColor',
        borderColor: 'currentColor',
      },
    },
    thumb: {
      height: '100%',
      aspectRatio: '1 / 1',
      backgroundColor: 'white',
      borderRadius: 'full',
      transition: 'transform 300ms',
      transform: 'translateX(0)',
      willChange: 'transform',

      _checked: {
        transform: 'translateX(100%)',
      },
    },
  },
  variants: {
    disabled: {
      true: {
        root: {
          opacity: 0.7,
          pointerEvents: 'none',
        },
      },
    },
    size: {
      regular: {
        root: {
          width: '10',
          height: '5',
        },
      },
      sm: {
        root: {
          width: '8',
          height: '4',
        },
      },
      lg: {
        root: {
          width: '12',
          height: '6',
        },
      },
    },
    isFocusVisible: {
      true: {
        root: {
          outlineOffset: '1px',
          outline: '2px solid currentColor',
        },
      },
    },
  },
  defaultVariants: {
    size: 'regular',
  },
});

export default switchRecipe;
