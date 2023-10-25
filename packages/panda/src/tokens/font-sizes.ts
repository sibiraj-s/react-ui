import { defineTokens } from '@pandacss/dev';

const fontSizes = defineTokens.fontSizes({
  root: { value: '16px' }, // keep in pixel, used as base for rem caluclation
  body: { value: '1rem' },
});

export default fontSizes;
