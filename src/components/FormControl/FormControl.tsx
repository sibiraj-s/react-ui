import { ComponentProps, createContext, ElementRef, forwardRef, useContext } from 'react';
import { Flex } from '../../layouts';
import { styled } from '../../stitches.config';

const BaseFormControl = styled(Flex, {
  marginBottom: '$2',
});

export interface FormControlOwnProps {
  isInvalid?: boolean;
}

export type FormControlValues = Pick<FormControlOwnProps, 'isInvalid'>;
const FormControlContext = createContext<FormControlValues>({
  isInvalid: false,
});

export const useFormControlContext = () => useContext(FormControlContext);

type FormControlProps = FormControlOwnProps & ComponentProps<typeof BaseFormControl>;

export const FormControl = forwardRef<ElementRef<typeof BaseFormControl>, FormControlProps>((props, ref) => {
  const { isInvalid, ...rest } = props;

  const formControlValue: FormControlValues = {
    isInvalid,
  };

  return (
    <FormControlContext.Provider value={formControlValue}>
      <BaseFormControl direction='c' spacing='xs' {...rest} ref={ref} />
    </FormControlContext.Provider>
  );
});

FormControl.displayName = 'FormControl';

export default FormControl;
