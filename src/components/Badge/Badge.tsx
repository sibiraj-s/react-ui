import { styled } from '../../stitches.config';

export const Badge = styled('span', {
  display: 'inline-block',
  border: '1px solid',
  borderRadius: '$pill',
  padding: '$0_5 $1',
  whiteSpace: 'nowrap',
  textAlign: 'center',
  fontSize: '$xs',
  lineHeight: '$xs',
  verticalAlign: 'baseline',
  fontWeight: '$bold',
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
