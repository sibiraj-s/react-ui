import { ComponentProps, ElementRef, forwardRef } from 'react';
import { AriaTextFieldProps, useTextField } from 'react-aria';
import { useObjectRef } from '@react-aria/utils';

import { Flex } from '../../layouts';
import Label from '../Label';
import Textarea from '../Textarea';
import Text from '../Text';

type TextareaFieldOwnProps = ComponentProps<typeof Textarea>;
type TextareaFieldProps = TextareaFieldOwnProps & AriaTextFieldProps;

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
    <Flex direction='c' spacing='xs'>
      <Label {...labelProps}>{props.label}</Label>
      <Textarea {...inputProps} ref={inputRef} isInvalid={props.isInvalid} />
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
    </Flex>
  );
});

TextareaField.displayName = 'TextareaField';

export default TextareaField;
