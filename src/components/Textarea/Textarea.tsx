import { ComponentProps, ElementRef, forwardRef } from 'react';
import { styled } from 'styled-system/jsx';

export const StyledTextarea = styled('textarea', {
  base: {
    display: 'block',
    py: '1.5',
    px: '3',
    width: '100%',
    borderRadius: 'md',
    border: '1px solid',
    borderColor: '$neutralBorderHover',
    backgroundColor: 'transparent',
    resize: 'vertical',

    '&:focus': {
      outline: '1px solid',
      outlineColor: '$accentSolid',
      borderColor: '$accentSolid',
    },
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

type TextareaVariants = ComponentProps<typeof StyledTextarea>;
type TextareaOwnProps = TextareaVariants;

type TextAreaElement = ElementRef<typeof StyledTextarea>;
type TextareaProps = TextareaOwnProps & ComponentProps<typeof StyledTextarea>;

export const Textarea = forwardRef<TextAreaElement, TextareaProps>((props, ref) => {
  return <StyledTextarea {...props} ref={ref} />;
});

Textarea.displayName = 'Textarea';

export default Textarea;
