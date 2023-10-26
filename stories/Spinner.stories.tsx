import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { HStack } from 'styled-system/jsx';
import { spinnerRecipe } from 'styled-system/recipes';

import { Spinner } from '../index';
import { showOnlyControls } from './utils';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    controls: {
      exclude: showOnlyControls(spinnerRecipe.variantKeys),
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: spinnerRecipe.variantMap.size,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

const Template = (args: ComponentProps<typeof Spinner>) => (
  <HStack gap='4'>
    <Spinner {...args} size='xxs' />
    <Spinner {...args} size='xs' colorPalette='red' />
    <Spinner {...args} size='sm' colorPalette='green' />
    <Spinner {...args} colorPalette='lime' />
    <Spinner {...args} size='lg' colorPalette='gray' />
    <Spinner {...args} size='xl' />
    <Spinner {...args} size='2xl' colorPalette='teal' />
  </HStack>
);

export const Default: Story = {
  name: 'Spinner',
  args: {},
  render: (args) => <Template {...args} />,
};
