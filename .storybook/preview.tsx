import { Decorator, Parameters, Preview } from '@storybook/react';
import { useEffect } from 'react';
import { useDarkMode } from 'storybook-dark-mode';

import { Token, token } from 'styled-system/tokens';
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

export const globalTypes: Preview['globalTypes'] = {
  accent: {
    description: 'Accent color for components',
    defaultValue: 'blue',
    toolbar: {
      title: 'Accent Color',
      icon: 'circlehollow',
      items: [
        'rose',
        'pink',
        'fuchsia',
        'purple',
        'violet',
        'indigo',
        'blue',
        'sky',
        'cyan',
        'teal',
        'emerald',
        'green',
        'lime',
        'yellow',
        'amber',
        'orange',
        'red',
        'neutral',
        'stone',
        'zinc',
        'gray',
        'slate',
      ],
      dynamicTitle: true,
    },
  },
};

const paletteRange = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

const WithThemeProvider: Decorator = (Story, context) => {
  const isDarkMode = useDarkMode();

  paletteRange.forEach((range) => {
    const tokenValue = token(`colors.${context.globals.accent}.${range}` as Token);
    const accentTokenVar = token.var(`colors.accent.${range}` as Token);

    const match = accentTokenVar.match(/var\((?<accentVar>[^)]+)\)/);

    if (match === null) {
      return;
    }

    const [, accentVar] = match;
    document.body.style.setProperty(accentVar, tokenValue);
  });

  useEffect(() => {
    document.body.classList.remove('dark', 'light');
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return <Story />;
};

export const decorators: Decorator[] = [WithThemeProvider];
