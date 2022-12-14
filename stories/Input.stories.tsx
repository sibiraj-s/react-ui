import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '../index';
import { disableControls } from './utils';

const meta: Meta<typeof Input> = {
  title: 'Components/Forms/Input',
  component: Input,
  argTypes: {
    ...disableControls('ref'),
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Type something...',
  },
  render: (args) => <Input {...args} />,
};

export const Invalid: Story = {
  ...Default,
  args: {
    placeholder: 'Type something...',
    isInvalid: true,
    autoFocus: true,
  },
};
