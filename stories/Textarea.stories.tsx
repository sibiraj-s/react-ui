import type { Meta, StoryObj } from '@storybook/react';

import { Textarea } from '../index';
import { disableControls } from './utils';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Forms/Textarea',
  component: Textarea,
  argTypes: {
    ...disableControls('ref'),
    onChange: { action: 'change' },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: 'Type something...',
  },
  render: (args) => <Textarea {...args} />,
};

export const Invalid: Story = {
  ...Default,
  args: {
    placeholder: 'Type something...',
    isInvalid: true,
    autoFocus: true,
  },
};
