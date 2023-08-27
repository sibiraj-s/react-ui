import { ComponentProps, ElementRef, forwardRef } from 'react';
import { AriaTextFieldProps, useTextField } from 'react-aria';
import { useObjectRef } from '@react-aria/utils';
import { Stack } from 'styled-system/jsx';

import Label from '../Label';
import Input from '../Input';
import Text from '../Text';

type TextFieldOwnProps = ComponentProps<typeof Input>;
type TextFieldProps = TextFieldOwnProps & AriaTextFieldProps;

export const TextField = forwardRef<ElementRef<typeof Input>, TextFieldProps>((props, ref) => {
  const inputRef = useObjectRef(ref);
  const { prepend, append, ...rest } = props;

  const { labelProps, inputProps, descriptionProps, errorMessageProps } = useTextField(rest, inputRef);

  return (
    <Stack gap='1'>
      <Label {...labelProps}>{props.label}</Label>
      <Input {...inputProps} ref={inputRef} isInvalid={props.isInvalid} prepend={prepend} append={append} />
      {props.description && (
        <Text size='sm' variant='muted' {...descriptionProps}>
          {props.description}
        </Text>
      )}
      {props.errorMessage && (
        <Text size='sm' variant='danger' {...errorMessageProps}>
          {props.errorMessage}
        </Text>
      )}
    </Stack>
  );
});

TextField.displayName = 'TextField';

export default TextField;
