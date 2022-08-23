import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, Flex } from '../index';
import { disableControls } from './utils';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger'],
    },
    disabled: {
      control: 'boolean',
    },
    ...disableControls(['size', 'ref', 'variantType']),
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Flex spacing='md' align='center'>
    <Button {...args} size='xs'>
      Extra Small Button
    </Button>
    <Button {...args} size='sm'>
      Small Button
    </Button>
    <Button {...args}>Default Button</Button>
    <Button {...args} variantType='outline'>
      Outline Button
    </Button>
  </Flex>
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

export const Disabeld = Template.bind({});
Disabeld.args = {
  variant: 'primary',
  disabled: true,
};
