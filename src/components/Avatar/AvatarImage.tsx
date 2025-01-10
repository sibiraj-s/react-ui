import { ComponentPropsWithRef, FC } from 'react';
import { cx } from 'styled-system/css';
import { avatarRecipe } from 'styled-system/recipes';

type AvatarImageProps = ComponentPropsWithRef<'img'>;

const AvatarImage: FC<AvatarImageProps> = (props) => {
  const avatarClasses = avatarRecipe();
  return <img {...props} className={cx(avatarClasses.image, props.className)} />;
};

export default AvatarImage;
