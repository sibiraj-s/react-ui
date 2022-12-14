const { mergeConfig } = require('vite');
const pkgJson = require('../package.json');

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {
      fastRefresh: true,
      strictMode: true,
    },
  },
  core: {
    disableTelemetry: true,
  },
  viteFinal(config, { configType }) {
    const customConfig = {};

    if (configType === 'PRODUCTION') {
      customConfig.base = `/${pkgJson.name}/`;
    }

    return mergeConfig(config, customConfig);
  },
  docs: {
    docsPage: 'automatic',
  },
};
