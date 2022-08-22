import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextField } from '../index';

export default {
  title: 'Components/Forms/TextField',
  component: TextField,
  argTypes: {},
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Enter your name',
  placeholder: 'Type something...',
};

export const WithFormText = Template.bind({});
WithFormText.args = {
  label: 'Enter your name',
  placeholder: 'Type something...',
  description: 'pretium lectus quam id leo in vitae turpis massa sed',
};

export const Invalid = Template.bind({});
Invalid.args = {
  label: 'Enter your name',
  placeholder: 'Type something...',
  isInvalid: true,
  errorMessage: 'pretium lectus quam id leo in vitae turpis massa sed',
};
