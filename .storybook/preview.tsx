import { Decorator, Parameters } from '@storybook/react';
import { FC, PropsWithChildren, useEffect } from 'react';
import { useDarkMode } from 'storybook-dark-mode';

import '../src/index.css';

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

const ThemeWrapper: FC<PropsWithChildren> = (props) => {
  const isDarkMode = useDarkMode();

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return props.children;
};

export const decorators: Decorator[] = [
  (renderStory) => {
    return <ThemeWrapper>{renderStory()}</ThemeWrapper>;
  },
];
