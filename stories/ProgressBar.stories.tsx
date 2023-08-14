import { type Meta, type StoryObj } from '@storybook/react';

import { Flex, ProgressBar } from '../index';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

const rand = (): number => Math.floor(Math.random() * 100) + 1;

type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    percents: Math.max(25, rand()),
  },
  render: (args) => {
    return (
      <Flex css={{ width: '50%' }}>
        <ProgressBar {...args} />
      </Flex>
    );
  },
};

export const WithStipes: Story = {
  ...Default,
  args: {
    ...Default.args,
    striped: true,
  },
};

export const WithStipesAnimation: Story = {
  ...WithStipes,
  args: {
    ...WithStipes.args,
    animateStripes: true,
  },
};
