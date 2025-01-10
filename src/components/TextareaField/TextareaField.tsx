import { FC, Ref } from 'react';
import { AriaTextFieldOptions, useTextField } from '@react-aria/textfield';
import { Stack } from 'styled-system/jsx';
import { TextareaRecipeVariantProps } from 'styled-system/recipes';

import useObjectRef from '@/hooks/use-object-ref';

import Label from '../Label';
import Textarea from '../Textarea';
import Text from '../Text';

type TextareaFieldProps = AriaTextFieldOptions<'textarea'> &
  TextareaRecipeVariantProps & { ref?: Ref<HTMLTextAreaElement> };

export const TextareaField: FC<TextareaFieldProps> = (props) => {
  const inputRef = useObjectRef<HTMLTextAreaElement>(props.ref);
  const {
    labelProps,
    inputProps,
    descriptionProps,
    errorMessageProps,
    isInvalid,
    validationErrors,
    validationDetails,
  } = useTextField<'textarea'>(
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
};

export default TextareaField;
