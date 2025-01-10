import { FC } from 'react';
import { styled, HTMLStyledProps } from 'styled-system/jsx';
import { textRecipe } from 'styled-system/recipes';

const StyledLabel = styled('label', textRecipe);
type LabelProps = HTMLStyledProps<typeof StyledLabel>;

export const Label: FC<LabelProps> = (props) => {
  return <StyledLabel fontWeight='medium' {...props} />;
};

export default Label;
