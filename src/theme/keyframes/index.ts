import { defineKeyframes } from '@pandacss/dev';

export const keyframes = defineKeyframes({
  stripedBg: {
    '0%': { backgroundPosition: '1rem 0' },
    '100%': { backgroundPosition: '0 0' },
  },
});
