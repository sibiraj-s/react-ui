import { ComponentProps, ElementRef, forwardRef } from 'react';
import { AriaTextFieldProps, useTextField } from 'react-aria';
import { Stack } from 'styled-system/jsx';

import useObjectRef from '@/hooks/use-object-ref';

import Label from '../Label';
import Input from '../Input';
import Text from '../Text';

type TextFieldOwnProps = ComponentProps<typeof Input>;
type TextFieldProps = TextFieldOwnProps & AriaTextFieldProps;

export const TextField = forwardRef<ElementRef<typeof Input>, TextFieldProps>((props, ref) => {
  const inputRef = useObjectRef(ref);
  const { prepend, append, ...rest } = props;

  const {
    labelProps,
    inputProps,
    descriptionProps,
    errorMessageProps,
    isInvalid,
    validationDetails,
    validationErrors,
  } = useTextField(rest, inputRef);

  const errorMessage =
    typeof props.errorMessage === 'function'
      ? props.errorMessage({
          isInvalid,
          validationDetails,
          validationErrors,
        })
      : props.errorMessage;

  return (
    <Stack gap='1'>
      <Label {...labelProps}>{props.label}</Label>
      <Input {...inputProps} ref={inputRef} isInvalid={props.isInvalid} prepend={prepend} append={append} />
      {props.description && (
        <Text size='sm' color='muted' {...descriptionProps}>
          {props.description}
        </Text>
      )}
      {errorMessage && (
        <Text size='sm' color='error' {...errorMessageProps}>
          {errorMessage}
        </Text>
      )}
    </Stack>
  );
});

TextField.displayName = 'TextField';

export default TextField;
