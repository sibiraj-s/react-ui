import { ComponentProps, ElementRef, forwardRef } from 'react';
import { styled } from 'styled-system/jsx';
import { textareaRecipe } from 'styled-system/recipes';

export const StyledTextarea = styled('textarea', textareaRecipe);

type TextareaVariants = ComponentProps<typeof StyledTextarea>;
type TextareaOwnProps = TextareaVariants;

type TextAreaElement = ElementRef<typeof StyledTextarea>;
type TextareaProps = TextareaOwnProps & ComponentProps<typeof StyledTextarea>;

export const Textarea = forwardRef<TextAreaElement, TextareaProps>((props, ref) => {
  return <StyledTextarea {...props} ref={ref} />;
});

Textarea.displayName = 'Textarea';

export default Textarea;
