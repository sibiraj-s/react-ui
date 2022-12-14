import type { Meta, StoryObj } from '@storybook/react';

import { TextField } from '../index';

const meta: Meta<typeof TextField> = {
  title: 'Components/Forms/TextField',
  component: TextField,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: 'Enter your name',
    placeholder: 'Type something...',
  },
  render: (args) => <TextField {...args} />,
};

export const WithFormText: Story = {
  ...Default,
  args: {
    label: 'Enter your name',
    placeholder: 'Type something...',
    description: 'pretium lectus quam id leo in vitae turpis massa sed',
  },
};

export const Invalid: Story = {
  ...Default,
  args: {
    label: 'Enter your name',
    placeholder: 'Type something...',
    isInvalid: true,
    errorMessage: 'pretium lectus quam id leo in vitae turpis massa sed',
    autoFocus: true,
  },
};
