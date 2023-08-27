import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { HStack } from 'styled-system/jsx';

import { Switch } from '../index';
import { disableControls } from './utils';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    ...disableControls(['size']),
    onCheckedChange: { action: 'checked' },
    variant: {
      control: 'select',
      options: ['primary', 'danger', 'success'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

const Template = (args: ComponentProps<typeof Switch>) => (
  <HStack gap='4'>
    <Switch {...args} size='sm' />
    <Switch {...args} />
    <Switch {...args} size='lg' />
  </HStack>
);

export const Default: Story = {
  args: {},
  render: (args) => <Template {...args} />,
};

export const Disabled: Story = {
  ...Default,
  args: {
    disabled: true,
  },
};
