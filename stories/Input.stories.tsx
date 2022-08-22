import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from '../index';

export default {
  title: 'Components/Forms/Input',
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Type something...',
};

export const Invalid = Template.bind({});
Invalid.args = {
  placeholder: 'Type something...',
  isInvalid: true,
};
