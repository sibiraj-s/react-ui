import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Textarea } from '../index';

export default {
  title: 'Components/Forms/Textarea',
  component: Textarea,
  argTypes: {},
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.storyName = 'Textarea';
Default.args = {
  placeholder: 'Type something...',
};