import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { StyledText } from '../Text';
import { styled, VariantProps, CSS } from '../../stitches.config';
import { Slot } from '@radix-ui/react-slot';

export const StyledHeading = styled(StyledText, {
  lineHeight: '$2',
  marginBottom: '$2',

  defaultVariants: {
    size: '1',
    weight: 'bold',
  },
});

type HeadingVariants = VariantProps<typeof StyledText>;
type HeadingExtraProps = { css?: CSS; asChild?: boolean };
type HeadingOwnProps = HeadingVariants & HeadingExtraProps;

type HeadingProps = HeadingOwnProps & ComponentPropsWithoutRef<'h1'>;

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>((props, forwardedRef) => {
  const { asChild, ...rest } = props;

  const tag = props.size ? `h${rest.size}` : 'h1';
  const Comp = asChild ? Slot : tag;

  return <StyledHeading as={Comp} {...rest} ref={forwardedRef} />;
});

Heading.displayName = 'Heading';

export default Heading;
