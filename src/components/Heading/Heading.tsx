import { forwardRef } from 'react';
import { styled } from 'styled-system/jsx';

import rx from '@/utils/factory';

import { textStyle, TextProps } from '../Text';

const headingLevels = ['1', '2', '3', '4', '5', '6'] as const;

export type HeadingProps = TextProps & {
  size?: (typeof headingLevels)[number];
};

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>((props, forwardedRef) => {
  const tag = props.size ? rx[`h${props.size}`] : rx.h1;
  const Component = styled(tag, textStyle);

  return <Component size='1' weight='bold' {...props} ref={forwardedRef} />;
});

Heading.displayName = 'Heading';

export default Heading;
