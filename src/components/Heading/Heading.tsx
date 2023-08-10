import { ElementType, forwardRef, ReactElement } from 'react';

import { StyledText } from '../Text';
import { styled, VariantProps, CSS } from '../../stitches.config';
import { Merge, PolymorphicPropsWithoutRef, PolymorphicRef } from '../../utils/types';

export const StyledHeading = styled(StyledText, {
  lineHeight: '$2',
  marginBottom: '$2',

  defaultVariants: {
    size: '1',
    weight: 'bold',
  },
});

type HeadingLevels = '1' | '2' | '3' | '4' | '5' | '6';
type HeadingVariants = VariantProps<typeof StyledText>;
type HeadingExtraProps = { css?: CSS };
type HeadingSizes = { size?: Extract<HeadingVariants['size'], HeadingLevels> };
type HeadingOwnProps = Merge<HeadingVariants, HeadingSizes> & HeadingExtraProps;

type HeadingProps<T extends ElementType> = PolymorphicPropsWithoutRef<T, HeadingOwnProps>;
type HeadingComponent = <T extends ElementType = 'p'>(
  props: HeadingProps<T> & { ref?: PolymorphicRef<T> }
) => ReactElement<T>;

export const BaseHeading = <T extends ElementType = 'p'>(props: HeadingProps<T>, ref?: PolymorphicRef<T>) => {
  const tag = props.size ? `h${props.size}` : 'h1';
  return <StyledHeading as={tag} {...props} ref={ref} />;
};

export const Heading = forwardRef(BaseHeading) as HeadingComponent;
export default Heading;
