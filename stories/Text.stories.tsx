import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { textRecipe } from 'styled-system/recipes';

import { Text } from '../index';
import { showOnlyControls } from './utils';

const meta: Meta<typeof Text> = {
  title: 'Typography/Text',
  component: Text,
  parameters: {
    controls: {
      exclude: showOnlyControls(textRecipe.variantKeys),
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: textRecipe.variantMap.size,
    },
    weight: {
      control: 'select',
      options: textRecipe.variantMap.weight,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

const Template = (args: ComponentProps<typeof Text>) => (
  <Text {...args}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Id ornare arcu odio ut sem. Elit at imperdiet dui accumsan. Id volutpat lacus laoreet non. Tempus egestas
    sed sed risus pretium quam vulputate dignissim suspendisse. Tellus integer feugiat scelerisque varius morbi enim
    nunc faucibus. Arcu risus quis varius quam.
  </Text>
);

export const Default: Story = {
  args: {},
  render: (args) => <Template {...args} />,
};

export const Sizes: Story = {
  ...Default,
  args: textRecipe.raw({
    size: 'xl',
    weight: 'bold',
  }),
};
