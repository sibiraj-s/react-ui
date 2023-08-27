import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { HStack } from 'styled-system/jsx';

import { Badge } from '../index';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {},
  parameters: {
    controls: {
      disabled: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

const Template = (args: ComponentProps<typeof Badge>) => (
  <HStack gap='2'>
    <Badge {...args}>Premium</Badge>
    <Badge {...args} variant='secondary'>
      Pro
    </Badge>
    <Badge {...args} variant='success'>
      Available Now
    </Badge>
    <Badge {...args} variant='danger'>
      Danger Zone!
    </Badge>
  </HStack>
);

export const Default: Story = {
  name: 'Badge',
  args: {},
  render: () => <Template />,
};
