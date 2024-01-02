import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { cx } from 'styled-system/css';
import { avatarRecipe } from 'styled-system/recipes';

type AvatarProps = ComponentPropsWithoutRef<'div'>;

export default forwardRef<HTMLDivElement, AvatarProps>(function Avatar(props, ref) {
  const avatarClasses = avatarRecipe();

  return <div {...props} className={cx(avatarClasses.root, props.className)} ref={ref} />;
});
