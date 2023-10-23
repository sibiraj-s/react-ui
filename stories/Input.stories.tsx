import type { Meta, StoryObj } from '@storybook/react';
import { DotsHorizontalIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { inputRecipe } from 'styled-system/recipes';

import { Input } from '../index';
import { showOnlyControls } from './utils';

const meta: Meta<typeof Input> = {
  title: 'Components/Forms/Input',
  component: Input,
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
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Type something...',
  },
  render: (args) => <Input {...args} />,
};

export const WithIcons: Story = {
  args: {
    placeholder: 'Type something...',
  },
  render: (args) => <Input {...args} prepend={<MagnifyingGlassIcon />} append={<DotsHorizontalIcon />} />,
};

export const Invalid: Story = {
  ...Default,
  args: {
    placeholder: 'Type something...',
    autoFocus: true,
    isInvalid: inputRecipe.raw({
      isInvalid: true,
    }).isInvalid,
  },
};
