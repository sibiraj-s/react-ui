import { ComponentPropsWithRef, FC } from 'react';
import { cx } from 'styled-system/css';
import { avatarRecipe } from 'styled-system/recipes';

type AvatarFallbackProps = ComponentPropsWithRef<'div'>;

const AvatarFallback: FC<AvatarFallbackProps> = (props) => {
  const avatarClasses = avatarRecipe();
  return <div {...props} className={cx(avatarClasses.fallback, props.className)} />;
};

export default AvatarFallback;
