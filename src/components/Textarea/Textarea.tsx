import { ComponentProps, ElementRef, forwardRef } from 'react';

import { styled, VariantProps, CSS } from '../../stitches.config';

export const StyledTextarea = styled('textarea', {
  display: 'block',
  padding: '$1_5 $3',
  width: '100%',
  borderRadius: '$rounded',
  border: '1px solid',
  borderColor: '$neutralBorderHover',
  backgroundColor: '$white',
  resize: 'vertical',

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

type TextareaVariants = VariantProps<typeof StyledTextarea>;
type TextareaExtraProps = { css?: CSS };
type TextareaOwnProps = TextareaVariants & TextareaExtraProps;

type TextareaProps = TextareaOwnProps & ComponentProps<'textarea'>;

export const Textarea = forwardRef<ElementRef<'textarea'>, TextareaProps>((props, ref) => {
  return <StyledTextarea as='textarea' {...props} ref={ref} />;
});

Textarea.displayName = 'Textarea';

export default Textarea;
