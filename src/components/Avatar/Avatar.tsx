import { ComponentPropsWithRef, FC } from 'react';
import { avatarRecipe } from 'styled-system/recipes';
import { cx } from 'styled-system/css';

type AvatarProps = ComponentPropsWithRef<'div'>;

const Avatar: FC<AvatarProps> = (props) => {
  const avatarClasses = avatarRecipe();
  return <div {...props} className={cx(avatarClasses.root, props.className)} />;
};

export default Avatar;
