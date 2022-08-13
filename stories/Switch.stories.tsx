import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Switch, styled } from '../index';

export default {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {},
} as ComponentMeta<typeof Switch>;

const SwitchContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

const Template: ComponentStory<typeof Switch> = (args) => (
  <SwitchContainer>
    <Switch {...args} size='sm' />
    <Switch {...args} />
  </SwitchContainer>
);

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
