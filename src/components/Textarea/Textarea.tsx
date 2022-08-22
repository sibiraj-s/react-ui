import { ComponentProps, ElementRef, forwardRef } from 'react';

import { styled, VariantProps, CSS } from '../../stitches.config';
import { useFormControlContext } from '../FormControl';
import { StyledInput } from '../Input';

export const StyledTextarea = styled(StyledInput, {
  resize: 'vertical',
});

type TextareaVariants = VariantProps<typeof StyledInput>;
type TextareaExtraProps = { css?: CSS };
type TextareaOwnProps = TextareaVariants & TextareaExtraProps;

type TextareaProps = TextareaOwnProps & ComponentProps<'textarea'>;

export const Textarea = forwardRef<ElementRef<'textarea'>, TextareaProps>((props, ref) => {
  const fromContol = useFormControlContext();
  const isInvalid = props.isInvalid ?? fromContol.isInvalid ?? false;

  return <StyledTextarea as='textarea' {...props} isInvalid={isInvalid} ref={ref} />;
});

Textarea.displayName = 'Textarea';

export default Textarea;
