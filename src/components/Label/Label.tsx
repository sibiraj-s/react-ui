import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { StyledText } from '../Text';
import { VariantProps, styled } from '../../stitches.config';

const StyledLabel = styled(StyledText);

type LabelProps = VariantProps<typeof StyledText> & ComponentPropsWithoutRef<'label'>;

export const Label = forwardRef<ElementRef<'label'>, LabelProps>((props, forwardedRef) => {
  return <StyledLabel {...props} as='label' ref={forwardedRef} />;
});
Label.displayName = 'Label';

export default Label;
