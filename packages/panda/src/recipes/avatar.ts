import { defineSlotRecipe } from '@pandacss/dev';

export const avatarRecipe = defineSlotRecipe({
  className: 'avatar',
  description: 'The styles for the Avatar component',
  slots: ['root', 'fallback', 'image'],
  base: {
    root: {
      position: 'relative',
      h: 14,
      w: 14,
      overflow: 'hidden',
      borderRadius: 'full',
      flexShrink: 0,
    },
    fallback: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      h: 'full',
      w: 'full',
      borderRadius: 'full',
      bg: 'muted',
      fontWeight: 'medium',
    },
    image: {
      aspectRatio: 'square',
      h: 'full',
      w: 'full',
    },
  },
});

export default avatarRecipe;
