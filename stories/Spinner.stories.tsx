import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Spinner, Flex } from '../index';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {},
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => (
  <Flex align='center' spacing='md'>
    <Spinner {...args} size='sm' />
    <Spinner {...args} />
    <Spinner {...args} size='lg' />
  </Flex>
);

export const Default = Template.bind({});
Default.args = {};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
};
