import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { HStack } from 'styled-system/jsx';

import { Badge } from '../index';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Badge>;

const Template = (args: ComponentProps<typeof Badge>) => (
  <HStack gap='2'>
    <Badge {...args}>Premium</Badge>
    <Badge {...args} colorPalette='gray'>
      Pro
    </Badge>
    <Badge {...args} colorPalette='green'>
      Available Now
    </Badge>
    <Badge {...args} colorPalette='red'>
      Expired!
    </Badge>
  </HStack>
);

export const Default: Story = {
  name: 'Badge',
  args: {},
  render: (args) => <Template {...args} />,
};
