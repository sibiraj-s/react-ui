import { forwardRef } from 'react';
import { styled, HTMLStyledProps } from 'styled-system/jsx';
import { cva, cx, RecipeVariantProps } from 'styled-system/css';

import rx from '@/utils/factory';
import { textStyle } from '../Text';

export const headingStyle = cva({
  variants: {
    level: {
      '1': {
        textStyle: '4xl',
      },
      '2': {
        textStyle: '3xl',
      },
      '3': {
        textStyle: '2xl',
      },
      '4': {
        textStyle: 'xl',
      },
      '5': {
        textStyle: 'lg',
      },
      '6': {
        textStyle: 'md',
      },
    },
  },
  compoundVariants: [
    {
      level: ['1', '2', '3'],
      css: {
        fontWeight: 'bold',
      },
    },
    {
      level: ['4', '5', '6'],
      css: {
        fontWeight: 'semibold',
      },
    },
  ],
  defaultVariants: {
    level: '1',
  },
});

export type HeadingProps = HTMLStyledProps<'h1'> &
  RecipeVariantProps<typeof headingStyle> &
  RecipeVariantProps<typeof textStyle>;

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>((props, forwardedRef) => {
  const level = props.level ?? '1';
  const tag = rx[`h${level}`];
  const Component = styled(tag, headingStyle);
  const [textStyleProps] = textStyle.splitVariantProps(props);

  return <Component {...props} className={cx(textStyle(textStyleProps), props.className)} ref={forwardedRef} />;
});

Heading.displayName = 'Heading';

export default Heading;
