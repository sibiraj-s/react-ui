import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { HStack } from 'styled-system/jsx';

import { Spinner } from '../index';

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
  <HStack gap='4'>
    <Spinner {...args} size='xxs' />
    <Spinner {...args} size='xs' />
    <Spinner {...args} size='sm' />
    <Spinner {...args} />
    <Spinner {...args} size='lg' />
  </HStack>
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
