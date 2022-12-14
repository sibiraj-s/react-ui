import { ElementType, forwardRef, ReactElement } from 'react';

import { styled, VariantProps, CSS } from '../../stitches.config';
import { PolymorphicPropsWithoutRef, PolymorphicRef } from '../../utils/types';

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
    spacing: {
      xs: {
        marginTop: '$1',
      },
      sm: {
        marginTop: '$2',
      },
      md: {
        marginTop: '$4',
      },
      lg: {
        marginTop: '$6',
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
type TextExtraProps = { css?: CSS };
type TextOwnProps = TextVariants & TextExtraProps;

type TextProps<T extends ElementType> = PolymorphicPropsWithoutRef<TextOwnProps, T>;
type TextComponent = <T extends ElementType = 'p'>(
  props: TextProps<T> & { ref?: PolymorphicRef<T> }
) => ReactElement<T>;

export const BaseText = <T extends ElementType = 'p'>(props: TextProps<T>, ref?: PolymorphicRef<T>) => {
  return <StyledText {...props} ref={ref} />;
};

export const Text = forwardRef(BaseText) as TextComponent;
export default Text;
