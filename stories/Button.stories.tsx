import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { BookmarkIcon } from '@radix-ui/react-icons';
import { HStack } from 'styled-system/jsx';

import { Button, Link, buttonStyle } from '../index';
import { showOnlyControls } from './utils';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    controls: {
      exclude: showOnlyControls([...buttonStyle.variantKeys, 'disabled', 'onClick']),
    },
  },
  argTypes: {
    onClick: {
      action: 'click',
      table: {
        disable: true,
      },
    },
    colorScheme: {
      control: 'select',
      options: buttonStyle.variantMap.colorScheme,
    },
    size: {
      control: 'select',
      options: buttonStyle.variantMap.size,
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

const Template = (args: ComponentProps<typeof Button>) => (
  <HStack gap='3'>
    <Button {...args}>Regular Button</Button>
    <Button variant='outline' {...args}>
      Outline Button
    </Button>
    <Button variant='outline' {...args} asChild>
      <Link href='https://sibiraj.dev' target='_blank'>
        Visit Github (link as button)
      </Link>
    </Button>
  </HStack>
);

const TemplateSizes = (args: ComponentProps<typeof Button>) => (
  <HStack gap='3'>
    <Button size='xs' {...args}>
      Click Me!
    </Button>
    <Button size='sm' {...args}>
      Click Me!
    </Button>
    <Button {...args}>Click Me!</Button>
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

export const Sizes: Story = {
  ...Default,
  args: {},
  render: (args) => <TemplateSizes {...args} />,
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
