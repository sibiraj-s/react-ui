import { defineRecipe } from '@pandacss/dev';

const badgeRecipe = defineRecipe({
  className: 'badge',
  description: 'The styles for the Badge components',
  base: {
    display: 'inline-block',
    borderWidth: '1px',
    borderRadius: 'sm',
    py: '0.5',
    px: '1.5',
    whiteSpace: 'nowrap',
    textAlign: 'center',
    fontSize: 'xs',
    fontWeight: 'medium',
    letterSpacing: 'wide',
    lineHeight: 'tight',
    minWidth: '10',
    userSelect: 'none',
    color: 'colorPalette.base',
    backgroundColor: 'colorPalette.solid',
    borderColor: 'colorPalette.solid',
  },

  // variants
  variants: {
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
    colorScheme: 'primary',
  },
});

export default badgeRecipe;
