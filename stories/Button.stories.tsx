import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { BookmarkIcon } from '@radix-ui/react-icons';
import { HStack } from 'styled-system/jsx';

import { Button, Link } from '../index';
import { disableControls } from './utils';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'click' },
    colorScheme: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger'],
    },
    disabled: {
      control: 'boolean',
    },
    ...disableControls(['size', 'ref', 'variantType', 'as', 'isFocusVisible', 'onClick']),
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

const Template = (args: ComponentProps<typeof Button>) => (
  <HStack gap='3'>
    <Button {...args} size='xs'>
      Extra Small Button
    </Button>
    <Button {...args} size='sm'>
      Small Button
    </Button>
    <Button {...args}>Default Button</Button>
    <Button {...args} variant='outline'>
      Outline Button
    </Button>
    <Button {...args} variant='outline' asChild>
      <Link href='https://sibiraj.dev' target='_blank'>
        Visit Github (Link Button)
      </Link>
    </Button>
  </HStack>
);

const Default: Story = {
  args: {
    colorScheme: 'primary',
  },
  render: (args) => <Template {...args} />,
};

export const Primary: Story = Default;

export const Secondary: Story = {
  ...Default,
  args: {
    colorScheme: 'secondary',
  },
};

export const Success: Story = {
  ...Default,
  args: {
    colorScheme: 'success',
  },
};

export const Danger: Story = {
  ...Default,
  args: {
    colorScheme: 'danger',
  },
};

export const Disabled: Story = {
  ...Default,
  args: {
    disabled: true,
  },
  parameters: {
    a11y: {
      config: {
        rules: [{ id: 'color-contrast', enabled: false }],
      },
    },
  },
};

export const WithIcon: Story = {
  ...Default,
  render: (args) => {
    return (
      <Button {...args}>
        <BookmarkIcon />
        Bookmark
      </Button>
    );
  },
};
