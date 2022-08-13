import { ComponentProps, ElementRef, forwardRef } from 'react';
import { AriaTextFieldProps, useTextField } from 'react-aria';
import { useObjectRef } from '@react-aria/utils';

import { styled, VariantProps, CSS } from '../../stitches.config';

const StyledInput = styled('input', {
  display: 'block',
  padding: '$1_5 $3',
  width: '100%',
  borderRadius: '$rounded',
  border: '1px solid',
  borderColor: '$muted',
  backgroundColor: '$white',

  '&:focus': {
    outline: '1px solid',
    outlineColor: '$accentSolid',
    borderColor: '$accentSolid',
  },
});

type InputVariants = VariantProps<typeof StyledInput>;
type InputExtraProps = { css?: CSS };
type InputOwnProps = InputVariants & InputExtraProps;

type InputProps = InputOwnProps & ComponentProps<typeof StyledInput> & AriaTextFieldProps;

export const Input = forwardRef<ElementRef<typeof StyledInput>, InputProps>((props, ref) => {
  const inputRef = useObjectRef(ref);
  const { inputProps } = useTextField(props, inputRef);

  return <StyledInput {...props} {...inputProps} ref={inputRef} />;
});

Input.displayName = 'Input';

export default Input;
