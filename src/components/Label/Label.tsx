import { ElementRef, forwardRef } from 'react';
import { styled, HTMLStyledProps } from 'styled-system/jsx';
import { textRecipe } from 'styled-system/recipes';

type LabelElement = ElementRef<typeof styled.label>;

const StyledLabel = styled('label', textRecipe);
type LabelProps = HTMLStyledProps<typeof StyledLabel>;

export const Label = forwardRef<LabelElement, LabelProps>((props, forwardedRef) => {
  return <StyledLabel fontWeight='medium' {...props} ref={forwardedRef} />;
});
Label.displayName = 'Label';

export default Label;
