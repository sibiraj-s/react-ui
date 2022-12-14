import { ElementType, forwardRef, ReactElement } from 'react';

import { StyledText } from '../Text';
import { styled, VariantProps, CSS } from '../../stitches.config';
import { Merge, PolymorphicPropsWithoutRef, PolymorphicRef } from '../../utils/types';

export const StyledHeading = styled(StyledText, {
  lineHeight: '$2',

  compoundVariants: [
    {
      size: '1',
      css: {
        hmr: '$fontSizes$xxxxl',
      },
    },
    {
      size: '2',
      css: {
        hmr: '$fontSizes$xxxl',
      },
    },
    {
      size: '3',
      css: {
        hmr: '$fontSizes$xxl',
      },
    },
    {
      size: '4',
      css: {
        hmr: '$fontSizes$xl',
      },
    },
    {
      size: '5',
      css: {
        hmr: '$fontSizes$l',
      },
    },
    {
      size: '6',
      css: {
        hmr: '$fontSizes$regular',
      },
    },
  ],
  defaultVariants: {
    size: '1',
    weight: 'bold',
  },
});

type HeadingLevels = '1' | '2' | '3' | '4' | '5' | '6';
type HeadingVariants = VariantProps<typeof StyledText>;
type HeadingExtraProps = { css?: CSS };
type HeadingSizes = { size: Extract<HeadingVariants['size'], HeadingLevels> };
type HeadingOwnProps = Merge<HeadingVariants, HeadingSizes> & HeadingExtraProps;

type HeadingProps<T extends ElementType> = PolymorphicPropsWithoutRef<HeadingOwnProps, T>;
type HeadingComponent = <T extends ElementType = 'p'>(
  props: HeadingProps<T> & { ref?: PolymorphicRef<T> }
) => ReactElement<T>;

export const BaseHeading = <T extends ElementType = 'p'>(props: HeadingProps<T>, ref?: PolymorphicRef<T>) => {
  const tag = props.size ? `h${props.size}` : 'h1';
  return <StyledHeading as={tag} {...props} ref={ref} />;
};

export const Heading = forwardRef(BaseHeading) as HeadingComponent;
export default Heading;
