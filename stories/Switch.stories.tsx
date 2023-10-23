import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { HStack } from 'styled-system/jsx';
import { switchRecipe } from 'styled-system/recipes';

import { Switch } from '../index';
import { showOnlyControls } from './utils';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    controls: {
      exclude: showOnlyControls([...switchRecipe.variantKeys, 'isFocusVisible']),
    },
  },
  argTypes: {
    size: {
      control: 'radio',
      options: switchRecipe.variantMap.size,
    },
    disabled: {
      control: 'boolean',
    },
    onCheckedChange: { action: 'checked', table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

const TemplateSizes = (args: ComponentProps<typeof Switch>) => (
  <HStack gap='4'>
    <Switch size='sm' {...args} />
    <Switch {...args} />
    <Switch size='lg' {...args} />
  </HStack>
);

const TemplateColors = (args: ComponentProps<typeof Switch>) => (
  <HStack gap='4'>
    <Switch color='danger' {...args} defaultChecked />
    <Switch {...args} defaultChecked />
    <Switch color='muted' {...args} defaultChecked />
    <Switch color='neutral' {...args} defaultChecked />
  </HStack>
);

export const Default: Story = {
  args: {
    size: 'regular',
  },
  render: (args) => <Switch {...args} />,
};

export const Disabled: Story = {
  ...Default,
  args: switchRecipe.raw({
    disabled: true,
  }),
};

export const Sizes: Story = {
  ...Default,
  args: {},
  render: (args) => <TemplateSizes {...args} />,
};

export const Colors: Story = {
  ...Default,
  args: {},
  render: (args) => <TemplateColors {...args} />,
};
