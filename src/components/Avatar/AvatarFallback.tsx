import { ComponentPropsWithRef, forwardRef } from 'react';
import { cx } from 'styled-system/css';
import { avatarRecipe } from 'styled-system/recipes';

type AvatarFallbackProps = ComponentPropsWithRef<'div'>;

export default forwardRef<HTMLDivElement, AvatarFallbackProps>(function AvatarFallback(props, forwardedRef) {
  const avatarClasses = avatarRecipe();

  return <div {...props} className={cx(avatarClasses.fallback, props.className)} ref={forwardedRef} />;
});
