import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Switch, Flex } from '../index';
import { disableControls } from './utils';

export default {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    ...disableControls(['size']),
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => (
  <Flex align='center' spacing='md'>
    <Switch {...args} size='sm' />
    <Switch {...args} />
    <Switch {...args} size='lg' />
  </Flex>
);

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
