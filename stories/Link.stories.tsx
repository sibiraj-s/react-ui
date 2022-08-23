import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Link } from '../index';
import { disableControls } from './utils';

export default {
  title: 'Components/Link',
  component: Link,
  argTypes: {
    ...disableControls(['ref']),
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => (
  <Link {...args} href='https://sibiraj.dev' target='_blank'>
    Click Me!
  </Link>
);

export const Default = Template.bind({});
Default.storyName = 'Link';
Default.args = {};
