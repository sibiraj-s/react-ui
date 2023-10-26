import { type Meta, type StoryObj } from '@storybook/react';
import { HStack, Stack } from 'styled-system/jsx';
import { progressBarRecipe } from 'styled-system/recipes';

import { ProgressBar } from '../index';
import { showOnlyControls } from './utils';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  parameters: {
    controls: {
      exclude: showOnlyControls(progressBarRecipe.variantKeys),
    },
  },
  argTypes: {},
};

export default meta;

const rand = (): number => Math.max(25, Math.floor(Math.random() * 100) + 1);

type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    value: rand(),
  },
  render: (args) => {
    return (
      <HStack css={{ width: '70%' }}>
        <ProgressBar {...args} />
      </HStack>
    );
  },
};

export const WithCustomRange: Story = {
  ...Default,
  args: {
    ...Default.args,
    min: 0,
    max: 200,
  },
};

export const WithStipes: Story = {
  ...Default,
  args: progressBarRecipe.raw({
    ...Default.args,
    striped: true,
  }),
};

export const WithStipesAnimation: Story = {
  ...WithStipes,
  args: progressBarRecipe.raw({
    ...Default.args,
    striped: true,
    animated: true,
  }),
};

export const Colors: Story = {
  ...WithStipes,
  render: (args) => {
    return (
      <Stack css={{ width: '70%' }} gap='8'>
        <ProgressBar {...args} value={rand()} colorPalette='green' />
        <ProgressBar {...args} value={rand()} />
        <ProgressBar {...args} value={rand()} colorPalette='red' />
        <ProgressBar {...args} value={rand()} colorPalette='gray' />
      </Stack>
    );
  },
};
