import { ComponentProps, ElementRef, forwardRef } from 'react';
import { styled } from 'styled-system/jsx';

export const StyledTextarea = styled('textarea', {
  base: {
    display: 'block',
    py: '1.5',
    px: '3',
    width: '100%',
    borderRadius: 'md',
    backgroundColor: 'transparent',
    resize: 'vertical',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'neutral.bgHover',
    colorPalette: 'accent',

    '&:focus-within': {
      outlineWidth: '1px',
      outlineStyle: 'solid',
      outlineColor: 'colorPalette.solid',
      borderColor: 'colorPalette.solid',
    },
  },

  variants: {
    isInvalid: {
      true: {
        colorPalette: 'danger',
        borderColor: 'danger.border',
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
