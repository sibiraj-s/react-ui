import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../index';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger'],
    },
    children: {
      name: 'label',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary Button',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  children: 'Success Button',
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  children: 'Danger Button',
};

export const Disabeld = Template.bind({});
Disabeld.args = {
  children: 'Disabeld Button',
  disabled: true,
};
