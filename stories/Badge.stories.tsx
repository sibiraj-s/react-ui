import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Badge, Flex } from '../index';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger'],
    },
    disabled: {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: ['sm', 'xs'],
    },
    as: {
      table: {
        disable: true,
      },
    },
    css: {
      table: {
        disable: true,
      },
    },
    ref: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => (
  <Flex gap='md' align='center'>
    <Badge {...args}>Premium</Badge>
    <Badge {...args} variant='secondary'>
      Pro
    </Badge>
    <Badge {...args} variant='success'>
      Available Now
    </Badge>
    <Badge {...args} variant='danger'>
      Beware!
    </Badge>
  </Flex>
);

export const Default = Template.bind({});
Default.storyName = 'Badge';
Default.args = {};
