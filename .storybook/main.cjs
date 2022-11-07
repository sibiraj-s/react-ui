const { mergeConfig } = require('vite');

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
  // For v7
  // https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#frameworkoptions-renamed
  framework: '@storybook/react',
  reactOptions: {
    fastRefresh: true,
    strictMode: true,
  },
  core: {
    builder: '@storybook/builder-vite',
    disableTelemetry: true,
  },
  viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      // Use the same "resolve" configuration as your app
      define: {
        global: {},
      },
    });
  },
};
