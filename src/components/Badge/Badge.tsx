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
    lineHeight: 'snug',
    color: 'white',
    minWidth: '10',
    userSelect: 'none',
  },

  // variants
  variants: {
    variant: {
      primary: {
        backgroundColor: '$accentSolid',
        borderColor: '$accentSolid',
      },
      secondary: {
        backgroundColor: '$secondarySolid',
        borderColor: '$secondarySolid',
      },
      success: {
        backgroundColor: '$successSolid',
        borderColor: '$successSolid',
      },
      danger: {
        backgroundColor: '$dangerSolid',
        borderColor: '$dangerSolid',
      },
    },
  },

  // defaults
  defaultVariants: {
    variant: 'primary',
  },
});

export default Badge;
