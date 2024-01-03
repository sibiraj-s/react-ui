import { ComponentPropsWithRef, forwardRef } from 'react';
import { cx } from 'styled-system/css';
import { avatarRecipe } from 'styled-system/recipes';

type AvatarImageProps = ComponentPropsWithRef<'img'>;

export default forwardRef<HTMLImageElement, AvatarImageProps>(function AvatarImage(props, forwardedRef) {
  const avatarClasses = avatarRecipe();

  return <img {...props} className={cx(avatarClasses.image, props.className)} ref={forwardedRef} />;
});
