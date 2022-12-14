import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from '@stitches/react';

import { Switch, Flex } from '../index';
import { disableControls } from './utils';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    ...disableControls(['size']),
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

const Template = (args: ComponentProps<typeof Switch>) => (
  <Flex align='center' spacing='md'>
    <Switch {...args} size='sm' />
    <Switch {...args} />
    <Switch {...args} size='lg' />
  </Flex>
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
