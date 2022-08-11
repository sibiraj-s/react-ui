import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Fragment } from 'react';

import { Text } from '../index';

export default {
  title: 'Typography/Text',
  component: Text,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger'],
    },
    children: {
      name: 'label',
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
  <Fragment>
    <Text {...args}>
      Regular: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Id ornare arcu odio ut sem. Elit at imperdiet dui accumsan. Id volutpat lacus laoreet non.
      Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Tellus integer feugiat scelerisque
      varius morbi enim nunc faucibus. Arcu risus quis varius quam.
    </Text>
    <br />
    <Text {...args} size='sm'>
      Small: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Id ornare arcu odio ut sem. Elit at imperdiet dui accumsan. Id volutpat lacus laoreet non.
      Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Tellus integer feugiat scelerisque
      varius morbi enim nunc faucibus. Arcu risus quis varius quam.
    </Text>
    <br />
    <Text {...args} size='xs'>
      Extra Small: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
      et dolore magna aliqua. Id ornare arcu odio ut sem. Elit at imperdiet dui accumsan. Id volutpat lacus laoreet non.
      Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Tellus integer feugiat scelerisque
      varius morbi enim nunc faucibus. Arcu risus quis varius quam.
    </Text>
  </Fragment>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
};
