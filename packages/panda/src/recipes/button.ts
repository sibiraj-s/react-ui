import { defineRecipe } from '@pandacss/dev';

const buttonRecipe = defineRecipe({
  className: 'button',
  description: 'The styles for the Button components',
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid token(colors.neutral.textContrast)',
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
        backgroundColor: 'colorPalette.solid',
        borderColor: 'colorPalette.solid',
        '--outline-shadowFrom': 'colors.colorPalette.base',
        '--outline-shadowTo': 'colors.colorPalette.solid',

        _hover: {
          backgroundColor: 'colorPalette.solidHover',
          borderColor: 'colorPalette.solidHover',
        },

        _active: {
          backgroundColor: 'colorPalette.solidHover',
          borderColor: 'colorPalette.solidHover',
        },
      },
      outline: {
        borderColor: 'colorPalette.solid',
        color: 'colorPalette.solid',
        backgroundColor: 'transparent',

        _hover: {
          color: 'white',
          backgroundColor: 'colorPalette.solid',
        },

        _dark: {
          borderColor: 'colorPalette.bg',
          color: 'colorPalette.bg',
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
    colorScheme: {
      primary: {
        colorPalette: 'primary',
      },
      secondary: {
        colorPalette: 'secondary',
      },
      success: {
        colorPalette: 'success',
      },
      danger: {
        colorPalette: 'danger',
      },
    },
  },

  // defaults
  defaultVariants: {
    variant: 'solid',
    colorScheme: 'primary',
  },
});

export default buttonRecipe;
