import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';

import { Text, textStyle } from '../index';
import { showOnlyControls } from './utils';

const meta: Meta<typeof Text> = {
  title: 'Typography/Text',
  component: Text,
  parameters: {
    controls: {
      exclude: showOnlyControls(textStyle.variantKeys),
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: textStyle.variantMap.size,
    },
    weight: {
      control: 'select',
      options: textStyle.variantMap.weight,
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
  args: {
    size: 'xl',
    weight: 'bold',
  },
};
