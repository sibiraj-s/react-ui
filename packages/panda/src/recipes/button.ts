import { defineRecipe } from '@pandacss/dev';

const buttonRecipe = defineRecipe({
  className: 'button',
  description: 'The styles for the Button components',
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid',
    borderRadius: 'md',
    gap: '2',
    fontWeight: 'semibold',
    py: '1.5',
    px: '3',
    userSelect: 'none',
    outline: 'none',
    whiteSpace: 'nowrap',
    textAlign: 'center',
    cursor: 'default',
    lineHeight: 'snug',
    textDecoration: 'none',
    colorPalette: 'accent',
    borderColor: 'colorPalette.700',

    '--outline-shadowFrom': 'colors.colorPalette.50',
    '--outline-shadowTo': 'colors.colorPalette.700',

    _focusVisible: {
      boxShadow: '0 0 0 2px var(--outline-shadowFrom), 0 0 0 4px var(--outline-shadowTo)',
    },

    _disabled: {
      opacity: 0.7,
      pointerEvents: 'none',
    },
  },

  // variants
  variants: {
    variant: {
      solid: {
        color: 'white',
        backgroundColor: 'colorPalette.700',

        _hover: {
          backgroundColor: 'colorPalette.800',
          borderColor: 'colorPalette.800',
        },

        _active: {
          backgroundColor: 'colorPalette.800',
          borderColor: 'colorPalette.800',
        },
      },
      outline: {
        color: 'colorPalette.700',
        backgroundColor: 'transparent',

        _hover: {
          color: 'colorPalette.50',
          backgroundColor: 'colorPalette.700',
        },

        _dark: {
          borderColor: 'colorPalette.200',
          color: 'colorPalette.200',

          _hover: {
            borderColor: 'colorPalette.700',
          },
        },
      },
    },
    size: {
      xs: {
        py: '0',
        px: '1.5',
        borderRadius: 'sm',
        fontSize: 'sm',
      },
      sm: {
        py: '1',
        px: '2',
        borderRadius: 'sm',
        fontSize: 'sm',
      },
      regular: {},
    },
  },

  // defaults
  defaultVariants: {
    variant: 'solid',
  },
});

export default buttonRecipe;
