import { ComponentProps, ElementRef, forwardRef } from 'react';
import { AriaTextFieldProps, LabelAriaProps, useTextField } from 'react-aria';
import { useObjectRef } from '@react-aria/utils';

import { styled, VariantProps, CSS } from '../../stitches.config';
import { StyledInput } from '../Input';

export const StyledTextarea = styled(StyledInput, {
  resize: 'vertical',
});

type TextareaVariants = VariantProps<typeof StyledTextarea>;
type TextareaExtraProps = { css?: CSS };
type TextareaOwnProps = TextareaVariants & TextareaExtraProps;

type TextareaProps = TextareaOwnProps & ComponentProps<'textarea'> & Omit<AriaTextFieldProps, keyof LabelAriaProps>;

export const Textarea = forwardRef<ElementRef<'textarea'>, TextareaProps>((props, ref) => {
  const textareaRef = useObjectRef(ref);
  const { inputProps } = useTextField(
    {
      ...props,
      inputElementType: 'textarea',
    },
    textareaRef
  );

  return <StyledTextarea as='textarea' {...props} {...inputProps} ref={textareaRef} />;
});

Textarea.displayName = 'Textarea';

export default Textarea;
