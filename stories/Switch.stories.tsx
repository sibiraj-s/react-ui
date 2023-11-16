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
      exclude: showOnlyControls([...switchRecipe.variantKeys, 'onChange', 'isDisabled']),
    },
  },
  argTypes: {
    size: {
      control: 'radio',
      options: switchRecipe.variantMap.size,
    },
    isDisabled: {
      control: 'boolean',
    },
    onChange: { action: 'checked', table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

const TemplateSizes = (args: ComponentProps<typeof Switch>) => (
  <HStack gap='4'>
    <Switch size='sm' {...args} aria-label='Small switch' />
    <Switch {...args} aria-label='Regular Sized switch' />
    <Switch size='lg' {...args} aria-label='Big switch' />
  </HStack>
);

const TemplateColors = (args: ComponentProps<typeof Switch>) => (
  <HStack gap='4'>
    <Switch colorPalette='red' {...args} defaultSelected aria-label='Red color switch' />
    <Switch {...args} defaultSelected aria-label='Default color switch' />
    <Switch colorPalette='amber' {...args} defaultSelected aria-label='Amber color switch' />
    <Switch colorPalette='teal' {...args} defaultSelected aria-label='Teal color switch' />
  </HStack>
);

export const Default: Story = {
  args: {
    size: 'regular',
    'aria-label': 'Airplane Mode',
  },
};

export const Disabled: Story = {
  ...Default,
  args: {
    isDisabled: true,
    'aria-label': 'Airplane Mode',
  },
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
