import { ComponentProps, ElementRef, forwardRef } from 'react';
import { AriaTextFieldProps, useTextField } from 'react-aria';
import { Stack } from 'styled-system/jsx';

import useObjectRef from '@/hooks/use-object-ref';

import Label from '../Label';
import Textarea from '../Textarea';
import Text from '../Text';

type TextareaFieldOwnProps = ComponentProps<typeof Textarea>;
type TextareaFieldProps = TextareaFieldOwnProps & AriaTextFieldProps;

export const TextareaField = forwardRef<ElementRef<typeof Textarea>, TextareaFieldProps>((props, ref) => {
  const inputRef = useObjectRef(ref);
  const {
    labelProps,
    inputProps,
    descriptionProps,
    errorMessageProps,
    isInvalid,
    validationErrors,
    validationDetails,
  } = useTextField(
    {
      ...props,
      inputElementType: 'textarea',
    },
    inputRef
  );

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
      <Textarea {...inputProps} ref={inputRef} isInvalid={props.isInvalid} />
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

TextareaField.displayName = 'TextareaField';

export default TextareaField;
