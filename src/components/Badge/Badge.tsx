import { styled } from 'styled-system/jsx';

export const Badge = styled('span', {
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
    color: 'white',
    backgroundColor: 'colorPalette.solid',
    borderColor: 'colorPalette.solid',
  },

  // variants
  variants: {
    colorScheme: {
      accent: {
        colorPalette: 'accent',
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
    colorScheme: 'accent',
  },
});

export default Badge;
