import { ComponentPropsWithRef, ElementRef, forwardRef } from 'react';

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

type TextVariants = Omit<VariantProps<typeof StyledText>, 'as'>;
type TextExtraProps = { css?: CSS; asChild?: boolean };
type TextOwnProps = TextVariants & TextExtraProps & ComponentPropsWithRef<'p'>;

type TextProps = TextOwnProps & ComponentPropsWithRef<'p'>;

export const Text = forwardRef<ElementRef<typeof StyledText>, TextProps>((props, forwardedRef) => {
  const { asChild = false, children, ...rest } = props;
  const Component = asChild ? Slot : 'p';

  return (
    <StyledText as={Component} {...rest} ref={forwardedRef}>
      {children}
    </StyledText>
  );
});

Text.displayName = 'Text';

export default Text;
