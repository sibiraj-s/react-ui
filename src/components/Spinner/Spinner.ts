import { styled } from '../../stitches.config';
import { spin } from '../../keyframes';

export const Spinner = styled('div', {
  size: '$8',
  borderRadius: '$circle',
  border: '2px solid $accentSolid',
  borderTopColor: '$white',
  animation: `${spin} 1s linear infinite`,

  variants: {
    variant: {
      primary: {
        border: '2px solid $accentSolid',
        borderTopColor: '$white',
      },
      success: {
        borderColor: '$successSolid',
        borderTopColor: '$white',
      },
    },
    size: {
      sm: {
        size: '$6',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
});

export default Spinner;
