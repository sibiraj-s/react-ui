import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { cx } from 'styled-system/css';
import { avatarRecipe } from 'styled-system/recipes';

type AvatarFallbackProps = ComponentPropsWithoutRef<'div'>;

export default forwardRef<HTMLDivElement, AvatarFallbackProps>(function AvatarFallback(props, ref) {
  const avatarClasses = avatarRecipe();

  return <div {...props} className={cx(avatarClasses.fallback, props.className)} ref={ref} />;
});
