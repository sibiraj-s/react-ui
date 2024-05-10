import { Decorator, Parameters, Preview } from '@storybook/react';
import { FC, PropsWithChildren, useEffect } from 'react';
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

const ThemeWrapper: FC<PropsWithChildren> = (props) => {
  const isDarkMode = useDarkMode();

  useEffect(() => {
    document.body.classList.remove('dark', 'light');
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return props.children;
};

const paletteRange = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

const withThemeProvider: Decorator = (Story, context) => {
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

  return (
    <ThemeWrapper>
      <Story />
    </ThemeWrapper>
  );
};

export const decorators: Decorator[] = [withThemeProvider];
