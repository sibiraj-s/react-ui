import { ComponentProps, ElementRef, forwardRef } from 'react';
import { AriaTextFieldProps, useTextField } from 'react-aria';
import { useObjectRef } from '@react-aria/utils';

import Input from '../Input';
import FormControl, { FormControlOwnProps } from '../FormControl';
import Label from '../Label/Label';

type TextFieldOwnProps = ComponentProps<typeof Input>;
type TextFieldProps = FormControlOwnProps & TextFieldOwnProps & AriaTextFieldProps;

export const TextField = forwardRef<ElementRef<typeof Input>, TextFieldProps>((props, ref) => {
  const inputRef = useObjectRef(ref);
  const { labelProps, inputProps } = useTextField(props, inputRef);

  return (
    <FormControl isInvalid={props.isInvalid}>
      <Label {...labelProps}>{props.label}</Label>
      <Input {...inputProps} ref={inputRef} />
    </FormControl>
  );
});

TextField.displayName = 'TextField';

export default TextField;
