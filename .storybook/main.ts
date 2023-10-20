import { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-a11y'],
  framework: {
    name: '@storybook/react-vite',
    options: {
      strictMode: true,
    },
  },
  docs: {
    autodocs: false,
  },
  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
  },
};

export default config;
