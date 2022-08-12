import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Switch, styled } from '../index';

export default {
  title: 'Components/Forms/Switch',
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
    <Switch {...args} size='sm' variant='danger' />
    <Switch {...args} variant='danger' />
  </SwitchContainer>
);

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'Switch';
