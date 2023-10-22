import { cva } from 'styled-system/css';
import { styled } from 'styled-system/jsx';

export const badgeStyle = cva({
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

export const Badge = styled('span', badgeStyle);

export default Badge;
