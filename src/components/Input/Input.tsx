import { ComponentProps, ElementRef, forwardRef } from 'react';

import { styled, VariantProps, CSS } from '../../stitches.config';

export const StyledInput = styled('input', {
  display: 'block',
  padding: '$1_5 $3',
  width: '100%',
  borderRadius: '$rounded',
  border: '1px solid',
  borderColor: '$neutralBorderHover',
  backgroundColor: '$white',

  '&:focus': {
    outline: '1px solid',
    outlineColor: '$accentSolid',
    borderColor: '$accentSolid',
  },

  variants: {
    isInvalid: {
      true: {
        borderColor: '$dangerSolid',

        '&:focus': {
          outlineColor: '$dangerSolid',
          borderColor: '$dangerSolid',
        },
      },
    },
  },
});

type InputVariants = VariantProps<typeof StyledInput>;
type InputExtraProps = { css?: CSS };
type InputOwnProps = InputVariants & InputExtraProps;

type InputProps = InputOwnProps & ComponentProps<'input'>;

export const Input = forwardRef<ElementRef<typeof StyledInput>, InputProps>((props, ref) => {
  return <StyledInput {...props} ref={ref} />;
});

Input.displayName = 'Input';

export default Input;
