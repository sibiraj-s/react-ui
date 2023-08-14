import { type Meta, type StoryObj } from '@storybook/react';

import { ProgressCircle } from '../index';

const meta: Meta<typeof ProgressCircle> = {
  title: 'Components/ProgressCircle',
  component: ProgressCircle,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

const rand = (): number => Math.floor(Math.random() * 100) + 1;

type Story = StoryObj<typeof ProgressCircle>;

export const Default: Story = {
  args: {
    percents: Math.max(25, rand()),
  },
};
