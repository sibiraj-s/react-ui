import { ElementRef, forwardRef } from 'react';
import { styled } from 'styled-system/jsx';
import { textareaRecipe } from 'styled-system/recipes';
import { ComponentProps } from 'styled-system/types';

export const StyledTextarea = styled('textarea', textareaRecipe);

type TextAreaElement = ElementRef<typeof StyledTextarea>;
type TextareaProps = ComponentProps<typeof StyledTextarea>;

export const Textarea = forwardRef<TextAreaElement, TextareaProps>((props, forwardedRef) => {
  return <StyledTextarea {...props} ref={forwardedRef} />;
});

Textarea.displayName = 'Textarea';

export default Textarea;
