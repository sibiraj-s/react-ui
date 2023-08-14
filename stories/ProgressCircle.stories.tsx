import { type Meta, type StoryObj } from '@storybook/react';

import { Flex, ProgressCircle } from '../index';

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

export const Variants: Story = {
  args: {
    min: 0,
    max: 200,
  },
  render: (args) => {
    return (
      <Flex gap='4'>
        <ProgressCircle {...args} value={rand()} />
        <ProgressCircle {...args} value={rand()} variant='primary' />
        <ProgressCircle {...args} value={rand()} variant='danger' />
        <ProgressCircle {...args} value={rand()} variant='muted' />
        <ProgressCircle {...args} value={rand()} variant='success' />
      </Flex>
    );
  },
};
