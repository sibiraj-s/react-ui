import { ComponentProps, ElementRef, forwardRef } from 'react';
import { AriaTextFieldProps, useTextField } from 'react-aria';
import { useObjectRef } from '@react-aria/utils';

import FormControl, { FormControlOwnProps } from '../FormControl';
import Label from '../Label';
import Textarea from '../Textarea/Textarea';
import FormText from '../FormText';

type TextareaFieldOwnProps = ComponentProps<typeof Textarea>;
type TextareaFieldProps = FormControlOwnProps & TextareaFieldOwnProps & AriaTextFieldProps;

export const TextareaField = forwardRef<ElementRef<typeof Textarea>, TextareaFieldProps>((props, ref) => {
  const inputRef = useObjectRef(ref);
  const { labelProps, inputProps, descriptionProps, errorMessageProps } = useTextField(
    {
      ...props,
      inputElementType: 'textarea',
    },
    inputRef
  );

  return (
    <FormControl isInvalid={props.isInvalid}>
      <Label {...labelProps}>{props.label}</Label>
      <Textarea {...inputProps} ref={inputRef} />
      {props.description && <FormText {...descriptionProps}>{props.description}</FormText>}
      {props.errorMessage && (
        <FormText variant='danger' {...errorMessageProps}>
          {props.errorMessage}
        </FormText>
      )}
    </FormControl>
  );
});

TextareaField.displayName = 'TextareaField';

export default TextareaField;
