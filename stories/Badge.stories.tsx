import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { HStack } from 'styled-system/jsx';
import { badgeRecipe } from 'styled-system/recipes';

import { Badge } from '../index';
import { showOnlyControls } from './utils';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    controls: {
      exclude: showOnlyControls(badgeRecipe.variantKeys),
    },
  },
  argTypes: {
    colorScheme: {
      control: 'select',
      options: badgeRecipe.variantMap.colorScheme,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

const Template = (args: ComponentProps<typeof Badge>) => (
  <HStack gap='2'>
    <Badge {...args}>Premium</Badge>
    <Badge {...args} colorScheme='secondary'>
      Pro
    </Badge>
    <Badge {...args} colorScheme='success'>
      Available Now
    </Badge>
    <Badge {...args} colorScheme='danger'>
      Danger Zone!
    </Badge>
  </HStack>
);

export const Default: Story = {
  name: 'Badge',
  args: badgeRecipe.raw({
    colorScheme: 'primary',
  }),
  render: (args) => <Template {...args} />,
};
