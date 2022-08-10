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
    disableTelemetry: true,
  },
};
