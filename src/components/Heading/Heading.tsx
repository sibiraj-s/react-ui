import { FC } from 'react';
import { styled, HTMLStyledProps } from 'styled-system/jsx';
import { cx } from 'styled-system/css';
import { HeadingRecipeVariantProps, TextRecipeVariantProps, headingRecipe, textRecipe } from 'styled-system/recipes';

import rx from '@/utils/factory';

export type HeadingProps = HTMLStyledProps<'h1'> & HeadingRecipeVariantProps & TextRecipeVariantProps;

export const Heading: FC<HeadingProps> = (props) => {
  const level = props.level ?? '1';
  const tag = rx[`h${level}`];
  const Component = styled(tag, headingRecipe);
  const [textStyleProps, restHeadingProps] = textRecipe.splitVariantProps(props);

  return <Component {...restHeadingProps} className={cx(textRecipe(textStyleProps), props.className)} />;
};

export default Heading;
