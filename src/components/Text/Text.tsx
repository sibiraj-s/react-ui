import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { styled, VariantProps, CSS } from '../../stitches.config';
import { Slot } from '@radix-ui/react-slot';

export const StyledText = styled('p', {
  variants: {
    size: {
      regular: {
        fontSize: '$regular',
      },
      sm: {
        fontSize: '$sm',
      },
      xs: {
        fontSize: '$xs',
      },
      '1': {
        fontSize: '$xxxxl',
      },
      '2': {
        fontSize: '$xxxl',
      },
      '3': {
        fontSize: '$xxl',
      },
      '4': {
        fontSize: '$xl',
      },
      '5': {
        fontSize: '$l',
      },
      '6': {
        fontSize: '$regular',
      },
    },
    variant: {
      primary: {
        color: '$accentSolid',
      },
      secondary: {
        color: '$secondarySolid',
      },
      success: {
        color: '$successSolid',
      },
      danger: {
        color: '$dangerSolid',
      },
      muted: {
        color: '$muted',
      },
    },
    weight: {
      bold: {
        fontWeight: '$bold',
      },
    },
  },
  defaultVariants: {
    size: 'regular',
  },
});

type TextVariants = VariantProps<typeof StyledText>;
type TextExtraProps = { css?: CSS; asChild?: boolean };
type TextOwnProps = TextVariants & TextExtraProps;

type TextProps = ComponentPropsWithoutRef<'p'> & TextOwnProps;

export const Text = forwardRef<ElementRef<'p'>, TextProps>((props, forwardedRef) => {
  const { asChild, ...rest } = props;
  const Comp = asChild ? Slot : 'p';

  return <StyledText {...rest} as={Comp} ref={forwardedRef} />;
});

Text.displayName = 'Text';

export default Text;
