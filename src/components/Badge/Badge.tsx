import { styled } from '../../stitches.config';

export const Badge = styled('span', {
  display: 'inline-block',
  border: '1px solid',
  borderRadius: '$roundedSm',
  padding: '$0_5 $1_5',
  whiteSpace: 'nowrap',
  textAlign: 'center',
  fontSize: '$xs',
  fontWeight: '$medium',
  letterSpacing: '$space',
  lineHeight: '$xs',
  verticalAlign: 'baseline',
  color: '$white',
  minWidth: '$10',

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
