import { ElementRef, forwardRef } from 'react';
import { styled, HTMLStyledProps } from 'styled-system/jsx';
import { textStyle } from '../Text';

type LabelElement = ElementRef<typeof styled.label>;

const StyledLabel = styled('label', textStyle);
type LabelProps = HTMLStyledProps<typeof StyledLabel>;

export const Label = forwardRef<LabelElement, LabelProps>((props, forwardedRef) => {
  return <StyledLabel {...props} ref={forwardedRef} />;
});
Label.displayName = 'Label';

export default Label;
