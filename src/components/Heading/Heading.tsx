import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { RecipeVariantProps } from 'styled-system/css';

import { textStyle } from '../Text';

type HeadingVariants = RecipeVariantProps<typeof textStyle>;
type HeadingExtraProps = { asChild?: boolean };
type HeadingOwnProps = HeadingVariants & HeadingExtraProps;

type HeadingProps = HeadingOwnProps & ComponentPropsWithoutRef<'h1'>;

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>((props, forwardedRef) => {
  const { asChild, ...rest } = props;

  const tag = rest.size ? `h${rest.size}` : 'h1';

  const [variantProps] = textStyle.splitVariantProps(props);
  const Component = asChild ? Slot : tag;

  return (
    <Component className={textStyle({ size: '1', weight: 'bold', ...variantProps })} {...rest} ref={forwardedRef} />
  );
});

Heading.displayName = 'Heading';

export default Heading;
