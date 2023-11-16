import { forwardRef } from 'react';
import { HTMLStyledProps } from 'styled-system/types';
import { styled } from 'styled-system/jsx';
import { TextRecipeVariantProps, textRecipe } from 'styled-system/recipes';
import { cx } from 'styled-system/css';

type LinkStyledProps = HTMLStyledProps<'a'>;
type LinkProps = LinkStyledProps & TextRecipeVariantProps;

export const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, forwardedRef) => {
  const [textVariants, restProps] = textRecipe.splitVariantProps(props);

  return <styled.a {...restProps} className={cx(textRecipe(textVariants), restProps.className)} ref={forwardedRef} />;
});

Link.displayName = 'Link';

export default Link;
