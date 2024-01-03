import { ElementRef, forwardRef } from 'react';
import { AriaTextFieldProps, useTextField } from '@react-aria/textfield';
import { Stack } from 'styled-system/jsx';

import useObjectRef from '@/hooks/use-object-ref';

import Label from '../Label';
import Input, { InputVariantProps } from '../Input';
import Text from '../Text';

type TextFieldProps = AriaTextFieldProps & InputVariantProps;

export const TextField = forwardRef<ElementRef<typeof Input>, TextFieldProps>((props, forwardedRef) => {
  const inputRef = useObjectRef(forwardedRef);
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
