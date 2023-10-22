import type { Meta, StoryObj } from '@storybook/react';

import { Textarea } from '../index';
import { showOnlyControls } from './utils';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Forms/Textarea',
  component: Textarea,
  parameters: {
    controls: {
      exclude: showOnlyControls(['onChange', 'placeholder', 'isInvalid', 'autoFocus']),
    },
  },
  argTypes: {
    onChange: {
      action: 'change',
      table: {
        disable: true,
      },
    },
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
