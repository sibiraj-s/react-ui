import { ComponentProps, ElementRef, forwardRef } from 'react';
import { styled } from 'styled-system/jsx';

import { textStyle } from '../Text';

const StyledLabel = styled('label', textStyle);

type LabelOwnProps = ComponentProps<typeof StyledLabel>;

type LabelElement = ElementRef<typeof StyledLabel>;
type LabelProps = LabelOwnProps;

export const Label = forwardRef<LabelElement, LabelProps>((props, forwardedRef) => {
  return <StyledLabel {...props} ref={forwardedRef} />;
});
Label.displayName = 'Label';

export default Label;
