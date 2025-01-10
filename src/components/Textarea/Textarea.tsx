import { FC } from 'react';
import { styled } from 'styled-system/jsx';
import { textareaRecipe } from 'styled-system/recipes';
import { ComponentProps } from 'styled-system/types';

export const StyledTextarea = styled('textarea', textareaRecipe);

type TextareaProps = ComponentProps<typeof StyledTextarea>;

export const Textarea: FC<TextareaProps> = (props) => {
  return <StyledTextarea {...props} />;
};

Textarea.displayName = 'Textarea';

export default Textarea;
