import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from '@stitches/react';

import { Spinner, Flex } from '../index';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'success', 'danger'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

const Template = (args: ComponentProps<typeof Spinner>) => (
  <Flex align='center' spacing='md'>
    <Spinner {...args} size='xxs' />
    <Spinner {...args} size='xs' />
    <Spinner {...args} size='sm' />
    <Spinner {...args} />
    <Spinner {...args} size='lg' />
  </Flex>
);

export const Default: Story = {
  args: {},
  render: (args) => <Template {...args} />,
};

export const Success: Story = {
  ...Default,
  args: {
    variant: 'success',
  },
};

export const Danger: Story = {
  ...Default,
  args: {
    variant: 'danger',
  },
};
