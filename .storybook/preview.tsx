import { Decorator, Parameters } from '@storybook/react';
import { normalize, reset } from '../index';

const resetStyles = reset();
const normalizeStyles = normalize();

export const decorators: Decorator[] = [
  (Story) => {
    resetStyles();
    normalizeStyles();
    return <>{Story()}</>;
  },
];

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(?:background|color)$/i,
      date: /Date$/,
      boolean: /(?:disabled|isInvalid)$/i,
    },
  },
  backgrounds: {
    disable: true,
  },
};
