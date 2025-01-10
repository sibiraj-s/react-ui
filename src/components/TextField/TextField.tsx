import { FC, Ref } from 'react';
import { AriaTextFieldOptions, AriaTextFieldProps, useTextField } from '@react-aria/textfield';
import { Stack, StackProps, splitCssProps } from 'styled-system/jsx';

import useObjectRef from '@/hooks/use-object-ref';

import Label from '../Label';
import Input, { InputExtraProps } from '../Input';
import Text from '../Text';

type AriaConflictingProps = {
  autoCapitalize: AriaTextFieldOptions<'input'>['autoCapitalize'];
};
type TextFieldOwnProps = InputExtraProps & AriaTextFieldProps & AriaConflictingProps & { ref?: Ref<HTMLInputElement> };
type TextFieldProps = TextFieldOwnProps & Omit<StackProps, keyof TextFieldOwnProps>;

export const TextField: FC<TextFieldProps> = (props) => {
  const [cssProps, restProps] = splitCssProps(props);
  const { prepend, append, ...rest } = restProps;

  const inputRef = useObjectRef<HTMLInputElement>(props.ref);

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
    <Stack gap='1' {...cssProps} direction='column'>
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
};

export default TextField;
