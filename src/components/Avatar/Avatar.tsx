import { ComponentPropsWithRef, forwardRef } from 'react';
import { avatarRecipe } from 'styled-system/recipes';
import { cx } from 'styled-system/css';

type AvatarProps = ComponentPropsWithRef<'div'>;

export default forwardRef<HTMLDivElement, AvatarProps>(function Avatar(props, forwardedRef) {
  const avatarClasses = avatarRecipe();

  return <div {...props} className={cx(avatarClasses.root, props.className)} ref={forwardedRef} />;
});
