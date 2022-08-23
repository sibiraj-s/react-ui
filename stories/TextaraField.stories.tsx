import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextareaField } from '../index';

export default {
  title: 'Components/Forms/TextareaField',
  component: TextareaField,
  argTypes: {},
} as ComponentMeta<typeof TextareaField>;

const Template: ComponentStory<typeof TextareaField> = (args) => <TextareaField {...args} />;

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
  autoFocus: true,
};
