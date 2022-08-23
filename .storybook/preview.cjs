import { addDecorator } from '@storybook/react';

import { normalize, reset } from '..';

const resetStyles = reset();
const normalizeStyles = normalize();

addDecorator((story) => {
  resetStyles();
  normalizeStyles();

  return story();
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(?:background|color)$/i,
      date: /Date$/,
      boolean: /(?:disabled|isInvalid)$/i,
    },
  },
  options: {
    storySort: (a, b) => (a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })),
  },
};
