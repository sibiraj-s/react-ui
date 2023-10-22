import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { Stack } from 'styled-system/jsx';

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
  <Stack gap='4'>
    <Text {...args}>
      Default: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Id ornare arcu odio ut sem. Elit at imperdiet dui accumsan. Id volutpat lacus laoreet non.
      Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Tellus integer feugiat scelerisque
      varius morbi enim nunc faucibus. Arcu risus quis varius quam.
    </Text>
    <Text {...args} textStyle='sm'>
      Small: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Id ornare arcu odio ut sem. Elit at imperdiet dui accumsan. Id volutpat lacus laoreet non.
      Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Tellus integer feugiat scelerisque
      varius morbi enim nunc faucibus. Arcu risus quis varius quam.
    </Text>
    <Text {...args} textStyle='xs'>
      Extra Small: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
      et dolore magna aliqua. Id ornare arcu odio ut sem. Elit at imperdiet dui accumsan. Id volutpat lacus laoreet non.
      Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Tellus integer feugiat scelerisque
      varius morbi enim nunc faucibus. Arcu risus quis varius quam.
    </Text>
  </Stack>
);

const TemplateColors = (args: ComponentProps<typeof Text>) => (
  <Stack gap='4'>
    <Text {...args} color='primary'>
      Default: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Id ornare arcu odio ut sem. Elit at imperdiet dui accumsan. Id volutpat lacus laoreet non.
      Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Tellus integer feugiat scelerisque
      varius morbi enim nunc faucibus. Arcu risus quis varius quam.
    </Text>
    <Text {...args} color='secondary'>
      Secondary color: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Id ornare arcu odio ut sem. Elit at imperdiet dui accumsan. Id volutpat lacus
      laoreet non. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Tellus integer feugiat
      scelerisque varius morbi enim nunc faucibus. Arcu risus quis varius quam.
    </Text>
    <Text {...args} color='muted'>
      Muted Color: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
      et dolore magna aliqua. Id ornare arcu odio ut sem. Elit at imperdiet dui accumsan. Id volutpat lacus laoreet non.
      Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Tellus integer feugiat scelerisque
      varius morbi enim nunc faucibus. Arcu risus quis varius quam.
    </Text>
  </Stack>
);

export const Default: Story = {
  args: {},
  render: (args) => <Template {...args} />,
};

export const Colors: Story = {
  ...Default,
  render: (args) => <TemplateColors {...args} />,
};
