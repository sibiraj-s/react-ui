import { FC } from 'react';
import { styled, HTMLStyledProps } from 'styled-system/jsx';
import { TextRecipeVariantProps, textRecipe } from 'styled-system/recipes';
import { cx } from 'styled-system/css';

type LinkStyledProps = HTMLStyledProps<'a'>;
type LinkProps = LinkStyledProps & TextRecipeVariantProps;

export const Link: FC<LinkProps> = (props) => {
  const [textVariants, restProps] = textRecipe.splitVariantProps(props);

  return <styled.a {...restProps} className={cx(textRecipe(textVariants), restProps.className)} />;
};

export default Link;
