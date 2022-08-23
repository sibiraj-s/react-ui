import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from '../index';
import { disableControls } from './utils';

export default {
  title: 'Components/Forms/Input',
  component: Input,
  argTypes: {
    ...disableControls('ref'),
  },
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
  autoFocus: true,
};
