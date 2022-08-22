import { ComponentProps, ElementRef, forwardRef } from 'react';
import { AriaTextFieldProps, useTextField } from 'react-aria';
import { useObjectRef } from '@react-aria/utils';

import FormControl, { FormControlOwnProps } from '../FormControl';
import Label from '../Label';
import Input from '../Input';
import FormText from '../FormText';

type TextFieldOwnProps = ComponentProps<typeof Input>;
type TextFieldProps = FormControlOwnProps & TextFieldOwnProps & AriaTextFieldProps;

export const TextField = forwardRef<ElementRef<typeof Input>, TextFieldProps>((props, ref) => {
  const inputRef = useObjectRef(ref);
  const { labelProps, inputProps, descriptionProps, errorMessageProps } = useTextField(props, inputRef);

  return (
    <FormControl isInvalid={props.isInvalid}>
      <Label {...labelProps}>{props.label}</Label>
      <Input {...inputProps} ref={inputRef} />
      {props.description && <FormText {...descriptionProps}>{props.description}</FormText>}
      {props.errorMessage && (
        <FormText variant='danger' {...errorMessageProps}>
          {props.errorMessage}
        </FormText>
      )}
    </FormControl>
  );
});

TextField.displayName = 'TextField';

export default TextField;
