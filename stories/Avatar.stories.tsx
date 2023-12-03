import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '../index';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Avatar>;

const Template = (args: ComponentProps<typeof Avatar>) => (
  <Avatar {...args}>
    <AvatarImage src='https://i.pravatar.cc/300' alt='Avatar' />
    <AvatarFallback>AV</AvatarFallback>
  </Avatar>
);
export const Default: Story = {
  name: 'Avatar',
  args: {},
  render: (args) => <Template {...args} />,
};
