import AvatarRoot from './Avatar';
import AvatarFallback from './AvatarFallback';
import AvatarImage from './AvatarImage';

export const Avatar = Object.assign(AvatarRoot, {
  Root: AvatarRoot,
  Fallback: AvatarFallback,
  Image: AvatarImage,
});

export default Avatar;
