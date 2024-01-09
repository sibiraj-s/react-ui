import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { BookmarkIcon } from '@radix-ui/react-icons';
import { HStack } from 'styled-system/jsx';
import { buttonRecipe } from 'styled-system/recipes';

import { Button, Link } from '../index';
import { showOnlyControls } from './utils';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    controls: {
      exclude: showOnlyControls([...buttonRecipe.variantKeys, 'disabled', 'onClick']),
    },
  },
  argTypes: {
    onClick: {
      action: 'click',
      table: {
        disable: true,
      },
    },
    size: {
      control: 'select',
      options: buttonRecipe.variantMap.size,
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
    <Button {...args} variant='outline'>
      Outline Button
    </Button>
    <Button {...args} variant='outline' asChild>
      <Link href='https://sibiraj.dev' target='_blank'>
        Visit Github (link as button)
      </Link>
    </Button>
  </HStack>
);

const TemplateSizes = (args: ComponentProps<typeof Button>) => (
  <HStack gap='3'>
    <Button {...args} size='xs'>
      Click Me!
    </Button>
    <Button {...args} size='sm'>
      Click Me!
    </Button>
    <Button {...args}>Click Me!</Button>
  </HStack>
);

const Default: Story = {
  render: (args) => <Template {...args} />,
};

export const Variants: Story = Default;

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
