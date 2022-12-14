import type { Meta, StoryObj } from '@storybook/react';
import { Fragment } from 'react';
import { ComponentProps } from '@stitches/react';

import { Text } from '../index';
import { disableControls } from './utils';

const meta: Meta<typeof Text> = {
  title: 'Typography/Text',
  component: Text,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger'],
    },
    ...disableControls(['size', 'spacing', 'css', 'as', 'ref']),
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

const Template = (args: ComponentProps<typeof Text>) => (
  <Fragment>
    <Text {...args}>
      Regular: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Id ornare arcu odio ut sem. Elit at imperdiet dui accumsan. Id volutpat lacus laoreet non.
      Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Tellus integer feugiat scelerisque
      varius morbi enim nunc faucibus. Arcu risus quis varius quam.
    </Text>
    <Text {...args} size='sm' spacing='md'>
      Small: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Id ornare arcu odio ut sem. Elit at imperdiet dui accumsan. Id volutpat lacus laoreet non.
      Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Tellus integer feugiat scelerisque
      varius morbi enim nunc faucibus. Arcu risus quis varius quam.
    </Text>
    <Text {...args} size='xs' spacing='md'>
      Extra Small: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
      et dolore magna aliqua. Id ornare arcu odio ut sem. Elit at imperdiet dui accumsan. Id volutpat lacus laoreet non.
      Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Tellus integer feugiat scelerisque
      varius morbi enim nunc faucibus. Arcu risus quis varius quam.
    </Text>
  </Fragment>
);

export const Default: Story = {
  args: {},
  render: (args) => <Template {...args} />,
};

export const Primary: Story = {
  ...Default,
  args: {
    variant: 'primary',
  },
};

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
export const Muted: Story = {
  ...Default,
  args: {
    variant: 'muted',
  },
};
