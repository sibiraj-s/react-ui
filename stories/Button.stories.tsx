import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from '@stitches/react';
import { BookmarkIcon } from '@radix-ui/react-icons';

import { Button, Flex, Link } from '../index';
import { disableControls } from './utils';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'click' },
    variant: {
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
  <Flex spacing='md' align='center'>
    <Button {...args} size='xs'>
      Extra Small Button
    </Button>
    <Button {...args} size='sm'>
      Small Button
    </Button>
    <Button {...args}>Default Button</Button>
    <Button {...args} variantType='outline'>
      Outline Button
    </Button>
    <Button {...args} variantType='outline' asChild>
      <Link href='https://sibiraj.dev' target='_blank'>
        Visit Github (Link Button)
      </Link>
    </Button>
  </Flex>
);

const Default: Story = {
  args: {
    variant: 'primary',
  },
  render: (args) => <Template {...args} />,
};

export const Primary: Story = Default;

export const Secondary: Story = {
  ...Default,
  args: {
    variant: 'secondary',
  },
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

export const Disabled: Story = {
  ...Default,
  args: {
    variant: 'primary',
    disabled: true,
  },
};

export const WithIcon: Story = {
  ...Default,
  args: {
    variant: 'primary',
  },
  render: (args) => {
    return (
      <Button {...args}>
        <BookmarkIcon />
        Bookmark
      </Button>
    );
  },
};
