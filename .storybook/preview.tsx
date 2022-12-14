import { normalize, reset } from '../index';

const resetStyles = reset();
const normalizeStyles = normalize();

export const decorators = [
  (Story) => {
    resetStyles();
    normalizeStyles();
    return <>{Story()}</>;
  },
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(?:background|color)$/i,
      date: /Date$/,
      boolean: /(?:disabled|isInvalid)$/i,
    },
  },
  backgrounds: { default: 'light' },
  options: {
    // storySort: (a, b) => (a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })),
  },
};
