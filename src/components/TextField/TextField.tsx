import { ComponentProps, ElementRef, forwardRef } from 'react';
import { AriaTextFieldProps, useTextField } from 'react-aria';
import { useObjectRef } from '@react-aria/utils';

import { Flex } from '../../layouts';
import Label from '../Label';
import Input from '../Input';
import Text from '../Text';

type TextFieldOwnProps = ComponentProps<typeof Input>;
type TextFieldProps = TextFieldOwnProps & AriaTextFieldProps;

export const TextField = forwardRef<ElementRef<typeof Input>, TextFieldProps>((props, ref) => {
  const inputRef = useObjectRef(ref);
  const { labelProps, inputProps, descriptionProps, errorMessageProps } = useTextField(props, inputRef);

  return (
    <Flex direction='c' spacing='xs'>
      <Label {...labelProps}>{props.label}</Label>
      <Input {...inputProps} ref={inputRef} isInvalid={props.isInvalid} />
      {props.description && (
        <Text size='xs' variant='muted' {...descriptionProps}>
          {props.description}
        </Text>
      )}
      {props.errorMessage && (
        <Text size='xs' variant='danger' {...errorMessageProps}>
          {props.errorMessage}
        </Text>
      )}
    </Flex>
  );
});

TextField.displayName = 'TextField';

export default TextField;
