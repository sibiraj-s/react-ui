import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Textarea } from '../index';
import { disableControls } from './utils';

export default {
  title: 'Components/Forms/Textarea',
  component: Textarea,
  argTypes: {
    ...disableControls('ref'),
  },
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Type something...',
};

export const Invalid = Template.bind({});
Invalid.args = {
  placeholder: 'Type something...',
  isInvalid: true,
  autoFocus: true,
};
