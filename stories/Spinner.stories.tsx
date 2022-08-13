import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Spinner, Flex } from '../index';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {},
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => (
  <Flex align='center' gap='md'>
    <Spinner {...args} size='sm' />
    <Spinner {...args} />
    <Spinner {...args} size='lg' />
    <Spinner {...args} variant='success' size='sm' />
    <Spinner {...args} variant='success' />
    <Spinner {...args} variant='success' size='lg' />
    <Spinner {...args} variant='danger' size='sm' />
    <Spinner {...args} variant='danger' size='lg' />
  </Flex>
);

export const Default = Template.bind({});
Default.storyName = 'Spinner';
Default.args = {};
