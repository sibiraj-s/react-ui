import type { Meta, StoryObj } from '@storybook/react';

import { TextareaField } from '../index';
import { showOnlyControls } from './utils';

const meta: Meta<typeof TextareaField> = {
  title: 'Components/Forms/TextareaField',
  component: TextareaField,
  parameters: {
    controls: {
      exclude: showOnlyControls([
        'onChange',
        'label',
        'placeholder',
        'description',
        'isInvalid',
        'errorMessage',
        'autoFocus',
      ]),
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
type Story = StoryObj<typeof TextareaField>;

export const Default: Story = {
  args: {
    label: 'Enter your name',
    placeholder: 'Type something...',
  },
  render: (args) => <TextareaField {...args} />,
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
