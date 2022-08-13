import { ComponentProps, ElementRef, forwardRef } from 'react';

import { styled, VariantProps, CSS } from '../../stitches.config';
import { StyledInput } from '../Input';

export const StyledTextarea = styled(StyledInput, {
  resize: 'vertical',
});

type TextareaVariants = VariantProps<typeof StyledTextarea>;
type TextareaExtraProps = { css?: CSS };
type TextareaOwnProps = TextareaVariants & TextareaExtraProps;

type TextareaProps = TextareaOwnProps & ComponentProps<'textarea'>;

export const Textarea = forwardRef<ElementRef<'textarea'>, TextareaProps>((props, ref) => {
  return <StyledTextarea as='textarea' {...props} ref={ref} />;
});

Textarea.displayName = 'Textarea';

export default Textarea;
