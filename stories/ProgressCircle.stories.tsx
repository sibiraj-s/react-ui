import { type Meta, type StoryObj } from '@storybook/react';

import { ProgressCircle } from '../index';
import { HStack } from 'styled-system/jsx';

const meta: Meta<typeof ProgressCircle> = {
  title: 'Components/ProgressCircle',
  component: ProgressCircle,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

const rand = (): number => Math.max(25, Math.floor(Math.random() * 100) + 1);

type Story = StoryObj<typeof ProgressCircle>;

export const Default: Story = {
  args: {
    value: rand(),
  },
};

export const WithCustomRange: Story = {
  args: {
    min: 0,
    max: 200,
    value: rand(),
  },
};

export const Spin: Story = {
  args: {
    value: rand(),
    spin: true,
  },
};

export const Colors: Story = {
  args: {
    min: 0,
    max: 200,
  },
  render: (args) => {
    return (
      <HStack gap='4'>
        <ProgressCircle {...args} value={rand()} />
        <ProgressCircle {...args} value={rand()} color='accent' />
        <ProgressCircle {...args} value={rand()} color='danger' />
        <ProgressCircle {...args} value={rand()} color='muted' />
        <ProgressCircle {...args} value={rand()} color='success' />
      </HStack>
    );
  },
};
